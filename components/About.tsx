export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-theme-bg border-b border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <div className="mb-10">
          <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold">
            01 // Introduction
          </span>
        </div>

        {/* Large Typographic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Overview */}
          <div className="lg:col-span-8">
            <h2 className="font-editorial-serif text-[clamp(2.6rem,5.5vw,5.5rem)] font-normal text-theme-text leading-[1.02] tracking-tight mb-8">
              ENGINEERING <br />
              <span className="italic text-[var(--accent-color)]">PRACTICAL SYSTEMS</span> <br />
              FOR THE REAL WORLD.
            </h2>

            <div className="space-y-4 text-theme-muted text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              <p>
                I am a 2nd-year Computer Science Engineering student at SRM IST and a full-stack developer with a backend/software engineering focus, building practical web applications, business systems, and digital products.
              </p>
              <p>
                My work spans across responsive frontend interfaces, backend APIs, relational and document databases, and production deployments. I am drawn to solid software engineering principles, clean application architecture, and reliable performance.
              </p>
              <p className="text-sm font-mono text-theme-muted/80">
                Currently strengthening my foundations in Data Structures &amp; Algorithms, Java, Spring Boot, database design, and system architecture.
              </p>
            </div>
          </div>

          {/* Right Column: Key Details */}
          <div className="lg:col-span-4 flex flex-col divide-y divide-theme-border border-t lg:border-t-0 border-b lg:border-b-0 border-theme-border">
            {/* Meta 1 */}
            <div className="py-6">
              <span className="block text-2xl sm:text-3xl font-sans font-bold tracking-tight text-theme-text">
                INDIA
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-theme-muted mt-1 block">
                Location
              </span>
            </div>

            {/* Meta 2 */}
            <div className="py-6">
              <span className="block text-2xl sm:text-3xl font-sans font-bold tracking-tight text-theme-text">
                FULL-STACK
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-theme-muted mt-1 block">
                Backend / SE Focus
              </span>
            </div>

            {/* Meta 3 */}
            <div className="py-6">
              <span className="block text-2xl sm:text-3xl font-sans font-bold tracking-tight text-[var(--accent-color)]">
                AVAILABLE
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-theme-muted mt-1 block">
                Open to Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
