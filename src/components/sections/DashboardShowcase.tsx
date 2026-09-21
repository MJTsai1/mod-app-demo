"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionHeading, BrowserFrame, DemoDataNote, Reveal } from "@/components/ui";
import { Sandbox } from "@/components/Sandbox";
import {
  ReportsMockup,
  AppealsMockup,
  StaffMockup,
  AnalyticsMockup,
  ActivityMockup,
} from "@/components/mockups";

export function DashboardShowcase() {
  const t = useTranslations("dashboardShowcase");

  const tabs = [
    { id: "applications", label: t("applications"), frameTitle: "guilddesk.app/admin/dashboard", node: <Sandbox /> },
    { id: "reports", label: t("reports"), frameTitle: "guilddesk.app/admin/reports", node: <ReportsMockup /> },
    { id: "appeals", label: t("appeals"), frameTitle: "guilddesk.app/admin/appeals", node: <AppealsMockup /> },
    { id: "staff", label: t("staff"), frameTitle: "guilddesk.app/admin/staff", node: <StaffMockup /> },
    { id: "analytics", label: t("analytics"), frameTitle: "guilddesk.app/admin/stats", node: <AnalyticsMockup /> },
    { id: "activity", label: t("activity"), frameTitle: "guilddesk.app/admin/activity", node: <ActivityMockup /> },
  ] as const;

  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("applications");
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section id="dashboard" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
        </Reveal>

        <Reveal delay={100}>
          <div
            role="tablist"
            aria-label={t("tabsAria")}
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
