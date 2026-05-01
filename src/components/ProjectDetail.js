"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";

const AUTO_PLAY_INTERVAL = 7000;
const RESUME_DELAY = 6000;
const FADE_DURATION = 500;

function PhoneFrame({ src, alt, onRatioDetected }) {
  return (
    <div style={{
      position: "relative",
      borderRadius: "40px",
      border: "12px solid #0d0d0d",
      boxShadow: "0 0 0 1px #2a2a2a, 0 32px 80px rgba(0,0,0,0.75)",
      overflow: "hidden",
      maxHeight: "480px",
      aspectRatio: "9/19",
      background: "#000",
      flexShrink: 0,
    }}>
      <div style={{
        position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)",
        width: "56px", height: "6px", borderRadius: "3px", background: "#0d0d0d", zIndex: 10,
      }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt}
        onLoad={(e) => onRatioDetected(e.target.naturalWidth / e.target.naturalHeight)}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

function BrowserFrame({ src, alt, onRatioDetected }) {
  return (
    <div style={{
      borderRadius: "12px",
      border: "2px solid rgba(255,255,255,0.08)",
      boxShadow: "0 32px 80px rgba(0,0,0,0.75)",
      overflow: "hidden",
      background: "#0d0f1a",
      width: "100%",
    }}>
      <div style={{
        background: "#1a1d2e", padding: "10px 14px",
        display: "flex", alignItems: "center", gap: "6px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", flexShrink: 0 }} />
        <div style={{
          flex: 1, marginLeft: 8, background: "#0d0f1a", borderRadius: 20,
          padding: "3px 14px", fontSize: 11, color: "rgba(255,255,255,0.3)",
          border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>
          app.tripsync.com
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt}
        onLoad={(e) => onRatioDetected(e.target.naturalWidth / e.target.naturalHeight)}
        style={{ width: "100%", display: "block", maxHeight: "420px", objectFit: "cover" }}
      />
    </div>
  );
}

function TabletFrame({ src, alt, onRatioDetected }) {
  return (
    <div style={{
      borderRadius: "20px",
      border: "2px solid rgba(255,255,255,0.07)",
      boxShadow: "0 32px 80px rgba(0,0,0,0.65)",
      overflow: "hidden",
      width: "100%",
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt}
        onLoad={(e) => onRatioDetected(e.target.naturalWidth / e.target.naturalHeight)}
        style={{ width: "100%", display: "block", maxHeight: "460px", objectFit: "contain" }}
      />
    </div>
  );
}

function DeviceFrame({ src, alt, deviceType, onRatioDetected }) {
  const props = { src, alt, onRatioDetected };
  if (deviceType === "desktop") return <BrowserFrame {...props} />;
  if (deviceType === "tablet") return <TabletFrame {...props} />;
  return <PhoneFrame {...props} />;
}

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [ratios, setRatios] = useState({});
  const autoPlayRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const currentRef = useRef(0);
  const startAutoPlayRef = useRef(null);

  const getDeviceType = (index) => {
    const r = ratios[index];
    if (!r || r < 0.7) return "mobile";
    if (r > 1.3) return "desktop";
    return "tablet";
  };

  const goTo = useCallback((index, userAction = false) => {
    const next = ((index % images.length) + images.length) % images.length;
    clearTimeout(fadeTimerRef.current);
    setFading(true);
    fadeTimerRef.current = setTimeout(() => {
      setCurrent(next);
      currentRef.current = next;
      setFading(false);
    }, FADE_DURATION);
    if (userAction) {
      clearInterval(autoPlayRef.current);
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => startAutoPlayRef.current?.(), RESUME_DELAY);
    }
  }, [images.length]);

  const startAutoPlay = useCallback(() => {
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      goTo(currentRef.current + 1);
    }, AUTO_PLAY_INTERVAL);
  }, [goTo]);

  useEffect(() => { startAutoPlayRef.current = startAutoPlay; }, [startAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      clearInterval(autoPlayRef.current);
      clearTimeout(resumeTimerRef.current);
      clearTimeout(fadeTimerRef.current);
    };
  }, [startAutoPlay]);

  const slide = images[current];
  const deviceType = getDeviceType(current);

  return (
    <section className="relative mb-24 rounded-xl overflow-hidden" style={{ minHeight: "520px" }}>

      {/* Blurred backdrop — desktop only */}
      <div className="absolute inset-0 hidden md:block" style={{ zIndex: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={slide.src} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "blur(80px) brightness(0.45)",
            opacity: fading ? 0 : 0.3,
            transform: "scale(1.15)",
            transition: "opacity 500ms ease",
          }}
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(12,18,48,0.4) 0%, rgba(4,7,20,0.93) 72%)" }} />
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.014) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }} />
      </div>
      {/* Solid bg on mobile */}
      <div className="absolute inset-0 bg-[var(--color-surface-container-low)] md:hidden" style={{ zIndex: 0 }} />

      {/* 2-col layout */}
      <div
        className="relative flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-12 p-6 md:p-12 items-center"
        style={{ zIndex: 1, minHeight: "520px" }}
      >
        {/* Left 40% — device frame */}
        <div className="md:col-span-2 flex justify-center items-center w-full" style={{ maxHeight: "500px" }}>
          <DeviceFrame
            src={slide.src}
            alt={slide.caption || `Screen ${current + 1}`}
            deviceType={deviceType}
            onRatioDetected={(ratio) => setRatios((prev) => ({ ...prev, [current]: ratio }))}
          />
        </div>

        {/* Right 60% — per-slide text */}
        <div
          className="md:col-span-3 flex flex-col justify-center"
          style={{ opacity: fading ? 0 : 1, transition: "opacity 300ms ease" }}
        >
          {slide.label && (
            <span className="text-[var(--color-primary)] text-xs uppercase tracking-[0.25em] font-bold mb-5 block">
              {slide.label}
            </span>
          )}
          {slide.description && (
            <p className="text-xl md:text-2xl text-slate-100 leading-relaxed mb-8 font-light">
              {slide.description}
            </p>
          )}
          {slide.bullets?.length > 0 && (
            <ul className="space-y-4">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--color-on-surface-variant)]">
                  <span className="text-[var(--color-primary)] flex-shrink-0 mt-0.5 font-bold">→</span>
                  <span className="leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="relative flex justify-center items-center gap-2 pb-8 pt-2" style={{ zIndex: 1 }}>
        <button
          onClick={() => goTo(current - 1, true)}
          className="bg-[var(--color-surface)]/70 p-2 rounded-full text-[var(--color-on-surface)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-all"
          aria-label="Previous slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, true)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 20 : 8,
              height: 8,
              background: i === current ? "var(--color-primary)" : "rgba(255,255,255,0.22)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
        <button
          onClick={() => goTo(current + 1, true)}
          className="bg-[var(--color-surface)]/70 p-2 rounded-full text-[var(--color-on-surface)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-all"
          aria-label="Next slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
    </section>
  );
}

function CarouselPlaceholder({ title }) {
  const slides = [
    `${title} — Dashboard`,
    `${title} — Mobile View`,
    `${title} — Key Flow`,
  ];
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const autoPlayRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const isPausedRef = useRef(false);

  const scrollTo = useCallback(
    (index) => {
      const next = ((index % slides.length) + slides.length) % slides.length;
      setCurrent(next);
      if (scrollRef.current) {
        const width = scrollRef.current.offsetWidth;
        scrollRef.current.scrollTo({ left: width * next, behavior: "smooth" });
      }
    },
    [slides.length]
  );

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    isPausedRef.current = false;
    autoPlayRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        if (scrollRef.current) {
          const width = scrollRef.current.offsetWidth;
          scrollRef.current.scrollTo({ left: width * next, behavior: "smooth" });
        }
        return next;
      });
    }, AUTO_PLAY_INTERVAL);
  }, [slides.length]);

  const pauseAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    isPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      startAutoPlay();
    }, RESUME_DELAY);
  }, [startAutoPlay]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [startAutoPlay]);

  const handleUserNav = (index) => {
    pauseAutoPlay();
    scrollTo(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const width = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex !== current) setCurrent(newIndex);
  };

  return (
    <section className="relative group mb-24 overflow-hidden rounded-xl bg-[var(--color-surface-container-low)] p-4">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4"
      >
        {slides.map((label, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full snap-center bg-[var(--color-surface-container-highest)] flex items-center justify-center h-[300px] md:h-[500px]"
          >
            <span className="text-[var(--color-on-surface-variant)]/30 text-xl font-semibold select-none">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Nav arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <button
          onClick={() => handleUserNav(current - 1)}
          className="bg-[var(--color-surface)]/80 p-3 rounded-full text-[var(--color-on-surface)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-all"
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          onClick={() => handleUserNav(current + 1)}
          className="bg-[var(--color-surface)]/80 p-3 rounded-full text-[var(--color-on-surface)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-all"
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleUserNav(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current
                ? "bg-[var(--color-primary)]"
                : "bg-[var(--color-surface-container-highest)]"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function ProjectDetail({ project, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors mb-12 group"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <span className="uppercase tracking-widest text-xs font-semibold">
          Back to all projects
        </span>
      </Link>

      {/* Hero Section */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-50 mb-6 leading-none font-[family-name:var(--font-manrope)]">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-on-surface-variant)] mb-8 max-w-2xl">
            {project.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-[var(--color-surface-container-highest)] text-[var(--color-on-surface-variant)] text-[10px] uppercase tracking-widest rounded-full border border-[var(--color-outline-variant)]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-bold tracking-tight rounded-[4px] hover:scale-105 transition-transform"
            >
              Try it live
            </a>
            <a
              href={project.prdUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[var(--color-primary)]/20 text-[var(--color-primary)] font-bold tracking-tight rounded-[4px] hover:bg-[var(--color-primary)]/10 transition-all"
            >
              Read the PRD
            </a>
          </div>

          {/* Project note */}
          {project.note && (
            <div className="mt-4 p-4 rounded-[4px] bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/20">
              <p className="text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                <span className="text-[var(--color-primary)] font-bold">Note —</span>{' '}
                {project.note.text}
                {project.note.linkUrl && (
                  <>
                    {' '}
                    <a href={project.note.linkUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline underline-offset-2 hover:opacity-80">
                      {project.note.linkLabel || 'Download here'}
                    </a>
                    {project.note.linkSuffix && <span>{project.note.linkSuffix}</span>}
                  </>
                )}
              </p>
            </div>
          )}
        </div>

        {/* Watermark number */}
        <div className="hidden lg:flex lg:col-span-4 justify-end">
          <span className="text-[12rem] font-extrabold text-[var(--color-surface-variant)]/40 leading-none select-none font-[family-name:var(--font-manrope)]">
            {number}
          </span>
        </div>
      </section>

      {/* Image Carousel */}
      {project.images?.length > 0
        ? <ImageCarousel images={project.images} />
        : <CarouselPlaceholder title={project.title} />
      }

      {/* Summary */}
      <section className="max-w-3xl mb-24">
        <p className="text-2xl md:text-3xl leading-relaxed text-slate-50 font-light">
          {project.summary}
        </p>
      </section>


      {/* Key Metrics */}
      <section className="mb-32">
        <div className="mb-12">
          <span className="text-[var(--color-primary)] text-xs uppercase tracking-[0.2em] font-bold">
            The Numbers
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-[var(--color-surface-container-low)] p-8 rounded-lg border-l-4 border-[var(--color-primary)]"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-slate-50 mb-2 font-[family-name:var(--font-manrope)]">
                {metric.value}
              </div>
              <div className="text-[var(--color-on-surface-variant)] text-sm leading-relaxed">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Sections */}
      <section className="max-w-[720px] mx-auto mb-32 space-y-20">
        {project.caseSections.map((section, i) => (
          <div key={i} className="space-y-6">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] font-[family-name:var(--font-manrope)]">
              {section.title}
            </h2>
            <p className="text-lg text-[var(--color-on-surface-variant)] leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}

        {/* Architecture layers */}
        {project.layers && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] font-[family-name:var(--font-manrope)]">
              The {project.layers.length}-layer architecture
            </h2>
            <div className="space-y-4">
              {project.layers.map((layer) => (
                <div
                  key={layer.number}
                  className="p-6 bg-[var(--color-surface-container-highest)] rounded-lg"
                >
                  <div className="font-bold text-slate-50 mb-1">
                    {layer.number}. {layer.title}
                  </div>
                  <p className="text-sm text-[var(--color-on-surface-variant)]">
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Bottom back link */}
      <div className="flex justify-center pb-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors group"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span className="uppercase tracking-widest text-xs font-semibold">
            Back to all projects
          </span>
        </Link>
      </div>
    </main>
  );
}
