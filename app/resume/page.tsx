import { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft, Mail, ExternalLink } from "lucide-react";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Resume — Maniraj Sharma | Full-Stack Developer & Software Engineer",
  description:
    "Curriculum Vitae and technical resume of Maniraj Sharma. Computer Science Engineering student and full-stack developer.",
  alternates: {
    canonical: "https://www.manirajsharma.com.np/resume",
  },
  openGraph: {
    title: "Resume — Maniraj Sharma | Full-Stack Developer",
    description:
      "Resume of Maniraj Sharma — Computer Science Engineering student and full-stack developer.",
    url: "https://www.manirajsharma.com.np/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-theme-bg text-theme-text transition-colors duration-300 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Navigation & Action Bar */}
        <div className="flex items-center justify-between pb-8 mb-10 border-b border-theme-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-theme-muted hover:text-theme-text transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <a
            href="/resume/Maniraj-Sharma-Resume.pdf"
            download="Maniraj-Sharma-Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white shadow-sm transition-all duration-150 active:scale-95"
          >
            <span>Download PDF</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Resume Content Sheet */}
        <article className="p-8 sm:p-12 rounded-xl bg-theme-surface border border-theme-border shadow-sm">
          {/* Header */}
          <header className="border-b border-theme-border pb-8 mb-8">
            <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold block mb-2">
              Curriculum Vitae
            </span>
            <h1 className="font-editorial-serif text-4xl sm:text-5xl font-normal tracking-tight text-theme-text leading-tight mb-2">
              Maniraj Sharma
            </h1>
            <p className="text-xs font-mono font-semibold tracking-widest uppercase text-theme-muted mb-5">
              Full-Stack Developer · Backend &amp; Software Engineering Focus · India
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-theme-muted">
              <span>Bengaluru, India</span>
              <a
                href="mailto:manirajsharma193@gmail.com"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                manirajsharma193@gmail.com
              </a>
              <a
                href="https://www.manirajsharma.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                manirajsharma.com.np
              </a>
              <a
                href="https://github.com/maniraj989"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                github.com/maniraj989
              </a>
              <a
                href="https://www.linkedin.com/in/maniraj-sharmma-221b69355/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-color)] transition-colors"
              >
                linkedin.com/in/maniraj-sharmma
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-10">
            <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-3">
              Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-theme-muted leading-relaxed font-normal">
              2nd-year Computer Science Engineering student at SRM IST and full-stack developer with a backend/software engineering focus, dedicated to building practical web applications, business systems, and digital products. Experienced across responsive frontend interfaces, backend APIs, relational and document databases, and production deployments with an emphasis on clean architecture, reliable engineering, and continuous learning.
            </p>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-4">
              Education
            </h2>
            <div className="space-y-6 divide-y divide-theme-border/60">
              {educationData.map((edu, idx) => (
                <div key={edu.id} className={idx > 0 ? "pt-5" : ""}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="font-sans font-bold text-base text-theme-text">
                      {edu.degree} — {edu.field}
                    </h3>
                    <span className="text-xs font-mono text-theme-muted">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-theme-muted mb-2">
                    <span>{edu.institution} — {edu.location}</span>
                    <span className="font-mono text-[var(--accent-color)] font-medium mt-1 sm:mt-0">
                      {edu.grade}
                    </span>
                  </div>

                  {edu.coursework && (
                    <div className="mt-2.5">
                      <span className="text-[11px] font-mono text-theme-muted block mb-1">
                        Relevant Coursework:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-0.5 text-[10px] font-mono bg-theme-elevated text-theme-text rounded border border-theme-border"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-4">
              Work Experience
            </h2>
            <div className="space-y-6 divide-y divide-theme-border/60">
              {experienceData.map((exp, idx) => (
                <div key={exp.id} className={idx > 0 ? "pt-5" : ""}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="font-sans font-bold text-base text-theme-text">
                      {exp.role} <span className="text-theme-muted font-normal">at</span> {exp.company}
                    </h3>
                    <span className="text-xs font-mono text-[var(--accent-color)]">
                      {exp.period}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="text-xs sm:text-sm text-theme-muted mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono bg-theme-elevated text-theme-text rounded border border-theme-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-10">
            <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-4">
              Featured Projects
            </h2>
            <div className="space-y-6 divide-y divide-theme-border/60">
              {projectsData.map((project, idx) => (
                <div key={project.id} className={idx > 0 ? "pt-5" : ""}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="font-sans font-bold text-base text-theme-text">
                      {project.title}
                      {project.category && (
                        <span className="text-xs font-normal text-theme-muted font-mono ml-2">
                          ({project.category})
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent-color)] hover:underline flex items-center gap-1"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <Link
                        href={`/work/${project.id}`}
                        className="text-theme-muted hover:text-theme-text"
                      >
                        Case Study
                      </Link>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-theme-muted mt-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono bg-theme-elevated text-theme-text rounded border border-theme-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-xs font-mono font-semibold tracking-widest uppercase text-[var(--accent-color)] mb-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-lg bg-theme-elevated border border-theme-border">
                <span className="font-bold text-theme-text block mb-1">Languages:</span>
                <span className="text-theme-muted">Java, JavaScript (ES6+), TypeScript, SQL, Python</span>
              </div>
              <div className="p-3.5 rounded-lg bg-theme-elevated border border-theme-border">
                <span className="font-bold text-theme-text block mb-1">Frontend:</span>
                <span className="text-theme-muted">React, Next.js (App Router), HTML5, CSS3, Tailwind CSS</span>
              </div>
              <div className="p-3.5 rounded-lg bg-theme-elevated border border-theme-border">
                <span className="font-bold text-theme-text block mb-1">Backend:</span>
                <span className="text-theme-muted">Node.js, Express.js, Spring Boot, REST APIs</span>
              </div>
              <div className="p-3.5 rounded-lg bg-theme-elevated border border-theme-border">
                <span className="font-bold text-theme-text block mb-1">Databases:</span>
                <span className="text-theme-muted">PostgreSQL, Supabase, MongoDB, MySQL</span>
              </div>
              <div className="p-3.5 rounded-lg bg-theme-elevated border border-theme-border sm:col-span-2">
                <span className="font-bold text-theme-text block mb-1">Developer Tools:</span>
                <span className="text-theme-muted">Git, GitHub, Docker, Vercel, Figma, Postman</span>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
