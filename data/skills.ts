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
    tagline: "Component-driven UI",
    color: "#61DAFB",
    svgIcon: "react",
  },
  {
    name: "JavaScript",
    category: "Language",
    tagline: "Modern ES6+ web engineering",
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
    tagline: "High-concurrency event-driven runtime",
    color: "#339933",
    svgIcon: "nodejs",
  },
  {
    name: "Express.js",
    category: "Backend",
    tagline: "RESTful API microservices",
    color: "#000000",
    svgIcon: "express",
  },
  {
    name: "MongoDB",
    category: "Database",
    tagline: "Document data modeling & aggregation",
    color: "#47A248",
    svgIcon: "mongodb",
  },
  {
    name: "MySQL",
    category: "Database",
    tagline: "Relational schema design & indexing",
    color: "#00758F",
    svgIcon: "mysql",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    tagline: "Design systems & rapid UI tokens",
    color: "#06B6D4",
    svgIcon: "tailwind",
  },
  {
    name: "Git",
    category: "Tooling",
    tagline: "Version control & trunk branching",
    color: "#F05032",
    svgIcon: "git",
  },
  {
    name: "GitHub",
    category: "Tooling",
    tagline: "CI/CD Actions & open source",
    color: "#181717",
    svgIcon: "github",
  },
  {
    name: "Docker",
    category: "DevOps",
    tagline: "Isolated containerized deployments",
    color: "#2496ED",
    svgIcon: "docker",
  },
  {
    name: "Figma",
    category: "Design",
    tagline: "UI wireframing & design handoff",
    color: "#F24E1E",
    svgIcon: "figma",
  },
];

export const techStackData = toolsData;
