/**
 * Central marketing-site configuration.
 *
 * This is a standalone marketing/demo site for a Discord community
 * management platform — it is NOT the product itself and has no backend,
 * database, or Discord connection of its own. All dashboard data shown on
 * this site is mock data (see src/lib/mockData.ts).
 *
 * Change copy, pricing, and the demo link here — nothing else in the
 * codebase should need editing for routine updates.
 */

export const siteConfig = {
  productName: "GuildDesk",
  tagline: "Discord Community Management, Simplified.",
  subTagline:
    "Manage applications, reports, appeals, and staff activity from one powerful dashboard.",
  description:
    "GuildDesk is a Discord community management platform for applications, reports, appeals, and staff activity — built for gaming, roleplay, and creator communities.",

  // The single external destination for every "Request a Demo" / "Get in
  // Touch" CTA on this site. Change this one value to point everywhere.
  demoUrl: "https://marcus-bio-deploy.vercel.app",

  // The live production dashboard this site is advertising (shown as a
  // reference link only — this marketing site does not connect to it).
  liveDashboardUrl: "https://washingtondcerlcdashboard.vercel.app",

  nav: [
    { label: "Features", href: "#features" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  heroBadge: "Now onboarding pilot communities",

  supportedCommunities: [
    "Roblox communities",
    "ERLC communities",
    "FiveM communities",
    "Minecraft communities",
    "Gaming communities",
    "Creator communities",
  ],

  pricing: {
    note: "Pricing is illustrative for now — every plan is set up individually. No payments are processed on this site.",
    tiers: [
      {
        name: "Community",
        blurb: "For smaller communities getting organised.",
        features: [
          "Applications",
          "Reports",
          "Appeals",
          "Staff dashboard",
          "Discord integration",
          "Basic analytics",
        ],
        cta: "Request a Demo",
        highlighted: false,
      },
      {
        name: "Pro",
        blurb: "For larger communities with an active staff team.",
        features: [
          "Everything in Community",
          "Advanced analytics",
          "Custom branding",
          "Additional configuration",
          "More advanced workflows",
        ],
        cta: "Request a Demo",
        highlighted: true,
      },
      {
        name: "Custom",
        blurb: "For communities that need something specific.",
        features: [
          "Custom workflows",
          "Custom pages",
          "Custom branding",
          "Custom integrations",
          "Custom development",
        ],
        cta: "Request a Demo",
        highlighted: false,
      },
    ],
  },

  faqs: [
    {
      question: "What is this platform?",
      answer:
        "GuildDesk is a web dashboard that helps Discord community staff manage moderator applications, member reports, ban appeals, and staff activity in one organised place instead of scattered Discord channels and DMs.",
    },
    {
      question: "Who is it for?",
      answer:
        "Any Discord community with a staff team — roleplay servers, gaming communities, creator communities, and more. It's built to be generic enough to fit different kinds of communities, not tied to one specific game or server.",
    },
    {
      question: "Does it work with Discord?",
      answer:
        "Yes. It's designed to sit alongside your Discord server: members interact through a web dashboard, and staff review and manage everything from there. This marketing site itself doesn't connect to Discord — it's a preview of the product.",
    },
    {
      question: "Can I customise the dashboard?",
      answer:
        "Custom options are available depending on your community's requirements — things like branding, application questions, workflows, and staff roles. Not every customisation exists out of the box; we build out what your community actually needs.",
    },
    {
      question: "Can I use it for my gaming community?",
      answer:
        "Yes. While the concept started with a roleplay server's moderator application process, the underlying workflow — applications, reports, appeals, staff accountability — applies to Roblox, FiveM, Minecraft, and other gaming or creator communities too.",
    },
    {
      question: "Can I request custom features?",
      answer:
        "Yes — reach out with what your community needs and we'll let you know what's possible.",
    },
    {
      question: "Do I need to install anything?",
      answer:
        "No. The dashboard runs in the browser. There's nothing to install on your server or your members' devices.",
    },
    {
      question: "Is AI required?",
      answer:
        "No. The core product is the dashboard and management workflow, run by your human staff. AI-assisted features are an optional, additional capability — not something every plan includes, and never a replacement for staff making the actual decisions.",
    },
    {
      question: "How does hosting work?",
      answer:
        "The dashboard is hosted for you — no server management on your end. Details are worked out per community during setup.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
