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

          {/* Right: WhatsApp CTA */}
          <div className="flex md:justify-end">
            <a
              href="https://wa.me/917057311166"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] text-[var(--color-on-primary)] text-lg lg:text-xl font-bold px-12 py-6 rounded-[4px] hover:brightness-110 active:scale-95 transition-all w-full md:w-auto text-center flex items-center justify-center gap-3"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Let's Connect
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
