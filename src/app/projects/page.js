import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Piyush Funde",
  description:
    "A growing collection of product prototypes and case studies by Piyush Funde.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-24">
      {/* Back Link */}
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors mb-12"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        <span className="text-sm uppercase tracking-widest font-semibold">
          Back to home
        </span>
      </Link>

      {/* Header */}
      <header className="mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-50 mb-6 font-[family-name:var(--font-manrope)]">
          All Projects
        </h1>
        <p className="text-xl text-[var(--color-on-surface-variant)] max-w-2xl leading-relaxed">
          A growing collection of things I&apos;ve built from scratch.
        </p>
      </header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            href={project.caseStudyUrl}
            className="group relative flex flex-col bg-[var(--color-surface-container-low)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(177,254,77,0.15)] overflow-hidden"
          >
            {/* Image area */}
            <div className="aspect-[16/10] bg-[var(--color-surface-container-highest)] relative overflow-hidden">
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
                  <span className="text-[var(--color-on-surface-variant)]/30 text-2xl font-semibold select-none">
                    {project.title}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-container-low)] via-transparent to-transparent" />
              <div className="absolute inset-0 border border-[var(--color-primary)]/0 group-hover:border-[var(--color-primary)]/20 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <h2 className="text-3xl font-bold mb-4 text-slate-50 font-[family-name:var(--font-manrope)]">
                {project.title}
              </h2>
              <p className="text-[var(--color-on-surface-variant)] mb-8 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-3 py-1 bg-[var(--color-surface-container-highest)] text-[var(--color-on-surface-variant)] uppercase tracking-wider font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer Note */}
      <div className="flex items-center justify-center pt-8">
        <div className="h-px w-12 bg-[var(--color-outline-variant)]/30" />
        <p className="mx-6 text-sm uppercase tracking-[0.2em] text-[var(--color-on-surface-variant)]/60">
          More projects coming soon
        </p>
        <div className="h-px w-12 bg-[var(--color-outline-variant)]/30" />
      </div>
    </main>
  );
}
