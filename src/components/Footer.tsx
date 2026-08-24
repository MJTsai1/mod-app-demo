import { siteConfig } from "@/lib/config";
import { DemoLink } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-bold text-[var(--color-text)]">{siteConfig.productName}</p>
          <p className="mt-1 max-w-sm text-sm text-[var(--color-text-subtle)]">
            {siteConfig.tagline} Not affiliated with, endorsed by, or sponsored by Discord Inc.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <nav className="flex flex-wrap justify-center gap-5 sm:justify-end" aria-label="Footer">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <DemoLink className="btn btn-secondary px-4 py-2 text-sm">Get in Touch</DemoLink>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-[var(--color-text-subtle)] sm:text-left">
        © {new Date().getFullYear()} {siteConfig.productName}. This is a preview site — dashboard
        screens shown throughout are illustrative mockups with demo data.
      </p>
    </footer>
  );
}
