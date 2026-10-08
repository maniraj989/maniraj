export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description?: string;
  technologies?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "mm-digital-garage",
    role: "Founder & Full Stack Developer",
    company: "MM Digital Garage",
    period: "Dec 2025 - Present",
    startDate: "Dec 2025",
    endDate: null,
    current: true,
    description:
      "Designed and developed production web applications and business systems across frontend, backend, database, and deployment layers. Engineered scalable Next.js applications, built API endpoints, and structured database models.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"],
  },
  {
    id: "digital-cafe-india",
    role: "Full Stack Developer",
    company: "Digital Cafe India",
    period: "Sep 2024 - Nov 2025",
    startDate: "Sep 2024",
    endDate: "Nov 2025",
    current: false,
    description:
      "Developed responsive web applications across client interfaces and backend services. Implemented RESTful APIs, optimized database queries, and collaborated on clean code architecture.",
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "freelance-frontend",
    role: "Frontend Developer & Designer",
    company: "Freelance",
    period: "Jun 2023 - Jul 2024",
    startDate: "Jun 2023",
    endDate: "Jul 2024",
    current: false,
    description:
      "Delivered responsive client interfaces and digital prototypes for startups and small businesses. Maintained high performance, accessible semantic HTML, and custom UI components.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Figma"],
  },
];
