"use client";

import { useState } from "react";

export default function CodeVisual() {
  const [activeTab, setActiveTab] = useState<"dev" | "arch">("dev");

  return (
    <div className="relative w-full max-w-[540px]">
      {/* Floating Tech Badges around the Visual */}
      <div className="hidden sm:flex absolute -top-4 -right-2 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-theme-surface border border-theme-border shadow-md animate-bounce duration-[3000ms]">
        <svg className="w-3.5 h-3.5 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
        <span className="font-mono text-[11px] font-medium text-theme-text">React 19</span>
      </div>

      <div className="hidden sm:flex absolute -bottom-4 -left-3 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-theme-surface border border-theme-border shadow-md animate-pulse">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-color)]" />
        <span className="font-mono text-[11px] font-medium text-theme-text">Next.js 15 App Router</span>
      </div>

      <div className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 items-center gap-1.5 px-2.5 py-1 rounded-full bg-theme-surface border border-theme-border shadow-sm">
        <span className="font-mono text-[10px] text-[#F7DF1E] font-bold">JS</span>
        <span className="font-mono text-[11px] text-theme-muted">ESNext</span>
      </div>

      {/* Main Browser / Code Window */}
      <div className="rounded-xl overflow-hidden bg-theme-surface border border-theme-border shadow-2xl transition-all duration-300 hover:border-theme-borderStrong">
        {/* Window Chrome / Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-theme-elevated border-b border-theme-border">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40 inline-block" />
          </div>

          {/* URL Bar */}
          <div className="px-4 py-1 rounded-md bg-theme-surface border border-theme-border text-[11px] font-mono text-theme-muted flex items-center gap-1.5">
            <span className="text-[var(--accent-color)]">https://</span>
            <span className="text-theme-text font-medium">maniraj.dev</span>
          </div>

          {/* Live Indicator */}
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>active</span>
          </div>
        </div>

        {/* Tab Headers */}
        <div className="flex items-center border-b border-theme-border bg-theme-surface text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab("dev")}
            className={`px-4 py-2 border-r border-theme-border flex items-center gap-2 transition-colors ${
              activeTab === "dev"
                ? "bg-theme-elevated text-theme-text font-medium border-t-2 border-t-[var(--accent-color)]"
                : "text-theme-muted hover:text-theme-text"
            }`}
          >
            <span>developer.ts</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("arch")}
            className={`px-4 py-2 border-r border-theme-border flex items-center gap-2 transition-colors ${
              activeTab === "arch"
                ? "bg-theme-elevated text-theme-text font-medium border-t-2 border-t-[var(--accent-color)]"
                : "text-theme-muted hover:text-theme-text"
            }`}
          >
            <span>architecture.json</span>
          </button>
        </div>

        {/* Code Content */}
        <div className="p-5 font-mono text-xs leading-relaxed select-text overflow-x-auto no-scrollbar">
          {activeTab === "dev" ? (
            <div className="space-y-1.5">
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">1</span>
                <span>
                  <span className="text-[var(--accent-color)]">interface</span>{" "}
                  <span className="text-emerald-500">FullStackEngineer</span> &#123;
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">2</span>
                <span className="pl-4">
                  name: <span className="text-amber-500">&quot;Maniraj Sharma&quot;</span>;
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">3</span>
                <span className="pl-4">
                  location: <span className="text-amber-500">&quot;India&quot;</span>;
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">4</span>
                <span className="pl-4">
                  core: [<span className="text-emerald-500">&quot;React&quot;</span>,{" "}
                  <span className="text-emerald-500">&quot;JavaScript&quot;</span>,{" "}
                  <span className="text-emerald-500">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-500">&quot;Node.js&quot;</span>];
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">5</span>
                <span className="pl-4">
                  philosophy: <span className="text-amber-500">&quot;Clean code · Scalable systems · UX&quot;</span>;
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">6</span>
                <span className="pl-4">
                  openForHiring: <span className="text-[var(--accent-color)] font-bold">true</span>;
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">7</span>
                <span>&#125;</span>
              </div>
              <div className="flex gap-4 pt-1">
                <span className="text-theme-muted/40 select-none w-4 text-right">8</span>
                <span>
                  <span className="text-[var(--accent-color)]">export default</span>{" "}
                  <span className="text-emerald-500">ManirajSharma</span>;
                  <span className="inline-block w-2 h-4 bg-[var(--accent-color)] ml-1.5 align-middle animate-pulse" />
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-1.5">
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">1</span>
                <span>&#123;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">2</span>
                <span className="pl-4">
                  <span className="text-[var(--accent-color)]">&quot;frontend&quot;</span>: &#123;
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">3</span>
                <span className="pl-8">
                  <span className="text-emerald-500">&quot;framework&quot;</span>: <span className="text-amber-500">&quot;Next.js 15 App Router&quot;</span>,
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">4</span>
                <span className="pl-8">
                  <span className="text-emerald-500">&quot;state&quot;</span>: <span className="text-amber-500">&quot;React Context &amp; Hooks&quot;</span>
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">5</span>
                <span className="pl-4">&#125;,</span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">6</span>
                <span className="pl-4">
                  <span className="text-[var(--accent-color)]">&quot;backend&quot;</span>: [<span className="text-amber-500">&quot;Node.js&quot;</span>, <span className="text-amber-500">&quot;Express.js&quot;</span>, <span className="text-amber-500">&quot;MongoDB&quot;</span>]
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">7</span>
                <span>&#125;</span>
              </div>
            </div>
          )}
        </div>

        {/* Code Visual Footer */}
        <div className="px-5 py-2.5 bg-theme-elevated border-t border-theme-border flex items-center justify-between text-[11px] font-mono text-theme-muted">
          <div className="flex items-center gap-3">
            <span>UTF-8</span>
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-1.5 text-theme-text">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
            <span>Ready for production</span>
          </div>
        </div>
      </div>
    </div>
  );
}
