import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/config";
import { DemoLink, BrowserFrame, DemoDataNote } from "@/components/ui";
import { AnalyticsMockup } from "@/components/mockups";

export async function Hero() {
  const t = await getTranslations("hero");
  const communities = t.raw("communities") as string[];

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge mx-auto mb-6 border border-[var(--color-border-strong)] bg-[var(--color-surface-hover)] text-[var(--color-text-muted)]">
            {t("badge")}
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl">
            {t("titlePrefix")} <span className="gradient-text">{t("titleHighlight")}</span>
            {t("titleSuffix")}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-text-muted)]">
            {t("subTagline")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DemoLink className="btn btn-primary w-full px-6 py-3 text-base sm:w-auto">
              {t("requestDemo")}
            </DemoLink>
            <a
              href="#dashboard"
              className="btn btn-secondary w-full px-6 py-3 text-base sm:w-auto"
            >
              {t("seeDashboard")}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-[var(--color-text-subtle)]">
            <span className="font-medium uppercase tracking-wide">{t("builtFor")}</span>
            {communities.map((community) => (
              <span
                key={community}
                className="rounded-full border border-[var(--color-border-strong)] px-3 py-1 text-[var(--color-text-muted)]"
              >
                {community}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-10 -z-10 rounded-[3rem] blur-3xl"
            style={{ background: "radial-gradient(closest-side, #8b5cf633, transparent)" }}
          />
          <BrowserFrame title={`${siteConfig.productName.toLowerCase()}.app/admin/stats`}>
            <AnalyticsMockup />
          </BrowserFrame>
          <DemoDataNote className="mt-3 text-center" />
        </div>
      </div>
    </section>
  );
}
