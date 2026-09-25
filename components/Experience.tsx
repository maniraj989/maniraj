import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <div>
      <div className="mb-8">
        <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold">
          Work Experience
        </span>
      </div>

      <div className="relative border-l border-theme-border ml-2 pl-6 space-y-9">
        {experienceData.map((item, index) => (
          <div key={item.id} className="relative">
            <span
              className={`absolute -left-[30px] top-1.5 w-3 h-3 rounded-full border-2 border-theme-bg ${
                item.current ? "bg-[var(--accent-color)]" : "bg-theme-muted"
              }`}
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h3 className="font-sans font-semibold text-[15px] text-theme-text tracking-tight">
                {item.role}
              </h3>
              <span className="text-xs font-mono text-theme-muted shrink-0">
                {item.period}
              </span>
            </div>

            <p className="text-xs text-theme-muted font-normal">
              {item.company}
            </p>

            {item.description && (
              <p className="text-xs text-theme-muted/90 mt-2 leading-relaxed font-normal">
                {item.description}
              </p>
            )}

            {item.technologies && item.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
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
  );
}
