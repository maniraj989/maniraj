export default function CurrentlyFocusing() {
  const focusAreas = [
    {
      number: "01",
      title: "Data Structures & Algorithms",
      detail: "Java-based DSA preparation for coding interviews and placements.",
    },
    {
      number: "02",
      title: "Java & Spring Boot",
      detail: "Building stronger backend development fundamentals and production-style REST APIs.",
    },
    {
      number: "03",
      title: "Backend Engineering",
      detail: "API design, authentication, validation, business logic and scalable application structure.",
    },
    {
      number: "04",
      title: "SQL & Database Design",
      detail: "PostgreSQL, relational modeling, queries, indexing and data integrity.",
    },
    {
      number: "05",
      title: "System Design Fundamentals",
      detail: "Learning how real-world software systems are structured, scaled and maintained.",
    },
    {
      number: "06",
      title: "Full-Stack Development",
      detail: "Using React/Next.js with backend APIs to build complete production-oriented applications.",
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

        {/* 6-item Grid in exact priority order */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {focusAreas.map((area) => (
            <div
              key={area.number}
              className="p-5 rounded-xl bg-theme-surface border border-theme-border hover:border-theme-borderStrong transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-mono text-[var(--accent-color)] font-semibold">
                    {area.number}
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
