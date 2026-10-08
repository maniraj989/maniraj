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
    context: "Built and launched web applications for e-learning, inventory, agency and restaurant use cases.",
    year: "Production",
  },
  {
    number: "03",
    title: "Full-Stack Engineering",
    context: "Built responsive interfaces, backend APIs and database-driven applications.",
    year: "Engineering",
  },
  {
    number: "04",
    title: "Open Source Activity",
    context: "Active development workflows and public repositories on GitHub.",
    year: "GitHub",
  },
];
