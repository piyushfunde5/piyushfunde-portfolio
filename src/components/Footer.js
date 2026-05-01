export default function Footer() {
  return (
    <footer className="bg-[var(--color-footer-bg)] w-full py-12 px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-8">
        <span className="text-lg font-bold text-slate-50 font-[family-name:var(--font-manrope)]">
          Piyush Funde
        </span>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/piyush-funde/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest text-slate-400 hover:text-slate-50 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:piyushfunde5@gmail.com"
            className="text-sm uppercase tracking-widest text-slate-400 hover:text-slate-50 transition-all"
          >
            Email
          </a>
        </div>
        <p className="text-[10px] text-[var(--color-outline-variant)] tracking-[0.3em] uppercase">
          Piyush Funde
        </p>
      </div>
    </footer>
  );
}
