import { SectionHeading, Reveal } from "@/components/ui";

const before = [
  "Applications sitting in a Google Form nobody checks regularly",
  "Reports buried in a #mod-reports channel, scrolling forever to find one",
  "Ban appeals handled over DMs with no record of what was decided",
  "No way to tell who's actually reviewing what",
  "Re-explaining the same case to a teammate because nothing's written down",
];

const after = [
  "Every application in one queue, sorted by status",
  "Reports tracked with a category, priority, and assigned staff member",
  "Appeals reviewed with a clear decision and reviewer on record",
  "Claim a case so staff don't duplicate work",
  "A full activity history on every case, staff-visible at a glance",
];

export function BeforeAfterSection() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="The problem"
            title="Most staff teams manage this with channels and spreadsheets"
            description="It works, until it doesn't. Here's what usually changes once a community moves to a dedicated dashboard."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="card p-6 sm:p-8">
              <span
                className="badge mb-4 w-fit"
                style={{ background: "var(--color-danger-bg)", color: "var(--color-danger)" }}
              >
                Before
              </span>
              <ul className="space-y-3">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]">
                    <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-danger)]" aria-hidden>
                      <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-elevated p-6 sm:p-8" style={{ borderColor: "var(--color-accent)" }}>
              <span
                className="badge mb-4 w-fit"
                style={{ background: "var(--color-success-bg)", color: "var(--color-success)" }}
              >
                After
              </span>
              <ul className="space-y-3">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]">
                    <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-soft)]" aria-hidden>
                      <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
