import { SectionHeading, Reveal, DemoDataNote } from "@/components/ui";
import { mockStats, mockStatusBreakdown } from "@/lib/mockData";

const cards = [
  { label: "Pending applications", value: mockStats.pendingApplications },
  { label: "Open reports", value: mockStats.openReports },
  { label: "Open appeals", value: mockStats.openAppeals },
  { label: "Applications processed (30d)", value: mockStats.applicationsProcessed30d },
  { label: "Reports resolved (30d)", value: mockStats.reportsResolved30d },
  { label: "Avg. resolution time", value: mockStats.avgResolutionTime },
];

export function AnalyticsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Analytics"
            title="See how your team is actually doing"
            description="A clear read on workload and turnaround, so you're not guessing whether reports are piling up."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div key={card.label} className="card p-6">
                <p className="text-3xl font-bold text-[var(--color-text)]">{card.value}</p>
                <p className="mt-2 text-sm text-[var(--color-text-subtle)]">{card.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="card mt-6 p-6 sm:p-8">
            <p className="mb-4 text-sm font-semibold text-[var(--color-text)]">
              Application status breakdown
            </p>
            <div className="space-y-4">
              {mockStatusBreakdown.map((row) => (
                <div key={row.label}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-[var(--color-text-muted)]">{row.label}</span>
                    <span className="text-[var(--color-text-subtle)]">
                      {row.value} ({row.percent}%)
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[var(--color-surface-hover)]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${row.percent}%`, background: "var(--color-accent)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DemoDataNote className="mt-3 text-center" />
        </Reveal>
      </div>
    </section>
  );
}
