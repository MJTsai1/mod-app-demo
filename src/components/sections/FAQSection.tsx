"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionHeading, Reveal } from "@/components/ui";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
      >
        <span className="font-medium text-[var(--color-text)]">{question}</span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className={`h-4 w-4 shrink-0 text-[var(--color-text-subtle)] transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-[var(--color-text-muted)]">{answer}</div>
      )}
    </div>
  );
}

export function FAQSection() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <section id="faq" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 space-y-3">
            {items.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
