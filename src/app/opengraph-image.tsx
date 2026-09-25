import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0D10",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              backgroundColor: "#7CFF6B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0B0D10",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            N
          </div>
          <div style={{ color: "#FFFFFF", fontSize: 40, fontWeight: 700 }}>
            {siteConfig.name}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Build the future with {siteConfig.name}.
          </div>
          <div style={{ color: "#7CFF6B", fontSize: 36, fontWeight: 600 }}>
            {siteConfig.tagline}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
