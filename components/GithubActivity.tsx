"use client";

import { useState, useEffect, useMemo } from "react";
import { ArrowRight, BookOpen, Users, GitCommit } from "lucide-react";
import { generateContributionGrid, fetchGitHubUserData, GitHubStats } from "@/lib/github";

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

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function GithubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const weeks = useMemo(() => generateContributionGrid(52), []);

  useEffect(() => {
    fetchGitHubUserData("manirajsharma").then((data) => {
      if (data) setStats(data);
    });
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-900/60";
      case 2:
        return "bg-emerald-600";
      case 3:
        return "bg-emerald-400";
      case 4:
        return "bg-emerald-300";
      default:
        return "bg-[#1E242E]";
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#06080B] text-white border-b border-[#252A33]">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#252A33]">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold block mb-2">
              06 // Public Code
            </span>
            <h2 className="font-editorial-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal tracking-tight text-white leading-tight">
              Open Source / Activity
            </h2>
          </div>

          <a
            href={stats?.profileUrl || "https://github.com/manirajsharma"}
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
          <div className="lg:col-span-8 p-6 rounded-2xl bg-[#0D1117] border border-[#252A33] overflow-x-auto no-scrollbar">
            <div className="flex justify-between text-[11px] font-mono text-neutral-500 mb-3 pl-8 min-w-[580px]">
              {MONTHS.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            <div className="flex gap-[3.5px] min-w-[580px]">
              <div className="flex flex-col justify-between text-[10px] text-neutral-500 font-mono pr-2 select-none h-[100px]">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              <div className="flex gap-[3.5px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3.5px]">
                    {week.days.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        title={`${day.date}: ${day.count} contributions`}
                        className={`w-[10px] h-[10px] rounded-[2px] transition-transform duration-75 hover:scale-125 ${getCellColor(
                          day.level
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-4 border-t border-[#252A33]">
              <span className="flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                <span>52 weeks contribution timeline</span>
              </span>

              <div className="flex items-center gap-1.5 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#1E242E]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900/60" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-300" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Metrics Stack */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 rounded-xl bg-[#0D1117] border border-[#252A33] flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#161B22] border border-[#252A33] flex items-center justify-center shrink-0">
                <GitHubIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white tracking-tight">
                  {stats?.totalContributions ?? "487"}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Annual Contributions
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#0D1117] border border-[#252A33] flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#161B22] border border-[#252A33] flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white tracking-tight">
                  {stats?.publicRepos ?? "12"}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Public Repositories
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#0D1117] border border-[#252A33] flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#161B22] border border-[#252A33] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white tracking-tight">
                  {stats?.followers ?? "36"}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Network Followers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
