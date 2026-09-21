import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

// This static OG image is locale-agnostic (one image for all languages),
// so its copy is hardcoded English rather than pulled from messages/*.json.
const TAGLINE = "Discord Community Management, Simplified.";
const SUB_TAGLINE = "Manage applications, reports, appeals, and staff activity from one powerful dashboard.";

export const alt = `${siteConfig.productName} — ${TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0812",
          backgroundImage:
            "radial-gradient(ellipse 80% 80% at 50% 0%, #8b5cf655, transparent 70%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a78bfa",
            marginBottom: 24,
          }}
        >
          {siteConfig.productName}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            color: "#f5f3ff",
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          {TAGLINE}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#a89fc2",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {SUB_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  );
}
