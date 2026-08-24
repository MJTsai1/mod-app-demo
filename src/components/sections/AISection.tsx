import { Reveal } from "@/components/ui";

export function AISection() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:p-8">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              style={{ background: "var(--color-surface-hover)" }}
              aria-hidden
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[var(--color-accent-soft)]">
                <path
                  d="M12 3v3M12 18v3M5 12H2M22 12h-3M6.3 6.3L4.2 4.2M19.8 19.8l-2.1-2.1M6.3 17.7l-2.1 2.1M19.8 4.2l-2.1 2.1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-soft)]">
                Optional
              </span>
              <h3 className="mt-1 text-xl font-bold text-[var(--color-text)]">
                AI assistance, if and when you want it
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-[var(--color-text-muted)]">
                The core product is the dashboard and the review workflow, run by your staff. Some
                communities also add optional AI-assisted features — like a written summary of an
                application to help a reviewer skim faster. AI never makes the final call, never
                bans anyone automatically, and isn&apos;t included by default on every plan. Your
                staff stay responsible for every decision.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
