export interface TechItem {
  name: string;
  category: string;
  tagline: string;
  color?: string;
  svgIcon: string;
  isPrimary?: boolean;
}

export const toolsData: TechItem[] = [
  // Core Languages & Problem Solving
  {
    name: "Java",
    category: "Core Programming",
    tagline: "Programming fundamentals, OOP and problem solving",
    color: "#EA2D2E",
    svgIcon: "java",
    isPrimary: true,
  },
  {
    name: "JavaScript",
    category: "Web Development",
    tagline: "Modern web development and client-side logic",
    color: "#F7DF1E",
    svgIcon: "javascript",
    isPrimary: true,
  },
  {
    name: "TypeScript",
    category: "Languages",
    tagline: "Type-safe application development across frontend and full-stack",
    color: "#3178C6",
    svgIcon: "typescript",
    isPrimary: true,
  },

  // Frontend & Full-Stack
  {
    name: "React",
    category: "Frontend",
    tagline: "Component-based UI development and state management",
    color: "#61DAFB",
    svgIcon: "react",
    isPrimary: true,
  },
  {
    name: "Next.js",
    category: "Full-Stack",
    tagline: "Component-based frontend and full-stack React applications",
    color: "#000000",
    svgIcon: "nextjs",
    isPrimary: true,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    tagline: "Responsive interface development (actively used)",
    color: "#06B6D4",
    svgIcon: "tailwind",
    isPrimary: true,
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    tagline: "Semantic markup and responsive layouts",
    color: "#E34F26",
    svgIcon: "htmlcss",
  },

  // Backend Development
  {
    name: "Node.js",
    category: "Backend",
    tagline: "Backend APIs, server-side logic and runtime",
    color: "#339933",
    svgIcon: "nodejs",
    isPrimary: true,
  },
  {
    name: "Express.js",
    category: "Backend",
    tagline: "REST API development and routing middleware",
    color: "#000000",
    svgIcon: "express",
    isPrimary: true,
  },
  {
    name: "Spring Boot",
    category: "Backend",
    tagline: "Currently learning: backend REST APIs and services",
    color: "#6DB33F",
    svgIcon: "springboot",
  },

  // Databases & Backend Services
  {
    name: "PostgreSQL",
    category: "Databases",
    tagline: "Relational database design and structured SQL queries",
    color: "#4169E1",
    svgIcon: "postgresql",
    isPrimary: true,
  },
  {
    name: "Supabase",
    category: "Backend Services",
    tagline: "Relational database integration, Auth and backend services",
    color: "#3ECF8E",
    svgIcon: "supabase",
    isPrimary: true,
  },
  {
    name: "MongoDB",
    category: "Databases",
    tagline: "NoSQL application data in real projects",
    color: "#47A248",
    svgIcon: "mongodb",
  },
  {
    name: "MySQL",
    category: "Databases",
    tagline: "Relational queries and basic database management",
    color: "#00758F",
    svgIcon: "mysql",
  },

  // Engineering Tools
  {
    name: "Git",
    category: "Version Control",
    tagline: "Version control and development workflows",
    color: "#F05032",
    svgIcon: "git",
    isPrimary: true,
  },
  {
    name: "GitHub",
    category: "Collaboration",
    tagline: "Repositories, collaboration and code reviews",
    color: "#181717",
    svgIcon: "github",
    isPrimary: true,
  },
  {
    name: "Docker",
    category: "DevOps",
    tagline: "Containerization and deployment fundamentals",
    color: "#2496ED",
    svgIcon: "docker",
  },
  {
    name: "Vercel",
    category: "Deployment",
    tagline: "Production deployments and cloud hosting",
    color: "#000000",
    svgIcon: "vercel",
  },
  {
    name: "Figma",
    category: "Design",
    tagline: "UI wireframing and interface prototypes",
    color: "#F24E1E",
    svgIcon: "figma",
  },
];

export const techStackData = toolsData;
