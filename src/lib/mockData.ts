/**
 * Entirely fictional demo data used to render dashboard mockups on the
 * marketing site. No real applications, reports, users, or communities.
 */

export type MockStatus =
  | "pending"
  | "reviewing"
  | "needs_info"
  | "accepted"
  | "rejected"
  | "resolved"
  | "dismissed"
  | "approved"
  | "denied";

export const mockApplications = [
  {
    id: "APP-2481",
    applicant: "rowan.exe",
    status: "pending" as MockStatus,
    submitted: "2 hours ago",
    age: 19,
    timezone: "GMT+1",
    weeklyHours: 12,
    experience: "Moderated a 4k-member Minecraft server for 8 months.",
    claimedBy: null as string | null,
  },
  {
    id: "APP-2477",
    applicant: "kestrel_ttv",
    status: "reviewing" as MockStatus,
    submitted: "6 hours ago",
    age: 22,
    timezone: "GMT-5",
    weeklyHours: 18,
    experience: "Currently a helper on a FiveM roleplay community.",
    claimedBy: "Staff — Priya",
  },
  {
    id: "APP-2469",
    applicant: "vantablack",
    status: "needs_info" as MockStatus,
    submitted: "1 day ago",
    age: 26,
    timezone: "GMT+8",
    weeklyHours: 10,
    experience: "No prior moderation experience, strong activity history.",
    claimedBy: "Staff — Dae",
  },
  {
    id: "APP-2451",
    applicant: "juniper.codes",
    status: "accepted" as MockStatus,
    submitted: "3 days ago",
    age: 24,
    timezone: "GMT-8",
    weeklyHours: 15,
    experience: "2 years as a Discord community moderator.",
    claimedBy: "Staff — Priya",
  },
  {
    id: "APP-2440",
    applicant: "orbit.mp4",
    status: "rejected" as MockStatus,
    submitted: "5 days ago",
    age: 17,
    timezone: "GMT+2",
    weeklyHours: 6,
    experience: "New to the server, limited availability.",
    claimedBy: "Staff — Dae",
  },
] as const;

export const mockReports = [
  {
    id: "RPT-1103",
    reportedUser: "shadow_wolf22",
    reporter: "member4821",
    category: "Harassment",
    status: "pending" as MockStatus,
    priority: "High",
    submitted: "38 minutes ago",
    assignedTo: null as string | null,
    summary: "Repeated targeted messages in the roleplay-general channel.",
  },
  {
    id: "RPT-1098",
    reportedUser: "nightcrawler",
    reporter: "cassidy_j",
    category: "Spam / Advertising",
    status: "reviewing" as MockStatus,
    priority: "Medium",
    submitted: "3 hours ago",
    assignedTo: "Staff — Marco",
    summary: "Posted invite links to an unrelated server across 3 channels.",
  },
  {
    id: "RPT-1091",
    reportedUser: "glitchcore",
    reporter: "anon (verified)",
    category: "Exploiting",
    status: "reviewing" as MockStatus,
    priority: "High",
    submitted: "yesterday",
    assignedTo: "Staff — Priya",
    summary: "Suspected use of a third-party tool to bypass vehicle limits.",
  },
  {
    id: "RPT-1084",
    reportedUser: "echo_delta",
    reporter: "member1190",
    category: "Impersonation",
    status: "resolved" as MockStatus,
    priority: "Low",
    submitted: "2 days ago",
    assignedTo: "Staff — Marco",
    summary: "Username styled to impersonate a staff member. Resolved with a warning.",
  },
  {
    id: "RPT-1077",
    reportedUser: "n/a",
    reporter: "member9002",
    category: "Other",
    status: "dismissed" as MockStatus,
    priority: "Low",
    submitted: "4 days ago",
    assignedTo: "Staff — Dae",
    summary: "No rule violation found after review.",
  },
] as const;

export const mockAppeals = [
  {
    id: "APL-330",
    appellant: "frostbyte99",
    banReason: "Repeated rule violations (harassment)",
    status: "pending" as MockStatus,
    submitted: "5 hours ago",
    reviewer: null as string | null,
  },
  {
    id: "APL-327",
    appellant: "static_hum",
    banReason: "Exploiting / cheating",
    status: "reviewing" as MockStatus,
    submitted: "1 day ago",
    reviewer: "Staff — Marco",
  },
  {
    id: "APL-319",
    appellant: "windrunner",
    banReason: "Spam / advertising",
    status: "approved" as MockStatus,
    submitted: "3 days ago",
    reviewer: "Staff — Priya",
  },
  {
    id: "APL-312",
    appellant: "obsidian_fx",
    banReason: "Harassment of staff",
    status: "denied" as MockStatus,
    submitted: "6 days ago",
    reviewer: "Staff — Dae",
  },
] as const;

export const mockStaff = [
  { name: "Priya", role: "Admin", claimed: 4, resolvedThisWeek: 21, lastActive: "12 minutes ago" },
  { name: "Marco", role: "Senior Staff", claimed: 3, resolvedThisWeek: 17, lastActive: "1 hour ago" },
  { name: "Dae", role: "Staff", claimed: 2, resolvedThisWeek: 14, lastActive: "3 hours ago" },
  { name: "Sable", role: "Staff", claimed: 1, resolvedThisWeek: 9, lastActive: "yesterday" },
] as const;

export const mockActivity = [
  { actor: "Priya", detail: "Accepted application APP-2451", time: "18 minutes ago" },
  { actor: "Marco", detail: "Assigned report RPT-1098 to themselves", time: "42 minutes ago" },
  { actor: "Dae", detail: "Requested more info on APP-2469", time: "1 hour ago" },
  { actor: "Priya", detail: "Approved ban appeal APL-319", time: "3 hours ago" },
  { actor: "Sable", detail: "Added a note to RPT-1091", time: "5 hours ago" },
  { actor: "Marco", detail: "Resolved report RPT-1084", time: "yesterday" },
] as const;

export const mockStats = {
  pendingApplications: 12,
  openReports: 7,
  openAppeals: 4,
  applicationsProcessed30d: 86,
  reportsResolved30d: 54,
  avgResolutionTime: "5.4 hrs",
  activeStaff: 4,
};

export const mockStatusBreakdown = [
  { status: "pending" as MockStatus, value: 12, percent: 24 },
  { status: "reviewing" as MockStatus, value: 18, percent: 36 },
  { status: "needs_info" as MockStatus, value: 6, percent: 12 },
  { status: "accepted" as MockStatus, value: 10, percent: 20 },
  { status: "rejected" as MockStatus, value: 4, percent: 8 },
] as const;
