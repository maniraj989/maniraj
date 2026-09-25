export interface EditorialAchievement {
  number: string;
  title: string;
  context: string;
  year?: string;
}

export const editorialAchievements: EditorialAchievement[] = [
  {
    number: "01",
    title: "Dean's List",
    context: "Academic Excellence & Top Percentile Recognition",
    year: "2023",
  },
  {
    number: "02",
    title: "Certifications",
    context: "Advanced Full-Stack Systems & Enterprise Architecture",
    year: "2024",
  },
  {
    number: "03",
    title: "Selected Projects",
    context: "Production-ready Web Applications & Distributed APIs",
    year: "2025",
  },
  {
    number: "04",
    title: "Open Source",
    context: "Active modern JavaScript & UI Component Ecosystem",
    year: "Active",
  },
];
