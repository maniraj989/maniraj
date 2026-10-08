export interface TechItem {
  name: string;
  category: string;
  tagline: string;
  color?: string;
  svgIcon: string;
}

export const toolsData: TechItem[] = [
  // 1. Core Programming & Problem Solving
  {
    name: "Java",
    category: "Core Programming",
    tagline: "Programming fundamentals, OOP & problem solving",
    color: "#EA2D2E",
    svgIcon: "java",
  },
  {
    name: "JavaScript",
    category: "Language",
    tagline: "ES6+ programming, DOM manipulation & web logic",
    color: "#F7DF1E",
    svgIcon: "javascript",
  },
  {
    name: "TypeScript",
    category: "Language",
    tagline: "TypeScript development, static types and interfaces",
    color: "#3178C6",
    svgIcon: "typescript",
  },
  {
    name: "Python",
    category: "Language",
    tagline: "Problem solving and algorithms implementation",
    color: "#3776AB",
    svgIcon: "python",
  },
  {
    name: "SQL",
    category: "Database Language",
    tagline: "Relational queries and database schema design",
    color: "#00758F",
    svgIcon: "sql",
  },

  // 2. Frontend Development
  {
    name: "React",
    category: "Frontend",
    tagline: "Component-based UI development & state hooks",
    color: "#61DAFB",
    svgIcon: "react",
  },
  {
    name: "Next.js",
    category: "Frontend",
    tagline: "Full-stack React applications & server rendering",
    color: "#000000",
    svgIcon: "nextjs",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    tagline: "Utility-first styling for responsive web interfaces (actively used)",
    color: "#06B6D4",
    svgIcon: "tailwind",
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    tagline: "Semantic markup and responsive layouts",
    color: "#E34F26",
    svgIcon: "htmlcss",
  },

  // 3. Backend Development
  {
    name: "Node.js",
    category: "Backend",
    tagline: "Node.js backend development & REST APIs",
    color: "#339933",
    svgIcon: "nodejs",
  },
  {
    name: "Express.js",
    category: "Backend",
    tagline: "REST API development and routing middleware",
    color: "#000000",
    svgIcon: "express",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    tagline: "Currently learning: backend REST APIs & services",
    color: "#6DB33F",
    svgIcon: "springboot",
  },

  // 4. Databases & Backend Services
  {
    name: "PostgreSQL",
    category: "Database",
    tagline: "PostgreSQL database design & relational data modeling",
    color: "#4169E1",
    svgIcon: "postgresql",
  },
  {
    name: "Supabase",
    category: "Backend Service",
    tagline: "Supabase backend services & authentication",
    color: "#3ECF8E",
    svgIcon: "supabase",
  },
  {
    name: "MongoDB",
    category: "Database",
    tagline: "NoSQL database for application data",
    color: "#47A248",
    svgIcon: "mongodb",
  },
  {
    name: "MySQL",
    category: "Database",
    tagline: "Relational database management & queries",
    color: "#00758F",
    svgIcon: "mysql",
  },

  // 5. Development Tools & Design
  {
    name: "Git",
    category: "Tools",
    tagline: "Git version control & source management",
    color: "#F05032",
    svgIcon: "git",
  },
  {
    name: "GitHub",
    category: "Tools",
    tagline: "GitHub repositories, workflows & collaboration",
    color: "#181717",
    svgIcon: "github",
  },
  {
    name: "Docker",
    category: "Tools",
    tagline: "Docker fundamentals & environment isolation",
    color: "#2496ED",
    svgIcon: "docker",
  },
  {
    name: "Vercel",
    category: "Deployment",
    tagline: "Production deployment & edge hosting",
    color: "#000000",
    svgIcon: "vercel",
  },
  {
    name: "Figma",
    category: "Design",
    tagline: "UI wireframing & prototypes",
    color: "#F24E1E",
    svgIcon: "figma",
  },
];

export const techStackData = toolsData;
