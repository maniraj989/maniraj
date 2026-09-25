"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

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

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const projectNumber = `0${index + 1}`;

  return (
    <article
      data-cursor="view"
      className="group flex flex-col bg-theme-surface border border-theme-border hover:border-theme-borderStrong rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-xl w-[85vw] max-w-[340px] sm:w-[360px] md:w-[380px] shrink-0 select-none"
    >
      {/* 55-60% Visual Area with Browser Window Top */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-theme-elevated border-b border-theme-border">
        {/* Browser dots */}
        <div className="flex items-center space-x-1.5 px-3 py-2 bg-theme-elevated border-b border-theme-border">
          <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80 inline-block" />
          <span className="w-2 h-2 rounded-full bg-[#27C93F]/80 inline-block" />
          <span className="ml-2 font-mono text-[9px] text-theme-muted truncate">
            {project.title.toLowerCase().replace(/\s+/g, "-")}.app
          </span>
        </div>

        <div className="relative w-full h-[calc(100%-25px)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 340px, 380px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <span className="font-editorial-serif text-3xl font-normal text-theme-muted/40 group-hover:text-[var(--accent-color)] transition-colors select-none">
              {projectNumber}
            </span>
            <span className="text-[10px] font-mono tracking-wider text-theme-muted uppercase">
              Project
            </span>
          </div>

          <h3 className="font-sans font-bold text-lg text-theme-text tracking-tight group-hover:text-[var(--accent-color)] transition-colors duration-200">
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-theme-muted leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-[11px] font-mono text-theme-text bg-theme-elevated rounded-full border border-theme-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center space-x-5 mt-6 pt-4 border-t border-theme-border">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-theme-text hover:text-[var(--accent-color)] transition-colors uppercase tracking-wider"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
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
    </article>
  );
}
