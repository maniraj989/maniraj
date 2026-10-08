export type AccentColor = "blue" | "slate" | "emerald" | "orange";
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
    id: "orange",
    name: "Orange",
    color: "#F97316",
    rgb: "249, 115, 22",
    hover: "#EA580C",
  },
  {
    id: "blue",
    name: "Blue",
    color: "#315BFF",
    rgb: "49, 91, 255",
    hover: "#2046E0",
  },
  {
    id: "slate",
    name: "Slate",
    color: "#64748B",
    rgb: "100, 116, 139",
    hover: "#475569",
  },
  {
    id: "emerald",
    name: "Emerald",
    color: "#10B981",
    rgb: "16, 185, 129",
    hover: "#059669",
  },
];
