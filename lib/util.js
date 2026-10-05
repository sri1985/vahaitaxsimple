'use strict';

/** HTML-escape text for use in element content or double-quoted attributes. */
function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Whitespace-delimited word count (used to enforce snippet length). */
function wordCount(text) {
  return String(text).trim().split(/\s+/).filter(Boolean).length;
}

/**
 * URL helpers for a given SITE_URL.
 *  - Works for custom domains (https://example.ca) and project pages
 *    (https://user.github.io/repo) by prefixing internal links with the base path.
 *  - French routes are the English path mirrored under /fr/.
 */
function createUrls(siteUrl) {
  const u = new URL(siteUrl);
  const origin = u.origin;
  const base = u.pathname.replace(/\/+$/, ''); // '' or '/repo'

  /** '/about/' -> '/about/' (en) or '/fr/about/' (fr); '/' -> '/fr/' */
  const localePath = (path, lang) => (lang === 'fr' ? '/fr' + path : path);
  /** Root-relative href including base path. */
  const href = (path, lang) => base + localePath(path, lang);
  /** Absolute URL (canonical / hreflang / sitemap). */
  const abs = (path, lang) => origin + href(path, lang);
  /** Output folder relative to dist ('' for site root). */
  const outDir = (path, lang) => localePath(path, lang).replace(/^\/+|\/+$/g, '');

  return { origin, base, host: u.host, localePath, href, abs, outDir };
}

/** '/a/b/' -> '/a/'; '/a/' -> '/'; '/' -> null */
function parentPath(path) {
  if (path === '/') return null;
  const parts = path.split('/').filter(Boolean);
  parts.pop();
  return parts.length ? '/' + parts.join('/') + '/' : '/';
}

module.exports = { esc, wordCount, createUrls, parentPath };
