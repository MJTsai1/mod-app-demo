"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { StatusPill } from "@/components/ui";
import { mockApplications, type MockStatus } from "@/lib/mockData";

interface SandboxApp {
  id: string;
  applicant: string;
  status: MockStatus;
  submitted: string;
  age: number;
  timezone: string;
  weeklyHours: number;
  experience: string;
  claimedBy: string | null;
}

function initialApps(): SandboxApp[] {
  return mockApplications.map((app) => ({ ...app }));
}

export function Sandbox() {
  const t = useTranslations("sandbox");
  const [apps, setApps] = useState<SandboxApp[]>(initialApps);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [flash, setFlash] = useState<string | null>(null);
  const you = t("youDemo");

  const selected = apps.find((app) => app.id === selectedId) ?? null;

  function updateApp(id: string, changes: Partial<SandboxApp>) {
    setApps((prev) => prev.map((app) => (app.id === id ? { ...app, ...changes } : app)));
  }

  function announce(message: string) {
    setFlash(message);
    window.setTimeout(() => setFlash((current) => (current === message ? null : current)), 1800);
  }

  function reset() {
    setApps(initialApps());
    setSelectedId(null);
    announce(t("demoReset"));
  }

  if (selected) {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setSelectedId(null)}
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-soft)] hover:underline"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 rtl:-scale-x-100" aria-hidden>
              <path d="M12.5 15.5L7 10l5.5-5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t("backToList")}
          </button>
          {flash && <span className="text-xs text-[var(--color-success)]">{flash}</span>}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-lg font-semibold text-[var(--color-text)]">{selected.applicant}</p>
            <p className="font-mono text-xs text-[var(--color-text-subtle)]">{selected.id}</p>
          </div>
          <StatusPill status={selected.status} />
        </div>

        <div className="grid grid-cols-3 gap-4 rounded-xl border border-[var(--color-border)] p-4 text-sm">
          <div>
            <p className="text-xs text-[var(--color-text-subtle)]">{t("age")}</p>
            <p className="text-[var(--color-text)]">{selected.age}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-subtle)]">{t("timezone")}</p>
            <p className="text-[var(--color-text)]">{selected.timezone}</p>
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-subtle)]">{t("weeklyHours")}</p>
            <p className="text-[var(--color-text)]">{selected.weeklyHours}</p>
          </div>
        </div>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
            {t("previousExperience")}
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">{selected.experience}</p>
        </div>

        <div className="text-sm text-[var(--color-text-muted)]">
          {t("claimedByLabel")}{" "}
          <span className="text-[var(--color-text)]">{selected.claimedBy ?? t("unclaimed")}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {selected.claimedBy === you ? (
            <button
              type="button"
              className="btn btn-secondary text-sm"
              onClick={() => {
                updateApp(selected.id, { claimedBy: null });
                announce(t("unclaim"));
              }}
            >
              {t("unclaim")}
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary text-sm"
              onClick={() => {
                updateApp(selected.id, { claimedBy: you });
                announce(t("claimed"));
              }}
            >
              {t("claim")}
            </button>
          )}
          <button
            type="button"
            className="btn btn-primary text-sm"
            onClick={() => {
              updateApp(selected.id, { status: "accepted" });
              announce(t("applicationAccepted"));
            }}
          >
            {t("approve")}
          </button>
          <button
            type="button"
            className="btn btn-secondary text-sm"
            onClick={() => {
              updateApp(selected.id, { status: "rejected" });
              announce(t("applicationRejected"));
            }}
          >
            {t("deny")}
          </button>
          <button
            type="button"
            className="btn btn-secondary text-sm"
            onClick={() => {
              updateApp(selected.id, { status: "needs_info" });
              announce(t("markedNeedsInfo"));
            }}
          >
            {t("requestInfo")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs text-[var(--color-text-subtle)]">{t("clickHint")}</p>
        <div className="flex items-center gap-3">
          {flash && <span className="text-xs text-[var(--color-success)]">{flash}</span>}
          <button
            type="button"
            onClick={reset}
            className="text-xs font-medium text-[var(--color-text-subtle)] hover:text-[var(--color-text)] hover:underline"
          >
            {t("resetDemo")}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-start text-sm">
          <thead className="text-xs uppercase tracking-wide text-[var(--color-text-subtle)]">
            <tr className="border-b border-[var(--color-border)]">
              <th className="py-2 pe-4 font-medium">{t("applicant")}</th>
              <th className="py-2 pe-4 font-medium">{t("status")}</th>
              <th className="py-2 pe-4 font-medium">{t("claimedBy")}</th>
              <th className="py-2 pe-4 font-medium">{t("submitted")}</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((app) => (
              <tr
                key={app.id}
                onClick={() => setSelectedId(app.id)}
                className="cursor-pointer border-b border-[var(--color-border)] transition last:border-0 hover:bg-[var(--color-surface-hover)]"
              >
                <td className="py-3 pe-4">
                  <div className="font-medium text-[var(--color-text)]">{app.applicant}</div>
                  <div className="font-mono text-xs text-[var(--color-text-subtle)]">{app.id}</div>
                </td>
                <td className="py-3 pe-4">
                  <StatusPill status={app.status} />
                </td>
                <td className="py-3 pe-4 text-[var(--color-text-muted)]">
                  {app.claimedBy ?? <span className="text-[var(--color-text-subtle)]">{t("unclaimed")}</span>}
                </td>
                <td className="py-3 pe-4 text-[var(--color-text-subtle)]">{app.submitted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
