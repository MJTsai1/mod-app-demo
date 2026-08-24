import { DemoLink, Reveal } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="card-elevated px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
              Ready to simplify your community management?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
              See how the dashboard could fit your community&apos;s moderation workflow.
            </p>
            <div className="mt-8">
              <DemoLink className="btn btn-primary px-8 py-3 text-base">Request a Demo</DemoLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
