export interface TechItem {
  name: string;
  category: string;
  tagline: string;
  color?: string;
  svgIcon: string;
}

export const toolsData: TechItem[] = [
  {
    name: "React",
    category: "Frontend",
    tagline: "Component-based UI development",
    color: "#61DAFB",
    svgIcon: "react",
  },
  {
    name: "JavaScript",
    category: "Language",
    tagline: "ES6+ web programming & logic",
    color: "#F7DF1E",
    svgIcon: "javascript",
  },
  {
    name: "Next.js",
    category: "Framework",
    tagline: "SSR, SSG & Server Components",
    color: "#000000",
    svgIcon: "nextjs",
  },
  {
    name: "Node.js",
    category: "Backend",
    tagline: "Server-side JavaScript runtime",
    color: "#339933",
    svgIcon: "nodejs",
  },
  {
    name: "Express.js",
    category: "Backend",
    tagline: "RESTful web APIs & routing",
    color: "#000000",
    svgIcon: "express",
  },
  {
    name: "MongoDB",
    category: "Database",
    tagline: "NoSQL document database",
    color: "#47A248",
    svgIcon: "mongodb",
  },
  {
    name: "MySQL",
    category: "Database",
    tagline: "Relational database management",
    color: "#00758F",
    svgIcon: "mysql",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    tagline: "Utility-first CSS styling",
    color: "#06B6D4",
    svgIcon: "tailwind",
  },
  {
    name: "Git",
    category: "Tooling",
    tagline: "Version control & source management",
    color: "#F05032",
    svgIcon: "git",
  },
  {
    name: "GitHub",
    category: "Tooling",
    tagline: "Code hosting & collaboration",
    color: "#181717",
    svgIcon: "github",
  },
  {
    name: "Docker",
    category: "DevOps",
    tagline: "Application containerization",
    color: "#2496ED",
    svgIcon: "docker",
  },
  {
    name: "Figma",
    category: "Design",
    tagline: "UI wireframing & mockups",
    color: "#F24E1E",
    svgIcon: "figma",
  },
];

export const techStackData = toolsData;
