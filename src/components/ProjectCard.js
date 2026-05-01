import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="bg-[var(--color-surface-container-highest)] p-8 lg:p-12 relative overflow-hidden group">
      {/* Watermark number */}
      <span className="absolute -top-6 -right-6 text-[8rem] lg:text-9xl font-extrabold text-[var(--color-surface-variant)]/30 select-none font-[family-name:var(--font-manrope)]">
        {number}
      </span>

      <div className="relative z-10 space-y-8">
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-4 font-[family-name:var(--font-manrope)]">
            {project.title}
          </h3>
          <p className="text-base lg:text-lg text-[var(--color-on-surface-variant)] leading-relaxed mb-8">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-6">
            {(project.liveUrl || project.figmaUrl) && (
              <a
                href={project.liveUrl || project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] font-bold inline-flex items-center gap-2 group/link min-h-[44px]"
              >
                {project.liveUrl ? "Try the live product" : "View prototype"}
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            )}
            <Link
              href={project.caseStudyUrl}
              className="text-[var(--color-primary)] font-bold inline-flex items-center gap-2 group/link min-h-[44px]"
            >
              How I built it
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Project tile image */}
        <div className="aspect-video bg-[var(--color-surface-container-low)] overflow-hidden rounded shadow-2xl relative">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[var(--color-on-surface-variant)]/30 text-xl font-semibold">{project.title}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
