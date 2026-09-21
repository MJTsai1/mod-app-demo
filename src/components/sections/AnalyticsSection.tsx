import { getTranslations } from "next-intl/server";
import { SectionHeading, Reveal, DemoDataNote } from "@/components/ui";
import { mockStats, mockStatusBreakdown } from "@/lib/mockData";

export async function AnalyticsSection() {
  const t = await getTranslations("analytics");
  const tStatus = await getTranslations("status");

  const cards = [
    { label: t("pendingApplications"), value: mockStats.pendingApplications },
    { label: t("openReports"), value: mockStats.openReports },
    { label: t("openAppeals"), value: mockStats.openAppeals },
    { label: t("applicationsProcessed30d"), value: mockStats.applicationsProcessed30d },
    { label: t("reportsResolved30d"), value: mockStats.reportsResolved30d },
    { label: t("avgResolutionTime"), value: mockStats.avgResolutionTime },
  ];

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
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
              {t("statusBreakdown")}
            </p>
            <div className="space-y-4">
              {mockStatusBreakdown.map((row) => (
                <div key={row.status}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-[var(--color-text-muted)]">{tStatus(row.status)}</span>
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
