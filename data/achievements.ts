export interface EditorialAchievement {
  number: string;
  title: string;
  context: string;
  year?: string;
}

export const editorialAchievements: EditorialAchievement[] = [
  {
    number: "01",
    title: "Academic Standing",
    context: "B.Tech Computer Science with CGPA 8.7 at SRM IST",
    year: "2025 - 2028",
  },
  {
    number: "02",
    title: "Live Deployments",
    context: "Built & launched web applications for e-learning, inventory, agency, and restaurant",
    year: "Production",
  },
  {
    number: "03",
    title: "Full-Stack Engineering",
    context: "Engineered responsive client interfaces, REST endpoints, and database models",
    year: "Ongoing",
  },
  {
    number: "04",
    title: "Open Source Activity",
    context: "Active development workflows and public code repositories on GitHub",
    year: "Active",
  },
];
