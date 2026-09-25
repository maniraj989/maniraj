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

export default function Footer() {
  return (
    <footer className="py-16 bg-theme-bg text-theme-text border-t border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-theme-border">
          {/* Left */}
          <div>
            <div className="font-sans font-bold text-lg tracking-tight uppercase">
              Maniraj Sharma
            </div>
            <p className="text-xs font-mono text-theme-muted mt-1">
              Full-Stack Web Developer · India
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-theme-muted">
            <a href="#hero" className="hover:text-theme-text transition-colors">Home</a>
            <a href="#about" className="hover:text-theme-text transition-colors">About</a>
            <a href="#work" className="hover:text-theme-text transition-colors">Work</a>
            <a href="#stack" className="hover:text-theme-text transition-colors">Stack</a>
            <a href="#experience" className="hover:text-theme-text transition-colors">Experience</a>
            <a href="#contact" className="hover:text-theme-text transition-colors">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex items-center space-x-4 text-theme-muted">
            <a
              href="https://github.com/maniraj989"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-text transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/maniraj-sharmma-221b69355/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-theme-text transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:manirajsharma193@gmail.com"
              className="hover:text-theme-text transition-colors text-xs font-mono"
              aria-label="Email"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-theme-muted gap-4">
          <p>© 2026 Maniraj Sharma. All rights reserved.</p>
          <p className="text-[11px] text-theme-muted/60">
            Crafted with Next.js, TypeScript &amp; Space Grotesk.
          </p>
        </div>
      </div>
    </footer>
  );
}
