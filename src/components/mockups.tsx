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
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="text-xs uppercase tracking-wide text-[var(--color-text-subtle)]">
          <tr className="border-b border-[var(--color-border)]">
            <th className="py-2 pr-4 font-medium">Applicant</th>
            <th className="py-2 pr-4 font-medium">Status</th>
            <th className="py-2 pr-4 font-medium">Claimed by</th>
            <th className="py-2 pr-4 font-medium">Submitted</th>
          </tr>
        </thead>
        <tbody>
          {mockApplications.map((app) => (
            <tr key={app.id} className="border-b border-[var(--color-border)] last:border-0">
              <td className="py-3 pr-4">
                <div className="font-medium text-[var(--color-text)]">{app.applicant}</div>
                <div className="font-mono text-xs text-[var(--color-text-subtle)]">{app.id}</div>
              </td>
              <td className="py-3 pr-4">
                <StatusPill status={app.status} />
              </td>
              <td className="py-3 pr-4 text-[var(--color-text-muted)]">
                {app.claimedBy ?? <span className="text-[var(--color-text-subtle)]">Unclaimed</span>}
              </td>
              <td className="py-3 pr-4 text-[var(--color-text-subtle)]">{app.submitted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ApplicationDetailMockup() {
  const app = mockApplications[1];
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-lg font-semibold text-[var(--color-text)]">{app.applicant}</p>
          <p className="font-mono text-xs text-[var(--color-text-subtle)]">{app.id}</p>
        </div>
        <StatusPill status={app.status} />
      </div>
      <div className="grid grid-cols-3 gap-4 rounded-xl border border-[var(--color-border)] p-4 text-sm">
        <div>
          <p className="text-xs text-[var(--color-text-subtle)]">Age</p>
          <p className="text-[var(--color-text)]">{app.age}</p>
        </div>
        <div>
          <p className="text-xs text-[var(--color-text-subtle)]">Timezone</p>
          <p className="text-[var(--color-text)]">{app.timezone}</p>
        </div>
        <div>
          <p className="text-xs text-[var(--color-text-subtle)]">Weekly hours</p>
          <p className="text-[var(--color-text)]">{app.weeklyHours}</p>
        </div>
      </div>
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
          Previous experience
        </p>
        <p className="text-sm text-[var(--color-text-muted)]">{app.experience}</p>
      </div>
      <div className="flex gap-2">
        <button type="button" disabled className="btn btn-primary cursor-default text-sm opacity-90">
          Approve
        </button>
        <button type="button" disabled className="btn btn-secondary cursor-default text-sm opacity-90">
          Deny
        </button>
        <button type="button" disabled className="btn btn-secondary cursor-default text-sm opacity-90">
          Request info
        </button>
      </div>
    </div>
  );
}

export function ReportsMockup() {
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
                {report.priority} priority
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-[var(--color-text)]">
              Reported: {report.reportedUser} <span className="text-[var(--color-text-subtle)]">· {report.category}</span>
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">{report.summary}</p>
          </div>
          <div className="text-left text-xs text-[var(--color-text-subtle)] sm:text-right">
            <p>{report.assignedTo ?? "Unassigned"}</p>
            <p>{report.submitted}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AppealsMockup() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="text-xs uppercase tracking-wide text-[var(--color-text-subtle)]">
          <tr className="border-b border-[var(--color-border)]">
            <th className="py-2 pr-4 font-medium">Appellant</th>
            <th className="py-2 pr-4 font-medium">Original ban reason</th>
            <th className="py-2 pr-4 font-medium">Status</th>
            <th className="py-2 pr-4 font-medium">Reviewer</th>
          </tr>
        </thead>
        <tbody>
          {mockAppeals.map((appeal) => (
            <tr key={appeal.id} className="border-b border-[var(--color-border)] last:border-0">
              <td className="py-3 pr-4">
                <div className="font-medium text-[var(--color-text)]">{appeal.appellant}</div>
                <div className="font-mono text-xs text-[var(--color-text-subtle)]">{appeal.id}</div>
              </td>
              <td className="py-3 pr-4 text-[var(--color-text-muted)]">{appeal.banReason}</td>
              <td className="py-3 pr-4">
                <StatusPill status={appeal.status} />
              </td>
              <td className="py-3 pr-4 text-[var(--color-text-subtle)]">
                {appeal.reviewer ?? "Unassigned"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StaffMockup() {
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
              <p className="text-[var(--color-text-subtle)]">Claimed</p>
              <p className="font-medium text-[var(--color-text)]">{staff.claimed}</p>
            </div>
            <div>
              <p className="text-[var(--color-text-subtle)]">Resolved (7d)</p>
              <p className="font-medium text-[var(--color-text)]">{staff.resolvedThisWeek}</p>
            </div>
            <div>
              <p className="text-[var(--color-text-subtle)]">Last active</p>
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
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Pending applications", value: mockStats.pendingApplications },
          { label: "Open reports", value: mockStats.openReports },
          { label: "Open appeals", value: mockStats.openAppeals },
          { label: "Active staff", value: mockStats.activeStaff },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-[var(--color-border)] p-4">
            <p className="text-2xl font-bold text-[var(--color-text)]">{stat.value}</p>
            <p className="mt-1 text-xs text-[var(--color-text-subtle)]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-3 flex items-baseline justify-between">
          <p className="text-sm font-semibold text-[var(--color-text)]">Application status breakdown</p>
          <span className="text-xs text-[var(--color-text-subtle)]">Last 30 days</span>
        </div>
        <div className="space-y-3">
          {mockStatusBreakdown.map((row) => (
            <div key={row.label}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-[var(--color-text-muted)]">{row.label}</span>
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
          <p className="mt-1 text-xs text-[var(--color-text-subtle)]">Applications processed (30d)</p>
        </div>
        <div className="rounded-xl border border-[var(--color-border)] p-4">
          <p className="text-lg font-bold text-[var(--color-text)]">{mockStats.reportsResolved30d}</p>
          <p className="mt-1 text-xs text-[var(--color-text-subtle)]">Reports resolved (30d)</p>
        </div>
        <div className="rounded-xl border border-[var(--color-border)] p-4">
          <p className="text-lg font-bold text-[var(--color-text)]">{mockStats.avgResolutionTime}</p>
          <p className="mt-1 text-xs text-[var(--color-text-subtle)]">Avg. resolution time</p>
        </div>
      </div>
    </div>
  );
}
