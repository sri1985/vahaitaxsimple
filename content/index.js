/**
 * Route registry. ROUTE_ORDER is the authoritative site map (English paths).
 * Every route must have content for both languages; the build fails otherwise.
 */
const core = require('./core');
const business = require('./business');
const corporate = require('./corporate');
const personal = require('./personal');
const resources = require('./resources');

const ROUTE_ORDER = [
  // Core
  '/',
  '/about/',
  '/about/vasugi-selvaelango/',
  '/about/why-choose-us/',
  // Business Tax
  '/business-tax-accounting/',
  '/business-tax-accounting/t2-tax-returns/',
  '/business-tax-accounting/bookkeeping-accounting/',
  '/business-tax-accounting/payroll-services/',
  '/business-tax-accounting/gst-hst-filing/',
  '/business-tax-accounting/financial-statements/',
  '/business-tax-accounting/business-plans-forecast/',
  '/business-tax-accounting/business-startup-consultation/',
  '/business-tax-accounting/cra-audits-reviews/',
  // Corporate Services
  '/corporate-services/',
  '/corporate-services/incorporation/',
  '/corporate-services/business-name-changes/',
  '/corporate-services/gst-hst-payroll-registration/',
  '/corporate-services/directors-address-changes/',
  '/corporate-services/shareholder-certificates-agreements/',
  // Personal Tax
  '/personal-tax-services/',
  '/personal-tax-services/t1-tax-returns/',
  '/personal-tax-services/rental-property-capital-gains/',
  '/personal-tax-services/gst-hst-new-housing-rebates/',
  '/personal-tax-services/personal-financial-planning/',
  '/personal-tax-services/cra-appeals-audit-facilitation/',
  // Resources & Contact
  '/tax-resources/',
  '/tax-resources/faqs/',
  '/tax-resources/business-tax-guide/',
  '/tax-resources/personal-tax-guide/',
  '/tax-resources/gst-hst-guide/',
  '/tax-resources/cra-resources/',
  '/contact/',
];

const all = [...core, ...business, ...corporate, ...personal, ...resources];
const byPath = new Map(all.map((p) => [p.path, p]));

const problems = [];
if (byPath.size !== all.length) problems.push('Duplicate route definitions found.');
for (const p of ROUTE_ORDER) if (!byPath.has(p)) problems.push(`Missing content for route ${p}`);
for (const p of byPath.keys()) if (!ROUTE_ORDER.includes(p)) problems.push(`Content defined for unlisted route ${p}`);
for (const page of all) for (const lang of ['en', 'fr']) if (!page[lang]) problems.push(`${page.path} missing "${lang}" content`);
if (problems.length) throw new Error('Route registry errors:\n - ' + problems.join('\n - '));

/** Pages in sitemap order. */
const pages = ROUTE_ORDER.map((p) => byPath.get(p));

module.exports = { pages, byPath, ROUTE_ORDER };
