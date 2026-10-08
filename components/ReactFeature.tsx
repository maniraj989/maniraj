"use client";

import { useState } from "react";

export default function ReactFeature() {
  const [activePanel, setActivePanel] = useState<"react" | "js">("react");

  return (
    <section id="stack" className="py-24 md:py-32 bg-theme-bg border-b border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <div className="mb-6">
          <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold">
            02 // Core Foundation
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-14">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-theme-muted block mb-3">
            Primary Stack
          </span>
          <h2 className="font-editorial-serif text-[clamp(2.5rem,5.5vw,5rem)] font-normal tracking-tight text-theme-text leading-[1.02]">
            React. <br />
            TypeScript. <br />
            <span className="italic text-[var(--accent-color)]">Modern Web.</span>
          </h2>
        </div>

        {/* Two Interactive Technical Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel 1: React */}
          <div
            onMouseEnter={() => setActivePanel("react")}
            className={`p-8 sm:p-10 rounded-xl border transition-all duration-200 ${
              activePanel === "react"
                ? "bg-theme-surface border-theme-borderStrong shadow-md"
                : "bg-theme-surface/60 border-theme-border hover:border-theme-borderStrong"
            }`}
          >
            {/* Top Bar with React Icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-11 h-11 rounded-lg bg-theme-elevated border border-theme-border flex items-center justify-center">
                <svg className="w-6 h-6 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
                  <circle cx="0" cy="0" r="2.05" />
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </div>

              <span className="font-mono text-xs text-theme-muted uppercase tracking-wider">
                Frontend Architecture
              </span>
            </div>

            <h3 className="font-sans font-bold text-2xl text-theme-text mb-4 tracking-tight">
              React &amp; Next.js
            </h3>

            <ul className="space-y-3 font-mono text-xs sm:text-sm text-theme-muted mb-8">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)]" />
                <span>Component-driven UI architecture</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)]" />
                <span>Custom hooks and state management</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)]" />
                <span>Server Components and fast page rendering</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)]" />
                <span>Responsive layouts with Tailwind CSS</span>
              </li>
            </ul>

            {/* Code Snippet */}
            <div className="p-4 rounded-md bg-theme-elevated border border-theme-border font-mono text-[11px] leading-relaxed text-theme-muted overflow-x-auto">
              <div className="text-[var(--accent-color)] font-semibold mb-1">// Declarative state management</div>
              <div>const [state, dispatch] = useReducer(reducer, initial);</div>
              <div>useEffect(() =&gt; subscribeToData(dispatch), []);</div>
            </div>
          </div>

          {/* Panel 2: JavaScript & Backend */}
          <div
            onMouseEnter={() => setActivePanel("js")}
            className={`p-8 sm:p-10 rounded-xl border transition-all duration-200 ${
              activePanel === "js"
                ? "bg-theme-surface border-theme-borderStrong shadow-md"
                : "bg-theme-surface/60 border-theme-border hover:border-theme-borderStrong"
            }`}
          >
            {/* Top Bar with JS Icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-11 h-11 rounded-lg bg-[#F7DF1E]/15 border border-[#F7DF1E]/30 flex items-center justify-center">
                <span className="font-mono font-bold text-base text-[#F7DF1E]">JS</span>
              </div>

              <span className="font-mono text-xs text-theme-muted uppercase tracking-wider">
                Backend &amp; Logic
              </span>
            </div>

            <h3 className="font-sans font-bold text-2xl text-theme-text mb-4 tracking-tight">
              TypeScript &amp; Node.js
            </h3>

            <ul className="space-y-3 font-mono text-xs sm:text-sm text-theme-muted mb-8">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)]" />
                <span>TypeScript typing and code correctness</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)]" />
                <span>RESTful APIs with Node.js and Express</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)]" />
                <span>Database design with PostgreSQL and MongoDB</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)]" />
                <span>Async workflows and API integrations</span>
              </li>
            </ul>

            {/* Code Snippet */}
            <div className="p-4 rounded-md bg-theme-elevated border border-theme-border font-mono text-[11px] leading-relaxed text-theme-muted overflow-x-auto">
              <div className="text-[var(--accent-color)] font-semibold mb-1">// API endpoint handling</div>
              <div>const results = await Promise.allSettled(tasks.map(run));</div>
              <div>return results.filter(r =&gt; r.status === &apos;fulfilled&apos;);</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
