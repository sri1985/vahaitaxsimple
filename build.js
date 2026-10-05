#!/usr/bin/env node
'use strict';
/**
 * VAHAI TAX static site generator.
 *
 *   node build.js                       -> ./dist
 *   SITE_URL=https://example.ca node build.js
 *   SITE_URL=https://user.github.io/repo node build.js     (GitHub Pages project site)
 *
 * Output is a physical multi-page site: one folder + index.html per route, in English
 * and mirrored under /fr/. Every URL answers 200 OK natively on GitHub Pages (no
 * rewrites, no client-side routing). All copy is in the raw HTML payload.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const site = require('./content/site');
const { pages, byPath } = require('./content/index');
const { createUrls, parentPath, wordCount, esc } = require('./lib/util');
const nav = require('./lib/nav');
const seo = require('./lib/seo');
const { renderPage, ctaBand } = require('./lib/render');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const LANGS = ['en', 'fr'];

const SITE_URL = (process.env.SITE_URL || site.DEFAULT_SITE_URL).replace(/\/+$/, '');
const urls = createUrls(SITE_URL);
const YEAR = new Date().getFullYear();
const TODAY = new Date().toISOString().slice(0, 10);

/* ------------------------------------------------------------------ helpers */

const write = (rel, content) => {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
};

const hash = (buf) => crypto.createHash('sha1').update(buf).digest('hex').slice(0, 8);

/** Per-language rendering context shared by nav + page renderers. */
function createContext(lang) {
  const data = (p) => byPath.get(p)[lang];
  const children = (p) => pages.filter((x) => x.path !== '/' && parentPath(x.path) === p).map((x) => x.path);
  const trail = (p) => {
    const chain = [];
    for (let cur = p; cur; cur = parentPath(cur)) chain.unshift({ path: cur, label: data(cur).nav });
    return chain;
  };
  return { lang, t: site.UI[lang], urls, href: (p) => urls.href(p, lang), data, children, trail, pages };
}

/** Fill {{key}} and {{t:key}} placeholders in one pass (values are never re-scanned). */
function fillTemplate(template, values, t) {
  return template.replace(/\{\{\s*(t:)?([\w]+)\s*\}\}/g, (match, isT, key) => {
    const source = isT ? t : values;
    if (!(key in source)) throw new Error(`Template placeholder not provided: ${match}`);
    return source[key];
  });
}

/** Strip developer HTML comments and indentation from the final markup. */
const tidy = (html) =>
  html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^[ \t]+/gm, '')
    .replace(/\n{2,}/g, '\n');

/* ------------------------------------------------------------------ validation */

function validateContent() {
  const errors = [];
  const warnings = [];
  for (const page of pages) {
    for (const lang of LANGS) {
      const d = page[lang];
      const id = `${lang}:${page.path}`;
      const need = page.type === 'home' ? ['h1', 'lead', 'kicker', 'desc'] : ['nav', 'title', 'desc', 'h1', 'lead', 'kicker', 'card'];
      for (const k of need) if (!d[k]) errors.push(`${id} is missing "${k}"`);
      for (const [q, a] of d.snippets || []) {
        const n = wordCount(a);
        if (n < 35 || n > 50) errors.push(`${id} snippet answer is ${n} words (need 35-50): "${q}"`);
      }
      const title = seo.pageTitle(d);
      if (title.length > 65) warnings.push(`${id} title is ${title.length} chars: ${title}`);
      if (d.desc && (d.desc.length > 175 || d.desc.length < 70)) warnings.push(`${id} description is ${d.desc.length} chars`);
    }
  }
  return { errors, warnings };
}

/* ------------------------------------------------------------------ assets */

function buildCss() {
  const out = path.join(DIST, 'assets', 'css', 'styles.css');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const cli = path.join(ROOT, 'node_modules', 'tailwindcss', 'lib', 'cli.js');
  if (!fs.existsSync(cli)) throw new Error('Tailwind not installed. Run "npm install" first.');
  execFileSync(
    process.execPath,
    [cli, '-c', path.join(ROOT, 'tailwind.config.js'), '-i', path.join(ROOT, 'src', 'input.css'), '-o', out, '--minify'],
    { stdio: ['ignore', 'inherit', 'inherit'], cwd: ROOT }
  );
  return hash(fs.readFileSync(out));
}

function buildJs() {
  const src = fs.readFileSync(path.join(ROOT, 'src', 'app.js'));
  write('assets/js/app.js', src);
  return hash(src);
}

function copyStaticAssets() {
  const srcAssets = path.join(ROOT, 'src', 'assets');
  if (fs.existsSync(srcAssets)) {
    const files = fs.readdirSync(srcAssets);
    files.forEach(file => {
      const srcPath = path.join(srcAssets, file);
      if (fs.statSync(srcPath).isFile()) {
        const outPath = path.join(DIST, 'assets', file);
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.copyFileSync(srcPath, outPath);
      }
    });
  }
}

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="#0F172A"/><text x="32" y="43" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="30" fill="#FFFFFF">VT</text></svg>`;

/* ------------------------------------------------------------------ page assembly */

function sharedValues(ctx, assets) {
  const [p1, p2] = site.PHONES;
  return {
    base: urls.base,
    css_href: `${urls.base}/assets/css/styles.css?v=${assets.css}`,
    js_src: `${urls.base}/assets/js/app.js?v=${assets.js}`,
    home_href: ctx.href('/'),
    phone1: p1.display,
    phone1_tel: p1.tel,
    phone2: p2.display,
    phone2_tel: p2.tel,
    email: site.EMAIL,
    year: String(YEAR),
    footer_nav: nav.footerNav(ctx),
    lang: ctx.t.htmlLang,
    og_locale: ctx.t.ogLocale,
  };
}

function buildPage(template, page, lang, assets) {
  const ctx = createContext(lang);
  const d = page[lang];
  const links = seo.headLinks(page, lang, urls);
  const title = seo.pageTitle(d);

  const values = {
    ...sharedValues(ctx, assets),
    ...links,
    title: esc(title),
    description: esc(d.desc),
    robots: 'index, follow, max-snippet:-1, max-image-preview:large',
    json_ld: seo.buildJsonLd(page, lang, ctx),
    lang_toggle: nav.langToggle(ctx, page),
    nav_desktop: nav.desktopNav(ctx, page.path),
    nav_drawer: nav.drawerNav(ctx, page.path),
    nav_bottom_bar: nav.appBottomBar(ctx),
    content: renderPage(page, ctx),
  };
  return tidy(fillTemplate(template, values, ctx.t));
}

function buildNotFound(template, assets) {
  const ctx = createContext('en');
  const t = ctx.t;
  const home = byPath.get('/');
  const content = `<article><header class="border-b border-line bg-white"><div class="mx-auto max-w-page px-4 py-14 lg:px-6">
      <p class="eyebrow">404</p>
      <h1 class="mt-3 text-[2rem] md:text-5xl">${esc(t.nf_h1)}</h1>
      <p class="mt-5 max-w-2xl text-lg text-slate-700">${esc(t.nf_p)} ${esc(site.PHONES[0].display)}.</p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <a class="btn btn-primary" href="${urls.href('/', 'en')}">${esc(t.home)}</a>
        <a class="btn btn-secondary" href="${urls.href('/', 'fr')}" lang="fr" hreflang="fr-CA">Accueil (FR)</a>
      </div></div></header></article>${ctaBand(ctx)}`;
  const values = {
    ...sharedValues(ctx, assets),
    title: esc(`${t.nf_title} | ${site.BRAND_SHORT}`),
    description: esc(t.nf_h1),
    robots: 'noindex, follow',
    canonical: '',
    canonical_link: '',
    hreflang_links: '',
    og_locale_alt: '',
    json_ld: '',
    lang_toggle: nav.langToggle(ctx, home),
    nav_desktop: nav.desktopNav(ctx, '/404'),
    nav_drawer: nav.drawerNav(ctx, '/404'),
    nav_bottom_bar: nav.appBottomBar(ctx),
    content,
  };
  return tidy(fillTemplate(template, values, t));
}

/* ------------------------------------------------------------------ post-build verification */

function verify(expected) {
  const problems = [];
  const walk = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
      const p = path.join(dir, e.name);
      return e.isDirectory() ? walk(p) : [p];
    });
  const files = walk(DIST).filter((f) => f.endsWith('index.html'));
  if (files.length !== expected) problems.push(`Expected ${expected} index.html files, found ${files.length}`);

  const exists = (href) => {
    let p = href.split('#')[0].split('?')[0];
    if (urls.base && p.startsWith(urls.base)) p = p.slice(urls.base.length);
    if (!p.startsWith('/')) return true;
    const target = path.join(DIST, p);
    return fs.existsSync(p.endsWith('/') ? path.join(target, 'index.html') : target);
  };

  for (const f of files) {
    const html = fs.readFileSync(f, 'utf8');
    const rel = path.relative(DIST, f);
    if ((html.match(/<h1[\s>]/g) || []).length !== 1) problems.push(`${rel}: expected exactly one <h1>`);
    if (!/<link rel="canonical" href="[^"]+">/.test(html)) problems.push(`${rel}: missing canonical`);
    if ((html.match(/rel="alternate" hreflang=/g) || []).length !== 3) problems.push(`${rel}: expected 3 hreflang tags`);
    if (/id="root"/.test(html)) problems.push(`${rel}: empty app root found`);
    for (const m of html.matchAll(/href="([^"]+)"/g)) {
      const h = m[1];
      if (/^(https?:|mailto:|tel:|#)/.test(h) && !h.startsWith(urls.origin)) continue;
      const local = h.startsWith(urls.origin) ? h.slice(urls.origin.length) : h;
      if (!exists(local)) problems.push(`${rel}: broken internal link ${h}`);
    }
  }
  return problems;
}

/* ------------------------------------------------------------------ main */

function main() {
  const started = Date.now();
  const { errors, warnings } = validateContent();
  warnings.forEach((w) => console.warn('  warn:', w));
  if (errors.length) {
    console.error('\nContent validation failed:\n - ' + errors.join('\n - '));
    process.exit(1);
  }

  const template = fs.readFileSync(path.join(ROOT, 'template.html'), 'utf8');

  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  const assets = { css: buildCss(), js: buildJs() };
  write('assets/favicon.svg', FAVICON);
  copyStaticAssets();

  let count = 0;
  for (const lang of LANGS) {
    for (const page of pages) {
      write(path.posix.join(urls.outDir(page.path, lang), 'index.html'), buildPage(template, page, lang, assets));
      count++;
    }
  }

  write('404.html', buildNotFound(template, assets));
  write('sitemap.xml', seo.buildSitemap(pages, urls, TODAY));
  write('robots.txt', seo.buildRobots(urls));
  write('.nojekyll', '');
  if (process.env.CNAME || (!urls.base && !urls.host.endsWith('github.io'))) {
    write('CNAME', (process.env.CNAME || urls.host) + '\n');
  }

  const problems = verify(count);
  if (problems.length) {
    console.error('\nVerification failed:\n - ' + problems.join('\n - '));
    process.exit(1);
  }

  console.log(
    `\nBuilt ${count} pages (${pages.length} routes x ${LANGS.length} languages) + 404, sitemap, robots` +
      `\n  site url : ${SITE_URL}` +
      `\n  output   : ${path.relative(process.cwd(), DIST) || '.'}` +
      `\n  time     : ${((Date.now() - started) / 1000).toFixed(1)}s`
  );
}

main();
