import Link from "next/link";

export default function CaseStudyLayout({ title, subtitle, liveUrl, prdUrl, children }) {
  return (
    <article className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to home
        </Link>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-50 font-[family-name:var(--font-manrope)]">
          {title}
        </h1>
        <p className="mt-3 text-lg lg:text-xl text-[var(--color-on-surface-variant)]">
          {subtitle}
        </p>

        {/* Hero image placeholder */}
        <div className="mt-8 w-full aspect-[16/9] rounded-[4px] bg-[var(--color-surface-container-highest)] flex items-center justify-center">
          <span className="text-[var(--color-on-surface-variant)]/30 text-2xl font-semibold">{title}</span>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] bg-[var(--color-primary)] text-[var(--color-on-primary)] font-bold hover:brightness-110 transition-all min-h-[44px]"
          >
            Try the live prototype
          </a>
          <a
            href={prdUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] font-bold hover:bg-[var(--color-surface-bright)] transition-colors min-h-[44px]"
          >
            Read the full PRD (PDF)
          </a>
        </div>

        {/* Case study content */}
        <div className="mt-16 space-y-12">
          {children}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 flex flex-wrap gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] bg-[var(--color-primary)] text-[var(--color-on-primary)] font-bold hover:brightness-110 transition-all min-h-[44px]"
          >
            Try the live prototype
          </a>
          <a
            href={prdUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] bg-[var(--color-surface-container-high)] text-[var(--color-on-surface)] font-bold hover:bg-[var(--color-surface-bright)] transition-colors min-h-[44px]"
          >
            Read the full PRD (PDF)
          </a>
        </div>

        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors mt-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to all projects
        </Link>
      </div>
    </article>
  );
}
