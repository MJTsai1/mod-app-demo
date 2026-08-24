import { SectionHeading, Reveal } from "@/components/ui";

const steps = [
  { step: "1", title: "Connect your Discord server", description: "Link your community so the dashboard knows who's who." },
  { step: "2", title: "Configure your community", description: "Set your application questions, staff roles, and workflow." },
  { step: "3", title: "Staff access the dashboard", description: "Your team signs in to review, decide, and track everything." },
  { step: "4", title: "Manage applications, reports & appeals", description: "Everything flows through one consistent process from here." },
];

export function DiscordIntegrationSection() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Built for Discord communities"
            title="Designed to work alongside your Discord server"
            description="The dashboard runs on the web, separate from Discord itself, and is built specifically for teams that manage a Discord community."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="card p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface-hover)] text-sm font-bold text-[var(--color-accent-soft)]">
                  {item.step}
                </span>
                <h3 className="mt-4 font-semibold text-[var(--color-text)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-[var(--color-text-subtle)]">
            This marketing page is a product showcase only and does not itself connect to Discord.
            It is not affiliated with, endorsed by, or sponsored by Discord Inc.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
