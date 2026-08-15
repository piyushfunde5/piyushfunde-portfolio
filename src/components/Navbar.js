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
            <a
              href="https://wa.me/917057311166"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-6 py-2 rounded-[4px] font-bold text-sm hover:brightness-110 transition-all active:scale-95 flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Let's Connect
            </a>
          </div>

          {/* Mobile: Resume (hidden when menu open) + Hamburger */}
          <div className="flex md:hidden items-center gap-3 relative z-50">
            <a
              href="https://wa.me/917057311166"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[var(--color-primary)] text-[var(--color-on-primary)] px-4 py-2 rounded-[4px] font-bold text-sm active:scale-90 transition-all flex items-center gap-2 ${menuOpen ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Let's Connect
            </a>
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

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/917057311166"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className={`mt-6 bg-[var(--color-primary)] text-[var(--color-on-primary)] px-10 py-4 rounded-[4px] font-bold text-lg tracking-tight hover:brightness-110 active:scale-95 transition-all relative z-10 flex items-center gap-3 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 80}ms` : "0ms",
              transitionProperty: "opacity, transform",
              transitionDuration: "400ms",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Let's Connect
          </a>
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
