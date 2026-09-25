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
          {/* Left Column: Bold Headline & Philosophy */}
          <div className="lg:col-span-8">
            <h2 className="font-editorial-serif text-[clamp(2.6rem,5.5vw,5.5rem)] font-normal text-theme-text leading-[1.02] tracking-tight mb-8">
              I BUILD <br />
              <span className="italic text-[var(--accent-color)]">DIGITAL PRODUCTS</span> <br />
              FOR THE MODERN WEB.
            </h2>

            <p className="text-theme-muted text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              Full-stack developer focused on creating fast, accessible and scalable web experiences with clean architecture and exceptional user interfaces.
            </p>
          </div>

          {/* Right Column: Editorial Typographic Metadata Grid */}
          <div className="lg:col-span-4 flex flex-col divide-y divide-theme-border border-t lg:border-t-0 border-b lg:border-b-0 border-theme-border">
            {/* Meta 1 */}
            <div className="py-6">
              <span className="block text-2xl sm:text-3xl font-sans font-bold tracking-tight text-theme-text">
                INDIA
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-theme-muted mt-1 block">
                Based in
              </span>
            </div>

            {/* Meta 2 */}
            <div className="py-6">
              <span className="block text-2xl sm:text-3xl font-sans font-bold tracking-tight text-theme-text">
                FULL-STACK
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-theme-muted mt-1 block">
                Specialization
              </span>
            </div>

            {/* Meta 3 */}
            <div className="py-6">
              <span className="block text-2xl sm:text-3xl font-sans font-bold tracking-tight text-[var(--accent-color)]">
                OPEN TO
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-theme-muted mt-1 block">
                Selected Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
