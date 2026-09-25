"use client";

import { useTheme } from "./ThemeContext";
import { ACCENT_THEMES } from "@/lib/themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { mode, accent, setAccent, toggleMode } = useTheme();

  return (
    <div className="flex items-center space-x-3 text-xs">
      {/* 4 Accent Color Swatches */}
      <div className="flex items-center space-x-1.5 p-1 rounded-full bg-theme-surface border border-theme-border">
        {ACCENT_THEMES.map((item) => {
          const isSelected = accent === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setAccent(item.id)}
              className="group relative p-0.5 rounded-full focus:outline-none"
              aria-label={`Switch accent color to ${item.name}`}
            >
              <span
                className={`block w-3.5 h-3.5 rounded-full transition-transform duration-150 ${
                  isSelected ? "scale-110 ring-2 ring-offset-1 ring-offset-theme-surface ring-theme-borderStrong" : "hover:scale-105 opacity-80 hover:opacity-100"
                }`}
                style={{ backgroundColor: item.color }}
              />

              {/* Tooltip on hover */}
              <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-medium bg-theme-surface border border-theme-border text-theme-text opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-sm whitespace-nowrap z-50">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dark / Light Mode Toggle: ☼ / ◐ */}
      <button
        type="button"
        onClick={toggleMode}
        className="p-1.5 rounded-full bg-theme-surface border border-theme-border text-theme-text hover:border-theme-borderStrong transition-colors duration-150"
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
        title={`Toggle to ${mode === "dark" ? "light" : "dark"} mode`}
      >
        {mode === "dark" ? (
          <Sun className="w-3.5 h-3.5 text-amber-400" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-neutral-700" />
        )}
      </button>
    </div>
  );
}
