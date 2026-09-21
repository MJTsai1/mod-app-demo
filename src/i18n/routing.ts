import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr", "es", "it", "zh-CN", "zh-HK", "id", "de", "jp", "ko", "ar"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  "zh-CN": "简体中文",
  "zh-HK": "繁體中文（香港）",
  id: "Bahasa Indonesia",
  de: "Deutsch",
  jp: "日本語",
  ko: "한국어",
  ar: "العربية",
};

export const rtlLocales: readonly Locale[] = ["ar"];

export function isRtl(locale: string): boolean {
  return (rtlLocales as readonly string[]).includes(locale);
}

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  // English stays unprefixed (/) so the existing bare domain keeps working;
  // every other locale is prefixed (/fr, /ar, ...).
  localePrefix: "as-needed",
});
