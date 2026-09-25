import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProjectShowcase() {
  const showcaseProjects = projectsData.slice(0, 3);

  return (
    <section id="work" className="py-24 md:py-32 bg-theme-bg border-b border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-theme-border">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold block mb-2">
              03 // Selected Work
            </span>
            <h2 className="font-editorial-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal tracking-tight text-theme-text leading-tight">
              Featured Case Studies
            </h2>
          </div>

          <a
            href="https://github.com/maniraj989?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs font-mono tracking-wider text-theme-muted hover:text-[var(--accent-color)] transition-colors uppercase"
          >
            <span>All Repositories</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Asymmetric Project Showcase List */}
        <div className="space-y-24 md:space-y-32">
          {showcaseProjects.map((project, idx) => {
            const isEven = idx % 2 === 1;
            const projectNumber = `0${idx + 1}`;

            return (
              <div
                key={project.id}
                data-cursor="view"
                className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Project Image Mockup */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:col-start-6" : ""
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-theme-surface border border-theme-border hover:border-theme-borderStrong transition-all duration-300 shadow-xl group-hover:shadow-2xl"
                  >
                    {/* Browser Bar */}
                    <div className="flex items-center space-x-2 px-4 py-2.5 bg-theme-elevated border-b border-theme-border">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/70 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/70 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/70 inline-block" />
                      <span className="ml-2 font-mono text-[10px] text-theme-muted">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}.dev
                      </span>
                    </div>

                    <div className="relative w-full h-[calc(100%-35px)] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 700px"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </a>
                </div>

                {/* Project Information */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isEven ? "lg:col-start-1" : ""
                  }`}
                >
                  {/* Huge Project Number in Instrument Serif */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-editorial-serif text-5xl sm:text-6xl font-normal text-theme-muted/40 group-hover:text-[var(--accent-color)] transition-colors select-none">
                      {projectNumber}
                    </span>

                    <span className="text-[11px] font-mono tracking-widest text-theme-muted uppercase">
                      Case Study
                    </span>
                  </div>

                  {/* Accent Line that expands on hover */}
                  <div className="w-8 h-[2px] bg-[var(--accent-color)] mb-6 transition-all duration-300 group-hover:w-16" />

                  {/* Project Title */}
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-theme-text tracking-tight mb-3 transition-transform duration-200 group-hover:translate-x-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-theme-muted text-sm sm:text-base leading-relaxed font-normal mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono text-theme-text bg-theme-surface rounded-full border border-theme-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center space-x-6 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-theme-text hover:text-[var(--accent-color)] transition-colors uppercase tracking-wider"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-theme-muted hover:text-theme-text transition-colors uppercase tracking-wider"
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
