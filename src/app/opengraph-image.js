import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Piyush Funde – Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0b0f1a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(177,254,77,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(177,254,77,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Corner brackets */}
        <div style={{ position: "absolute", top: 32, left: 32, width: 24, height: 24, borderTop: "2px solid rgba(255,255,255,0.3)", borderLeft: "2px solid rgba(255,255,255,0.3)", display: "flex" }} />
        <div style={{ position: "absolute", top: 32, right: 32, width: 24, height: 24, borderTop: "2px solid rgba(255,255,255,0.3)", borderRight: "2px solid rgba(255,255,255,0.3)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 32, left: 32, width: 24, height: 24, borderBottom: "2px solid rgba(255,255,255,0.3)", borderLeft: "2px solid rgba(255,255,255,0.3)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 32, right: 32, width: 24, height: 24, borderBottom: "2px solid rgba(255,255,255,0.3)", borderRight: "2px solid rgba(255,255,255,0.3)", display: "flex" }} />

        {/* Accent line */}
        <div style={{ width: 64, height: 4, background: "#b1fe4d", borderRadius: 2, marginBottom: 48, display: "flex" }} />

        {/* Name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: 28,
            display: "flex",
          }}
        >
          Piyush Funde
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#b1fe4d",
            letterSpacing: "0.5px",
            display: "flex",
          }}
        >
          Product Manager · PM Portfolio
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            left: 100,
            fontSize: 18,
            color: "rgba(255,255,255,0.3)",
            display: "flex",
          }}
        >
          piyushfunde.com
        </div>
      </div>
    ),
    { ...size }
  );
}
