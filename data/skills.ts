export interface TechItem {
  name: string;
  category: string;
  tagline: string;
  color?: string;
  svgIcon: string;
  isPrimary?: boolean;
}

export const toolsData: TechItem[] = [
  // 1. CORE PROGRAMMING
  {
    name: "Java",
    category: "Core Programming",
    tagline: "Primary language for DSA, object-oriented programming and backend development.",
    color: "#EA2D2E",
    svgIcon: "java",
    isPrimary: true,
  },
  {
    name: "JavaScript",
    category: "Core Programming",
    tagline: "Web development, DOM manipulation and client logic.",
    color: "#F7DF1E",
    svgIcon: "javascript",
  },
  {
    name: "TypeScript",
    category: "Core Programming",
    tagline: "Typed JavaScript for maintainable frontend and full-stack applications.",
    color: "#3178C6",
    svgIcon: "typescript",
  },
  {
    name: "SQL",
    category: "Core Programming",
    tagline: "Database querying, relational modeling and data management.",
    color: "#00758F",
    svgIcon: "sql",
  },

  // 2. BACKEND ENGINEERING (Java + Spring Boot visually prominent)
  {
    name: "Spring Boot",
    category: "Backend Engineering",
    tagline: "Building REST APIs, backend services and business logic.",
    color: "#6DB33F",
    svgIcon: "springboot",
    isPrimary: true,
  },
  {
    name: "REST APIs",
    category: "Backend Engineering",
    tagline: "API design, endpoint routing, request validation and JSON responses.",
    color: "#F97316",
    svgIcon: "restapi",
  },
  {
    name: "Node.js",
    category: "Backend Engineering",
    tagline: "Node.js backend development, asynchronous runtime and server logic.",
    color: "#339933",
    svgIcon: "nodejs",
  },
  {
    name: "Express.js",
    category: "Backend Engineering",
    tagline: "REST API development and routing middleware.",
    color: "#000000",
    svgIcon: "express",
  },

  // 3. DATABASES (PostgreSQL is primary)
  {
    name: "PostgreSQL",
    category: "Databases",
    tagline: "Relational database design, SQL queries and data modeling (primary database).",
    color: "#4169E1",
    svgIcon: "postgresql",
    isPrimary: true,
  },
  {
    name: "Supabase",
    category: "Databases",
    tagline: "Backend services, authentication workflows and Postgres integration.",
    color: "#3ECF8E",
    svgIcon: "supabase",
  },
  {
    name: "MySQL",
    category: "Databases",
    tagline: "Relational database management, tables, queries and constraints.",
    color: "#00758F",
    svgIcon: "mysql",
  },
  {
    name: "MongoDB",
    category: "Databases",
    tagline: "NoSQL database for application data.",
    color: "#47A248",
    svgIcon: "mongodb",
  },

  // 4. FRONTEND / FULL-STACK
  {
    name: "React",
    category: "Frontend / Full-Stack",
    tagline: "Building responsive, component-driven web applications.",
    color: "#61DAFB",
    svgIcon: "react",
  },
  {
    name: "Next.js",
    category: "Frontend / Full-Stack",
    tagline: "Server-rendered React applications and full-stack web solutions.",
    color: "#000000",
    svgIcon: "nextjs",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend / Full-Stack",
    tagline: "Utility-first CSS for responsive, modern interfaces (actively used).",
    color: "#06B6D4",
    svgIcon: "tailwind",
  },
  {
    name: "HTML & CSS",
    category: "Frontend / Full-Stack",
    tagline: "Semantic web markup, responsive layouts and modern styling.",
    color: "#E34F26",
    svgIcon: "htmlcss",
  },

  // 5. ENGINEERING TOOLS (Kept concise)
  {
    name: "Git",
    category: "Engineering Tools",
    tagline: "Version control, collaboration and development workflows.",
    color: "#F05032",
    svgIcon: "git",
  },
  {
    name: "GitHub",
    category: "Engineering Tools",
    tagline: "Code repository hosting, pull requests and project workflows.",
    color: "#181717",
    svgIcon: "github",
  },
  {
    name: "Docker",
    category: "Engineering Tools",
    tagline: "Containerization fundamentals and environment isolation.",
    color: "#2496ED",
    svgIcon: "docker",
  },
  {
    name: "Vercel",
    category: "Engineering Tools",
    tagline: "Production deployment, automated CI/CD and edge hosting.",
    color: "#000000",
    svgIcon: "vercel",
  },
  {
    name: "Figma",
    category: "Engineering Tools",
    tagline: "UI wireframing, component mockups and interface prototypes.",
    color: "#F24E1E",
    svgIcon: "figma",
  },
];

export const techStackData = toolsData;
