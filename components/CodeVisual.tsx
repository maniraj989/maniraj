"use client";

import { useState } from "react";

export default function CodeVisual() {
  const [activeTab, setActiveTab] = useState<"dev" | "arch">("dev");

  return (
    <div className="relative w-full max-w-[540px]">
      {/* Main Browser / Code Window */}
      <div className="rounded-xl overflow-hidden bg-theme-surface border border-theme-border shadow-lg transition-all duration-300 hover:border-theme-borderStrong">
        {/* Window Chrome / Titlebar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-theme-elevated border-b border-theme-border gap-2">
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40 inline-block" />
          </div>

          {/* URL Bar */}
          <div className="px-2.5 sm:px-4 py-1 rounded-md bg-theme-surface border border-theme-border text-[10px] sm:text-[11px] font-mono text-theme-muted flex items-center gap-1 sm:gap-1.5 truncate min-w-0">
            <span className="text-[var(--accent-color)] hidden xs:inline">https://</span>
            <span className="text-theme-text font-medium truncate">manirajsharma.com.np</span>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500 shrink-0">
            <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500" />
            <span className="hidden sm:inline">online</span>
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
                  <span className="text-emerald-500">SoftwareDeveloper</span> &#123;
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
                  focus: <span className="text-amber-500">&quot;Full-stack applications &amp; business systems&quot;</span>;
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">5</span>
                <span className="pl-4">
                  frontend: [<span className="text-emerald-500">&quot;React&quot;</span>,{" "}
                  <span className="text-emerald-500">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-500">&quot;TypeScript&quot;</span>];
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">6</span>
                <span className="pl-4">
                  backend: [<span className="text-emerald-500">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-emerald-500">&quot;Express&quot;</span>,{" "}
                  <span className="text-emerald-500">&quot;Java&quot;</span>,{" "}
                  <span className="text-emerald-500">&quot;Spring Boot&quot;</span>];
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">7</span>
                <span className="pl-4">
                  databases: [<span className="text-emerald-500">&quot;PostgreSQL&quot;</span>,{" "}
                  <span className="text-emerald-500">&quot;Supabase&quot;</span>,{" "}
                  <span className="text-emerald-500">&quot;MongoDB&quot;</span>];
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">8</span>
                <span className="pl-4">
                  available: <span className="text-[var(--accent-color)] font-bold">true</span>;
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">9</span>
                <span>&#125;</span>
              </div>
              <div className="flex gap-4 pt-1">
                <span className="text-theme-muted/40 select-none w-4 text-right">10</span>
                <span>
                  <span className="text-[var(--accent-color)]">export default</span>{" "}
                  <span className="text-emerald-500">ManirajSharma</span>;
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
                  <span className="text-[var(--accent-color)]">&quot;frontend&quot;</span>: [<span className="text-amber-500">&quot;React&quot;</span>, <span className="text-amber-500">&quot;Next.js&quot;</span>, <span className="text-amber-500">&quot;TypeScript&quot;</span>, <span className="text-amber-500">&quot;Tailwind CSS&quot;</span>],
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">3</span>
                <span className="pl-4">
                  <span className="text-[var(--accent-color)]">&quot;backend&quot;</span>: [<span className="text-amber-500">&quot;Node.js&quot;</span>, <span className="text-amber-500">&quot;Express.js&quot;</span>, <span className="text-amber-500">&quot;Java&quot;</span>, <span className="text-amber-500">&quot;Spring Boot&quot;</span>],
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">4</span>
                <span className="pl-4">
                  <span className="text-[var(--accent-color)]">&quot;databases&quot;</span>: [<span className="text-amber-500">&quot;PostgreSQL&quot;</span>, <span className="text-amber-500">&quot;Supabase&quot;</span>, <span className="text-amber-500">&quot;MongoDB&quot;</span>],
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">5</span>
                <span className="pl-4">
                  <span className="text-[var(--accent-color)]">&quot;tooling&quot;</span>: [<span className="text-amber-500">&quot;Git&quot;</span>, <span className="text-amber-500">&quot;GitHub&quot;</span>, <span className="text-amber-500">&quot;Docker&quot;</span>, <span className="text-amber-500">&quot;Vercel&quot;</span>]
                </span>
              </div>
              <div className="flex gap-4">
                <span className="text-theme-muted/40 select-none w-4 text-right">6</span>
                <span>&#125;</span>
              </div>
            </div>
          )}
        </div>

        {/* Code Visual Footer */}
        <div className="px-3.5 sm:px-5 py-2.5 bg-theme-elevated border-t border-theme-border flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-theme-muted gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span>UTF-8</span>
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-1.5 text-theme-text truncate">
            <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)] shrink-0" />
            <span className="truncate">Ready for production</span>
          </div>
        </div>
      </div>
    </div>
  );
}
