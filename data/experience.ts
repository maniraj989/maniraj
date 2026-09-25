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
    role: "Senior Full Stack Developer",
    company: "MM Digital Garage",
    period: "Dec 2025 — Present",
    startDate: "Dec 2025",
    endDate: null,
    current: true,
  },
  {
    id: "digital-cafe-india",
    role: "Full Stack Developer",
    company: "Digital Cafe India",
    period: "Sep 2024 — Nov 2025",
    startDate: "Sep 2024",
    endDate: "Nov 2025",
    current: false,
  },
  {
    id: "freelance-frontend",
    role: "Frontend Developer & Designer",
    company: "Freelance",
    period: "Jun 2023 — Jul 2024",
    startDate: "Jun 2023",
    endDate: "Jul 2024",
    current: false,
    description:
      "Delivered custom, lightweight websites and custom digital interfaces for early startups. Maintained high quality codebases, fast load times, and custom graphic designs.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Figma"],
  },
];
