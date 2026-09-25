import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: "var(--bg-main)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-surface-elevated)",
          text: "var(--text-main)",
          muted: "var(--text-muted)",
          border: "var(--border-subtle)",
          borderStrong: "var(--border-strong)",
        },
        accent: {
          DEFAULT: "var(--accent-color)",
          hover: "var(--accent-hover)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Space Grotesk", "sans-serif"],
        display: ["var(--font-display)", "Instrument Serif", "Georgia", "serif"],
      },
      maxWidth: {
        editorial: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
