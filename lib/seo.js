'use strict';
const site = require('../content/site');
const { esc } = require('./util');

const LANG_TAG = { en: 'en-CA', fr: 'fr-CA' };

/** Final <title>: "<page title> | VAHAI TAX" (home uses fullTitle). */
function pageTitle(data) {
  if (data.fullTitle) return data.fullTitle;
  return `${String(data.title).replace(/\s*\|\s*.*$/, '')} | ${site.BRAND_SHORT}`;
}

/** Self-referencing canonical + reciprocal EN/FR hreflang + x-default (English). */
function headLinks(page, lang, urls) {
  const self = urls.abs(page.path, lang);
  const en = urls.abs(page.path, 'en');
  const fr = urls.abs(page.path, 'fr');
  return {
    canonical: self,
    canonical_link: `<link rel="canonical" href="${self}">`,
    hreflang_links: [
      `<link rel="alternate" hreflang="en-CA" href="${en}">`,
      `<link rel="alternate" hreflang="fr-CA" href="${fr}">`,
      `<link rel="alternate" hreflang="x-default" href="${en}">`,
    ].join('\n  '),
    og_locale_alt: `<meta property="og:locale:alternate" content="${site.UI[lang === 'en' ? 'fr' : 'en'].ogLocale}">`,
  };
}

function scriptTag(graph) {
  // "<" is escaped so content can never terminate the script element.
  const json = JSON.stringify(graph).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}

/**
 * JSON-LD @graph: AccountingService, Person, WebSite, WebPage (typed by page),
 * BreadcrumbList, plus Service and FAQPage where the visible content supports them.
 * No ratings, reviews or badges are emitted (nothing is invented).
 */
function buildJsonLd(page, lang, ctx) {
  const { urls } = ctx;
  const data = page[lang];
  const url = urls.abs(page.path, lang);
  const orgId = `${urls.origin}${urls.base}/#organization`;
  const personId = `${urls.origin}${urls.base}/#principal`;
  const siteId = `${urls.origin}${urls.base}/#website`;
  const inLanguage = LANG_TAG[lang];
  const a = site.ADDRESS;

  const org = {
    '@type': 'AccountingService',
    '@id': orgId,
    name: site.BRAND,
    alternateName: site.BRAND_SHORT,
    url: urls.abs('/', 'en'),
    telephone: site.PHONES.map((p) => p.tel),
    email: site.EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postal,
      addressCountry: a.country,
    },
    areaServed: [
      { '@type': 'City', name: 'Scarborough' },
      { '@type': 'AdministrativeArea', name: 'Ontario' },
    ],
    founder: { '@id': personId },
    knowsAbout: [
      'Income tax', 'Accounting', 'Bookkeeping', 'Payroll', 'GST/HST', 'Incorporation',
      'T1 Personal Tax Return', 'T2 Corporate Tax Return', 'CRA Audit Support', 
      'Financial Statements', 'Tax Planning', 'Small Business Accounting', 
      'Tax Compliance', 'Business Registration', 'Financial Forecasting', 
      'Corporate Restructuring', 'Tax Assessment Appeals', 'Capital Gains', 
      'Rental Property Tax', 'Notice of Assessment', 'Dividends', 'T4A Slips', 'T5 Slips'
    ],
    contactPoint: site.PHONES.map((p) => ({
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: p.tel,
      areaServed: 'CA',
    })),
  };

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: site.PRINCIPAL,
    jobTitle: 'Tax Consultant',
    worksFor: { '@id': orgId },
    url: urls.abs('/about/vasugi-selvaelango/', lang),
  };

  const website = {
    '@type': 'WebSite',
    '@id': siteId,
    url: urls.abs('/', lang),
    name: site.BRAND,
    inLanguage,
    publisher: { '@id': orgId },
  };

  const pageType = { about: 'AboutPage', contact: 'ContactPage', faq: 'FAQPage', hub: 'CollectionPage' }[page.type] || 'WebPage';
  const trail = ctx.trail(page.path);

  const webpage = {
    '@type': pageType,
    '@id': `${url}#webpage`,
    url,
    name: pageTitle(data),
    description: data.desc,
    keywords: data.desc + " Scarborough accounting firm, tax services, bookkeeping, corporate filings, CRA support",
    inLanguage,
    isPartOf: { '@id': siteId },
    about: { '@id': page.type === 'principal' ? personId : orgId },
    ...(trail.length > 1 ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
  };

  const graph = [org, person, website, webpage];

  if (trail.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: trail.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        item: urls.abs(item.path, lang),
      })),
    });
  }

  if (page.type === 'service') {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: data.h1,
      serviceType: data.nav,
      description: data.desc,
      url,
      inLanguage,
      provider: { '@id': orgId },
      areaServed: { '@type': 'AdministrativeArea', name: 'Ontario' },
    });
  }

  if ((page.type === 'faq' || page.type === 'guide') && data.snippets && data.snippets.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage,
      mainEntity: data.snippets.map(([q, ans]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: ans },
      })),
    });
  }

  return scriptTag({ '@context': 'https://schema.org', '@graph': graph });
}

/** sitemap.xml with xhtml:link alternates for every EN/FR pair. */
function buildSitemap(pages, urls, lastmod) {
  const entries = [];
  for (const lang of ['en', 'fr']) {
    for (const page of pages) {
      entries.push(`  <url>
    <loc>${esc(urls.abs(page.path, lang))}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="en-CA" href="${esc(urls.abs(page.path, 'en'))}"/>
    <xhtml:link rel="alternate" hreflang="fr-CA" href="${esc(urls.abs(page.path, 'fr'))}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(urls.abs(page.path, 'en'))}"/>
  </url>`);
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
}

function buildRobots(urls) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${urls.origin}${urls.base}/sitemap.xml\n`;
}

module.exports = { LANG_TAG, pageTitle, headLinks, buildJsonLd, buildSitemap, buildRobots };
