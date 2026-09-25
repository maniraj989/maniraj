export type AccentColor = "blue" | "violet" | "emerald" | "orange";
export type Mode = "dark" | "light";

export interface AccentTheme {
  id: AccentColor;
  name: string;
  color: string;
  rgb: string;
  hover: string;
}

export const ACCENT_THEMES: AccentTheme[] = [
  {
    id: "blue",
    name: "Blue",
    color: "#315BFF",
    rgb: "49, 91, 255",
    hover: "#2046E0",
  },
  {
    id: "violet",
    name: "Violet",
    color: "#8B5CF6",
    rgb: "139, 92, 246",
    hover: "#7C3AED",
  },
  {
    id: "emerald",
    name: "Emerald",
    color: "#10B981",
    rgb: "16, 185, 129",
    hover: "#059669",
  },
  {
    id: "orange",
    name: "Orange",
    color: "#F97316",
    rgb: "249, 115, 22",
    hover: "#EA580C",
  },
];
