"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AccentColor, ACCENT_THEMES, Mode } from "@/lib/themes";

interface ThemeContextType {
  mode: Mode;
  accent: AccentColor;
  setMode: (mode: Mode) => void;
  setAccent: (accent: AccentColor) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("dark");
  const [accent, setAccentState] = useState<AccentColor>("blue");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read from localStorage on mount
    const savedMode = localStorage.getItem("mani-portfolio-mode") as Mode | null;
    const savedAccent = localStorage.getItem("mani-portfolio-accent") as AccentColor | null;

    if (savedMode && (savedMode === "dark" || savedMode === "light")) {
      setModeState(savedMode);
    } else {
      setModeState("dark");
    }

    if (savedAccent && ACCENT_THEMES.some((t) => t.id === savedAccent)) {
      setAccentState(savedAccent);
    } else {
      setAccentState("blue");
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    // Set mode class
    if (mode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("mani-portfolio-mode", mode);

    // Apply accent CSS variables
    const currentTheme = ACCENT_THEMES.find((t) => t.id === accent) || ACCENT_THEMES[0];
    root.style.setProperty("--accent-color", currentTheme.color);
    root.style.setProperty("--accent-rgb", currentTheme.rgb);
    root.style.setProperty("--accent-hover", currentTheme.hover);
    localStorage.setItem("mani-portfolio-accent", accent);
  }, [mode, accent, mounted]);

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
  };

  const setAccent = (newAccent: AccentColor) => {
    setAccentState(newAccent);
  };

  const toggleMode = () => {
    setModeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, accent, setMode, setAccent, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
