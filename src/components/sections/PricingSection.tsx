import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/config";
import { SectionHeading, DemoLink, Reveal } from "@/components/ui";

export async function PricingSection() {
  const t = await getTranslations("pricing");
  const tiers = t.raw("tiers") as { name: string; blurb: string; features: string[] }[];

  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("note")}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => {
            const highlighted = siteConfig.pricingHighlighted[i];
            return (
              <Reveal key={tier.name} delay={i * 80}>
                <div
                  className={`flex h-full flex-col p-8 ${highlighted ? "card-elevated" : "card"}`}
                  style={highlighted ? { borderColor: "var(--color-accent)" } : undefined}
                >
                  {highlighted && (
                    <span className="badge mb-4 w-fit" style={{ background: "rgba(139,92,246,0.15)", color: "var(--color-accent-soft)" }}>
                      {t("mostPopular")}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[var(--color-text)]">{tier.name}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{tier.blurb}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]">
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <DemoLink
                    className={`btn mt-8 w-full py-3 text-sm ${highlighted ? "btn-primary" : "btn-secondary"}`}
                  >
                    {t("cta")}
                  </DemoLink>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
