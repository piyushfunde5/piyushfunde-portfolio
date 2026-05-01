'use client';
import { useState, useEffect, useRef } from 'react';

function ParticleCanvas({ systemized }) {
  const canvasRef = useRef(null);
  const systemizedRef = useRef(systemized);
  const colorTRef = useRef(systemized ? 1 : 0);

  useEffect(() => {
    systemizedRef.current = systemized;
  }, [systemized]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const COLS = 7, ROWS = 7, COUNT = COLS * ROWS;
    const hexToRgb = (hex) => [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)];
    const lerpRgb = ([r1,g1,b1],[r2,g2,b2],t) => `rgb(${Math.round(r1+(r2-r1)*t)},${Math.round(g1+(g2-g1)*t)},${Math.round(b1+(b2-b1)*t)})`;

    let tickRaf, initRaf, started = false;

    const start = (SIZE) => {
      if (started || SIZE <= 0) return;
      started = true;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = SIZE * dpr;
      canvas.height = SIZE * dpr;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      const W = SIZE, H = SIZE;
      const pad = Math.round(W * 0.12);
      const stepX = (W - pad * 2) / (COLS - 1);
      const stepY = (H - pad * 2) / (ROWS - 1);
      const particles = Array.from({ length: COUNT }, (_, i) => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-0.5)*2, vy: (Math.random()-0.5)*2,
        size: 5+Math.random()*7,
        targetX: pad+(i%COLS)*stepX, targetY: pad+Math.floor(i/COLS)*stepY,
        targetSize: 7,
      }));
      const chaosRgb = hexToRgb('#ff6b35'), systemRgb = hexToRgb('#b1fe4d');
      let prevSys = systemizedRef.current;
      const tick = () => {
        const sys = systemizedRef.current;
        if (prevSys && !sys) particles.forEach(p => { p.vx=(Math.random()-0.5)*6; p.vy=(Math.random()-0.5)*6; p.size=5+Math.random()*7; });
        prevSys = sys;
        colorTRef.current += ((sys?1:0) - colorTRef.current) * 0.04;
        const fill = lerpRgb(chaosRgb, systemRgb, colorTRef.current);
        ctx.clearRect(0,0,W,H);
        particles.forEach(p => {
          if (sys) {
            p.x+=(p.targetX-p.x)*0.055; p.y+=(p.targetY-p.y)*0.055; p.size+=(p.targetSize-p.size)*0.055;
          } else {
            p.x+=p.vx; p.y+=p.vy;
            if (p.x<p.size/2){p.vx=Math.abs(p.vx);p.x=p.size/2;} else if(p.x>W-p.size/2){p.vx=-Math.abs(p.vx);p.x=W-p.size/2;}
            if (p.y<p.size/2){p.vy=Math.abs(p.vy);p.y=p.size/2;} else if(p.y>H-p.size/2){p.vy=-Math.abs(p.vy);p.y=H-p.size/2;}
            p.vx+=(Math.random()-0.5)*0.1; p.vy+=(Math.random()-0.5)*0.1;
            const spd=Math.sqrt(p.vx*p.vx+p.vy*p.vy); if(spd>1.8){p.vx=(p.vx/spd)*1.8;p.vy=(p.vy/spd)*1.8;}
          }
          ctx.fillStyle=fill; ctx.globalAlpha=0.88;
          const s=Math.max(2,p.size); ctx.fillRect(p.x-s/2,p.y-s/2,s,s);
        });
        ctx.globalAlpha=1;
        tickRaf=requestAnimationFrame(tick);
      };
      tick();
    };

    const tryStart = () => {
      const r = canvas.getBoundingClientRect();
      if (r.width > 0) start(Math.round(r.width));
      else initRaf = requestAnimationFrame(tryStart);
    };
    initRaf = requestAnimationFrame(tryStart);
    return () => { cancelAnimationFrame(initRaf); cancelAnimationFrame(tickRaf); };
  }, []);

  return <canvas ref={canvasRef} style={{ width:'100%', height:'100%', display:'block' }} />;
}

export default function Hero() {
  const [systemized, setSystemized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Gate canvas on client mount only (avoids SSR window access)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    let cancelled = false;
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));
    const loop = async () => {
      await wait(1800);
      while (!cancelled) {
        if (!cancelled) setSystemized(true);
        await wait(2800);
        if (!cancelled) setSystemized(false);
        await wait(1600);
      }
    };
    loop();
    return () => { cancelled = true; };
  }, [isMounted]);

  return (
    <>
      {/* ── MOBILE: text + canvas stacked ── */}
      <section className="lg:hidden min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-[var(--color-primary)] text-xs uppercase tracking-widest bg-[var(--color-primary)]/10 px-3 py-1 rounded-[4px]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse-lime" />
            Currently open to Product Roles
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-slate-50 leading-none font-[family-name:var(--font-manrope)]">
            Piyush Funde
          </h1>
          <p className="text-3xl md:text-5xl font-bold text-[var(--color-on-surface)] tracking-tight max-w-4xl font-[family-name:var(--font-manrope)]">
            I turn{' '}
            <span style={{ color: systemized ? 'var(--color-on-surface)' : '#ff6b35', fontStyle: 'italic', transition: 'color 0.6s ease' }}>
              chaos
            </span>
            {' '}into{' '}
            <span style={{ color: systemized ? 'var(--color-primary)' : 'var(--color-on-surface)', fontStyle: 'italic', transition: 'color 0.6s ease' }}>
              systems
            </span>
            {' '}that scale.
          </p>
          <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-2xl leading-relaxed">
            Product Manager who prototypes solutions, not just plans them.
          </p>
        </div>
        <div style={{ aspectRatio: '1/1' }} className="w-full max-w-xs mx-auto mt-10">
          {isMounted && <ParticleCanvas systemized={systemized} />}
        </div>
      </section>

      {/* ── DESKTOP: 2-column layout with particle animation ── */}
      <section className="hidden lg:flex min-h-screen items-center px-8 pb-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 text-[var(--color-primary)] text-xs uppercase tracking-widest bg-[var(--color-primary)]/10 px-3 py-1 rounded-[4px] self-start">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse-lime" />
                Currently open to Product Roles
              </span>
              <h1 className="text-9xl font-extrabold tracking-tighter text-slate-50 leading-none font-[family-name:var(--font-manrope)]">
                Piyush Funde
              </h1>
              <p className="text-6xl font-bold text-[var(--color-on-surface)] tracking-tight font-[family-name:var(--font-manrope)]">
                I turn{' '}
                <span style={{ color: systemized ? 'var(--color-on-surface)' : '#ff6b35', fontStyle:'italic', transition:'color 0.6s ease' }}>
                  chaos
                </span>
                {' '}into{' '}
                <span style={{ color: systemized ? 'var(--color-primary)' : 'var(--color-on-surface)', fontStyle:'italic', transition:'color 0.6s ease' }}>
                  systems
                </span>
                {' '}that scale.
              </p>
              <p className="text-2xl text-[var(--color-on-surface-variant)] max-w-2xl leading-relaxed">
                Product Manager who prototypes solutions, not just plans them.
              </p>
            </div>
            <div style={{ maxWidth:'520px', aspectRatio:'1/1' }} className="ml-auto w-full">
              {isMounted && <ParticleCanvas systemized={systemized} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
