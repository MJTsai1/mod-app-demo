"use client";

import { useState } from "react";
import { SectionHeading, BrowserFrame, DemoDataNote, Reveal } from "@/components/ui";
import {
  ApplicationDetailMockup,
  ReportsMockup,
  AppealsMockup,
  StaffMockup,
  AnalyticsMockup,
  ActivityMockup,
} from "@/components/mockups";

const tabs = [
  { id: "applications", label: "Applications", frameTitle: "guilddesk.app/admin/dashboard/APP-2477", node: <ApplicationDetailMockup /> },
  { id: "reports", label: "Reports", frameTitle: "guilddesk.app/admin/reports", node: <ReportsMockup /> },
  { id: "appeals", label: "Appeals", frameTitle: "guilddesk.app/admin/appeals", node: <AppealsMockup /> },
  { id: "staff", label: "Staff", frameTitle: "guilddesk.app/admin/staff", node: <StaffMockup /> },
  { id: "analytics", label: "Analytics", frameTitle: "guilddesk.app/admin/stats", node: <AnalyticsMockup /> },
  { id: "activity", label: "Activity", frameTitle: "guilddesk.app/admin/activity", node: <ActivityMockup /> },
] as const;

export function DashboardShowcase() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("applications");
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="dashboard" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="The dashboard"
            title="What your staff actually see"
            description="A single, consistent interface for every part of the workflow — applications, reports, appeals, staff, and analytics."
          />
        </Reveal>

        <Reveal delay={100}>
          <div
            role="tablist"
            aria-label="Dashboard sections"
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className="rounded-full px-4 py-2 text-sm font-medium transition"
                style={
                  active === tab.id
                    ? { background: "var(--color-accent)", color: "white" }
                    : { background: "var(--color-surface-hover)", color: "var(--color-text-muted)" }
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <BrowserFrame title={current.frameTitle}>{current.node}</BrowserFrame>
            <DemoDataNote className="mt-3 text-center" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
