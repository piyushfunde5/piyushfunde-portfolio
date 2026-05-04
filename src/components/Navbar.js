"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const sections = ["work", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const router = useRouter();

  const handleSectionClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const sectionId = href.replace("/#", "");
      setMenuOpen(false);

      if (isHome) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/");
        const tryScroll = (attempts = 0) => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else if (attempts < 20) {
            setTimeout(() => tryScroll(attempts + 1), 100);
          }
        };
        setTimeout(() => tryScroll(), 100);
      }
    },
    [isHome, router]
  );

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/60 backdrop-blur-md">
        <div className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-black text-[var(--color-primary)] font-[family-name:var(--font-manrope)] tracking-tighter hover:scale-105 transition-transform duration-200 relative z-50"
          >
            Piyush Funde
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isSection = link.href.startsWith("/#");
              const isProjectsLink = link.href === "/projects";
              const isActive = isProjectsLink
                ? pathname.startsWith("/projects") || (isHome && activeSection === "work")
                : isHome && activeSection === link.href.replace("/#", "");

              if (isSection) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleSectionClick(e, link.href)}
                    className={`text-sm font-bold transition-colors duration-300 font-[family-name:var(--font-manrope)] tracking-tight cursor-pointer ${
                      isActive
                        ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-bold transition-colors duration-300 font-[family-name:var(--font-manrope)] tracking-tight ${
                    isActive
                      ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-1">
              <a
                href="/docs/Piyush_Product_2026_5.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-6 py-2 rounded-l-[4px] font-bold text-sm hover:brightness-110 transition-all active:scale-95"
              >
                Resume
              </a>
              <a
                href="/docs/Piyush_Product_2026_5.pdf"
                download="Piyush_Funde_Resume.pdf"
                className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-2 py-2 rounded-r-[4px] font-bold text-sm hover:brightness-110 transition-all active:scale-95 border-l border-[var(--color-on-primary)]/20"
                title="Download Resume"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile: Resume (hidden when menu open) + Hamburger */}
          <div className="flex md:hidden items-center gap-3 relative z-50">
            <div className={`flex items-center gap-1 transition-all duration-300 ${menuOpen ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"}`}>
              <a
                href="/docs/Piyush_Product_2026_5.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-4 py-2 rounded-l-[4px] font-bold text-sm active:scale-90 transition-all"
              >
                Resume
              </a>
              <a
                href="/docs/Piyush_Product_2026_5.pdf"
                download="Piyush_Funde_Resume.pdf"
                className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-2 py-2 rounded-r-[4px] font-bold text-sm active:scale-90 transition-all border-l border-[var(--color-on-primary)]/20"
                title="Download Resume"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </a>
            </div>
          </div>
          <button
            className="flex md:hidden items-center justify-center w-10 h-10 text-slate-300 relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* Animated hamburger → X */}
            <span className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[11px]" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen takeover menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[var(--color-surface)] flex flex-col transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top bar inside menu — just spacing to clear navbar height */}
        <div className="h-[64px] flex-shrink-0" />

        {/* Centered nav items */}
        <div className="flex-1 flex flex-col items-center justify-center gap-2 px-8">

          {/* Watermark */}
          <span className="absolute text-[20vw] font-extrabold text-[var(--color-surface-variant)]/20 select-none font-[family-name:var(--font-manrope)] leading-none pointer-events-none">
            PF
          </span>

          {navLinks.map((link, i) => {
            const isSection = link.href.startsWith("/#");
            const delay = `${i * 80}ms`;

            const className = `text-4xl font-extrabold font-[family-name:var(--font-manrope)] tracking-tighter text-slate-50 hover:text-[var(--color-primary)] transition-all duration-300 py-4 relative z-10 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`;

            const style = {
              transitionDelay: menuOpen ? delay : "0ms",
              transitionProperty: "opacity, transform",
              transitionDuration: "400ms",
            };

            if (isSection) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSectionClick(e, link.href)}
                  className={className}
                  style={style}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={className}
                style={style}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Resume buttons */}
          <div
            className={`mt-6 flex items-center gap-2 relative z-10 transition-all duration-400 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 80}ms` : "0ms",
              transitionProperty: "opacity, transform",
              transitionDuration: "400ms",
            }}
          >
            <a
              href="/docs/Piyush_Product_2026_5.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-10 py-4 rounded-l-[4px] font-bold text-lg tracking-tight hover:brightness-110 active:scale-95 transition-all"
            >
              View Resume
            </a>
            <a
              href="/docs/Piyush_Product_2026_5.pdf"
              download="Piyush_Funde_Resume.pdf"
              onClick={() => setMenuOpen(false)}
              className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-4 py-4 rounded-r-[4px] font-bold hover:brightness-110 active:scale-95 transition-all border-l border-[var(--color-on-primary)]/20"
              title="Download Resume"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom — availability badge */}
        <div
          className={`pb-12 flex justify-center relative z-10 transition-all duration-400 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: menuOpen ? "320ms" : "0ms" }}
        >
          <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-on-surface-variant)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse-lime" />
            Currently open to product roles
          </span>
        </div>
      </div>
    </>
  );
}
