import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
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

function resolveProject(id: string) {
  if (id === "jeereu-restaurant") {
    return projectsData.find((p) => p.id === "jeerey-restaurant");
  }
  return projectsData.find((p) => p.id === id);
}

export function generateStaticParams() {
  return [
    { id: "mm-digital-garage" },
    { id: "eguru-nepal" },
    { id: "mm-agro" },
    { id: "jeerey-restaurant" },
    { id: "jeereu-restaurant" },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = resolveProject(id);

  if (!project) {
    return {
      title: "Project Not Found | Maniraj Sharma",
    };
  }

  const titles: Record<string, string> = {
    "mm-digital-garage": "MM Digital Garage — Digital Agency Platform | Maniraj Sharma",
    "eguru-nepal": "eguru nepal — Online Learning & Board Prep Platform | Maniraj Sharma",
    "mm-agro": "MM Agro — Inventory & Sales Management System | Maniraj Sharma",
    "jeerey-restaurant": "Jeereu Restaurant — Dining Web App & Reservations | Maniraj Sharma",
    "jeereu-restaurant": "Jeereu Restaurant — Dining Web App & Reservations | Maniraj Sharma",
  };

  const descriptions: Record<string, string> = {
    "mm-digital-garage":
      "MM Digital Garage is a full-stack digital agency web platform engineered by Maniraj Sharma.",
    "eguru-nepal":
      "eguru nepal is an academic e-learning and curriculum preparation application built by Maniraj Sharma.",
    "mm-agro":
      "MM Agro is a business inventory and sales management application built by Maniraj Sharma.",
    "jeerey-restaurant":
      "Jeereu Restaurant is a dining web application and table reservation system built by Maniraj Sharma.",
    "jeereu-restaurant":
      "Jeereu Restaurant is a dining web application and table reservation system built by Maniraj Sharma.",
  };

  const pageTitle = titles[id] || `${project.title} — Case Study | Maniraj Sharma`;
  const pageDesc = descriptions[id] || project.description;
  const canonicalUrl = `https://www.manirajsharma.com.np/work/${project.id}`;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = resolveProject(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text transition-colors duration-300 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Navigation & Action Bar */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-theme-border">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-theme-muted hover:text-theme-text transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-theme-surface border border-theme-border text-theme-muted hover:text-theme-text transition-colors"
            >
              <GitHubIcon className="w-3 h-3" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Project Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold">
              Case Study
            </span>
            {project.category && (
              <>
                <span className="text-theme-muted/40 font-mono">/</span>
                <span className="text-xs font-mono text-theme-muted uppercase tracking-wider">
                  {project.category}
                </span>
              </>
            )}
          </div>

          <h1 className="font-editorial-serif text-[clamp(2.5rem,6vw,5rem)] font-normal tracking-tight text-theme-text leading-[1.0] mb-6">
            {project.title}
          </h1>

          <p className="text-theme-muted text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-theme-text bg-theme-surface rounded-md border border-theme-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Project Screenshot in Browser Shell */}
        <div className="rounded-xl overflow-hidden bg-theme-surface border border-theme-border mb-16 shadow-md">
          <div className="flex items-center justify-between px-4 py-2.5 bg-theme-elevated border-b border-theme-border">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
            </div>
            <div className="px-3 py-0.5 rounded bg-theme-surface text-[11px] font-mono text-theme-muted border border-theme-border/60 truncate max-w-xs">
              {project.liveUrl}
            </div>
            <span className="text-[10px] font-mono text-emerald-500">production</span>
          </div>

          <div className="relative aspect-[16/10] w-full bg-theme-elevated">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Case Study Sections */}
        <div className="space-y-12">
          {/* 1. Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="p-6 sm:p-8 rounded-xl bg-theme-surface border border-theme-border">
              <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-3">
                Problem
              </h2>
              <p className="text-sm sm:text-base text-theme-muted leading-relaxed font-normal">
                {project.problem}
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-xl bg-theme-surface border border-theme-border">
              <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-emerald-500 mb-3">
                Solution
              </h2>
              <p className="text-sm sm:text-base text-theme-muted leading-relaxed font-normal">
                {project.solution}
              </p>
            </section>
          </div>

          {/* 2. Key Features */}
          {project.features && project.features.length > 0 && (
            <section className="p-6 sm:p-8 rounded-xl bg-theme-surface border border-theme-border">
              <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-5">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-theme-muted">
                    <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)] mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 3. My Role */}
          <section className="p-6 sm:p-8 rounded-xl bg-theme-surface border border-theme-border">
            <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-3">
              My Role
            </h2>
            <p className="text-sm sm:text-base text-theme-muted leading-relaxed font-normal">
              {project.role}
            </p>
          </section>

          {/* 4. Architecture */}
          <section className="p-6 sm:p-8 rounded-xl bg-theme-surface border border-theme-border">
            <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-3">
              Architecture
            </h2>
            <p className="text-sm sm:text-base text-theme-muted leading-relaxed font-normal">
              {project.architecture}
            </p>
          </section>

          {/* 5. Challenges & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="p-6 sm:p-8 rounded-xl bg-theme-surface border border-theme-border">
              <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-3">
                Challenges
              </h2>
              <p className="text-sm text-theme-muted leading-relaxed font-normal">
                {project.challenges}
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-xl bg-theme-surface border border-theme-border">
              <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-emerald-500 mb-3">
                Outcome
              </h2>
              <p className="text-sm text-theme-muted leading-relaxed font-normal">
                {project.outcome}
              </p>
            </section>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-16 pt-8 border-t border-theme-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-theme-muted hover:text-theme-text transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>View All Projects</span>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white transition-colors"
            >
              <span>Launch Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
