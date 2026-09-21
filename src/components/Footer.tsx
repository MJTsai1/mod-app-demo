import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/config";
import { DemoLink } from "@/components/ui";

export async function Footer() {
  const t = await getTranslations();
  const navLabels: Record<string, string> = {
    "#features": t("nav.features"),
    "#dashboard": t("nav.dashboard"),
    "#pricing": t("nav.pricing"),
    "#faq": t("nav.faq"),
  };

  return (
    <footer className="border-t border-[var(--color-border)] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-start">
        <div>
          <p className="font-bold text-[var(--color-text)]">{siteConfig.productName}</p>
          <p className="mt-1 max-w-sm text-sm text-[var(--color-text-subtle)]">
            {t("meta.tagline")} {t("footer.notAffiliated")}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <nav className="flex flex-wrap justify-center gap-5 sm:justify-end" aria-label={t("nav.primary")}>
            {siteConfig.navHrefs.map((href) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
              >
                {navLabels[href]}
              </a>
            ))}
          </nav>
          <DemoLink className="btn btn-secondary px-4 py-2 text-sm">{t("nav.getInTouch")}</DemoLink>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-[var(--color-text-subtle)] sm:text-start">
        © {new Date().getFullYear()} {siteConfig.productName}. {t("footer.previewNote")}
      </p>
    </footer>
  );
}
