import { editorialAchievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section className="py-20 md:py-28 bg-theme-bg border-b border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold block mb-2">
            07 // Honors &amp; Milestones
          </span>
          <h2 className="font-editorial-serif text-[clamp(2.2rem,5vw,4rem)] font-normal tracking-tight text-theme-text leading-tight">
            Key Achievements
          </h2>
        </div>

        {/* Horizontal Editorial Numbered List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-theme-border border-t border-b border-theme-border py-8">
          {editorialAchievements.map((item, idx) => (
            <div
              key={item.number}
              className={`pt-6 lg:pt-0 ${idx > 0 ? "lg:pl-8" : ""} group cursor-default`}
            >
              {/* Large Number */}
              <div className="font-editorial-serif text-4xl sm:text-5xl font-normal text-theme-muted/50 group-hover:text-[var(--accent-color)] transition-colors select-none mb-3">
                {item.number}
              </div>

              <h3 className="font-sans font-bold text-lg sm:text-xl text-theme-text tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                {item.title}
              </h3>

              <p className="text-xs text-theme-muted font-normal mt-2 leading-relaxed">
                {item.context}
              </p>

              {item.year && (
                <span className="inline-block mt-4 text-[10px] font-mono text-[var(--accent-color)] tracking-wider uppercase">
                  {item.year}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
