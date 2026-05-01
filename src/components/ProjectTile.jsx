"use client";

const ACCENT = {
  social:       "#ff6b35",
  career:       "#7fd4ff",
  fintech:      "#c8ff4d",
  productivity: "#b794f6",
  "ai-tool":    "#fb7185",
};

const DEFAULT_ACCENT = "#c8ff4d";

// ─── Glyph library ───────────────────────────────────────────────────────────

function GlyphCompassMapPin({ accent, size = 280 }) {
  const c = size / 2;
  const r = [size * 0.42, size * 0.3, size * 0.18];
  return (
    <g>
      {r.map((radius, i) => (
        <circle key={i} cx={c} cy={c} r={radius}
          fill="none" stroke={accent} strokeWidth={i === 0 ? 1 : 1.5}
          opacity={i === 0 ? 0.3 : 0.55 + i * 0.15} />
      ))}
      {/* crosshair */}
      <line x1={c - size * 0.38} y1={c} x2={c + size * 0.38} y2={c} stroke={accent} strokeWidth={1} opacity={0.4} />
      <line x1={c} y1={c - size * 0.38} x2={c} y2={c + size * 0.38} stroke={accent} strokeWidth={1} opacity={0.4} />
      {/* offset dot — map pin */}
      <circle cx={c + size * 0.18} cy={c - size * 0.22} r={size * 0.045} fill={accent} opacity={0.9} />
      <circle cx={c + size * 0.18} cy={c - size * 0.22} r={size * 0.09} fill="none" stroke={accent} strokeWidth={1.5} opacity={0.5} />
    </g>
  );
}

function GlyphLadderChecklist({ accent, size = 280 }) {
  const rungs = 5;
  const x1 = size * 0.28, x2 = size * 0.72;
  const yStart = size * 0.75, yEnd = size * 0.12;
  const gap = (yStart - yEnd) / (rungs - 1);
  return (
    <g>
      <line x1={x1} y1={yStart + size * 0.04} x2={x1} y2={yEnd - size * 0.04} stroke={accent} strokeWidth={2.5} opacity={0.55} strokeLinecap="round" />
      <line x1={x2} y1={yStart + size * 0.04} x2={x2} y2={yEnd - size * 0.04} stroke={accent} strokeWidth={2.5} opacity={0.55} strokeLinecap="round" />
      {Array.from({ length: rungs }).map((_, i) => {
        const y = yStart - gap * i;
        const done = i < 3;
        return (
          <g key={i}>
            <line x1={x1} y1={y} x2={x2} y2={y} stroke={accent} strokeWidth={1.5} opacity={done ? 0.9 : 0.35} strokeLinecap="round" />
            {done && (
              <polyline
                points={`${x2 + size * 0.05},${y - size * 0.03} ${x2 + size * 0.1},${y + size * 0.02} ${x2 + size * 0.18},${y - size * 0.06}`}
                fill="none" stroke={accent} strokeWidth={2} opacity={0.85} strokeLinecap="round" strokeLinejoin="round"
              />
            )}
          </g>
        );
      })}
    </g>
  );
}

function GlyphWalletArrow({ accent, size = 280 }) {
  const rx = size * 0.12, ry = size * 0.08;
  const cx = size * 0.38, cy = size * 0.5;
  const w = size * 0.52, h = size * 0.38;
  const ax1 = size * 0.55, ay1 = size * 0.62, ax2 = size * 0.88, ay2 = size * 0.28;
  const hw = size * 0.07;
  return (
    <g>
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={rx} ry={ry}
        fill="none" stroke={accent} strokeWidth={2} opacity={0.7} />
      <rect x={cx + w * 0.1} y={cy - h * 0.22} width={w * 0.22} height={h * 0.44} rx={rx * 0.5}
        fill={accent} opacity={0.25} />
      {/* diagonal arrow */}
      <line x1={ax1} y1={ay1} x2={ax2} y2={ay2} stroke={accent} strokeWidth={2.5} opacity={0.9} strokeLinecap="round" />
      <polyline
        points={`${ax2 - hw},${ay2} ${ax2},${ay2} ${ax2},${ay2 + hw}`}
        fill="none" stroke={accent} strokeWidth={2.5} opacity={0.9} strokeLinecap="round" strokeLinejoin="round"
      />
    </g>
  );
}

function GlyphBotSpark({ accent, size = 280 }) {
  const c = size / 2;
  const R = size * 0.26;
  const sides = 6;
  const pts = Array.from({ length: sides }).map((_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${c + R * Math.cos(a)},${c + R * Math.sin(a)}`;
  }).join(" ");
  const rays = [0, 90, 180, 270];
  return (
    <g>
      <polygon points={pts} fill="none" stroke={accent} strokeWidth={2} opacity={0.75} />
      <polygon points={pts} fill={accent} opacity={0.08} />
      {rays.map((deg, i) => {
        const a = (deg * Math.PI) / 180;
        const r1 = R + size * 0.06, r2 = R + size * 0.22;
        return (
          <line key={i}
            x1={c + r1 * Math.cos(a)} y1={c + r1 * Math.sin(a)}
            x2={c + r2 * Math.cos(a)} y2={c + r2 * Math.sin(a)}
            stroke={accent} strokeWidth={2} opacity={0.7} strokeLinecap="round"
          />
        );
      })}
      <circle cx={c} cy={c} r={size * 0.07} fill={accent} opacity={0.9} />
    </g>
  );
}

function GlyphDefault({ accent, size = 280 }) {
  const cx = size / 2, cy = size / 2, r = size * 0.24;
  const offsets = [{ dx: -r * 0.55, dy: 0 }, { dx: r * 0.55, dy: 0 }, { dx: 0, dy: -r * 0.5 }];
  return (
    <g>
      {offsets.map((o, i) => (
        <circle key={i} cx={cx + o.dx} cy={cy + o.dy} r={r}
          fill={i === 2 ? accent : "none"} fillOpacity={0.15}
          stroke={accent} strokeWidth={i === 0 ? 1 : 2}
          opacity={i === 2 ? 0.9 : 0.55}
        />
      ))}
    </g>
  );
}

const GLYPHS = {
  "compass+map-pin": GlyphCompassMapPin,
  "ladder+checklist": GlyphLadderChecklist,
  "wallet+arrow": GlyphWalletArrow,
  "bot+spark": GlyphBotSpark,
  default: GlyphDefault,
};

function getGlyph(primaryIcon) {
  return GLYPHS[primaryIcon] || GLYPHS.default;
}

// ─── Corner ticks ─────────────────────────────────────────────────────────────

function CornerTicks({ w, h, len = 12, opacity = 0.2 }) {
  const s = `rgba(255,255,255,${opacity})`;
  const t = 1;
  const corners = [
    // top-left
    [[[0, len], [0, 0], [len, 0]]],
    // top-right
    [[[w - len, 0], [w, 0], [w, len]]],
    // bottom-left
    [[[0, h - len], [0, h], [len, h]]],
    // bottom-right
    [[[w - len, h], [w, h], [w, h - len]]],
  ];
  return (
    <>
      {corners.map((corner, i) => (
        <polyline key={i}
          points={corner[0].map(([x, y]) => `${x},${y}`).join(" ")}
          fill="none" stroke={s} strokeWidth={t}
        />
      ))}
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ProjectTile({ project, mode = "card", className = "" }) {
  const tile = project.tile || {};
  const accent = ACCENT[tile.category] || DEFAULT_ACCENT;
  const GlyphComp = getGlyph(tile.primaryIcon);

  const isOG = mode === "og";
  const W = isOG ? 1200 : 800;
  const H = isOG ? 630 : 500;
  const glyphSize = isOG ? 420 : 280;
  const titleSize = isOG ? 80 : 56;
  const padding = isOG ? 64 : 40;

  const filterId = `noise-${project.slug}`;
  const gradId = `grad-${project.slug}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-label={`${project.title} project tile`}
    >
      <defs>
        <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
        <radialGradient id={gradId} cx="15%" cy="15%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.12" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Base */}
      <rect width={W} height={H} fill="#0b0f1a" />

      {/* Noise texture */}
      <rect width={W} height={H} fill="#0b0f1a" filter={`url(#${filterId})`} opacity={0.04} />

      {/* Accent radial gradient */}
      <rect width={W} height={H} fill={`url(#${gradId})`} />

      {/* 12-col grid lines */}
      {Array.from({ length: 11 }).map((_, i) => {
        const x = (W / 12) * (i + 1);
        return <line key={i} x1={x} y1={0} x2={x} y2={H} stroke="rgba(255,255,255,0.03)" strokeWidth={1} />;
      })}
      {/* horizontal grid lines */}
      {Array.from({ length: 5 }).map((_, i) => {
        const y = (H / 6) * (i + 1);
        return <line key={i} x1={0} y1={y} x2={W} y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth={1} />;
      })}

      {/* Glyph — left 45% of tile, vertically centered */}
      <g transform={`translate(${W * 0.225 - glyphSize / 2}, ${H / 2 - glyphSize / 2})`} opacity={0.9}>
        <GlyphComp accent={accent} size={glyphSize} />
      </g>

      {/* Category chip — top right */}
      <rect
        x={W - padding - 110} y={padding - 4}
        width={110} height={24} rx={12}
        fill={accent} fillOpacity={0.12}
      />
      <text
        x={W - padding - 55} y={padding + 12}
        textAnchor="middle" dominantBaseline="middle"
        fontFamily="system-ui, sans-serif" fontSize={10}
        fontWeight="700" letterSpacing="0.12em"
        fill={accent} fillOpacity={0.9}
        style={{ textTransform: "uppercase" }}
      >
        {(tile.category || "product").replace("-", " ")}
      </text>

      {/* Title — bottom left */}
      <text
        x={padding} y={H - padding}
        fontFamily="system-ui, sans-serif"
        fontSize={titleSize} fontWeight="800"
        fill="white" fillOpacity={0.95}
        letterSpacing="-0.03em"
      >
        {project.title}
      </text>

      {/* One-liner below title */}
      <text
        x={padding} y={H - padding + titleSize * 0.55}
        fontFamily="system-ui, sans-serif"
        fontSize={titleSize * 0.28} fontWeight="400"
        fill="white" fillOpacity={0.45}
        letterSpacing="0"
      >
        {project.subtitle || ""}
      </text>

      {/* Corner ticks */}
      <CornerTicks w={W} h={H} />
    </svg>
  );
}
