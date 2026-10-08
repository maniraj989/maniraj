"use client";

import { useState, useEffect } from "react";
import { ArrowRight, BookOpen, GitCommit, Calendar, Code } from "lucide-react";
import {
  fetchGitHubCalendarData,
  fetchGitHubUserData,
  GitHubStats,
  WeekContributions,
  MonthLabel,
} from "@/lib/github";

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

export default function GithubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [weeks, setWeeks] = useState<WeekContributions[]>([]);
  const [monthLabels, setMonthLabels] = useState<MonthLabel[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(89);
  const [activeDays, setActiveDays] = useState<number>(30);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const [calendarResult, userResult] = await Promise.all([
          fetchGitHubCalendarData("maniraj989"),
          fetchGitHubUserData("maniraj989"),
        ]);

        if (!isMounted) return;

        if (calendarResult) {
          setWeeks(calendarResult.weeks);
          setMonthLabels(calendarResult.monthLabels);
          setTotalContributions(calendarResult.totalContributions);

          let activeCount = 0;
          calendarResult.weeks.forEach((w) => {
            w.days.forEach((d) => {
              if (d.count > 0) activeCount++;
            });
          });
          setActiveDays(activeCount);
        }

        if (userResult) {
          setStats(userResult);
        }
      } catch (err) {
        console.error("Error loading GitHub data:", err);
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#0e4429] hover:bg-[#006d32]";
      case 2:
        return "bg-[#006d32] hover:bg-[#26a641]";
      case 3:
        return "bg-[#26a641] hover:bg-[#39d353]";
      case 4:
        return "bg-[#39d353] hover:bg-[#56ff77]";
      default:
        return "bg-[#161B22] hover:bg-[#21262d]";
    }
  };

  const formatDateTooltip = (dateStr: string, count: number) => {
    try {
      const d = new Date(dateStr + "T00:00:00");
      const formatted = d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      if (count === 0) return `No contributions on ${formatted}`;
      return `${count} contribution${count === 1 ? "" : "s"} on ${formatted}`;
    } catch {
      return `${dateStr}: ${count} contributions`;
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#06080B] text-white border-b border-[#252A33]">
      <div className="max-w-editorial mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#252A33]">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold block mb-2 flex items-center gap-2">
              <span>06 // Open Source</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-sm bg-emerald-400 mr-1.5" />
                GitHub Sync
              </span>
            </span>
            <h2 className="font-editorial-serif text-[clamp(2.1rem,5.5vw,4.5rem)] font-normal tracking-tight text-white leading-tight">
              GitHub Activity
            </h2>
          </div>

          <a
            href={stats?.profileUrl || "https://github.com/maniraj989"}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-400 hover:text-white uppercase transition-colors"
          >
            <span>View GitHub Profile</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 2-Column: Graph on Left, Metrics on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contribution Graph */}
          <div className="lg:col-span-8 p-6 rounded-xl bg-[#0D1117] border border-[#252A33] overflow-x-auto no-scrollbar shadow-xl">
            {/* Header info inside card */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#21262d]/60 min-w-[720px]">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  <strong className="text-white font-semibold">{totalContributions}</strong> contributions in the last year
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500">
                github.com/maniraj989
              </span>
            </div>

            {/* Month labels accurately positioned over columns */}
            <div className="relative h-4 mb-2 pl-8 min-w-[720px]">
              {monthLabels.map((m, idx) => (
                <span
                  key={`${m.label}-${idx}`}
                  style={{ left: `${32 + m.colIndex * 13.5}px` }}
                  className="absolute text-[10px] font-mono text-neutral-400 select-none"
                >
                  {m.label}
                </span>
              ))}
            </div>

            {/* Day grid */}
            <div className="flex gap-[3.5px] min-w-[720px]">
              {/* Day of week labels */}
              <div className="flex flex-col justify-between text-[10px] text-neutral-500 font-mono pr-2 select-none h-[100px]">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* Weeks */}
              <div className="flex gap-[3.5px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3.5px]">
                    {week.days.map((day, dIdx) => (
                      <div
                        key={`${day.date}-${dIdx}`}
                        title={formatDateTooltip(day.date, day.count)}
                        className={`w-[10px] h-[10px] rounded-[2px] transition-all duration-75 hover:scale-125 cursor-pointer ${getCellColor(
                          day.level
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer with legend */}
            <div className="mt-5 flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-4 border-t border-[#252A33]">
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                <span>Original 52-week timeline</span>
              </span>

              <div className="flex items-center gap-1.5 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#161B22]" title="0 contributions" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429]" title="1-3 contributions" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32]" title="4-6 contributions" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641]" title="7-9 contributions" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353]" title="10+ contributions" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Metrics Stack */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            <div className="p-5 rounded-xl bg-[#0D1117] border border-[#252A33] flex items-center gap-4 hover:border-neutral-600 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-[#161B22] border border-[#252A33] flex items-center justify-center shrink-0">
                <GitHubIcon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white tracking-tight">
                  {totalContributions}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Annual Contributions
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#0D1117] border border-[#252A33] flex items-center gap-4 hover:border-neutral-600 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-[#161B22] border border-[#252A33] flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white tracking-tight">
                  {stats?.publicRepos ?? 7}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Public Repositories
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#0D1117] border border-[#252A33] flex items-center gap-4 hover:border-neutral-600 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-[#161B22] border border-[#252A33] flex items-center justify-center shrink-0">
                <Code className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white tracking-tight">
                  {activeDays}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Active Commit Days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
