"use client";

import { useTranslations } from "next-intl";
import {
  mockApplications,
  mockReports,
  mockAppeals,
  mockStaff,
  mockActivity,
  mockStats,
  mockStatusBreakdown,
} from "@/lib/mockData";
import { StatusPill } from "@/components/ui";

export function ApplicationsMockup() {
  const t = useTranslations("sandbox");
  return (
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
          {mockApplications.map((app) => (
            <tr key={app.id} className="border-b border-[var(--color-border)] last:border-0">
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
  );
}

export function ReportsMockup() {
  const t = useTranslations("mockups");
  const PRIORITY_KEYS: Record<string, "priorityHigh" | "priorityMedium" | "priorityLow"> = {
    High: "priorityHigh",
    Medium: "priorityMedium",
    Low: "priorityLow",
  };
  return (
    <div className="space-y-3">
      {mockReports.map((report) => (
        <div
          key={report.id}
          className="flex flex-col gap-2 rounded-xl border border-[var(--color-border)] p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--color-text-subtle)]">{report.id}</span>
              <StatusPill status={report.status} />
              <span
                className="badge"
                style={{
                  background: report.priority === "High" ? "var(--color-danger-bg)" : "var(--color-surface-hover)",
                  color: report.priority === "High" ? "var(--color-danger)" : "var(--color-text-muted)",
                }}
              >
                {t(PRIORITY_KEYS[report.priority])}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-[var(--color-text)]">
              {t("reportedPrefix")} {report.reportedUser} <span className="text-[var(--color-text-subtle)]">· {report.category}</span>
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">{report.summary}</p>
          </div>
          <div className="text-start text-xs text-[var(--color-text-subtle)] sm:text-end">
            <p>{report.assignedTo ?? t("unassigned")}</p>
            <p>{report.submitted}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AppealsMockup() {
  const t = useTranslations("mockups");
  const tSandbox = useTranslations("sandbox");
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-start text-sm">
        <thead className="text-xs uppercase tracking-wide text-[var(--color-text-subtle)]">
          <tr className="border-b border-[var(--color-border)]">
            <th className="py-2 pe-4 font-medium">{t("appellant")}</th>
            <th className="py-2 pe-4 font-medium">{t("originalBanReason")}</th>
            <th className="py-2 pe-4 font-medium">{tSandbox("status")}</th>
            <th className="py-2 pe-4 font-medium">{t("reviewer")}</th>
          </tr>
        </thead>
        <tbody>
          {mockAppeals.map((appeal) => (
            <tr key={appeal.id} className="border-b border-[var(--color-border)] last:border-0">
              <td className="py-3 pe-4">
                <div className="font-medium text-[var(--color-text)]">{appeal.appellant}</div>
                <div className="font-mono text-xs text-[var(--color-text-subtle)]">{appeal.id}</div>
              </td>
              <td className="py-3 pe-4 text-[var(--color-text-muted)]">{appeal.banReason}</td>
              <td className="py-3 pe-4">
                <StatusPill status={appeal.status} />
              </td>
              <td className="py-3 pe-4 text-[var(--color-text-subtle)]">
                {appeal.reviewer ?? t("unassigned")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StaffMockup() {
  const t = useTranslations("mockups");
  return (
    <div className="space-y-3">
      {mockStaff.map((staff) => (
        <div
          key={staff.name}
          className="flex flex-col gap-2 rounded-xl border border-[var(--color-border)] p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface-hover)] text-sm font-semibold text-[var(--color-accent-soft)]">
              {staff.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-[var(--color-text)]">{staff.name}</p>
              <p className="text-xs text-[var(--color-text-subtle)]">{staff.role}</p>
            </div>
          </div>
          <div className="flex gap-6 text-xs text-[var(--color-text-muted)]">
            <div>
              <p className="text-[var(--color-text-subtle)]">{t("claimedCount")}</p>
              <p className="font-medium text-[var(--color-text)]">{staff.claimed}</p>
            </div>
            <div>
              <p className="text-[var(--color-text-subtle)]">{t("resolved7d")}</p>
              <p className="font-medium text-[var(--color-text)]">{staff.resolvedThisWeek}</p>
            </div>
            <div>
              <p className="text-[var(--color-text-subtle)]">{t("lastActive")}</p>
              <p className="font-medium text-[var(--color-text)]">{staff.lastActive}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ActivityMockup() {
  return (
    <ul className="space-y-3">
      {mockActivity.map((entry, i) => (
        <li key={i} className="flex items-start justify-between gap-3 text-sm">
          <p className="text-[var(--color-text-muted)]">
            <span className="font-medium text-[var(--color-text)]">{entry.actor}</span> {entry.detail}
          </p>
          <span className="shrink-0 text-xs text-[var(--color-text-subtle)]">{entry.time}</span>
        </li>
      ))}
    </ul>
  );
}

export function AnalyticsMockup() {
  const t = useTranslations("analytics");
  const tStatus = useTranslations("status");

  const stats = [
    { label: t("pendingApplications"), value: mockStats.pendingApplications },
    { label: t("openReports"), value: mockStats.openReports },
    { label: t("openAppeals"), value: mockStats.openAppeals },
    { label: t("activeStaff"), value: mockStats.activeStaff },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-[var(--color-border)] p-4">
            <p className="text-2xl font-bold text-[var(--color-text)]">{stat.value}</p>
            <p className="mt-1 text-xs text-[var(--color-text-subtle)]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-3 flex items-baseline justify-between">
          <p className="text-sm font-semibold text-[var(--color-text)]">{t("statusBreakdown")}</p>
          <span className="text-xs text-[var(--color-text-subtle)]">{t("last30Days")}</span>
        </div>
        <div className="space-y-3">
          {mockStatusBreakdown.map((row) => (
            <div key={row.status}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-[var(--color-text-muted)]">{tStatus(row.status)}</span>
                <span className="text-[var(--color-text-subtle)]">
                  {row.value} ({row.percent}%)
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[var(--color-surface-hover)]">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${row.percent}%`, background: "var(--color-accent)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-[var(--color-border)] p-4">
          <p className="text-lg font-bold text-[var(--color-text)]">{mockStats.applicationsProcessed30d}</p>
          <p className="mt-1 text-xs text-[var(--color-text-subtle)]">{t("applicationsProcessed30d")}</p>
        </div>
        <div className="rounded-xl border border-[var(--color-border)] p-4">
          <p className="text-lg font-bold text-[var(--color-text)]">{mockStats.reportsResolved30d}</p>
          <p className="mt-1 text-xs text-[var(--color-text-subtle)]">{t("reportsResolved30d")}</p>
        </div>
        <div className="rounded-xl border border-[var(--color-border)] p-4">
          <p className="text-lg font-bold text-[var(--color-text)]">{mockStats.avgResolutionTime}</p>
          <p className="mt-1 text-xs text-[var(--color-text-subtle)]">{t("avgResolutionTime")}</p>
        </div>
      </div>
    </div>
  );
}
