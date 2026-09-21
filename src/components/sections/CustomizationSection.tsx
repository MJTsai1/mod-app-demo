import { getTranslations } from "next-intl/server";
import { SectionHeading, Reveal } from "@/components/ui";

export async function CustomizationSection() {
  const t = await getTranslations("customization");
  const options = t.raw("options") as { title: string; description: string }[];

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
