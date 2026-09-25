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
            02 // Philosophy &amp; Core
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-14">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-theme-muted block mb-3">
            The Stack I Think In
          </span>
          <h2 className="font-editorial-serif text-[clamp(2.5rem,5.5vw,5rem)] font-normal tracking-tight text-theme-text leading-[1.02]">
            React. <br />
            JavaScript. <br />
            <span className="italic text-[var(--accent-color)]">The web.</span>
          </h2>
        </div>

        {/* Two Sophisticated Interactive Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Panel 1: React */}
          <div
            onMouseEnter={() => setActivePanel("react")}
            className={`group relative p-8 sm:p-10 rounded-2xl border transition-all duration-300 cursor-default ${
              activePanel === "react"
                ? "bg-theme-surface border-theme-borderStrong shadow-xl -translate-y-1.5"
                : "bg-theme-surface/60 border-theme-border hover:border-theme-borderStrong"
            }`}
          >
            {/* Top Bar with React Icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-theme-elevated border border-theme-border flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-7 h-7 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
                  <circle cx="0" cy="0" r="2.05" />
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </div>

              <span className="font-mono text-xs text-theme-muted uppercase tracking-wider">
                01 // Frontend Core
              </span>
            </div>

            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-theme-text mb-4 tracking-tight">
              React
            </h3>

            <ul className="space-y-3 font-mono text-xs sm:text-sm text-theme-muted mb-8">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                <span>Component-driven interfaces</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                <span>Reusable architecture &amp; Custom hooks</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                <span>State machines &amp; Interactive experiences</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                <span>Next.js Server Components optimization</span>
              </li>
            </ul>

            {/* Embedded Code Snippet */}
            <div className="p-4 rounded-lg bg-theme-elevated border border-theme-border font-mono text-[11px] leading-relaxed text-theme-muted overflow-x-auto">
              <div className="text-[var(--accent-color)] font-semibold mb-1">// Declarative state synchronization</div>
              <div>const [state, dispatch] = useReducer(reducer, initial);</div>
              <div>useEffect(() =&gt; subscribeToLiveStream(dispatch), []);</div>
            </div>
          </div>

          {/* Panel 2: JavaScript */}
          <div
            onMouseEnter={() => setActivePanel("js")}
            className={`group relative p-8 sm:p-10 rounded-2xl border transition-all duration-300 cursor-default ${
              activePanel === "js"
                ? "bg-theme-surface border-theme-borderStrong shadow-xl -translate-y-1.5"
                : "bg-theme-surface/60 border-theme-border hover:border-theme-borderStrong"
            }`}
          >
            {/* Top Bar with JS Icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#F7DF1E]/15 border border-[#F7DF1E]/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="font-mono font-bold text-lg text-[#F7DF1E]">JS</span>
              </div>

              <span className="font-mono text-xs text-theme-muted uppercase tracking-wider">
                02 // Engine &amp; APIs
              </span>
            </div>

            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-theme-text mb-4 tracking-tight">
              JavaScript
            </h3>

            <ul className="space-y-3 font-mono text-xs sm:text-sm text-theme-muted mb-8">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                <span>Modern ES6+ syntax &amp; Functional patterns</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                <span>Async architecture &amp; Event loop mastery</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                <span>Web APIs: Canvas, IntersectionObserver, Fetch</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                <span>High-throughput Node.js microservices</span>
              </li>
            </ul>

            {/* Embedded Code Snippet */}
            <div className="p-4 rounded-lg bg-theme-elevated border border-theme-border font-mono text-[11px] leading-relaxed text-theme-muted overflow-x-auto">
              <div className="text-[var(--accent-color)] font-semibold mb-1">// Concurrent event orchestration</div>
              <div>const results = await Promise.allSettled(tasks.map(run));</div>
              <div>return results.filter(r =&gt; r.status === &apos;fulfilled&apos;);</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
