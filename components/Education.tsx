import { GraduationCap } from "lucide-react";
import { educationData } from "@/data/education";

export default function Education() {
  return (
    <div>
      <div className="mb-8">
        <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold">
          Academic Background
        </span>
      </div>

      <div className="space-y-9">
        {educationData.map((item, index) => (
          <div key={item.id} className="flex items-start gap-4">
            <div className="w-8 h-8 rounded border border-theme-border flex items-center justify-center shrink-0 mt-0.5 bg-theme-surface">
              <GraduationCap className="w-4 h-4 text-theme-muted" />
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="font-sans font-semibold text-[15px] text-theme-text tracking-tight">
                  {item.degree}
                </h3>
                <span className="text-xs font-mono text-theme-muted shrink-0">
                  {item.period}
                </span>
              </div>

              <p className="text-xs text-theme-muted font-normal">
                {item.field} · {item.institution}
              </p>

              <div className="flex items-center justify-between text-xs text-theme-muted mt-1.5">
                <span>{item.location}</span>
                <span className="font-mono text-[var(--accent-color)] font-medium">
                  {item.grade}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
