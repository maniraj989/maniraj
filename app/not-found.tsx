import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-theme-bg text-theme-text px-6 py-16">
      <div className="max-w-md w-full text-center">
        <div className="font-editorial-serif text-[clamp(6rem,14vw,9rem)] leading-none font-normal text-theme-muted/30 select-none mb-2">
          404
        </div>

        <h1 className="font-sans font-bold text-xl sm:text-2xl uppercase tracking-wider text-theme-text mb-3">
          PAGE NOT FOUND.
        </h1>

        <p className="text-sm font-mono text-theme-muted mb-8">
          The route you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs font-semibold tracking-wide bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] text-white shadow-sm transition-all duration-150 active:scale-95"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back Home</span>
        </Link>
      </div>
    </div>
  );
}
