export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: "travel-booking-platform",
    title: "Travel Booking Platform",
    description: "A full-stack travel booking platform with user authentication and payment integration.",
    image: "/images/project-travel.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    liveUrl: "https://horizonpeak-travel.demo",
    githubUrl: "https://github.com/manirajsharma/travel-booking-platform",
    features: [
      "Dynamic destination search and filtering",
      "Interactive itinerary planning",
      "Stripe payment gateway integration",
      "User reviews and rating system",
    ],
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "Personal finance tracker with analytics and interactive charts.",
    image: "/images/project-expense.jpg",
    technologies: ["React", "Express.js", "MongoDB"],
    liveUrl: "https://financehub.demo",
    githubUrl: "https://github.com/manirajsharma/expense-tracker",
    features: [
      "Real-time expense categorization",
      "Interactive chart breakdown with Recharts",
      "Monthly budget alert triggers",
      "Multi-currency support and export to CSV",
    ],
  },
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    description: "Modern e-commerce website with secure payment and admin panel.",
    image: "/images/project-ecommerce.jpg",
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
    liveUrl: "https://nordicnest.demo",
    githubUrl: "https://github.com/manirajsharma/minimal-ecommerce",
    features: [
      "Server-side rendered product catalog",
      "Persistent cart state with local sync",
      "Comprehensive admin dashboard",
      "Automated order confirmation emails",
    ],
  },
  {
    id: "zenith-developer-platform",
    title: "Zenith Developer Platform",
    description: "Developer workspace with real-time code editor previews and API endpoint monitoring.",
    image: "/images/project-zenith.jpg",
    technologies: ["Next.js", "TypeScript", "Docker"],
    liveUrl: "https://zenithdev.demo",
    githubUrl: "https://github.com/manirajsharma/zenith-dev-platform",
    features: [
      "Embedded code sandbox and instant preview",
      "REST & GraphQL endpoint latency monitoring",
      "Team collaboration and role permissions",
      "Automated health check alerts",
    ],
  },
];
