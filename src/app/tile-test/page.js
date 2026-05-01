import ProjectTile from "@/components/ProjectTile";

const SAMPLES = [
  { slug: "tripsync", title: "TripSync", subtitle: "One link to plan any group trip.", tile: { category: "social", primaryIcon: "compass+map-pin" } },
  { slug: "pmpath",   title: "PMpath",   subtitle: "Your PM readiness journey starts here.", tile: { category: "career", primaryIcon: "ladder+checklist" } },
  { slug: "dealpilot",title: "DealPilot",subtitle: "The CRM that works while the founder sells.", tile: { category: "fintech", primaryIcon: "wallet+arrow" } },
  { slug: "ai-tool-sample", title: "AI Tool", subtitle: "Sample ai-tool category.", tile: { category: "ai-tool", primaryIcon: "bot+spark" } },
];

export default function TileTestPage() {
  return (
    <div style={{ background: "#05080f", minHeight: "100vh", padding: "48px 32px" }}>
      <p style={{ color: "rgba(255,255,255,0.3)", fontFamily: "monospace", fontSize: 12, marginBottom: 32 }}>
        /tile-test — throwaway preview page, safe to delete
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 24 }}>
        {SAMPLES.map((p) => (
          <div key={p.slug} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
            <ProjectTile project={p} />
            <div style={{ background: "#0d1120", padding: "10px 14px", fontFamily: "monospace", fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
              {p.tile.category} · {p.tile.primaryIcon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
