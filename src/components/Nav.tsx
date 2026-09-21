"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/config";
import { DemoLink } from "@/components/ui";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Nav() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const navItems = siteConfig.navHrefs.map((href) => ({
    href,
    label: t(
      href === "#features"
        ? "features"
        : href === "#dashboard"
          ? "dashboard"
          : href === "#pricing"
            ? "pricing"
            : "faq"
    ),
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="text-lg font-bold tracking-tight text-[var(--color-text)]">
          {siteConfig.productName}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t("primary")}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <DemoLink className="btn btn-primary px-4 py-2 text-sm">{t("requestDemo")}</DemoLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text)] md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label={t("primaryMobile")}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[var(--color-text-muted)]"
              >
                {item.label}
              </a>
            ))}
            <LanguageSwitcher className="w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface-hover)] px-2 py-2 text-sm text-[var(--color-text-muted)]" />
            <DemoLink className="btn btn-primary w-full py-2 text-sm">{t("requestDemo")}</DemoLink>
          </nav>
        </div>
      )}
    </header>
  );
}
