"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/routing";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <select
      aria-label="Language"
      value={locale}
      onChange={(event) => router.replace(pathname, { locale: event.target.value as Locale })}
      className={
        className ??
        "rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface-hover)] px-2 py-1.5 text-sm text-[var(--color-text-muted)]"
      }
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {localeLabels[l]}
        </option>
      ))}
    </select>
  );
}
