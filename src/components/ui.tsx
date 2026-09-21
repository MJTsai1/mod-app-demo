"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/config";
import type { MockStatus } from "@/lib/mockData";

/** Fades/slides a section into view once it enters the viewport. No-JS and reduced-motion users always see full content (see .reveal in globals.css). */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/** Every "Request a Demo" / "Get in Touch" CTA on the site routes through here, to siteConfig.demoUrl. */
export function DemoLink({
  children,
  className = "btn btn-primary",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={siteConfig.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "text-start items-start";
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-soft)]">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold text-[var(--color-text)] sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-base text-[var(--color-text-muted)] sm:text-lg">{description}</p>
      )}
    </div>
  );
}

/** A faux browser/app window frame that all dashboard mockups render inside. */
export function BrowserFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-elevated overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]/60" />
        </div>
        <div className="ms-3 flex-1 truncate rounded-md bg-[var(--color-surface-hover)] px-3 py-1 text-center text-xs text-[var(--color-text-subtle)]">
          {title}
        </div>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}

const STATUS_STYLES: Record<MockStatus, { bg: string; color: string }> = {
  pending: { bg: "var(--color-info-bg)", color: "var(--color-info)" },
  reviewing: { bg: "var(--color-warning-bg)", color: "var(--color-warning)" },
  needs_info: { bg: "rgba(139,92,246,0.15)", color: "var(--color-accent-soft)" },
  accepted: { bg: "var(--color-success-bg)", color: "var(--color-success)" },
  approved: { bg: "var(--color-success-bg)", color: "var(--color-success)" },
  resolved: { bg: "var(--color-success-bg)", color: "var(--color-success)" },
  rejected: { bg: "var(--color-danger-bg)", color: "var(--color-danger)" },
  denied: { bg: "var(--color-danger-bg)", color: "var(--color-danger)" },
  dismissed: { bg: "rgba(138,128,171,0.15)", color: "var(--color-text-subtle)" },
};

export function StatusPill({ status }: { status: MockStatus }) {
  const t = useTranslations("status");
  const style = STATUS_STYLES[status];
  return (
    <span className="badge" style={{ background: style.bg, color: style.color }}>
      {t(status)}
    </span>
  );
}

export function DemoDataNote({ className = "" }: { className?: string }) {
  const t = useTranslations();
  return (
    <p className={`text-xs text-[var(--color-text-subtle)] ${className}`}>
      {t("demoDataNote")}
    </p>
  );
}
