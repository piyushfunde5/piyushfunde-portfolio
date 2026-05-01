'use client';
import { useEffect, useRef } from 'react';

const COLS = 7;
const ROWS = 7;
const COUNT = COLS * ROWS;

function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

function lerpRgb([r1, g1, b1], [r2, g2, b2], t) {
  return `rgb(${Math.round(r1 + (r2 - r1) * t)},${Math.round(g1 + (g2 - g1) * t)},${Math.round(b1 + (b2 - b1) * t)})`;
}

export default function ChaosToSystems({
  chaosColor = '#ff6b35',
  systemColor = '#b1fe4d',
  systemized = false,
}) {
  const canvasRef = useRef(null);
  const systemizedRef = useRef(systemized);
  const colorTRef = useRef(systemized ? 1 : 0);
  const tickRafRef = useRef(null);

  useEffect(() => {
    systemizedRef.current = systemized;
  }, [systemized]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let started = false;
    let initRaf;

    const startAnimation = (SIZE) => {
      if (started || SIZE <= 0) return;
      started = true;

      try {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = SIZE * dpr;
        canvas.height = SIZE * dpr;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.scale(dpr, dpr);

        const W = SIZE;
        const H = SIZE;
        const pad = Math.round(W * 0.12);
        const stepX = (W - pad * 2) / (COLS - 1);
        const stepY = (H - pad * 2) / (ROWS - 1);

        const particles = Array.from({ length: COUNT }, (_, i) => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: 5 + Math.random() * 7,
          targetX: pad + (i % COLS) * stepX,
          targetY: pad + Math.floor(i / COLS) * stepY,
          targetSize: 7,
        }));

        const chaosRgb = hexToRgb(chaosColor);
        const systemRgb = hexToRgb(systemColor);
        let prevSys = systemizedRef.current;

        const tick = () => {
          const sys = systemizedRef.current;

          if (prevSys && !sys) {
            particles.forEach(p => {
              p.vx = (Math.random() - 0.5) * 6;
              p.vy = (Math.random() - 0.5) * 6;
              p.size = 5 + Math.random() * 7;
            });
          }
          prevSys = sys;

          colorTRef.current += ((sys ? 1 : 0) - colorTRef.current) * 0.04;
          const fillColor = lerpRgb(chaosRgb, systemRgb, colorTRef.current);

          ctx.clearRect(0, 0, W, H);

          particles.forEach(p => {
            if (sys) {
              p.x += (p.targetX - p.x) * 0.055;
              p.y += (p.targetY - p.y) * 0.055;
              p.size += (p.targetSize - p.size) * 0.055;
            } else {
              p.x += p.vx;
              p.y += p.vy;
              if (p.x < p.size / 2) { p.vx = Math.abs(p.vx); p.x = p.size / 2; }
              else if (p.x > W - p.size / 2) { p.vx = -Math.abs(p.vx); p.x = W - p.size / 2; }
              if (p.y < p.size / 2) { p.vy = Math.abs(p.vy); p.y = p.size / 2; }
              else if (p.y > H - p.size / 2) { p.vy = -Math.abs(p.vy); p.y = H - p.size / 2; }
              p.vx += (Math.random() - 0.5) * 0.1;
              p.vy += (Math.random() - 0.5) * 0.1;
              const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
              if (spd > 1.8) { p.vx = (p.vx / spd) * 1.8; p.vy = (p.vy / spd) * 1.8; }
            }

            ctx.fillStyle = fillColor;
            ctx.globalAlpha = 0.88;
            const s = Math.max(2, p.size);
            ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s);
          });

          ctx.globalAlpha = 1;
          tickRafRef.current = requestAnimationFrame(tick);
        };

        tick();
      } catch (err) {
        // Swallow canvas errors — don't let them crash React
      }
    };

    // Retry via RAF until the canvas has a real rendered size
    // (getBoundingClientRect is reliable once layout is complete)
    const tryInit = () => {
      const rect = canvas.getBoundingClientRect();
      const SIZE = Math.round(rect.width);
      if (SIZE > 0) {
        startAnimation(SIZE);
      } else {
        initRaf = requestAnimationFrame(tryInit);
      }
    };

    initRaf = requestAnimationFrame(tryInit);

    return () => {
      cancelAnimationFrame(initRaf);
      cancelAnimationFrame(tickRafRef.current);
    };
  }, [chaosColor, systemColor]);

  // Canvas fills parent via CSS — parent must be a sized square
  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}
