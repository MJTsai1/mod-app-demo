import { getTranslations } from "next-intl/server";
import { SectionHeading, BrowserFrame, DemoDataNote, Reveal } from "@/components/ui";
import {
  ApplicationsMockup,
  ReportsMockup,
  AppealsMockup,
  StaffMockup,
  ActivityMockup,
} from "@/components/mockups";

export async function FeatureShowcase() {
  const t = await getTranslations("features");

  const features = [
    {
      key: "applications",
      frameTitle: "guilddesk.app/admin/applications",
      mockup: <ApplicationsMockup />,
    },
    {
      key: "reports",
      frameTitle: "guilddesk.app/admin/reports",
      mockup: <ReportsMockup />,
    },
    {
      key: "appeals",
      frameTitle: "guilddesk.app/admin/appeals",
      mockup: <AppealsMockup />,
    },
    {
      key: "staff",
      frameTitle: "guilddesk.app/admin/staff",
      mockup: (
        <div className="space-y-6">
          <StaffMockup />
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
              {t("recentActivity")}
            </p>
            <ActivityMockup />
          </div>
        </div>
      ),
    },
  ] as const;

  return (
    <section id="features" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-24">
          {features.map((feature, index) => {
            const bullets = t.raw(`${feature.key}.bullets`) as string[];
            return (
              <Reveal key={feature.key}>
                <div
                  className={`flex flex-col items-center gap-10 lg:flex-row ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full lg:w-2/5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-soft)]">
                      {t(`${feature.key}.eyebrow`)}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
                      {t(`${feature.key}.title`)}
                    </h3>
                    <p className="mt-3 text-[var(--color-text-muted)]">{t(`${feature.key}.description`)}</p>
                    <ul className="mt-5 space-y-2.5">
                      {bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]">
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-soft)]"
                            aria-hidden
                          >
                            <path
                              d="M4 10.5l3.5 3.5L16 6"
                              stroke="currentColor"
                              strokeWidth="1.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full lg:w-3/5">
                    <BrowserFrame title={feature.frameTitle}>{feature.mockup}</BrowserFrame>
                    <DemoDataNote className="mt-3" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
