# GuildDesk — marketing/demo site

A standalone marketing/demo website for a Discord community management
dashboard product. This is **not** the real dashboard — it has no backend,
no database, and no Discord connection. Every dashboard screen shown on this
site is a static mockup built from fake data in `src/lib/mockData.ts`.

This project is completely independent from any production dashboard. It
does not read from, write to, or link into another project's database,
auth, or API routes.

## Edit this first

- **`src/lib/config.ts`** — product name, hero copy, the demo link URL,
  pricing tiers, and FAQ content. This is the one file you'll want to touch
  for routine updates.
- **`src/lib/mockData.ts`** — the fake applications/reports/appeals/staff
  data used to render the dashboard mockups.

Every "Request a Demo" / "Get in Touch" / pricing CTA on the site links to
`siteConfig.demoUrl` in `config.ts` — change it once there and every button
updates.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

This is a standard Next.js app — deploy it to Vercel as its own, separate
project (do not link it to any existing project):

1. Push this folder to its own new GitHub repository.
2. In Vercel, "Add New… → Project" and import that repository.
3. No environment variables are required. Deploy.

No Supabase, Discord OAuth, Stripe, or AI API keys are needed for this site
to work.
