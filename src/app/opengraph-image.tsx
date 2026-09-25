import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #FFFFFF 0%, #F7F8F6 70%, #DFFFD8 100%)",
          color: "#0B0D10",
          padding: "60px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "9999px",
                background: "#2F22FF",
              }}
            />
            <div
              style={{
                width: "34px",
                height: "92px",
                borderRadius: "9999px",
                background: "#2F22FF",
                transform: "rotate(30deg)",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "56px", letterSpacing: "-0.04em", fontWeight: 500 }}>NEXUS</div>
            <div style={{ fontSize: "18px", color: "#47515C" }}>Build. Connect. Access. Grow.</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "840px" }}>
          <div style={{ fontSize: "68px", lineHeight: 1.05, fontWeight: 700 }}>Build the future with NEXUS.</div>
          <div style={{ fontSize: "28px", lineHeight: 1.4, color: "#49515D" }}>
            Software solutions, AI access, developer community and opportunities—all connected in one ecosystem.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
