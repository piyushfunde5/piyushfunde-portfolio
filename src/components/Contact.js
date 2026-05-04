import RevealButton from "./RevealButton";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-8 bg-[var(--color-surface-container-highest)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-end">
          {/* Left: heading + links */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 max-w-md font-[family-name:var(--font-manrope)]">
              If you're building something interesting or hiring someone who builds, I'd like to hear from you.
            </h2>
            <div className="flex flex-col gap-6 text-lg lg:text-xl">
              <a
                href="mailto:piyushfunde5@gmail.com"
                className="flex items-center gap-4 text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors"
              >
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                piyushfunde5@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-funde/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-colors"
              >
                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Resume buttons */}
          <div className="flex md:justify-end gap-2">
            <a
              href="/docs/Piyush_Product_2026_5.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] text-[var(--color-on-primary)] text-lg lg:text-xl font-bold px-12 py-6 rounded-l-[4px] hover:brightness-110 active:scale-95 transition-all w-full md:w-auto text-center"
            >
              View Resume
            </a>
            <a
              href="/docs/Piyush_Product_2026_5.pdf"
              download="Piyush_Funde_Resume.pdf"
              className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-6 py-6 rounded-r-[4px] hover:brightness-110 active:scale-95 transition-all flex items-center border-l border-[var(--color-on-primary)]/20"
              title="Download Resume"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
          </div>
        </div>

        {/* WhatsApp reveal - below the grid */}
        <div className="mt-8">
          <RevealButton />
        </div>
      </div>
    </section>
  );
}
