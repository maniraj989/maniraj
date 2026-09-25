import { ArrowDown, Mail } from "lucide-react";
import CodeVisual from "./CodeVisual";

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

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:py-32 border-b border-theme-border overflow-hidden"
    >
      <div className="max-w-editorial w-full mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Typography Composition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-theme-muted">
                Available for selected projects
              </span>
            </div>

            {/* Giant Display Headline in Instrument Serif */}
            <h1 className="font-editorial-serif text-[clamp(3.8rem,8.5vw,8.5rem)] font-normal tracking-tight text-theme-text leading-[0.92] select-none">
              Maniraj <br />
              <span className="italic">Sharma</span>
              <span className="text-[var(--accent-color)]">.</span>
            </h1>

            {/* Role Eyebrow */}
            <div className="mt-6 mb-4">
              <span className="text-xs font-mono font-semibold tracking-[0.25em] text-theme-muted uppercase">
                Full-Stack Web Developer · India
              </span>
            </div>

            {/* Concise Mission Statement */}
            <p className="text-theme-muted text-base sm:text-lg font-normal leading-relaxed max-w-lg mb-8">
              I build thoughtful digital products, scalable web applications and interfaces with modern JavaScript technologies.
            </p>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white shadow-md transition-all duration-150 active:scale-95"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-theme-surface hover:bg-theme-elevated text-theme-text border border-theme-border hover:border-theme-borderStrong transition-all duration-150 active:scale-95"
              >
                <span>Contact Me</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center space-x-3.5 pl-2">
                <a
                  href="https://github.com/manirajsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-muted hover:text-[var(--accent-color)] transition-colors p-1"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/manirajsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-muted hover:text-[var(--accent-color)] transition-colors p-1"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:contact@manirajsharma.dev"
                  className="text-theme-muted hover:text-[var(--accent-color)] transition-colors p-1"
                  aria-label="Email Maniraj"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Visual (No human portrait!) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <CodeVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
