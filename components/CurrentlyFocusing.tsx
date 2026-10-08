export default function CurrentlyFocusing() {
  const focusAreas = [
    {
      title: "Data Structures & Algorithms",
      detail: "Strengthening problem solving, time/space complexity analysis, and algorithmic patterns.",
    },
    {
      title: "Java & Spring Boot",
      detail: "Enterprise backend services, REST API development, and object-oriented architecture.",
    },
    {
      title: "Backend Engineering",
      detail: "API protocols, authentication workflows, caching, and server performance.",
    },
    {
      title: "Database Design",
      detail: "Relational data modeling, query optimization, indexing, and transactional integrity.",
    },
    {
      title: "System Design Fundamentals",
      detail: "Scalability, modular architecture, distributed data basics, and fault tolerance.",
    },
    {
      title: "Full-Stack Development",
      detail: "End-to-end web applications with Next.js, TypeScript, and clean code principles.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-theme-bg border-b border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold block mb-2">
            Focus &amp; Growth
          </span>
          <h2 className="font-editorial-serif text-[clamp(2.2rem,4.5vw,3.8rem)] font-normal tracking-tight text-theme-text leading-tight">
            Currently Focusing On
          </h2>
        </div>

        {/* 6-item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="p-5 rounded-xl bg-theme-surface border border-theme-border hover:border-theme-borderStrong transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-mono text-[var(--accent-color)] font-medium">
                    0{index + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)]/60" />
                </div>
                <h3 className="font-sans font-bold text-base text-theme-text tracking-tight">
                  {area.title}
                </h3>
                <p className="text-xs text-theme-muted mt-1.5 leading-relaxed">
                  {area.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
