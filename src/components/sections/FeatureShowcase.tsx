import { SectionHeading, BrowserFrame, DemoDataNote, Reveal } from "@/components/ui";
import {
  ApplicationsMockup,
  ReportsMockup,
  AppealsMockup,
  StaffMockup,
  ActivityMockup,
} from "@/components/mockups";

interface Feature {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  frameTitle: string;
  mockup: React.ReactNode;
}

const features: Feature[] = [
  {
    eyebrow: "Applications",
    title: "Application management, without the spreadsheet",
    description:
      "Members apply through a guided form, and staff review everything from one queue — no more digging through a Google Form and a separate spreadsheet.",
    bullets: [
      "Pending applications with applicant info at a glance",
      "Custom application questions per community",
      "Claim an application so staff don't double up on review",
      "Approve, deny, or request more info in a couple of clicks",
      "Reviewer attribution and full review history on every application",
    ],
    frameTitle: "guilddesk.app/admin/applications",
    mockup: <ApplicationsMockup />,
  },
  {
    eyebrow: "Reports",
    title: "Reports that don't get lost in a chat log",
    description:
      "Member reports come in structured, get a status and a priority, and stay assigned to a staff member — instead of staff having to scroll back through channels to piece together what happened.",
    bullets: [
      "Every open report with its status and priority",
      "Assigned staff member and case details",
      "Category, description, and evidence in one place",
      "Case history so nothing gets reviewed twice — or missed",
    ],
    frameTitle: "guilddesk.app/admin/reports",
    mockup: <ReportsMockup />,
  },
  {
    eyebrow: "Appeals",
    title: "A structured workflow for ban appeals",
    description:
      "Appeals follow the same review pattern as applications and reports, so your moderation team has one consistent process instead of three different ones.",
    bullets: [
      "Every appeal submission with its current status",
      "Staff review and final decision, recorded",
      "Reviewer information and activity history",
      "A clear paper trail if a decision is ever questioned",
    ],
    frameTitle: "guilddesk.app/admin/appeals",
    mockup: <AppealsMockup />,
  },
  {
    eyebrow: "Staff",
    title: "Accountability and visibility for your staff team",
    description:
      "See who's active, who's carrying the workload, and what's been done — without automating the actual decisions. Staff still make every call; the dashboard just makes their work visible.",
    bullets: [
      "Staff activity and current workload",
      "What each staff member has claimed and resolved",
      "\"Last reviewed by\" on every item",
      "A full activity history, not just the latest action",
    ],
    frameTitle: "guilddesk.app/admin/staff",
    mockup: (
      <div className="space-y-6">
        <StaffMockup />
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-subtle)]">
            Recent activity
          </p>
          <ActivityMockup />
        </div>
      </div>
    ),
  },
];

export function FeatureShowcase() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="What it does"
            title="Everything your staff team needs, in one place"
            description="One dashboard for the four things that usually live scattered across Discord channels, DMs, and spreadsheets."
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-24">
          {features.map((feature, index) => (
            <Reveal key={feature.title}>
              <div
                className={`flex flex-col items-center gap-10 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-2/5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-soft)]">
                    {feature.eyebrow}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[var(--color-text-muted)]">{feature.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-[var(--color-text-muted)]">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-soft)]"
                          aria-hidden
                        >
                          <path
                            d="M4 10.5l3.5 3.5L16 6"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full lg:w-3/5">
                  <BrowserFrame title={feature.frameTitle}>{feature.mockup}</BrowserFrame>
                  <DemoDataNote className="mt-3" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
