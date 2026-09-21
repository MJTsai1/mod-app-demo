import { getTranslations } from "next-intl/server";
import { DemoLink, Reveal } from "@/components/ui";

export async function FinalCTA() {
  const t = await getTranslations("finalCta");
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="card-elevated px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
              {t("description")}
            </p>
            <div className="mt-8">
              <DemoLink className="btn btn-primary px-8 py-3 text-base">{t("cta")}</DemoLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
