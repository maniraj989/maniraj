export interface TechItem {
  name: string;
  category: string;
  tagline: string;
  color?: string;
  svgIcon: string;
}

export const toolsData: TechItem[] = [
  // Languages
  {
    name: "Java",
    category: "Language",
    tagline: "Object-oriented programming, core software development, and application architecture",
    color: "#EA2D2E",
    svgIcon: "java",
  },
  {
    name: "JavaScript",
    category: "Language",
    tagline: "ES6+ web programming, asynchronous event loop, and full-stack runtime logic",
    color: "#F7DF1E",
    svgIcon: "javascript",
  },
  {
    name: "TypeScript",
    category: "Language",
    tagline: "Static typing, compile-time safety, interface contracts, and maintainable codebases",
    color: "#3178C6",
    svgIcon: "typescript",
  },
  {
    name: "SQL",
    category: "Language",
    tagline: "Relational queries, database schema design, table joins, and data integrity",
    color: "#00758F",
    svgIcon: "sql",
  },
  {
    name: "Python",
    category: "Language",
    tagline: "Scripting, algorithmic problem solving, and data structures implementation",
    color: "#3776AB",
    svgIcon: "python",
  },

  // Frontend
  {
    name: "React",
    category: "Frontend",
    tagline: "Component-driven UI architecture, custom hooks, and reactive state management",
    color: "#61DAFB",
    svgIcon: "react",
  },
  {
    name: "Next.js",
    category: "Frontend",
    tagline: "Server-side rendering, App Router architecture, and production web applications",
    color: "#000000",
    svgIcon: "nextjs",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    tagline: "Utility-first styling, design system tokens, and responsive mobile-first layouts",
    color: "#06B6D4",
    svgIcon: "tailwind",
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    tagline: "Semantic markup, responsive layout modeling, accessibility, and modern web standards",
    color: "#E34F26",
    svgIcon: "htmlcss",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    tagline: "Asynchronous event-driven server runtime and API execution",
    color: "#339933",
    svgIcon: "nodejs",
  },
  {
    name: "Express.js",
    category: "Backend",
    tagline: "RESTful web APIs, routing middleware, and backend service integration",
    color: "#000000",
    svgIcon: "express",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    tagline: "REST APIs, backend services, dependency injection, and application architecture",
    color: "#6DB33F",
    svgIcon: "springboot",
  },

  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    tagline: "Relational data modeling, queries, constraints, and application databases",
    color: "#4169E1",
    svgIcon: "postgresql",
  },
  {
    name: "Supabase",
    category: "Database",
    tagline: "PostgreSQL, authentication, storage, and backend services",
    color: "#3ECF8E",
    svgIcon: "supabase",
  },
  {
    name: "MongoDB",
    category: "Database",
    tagline: "NoSQL document storage, flexible schemas, and aggregation pipelines",
    color: "#47A248",
    svgIcon: "mongodb",
  },
  {
    name: "MySQL",
    category: "Database",
    tagline: "Relational database management, tables, and structured transactional queries",
    color: "#00758F",
    svgIcon: "mysql",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    tagline: "Version control and collaborative development workflows",
    color: "#F05032",
    svgIcon: "git",
  },
  {
    name: "GitHub",
    category: "Tools",
    tagline: "Code hosting, version control workflows, code review, and public repositories",
    color: "#181717",
    svgIcon: "github",
  },
  {
    name: "Docker",
    category: "Tools",
    tagline: "Application containerization for consistent local environments",
    color: "#2496ED",
    svgIcon: "docker",
  },
  {
    name: "Vercel",
    category: "Tools",
    tagline: "Cloud edge deployment, automated CI previews, and production hosting",
    color: "#000000",
    svgIcon: "vercel",
  },

  // Design
  {
    name: "Figma",
    category: "Design",
    tagline: "UI wireframing, responsive interface layouts, and design prototypes",
    color: "#F24E1E",
    svgIcon: "figma",
  },
];

export const techStackData = toolsData;
