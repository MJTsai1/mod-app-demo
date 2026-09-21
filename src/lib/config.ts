/**
 * Central marketing-site configuration.
 *
 * This is a standalone marketing/demo site for a Discord community
 * management platform — it is NOT the product itself and has no backend,
 * database, or Discord connection of its own. All dashboard data shown on
 * this site is mock data (see src/lib/mockData.ts).
 *
 * All user-facing copy lives in messages/{locale}.json — this file only
 * holds structural, non-translatable config (URLs, hrefs, flags).
 */

export const siteConfig = {
  productName: "GuildDesk",

  // The single external destination for every "Request a Demo" / "Get in
  // Touch" CTA on this site. Change this one value to point everywhere.
  demoUrl: "https://marcus-bio-deploy.vercel.app",

  // The live production dashboard this site is advertising (shown as a
  // reference link only — this marketing site does not connect to it).
  liveDashboardUrl: "https://washingtondcerlcdashboard.vercel.app",

  navHrefs: ["#features", "#dashboard", "#pricing", "#faq"] as const,

  pricingHighlighted: [false, true, false] as const,
} as const;

export type SiteConfig = typeof siteConfig;
