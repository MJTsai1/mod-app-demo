import { getTranslations } from "next-intl/server";
import { SectionHeading, Reveal } from "@/components/ui";

export async function DiscordIntegrationSection() {
  const t = await getTranslations("discordIntegration");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <div key={item.title} className="card p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface-hover)] text-sm font-bold text-[var(--color-accent-soft)]">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold text-[var(--color-text)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-[var(--color-text-subtle)]">
            {t("disclaimer")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
