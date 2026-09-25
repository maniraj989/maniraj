import { GraduationCap, Briefcase } from "lucide-react";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-theme-bg border-b border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-theme-border">
          <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold block mb-2">
            04 // Journey &amp; Foundation
          </span>
          <h2 className="font-editorial-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal tracking-tight text-theme-text leading-tight">
            Experience &amp; Education
          </h2>
        </div>

        {/* Split Grid: Experience on Left, Education on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column: Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-4 h-4 text-[var(--accent-color)]" />
              <span className="text-xs font-mono font-semibold tracking-[0.2em] text-theme-muted uppercase">
                Work Experience
              </span>
            </div>

            <div className="relative border-l border-theme-border ml-3 pl-7 sm:pl-8 space-y-12">
              {experienceData.map((item, index) => (
                <div key={item.id} className="relative group">
                  {/* Timeline Indicator Node */}
                  <span
                    className={`absolute -left-[35px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-theme-bg transition-transform duration-200 group-hover:scale-125 ${
                      item.current ? "bg-[var(--accent-color)]" : "bg-theme-muted"
                    }`}
                  />

                  {/* Period Tag & Entry Number */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono text-[var(--accent-color)] bg-theme-surface border border-theme-border">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-mono text-theme-muted">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-xl text-theme-text tracking-tight">
                    {item.role}
                  </h3>

                  <p className="text-sm font-medium text-theme-muted mt-1">
                    {item.company}
                  </p>

                  {/* Optional Description (Present for Freelance role) */}
                  {item.description && (
                    <p className="text-xs sm:text-[13px] text-theme-muted/90 mt-3 leading-relaxed font-normal max-w-xl">
                      {item.description}
                    </p>
                  )}

                  {/* Technology Tags if specified */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono text-theme-text bg-theme-surface rounded border border-theme-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Split */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-4 h-4 text-[var(--accent-color)]" />
              <span className="text-xs font-mono font-semibold tracking-[0.2em] text-theme-muted uppercase">
                Academic Background
              </span>
            </div>

            <div className="space-y-8 divide-y divide-theme-border border-y border-theme-border">
              {educationData.map((item, index) => (
                <div key={item.id} className="pt-6 pb-6 first:pt-4 last:pb-4 group">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono text-[var(--accent-color)]">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-mono text-theme-muted">
                      EDU 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-theme-text tracking-tight group-hover:text-[var(--accent-color)] transition-colors">
                    {item.degree}
                  </h3>

                  <p className="text-xs font-mono text-theme-muted mt-0.5">
                    {item.field}
                  </p>

                  <p className="text-sm text-theme-text font-medium mt-2">
                    {item.institution}
                  </p>

                  <div className="flex items-center justify-between text-xs text-theme-muted mt-2 pt-2 border-t border-theme-border/60">
                    <span>{item.location}</span>
                    <span className="font-mono text-[var(--accent-color)] font-medium">
                      {item.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
