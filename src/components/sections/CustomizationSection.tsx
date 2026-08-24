import { SectionHeading, Reveal } from "@/components/ui";

const options = [
  { title: "Custom branding", description: "Your community's name, colours, and logo across the dashboard." },
  { title: "Custom application questions", description: "Ask what actually matters for your community's staff roles." },
  { title: "Custom workflows", description: "Match the review process your team already uses." },
  { title: "Custom staff roles & permissions", description: "Control who can review, decide, or just view." },
  { title: "Custom pages", description: "Add pages specific to your community's needs." },
  { title: "Custom integrations", description: "Connect the tools your team already relies on." },
];

export function CustomizationSection() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Customisation"
            title="Set up to fit your community, not the other way around"
            description="Custom options are available depending on your community's requirements — not every customisation shown here exists by default, but it can be built out for your setup."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((option, i) => (
            <Reveal key={option.title} delay={i * 60}>
              <div className="card h-full p-6">
                <h3 className="font-semibold text-[var(--color-text)]">{option.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{option.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
