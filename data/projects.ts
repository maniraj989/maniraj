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
    id: "mm-digital-garage",
    title: "MM Digital Garage",
    description: "Digital strategy, design, and technology agency helping businesses build powerful digital experiences that drive measurable real growth.",
    image: "/images/project-mm-digital-garage.png",
    technologies: ["Digital Strategy", "UI/UX Design", "Next.js", "Marketing"],
    liveUrl: "https://www.mmdigitalgarage.tech/",
    githubUrl: "https://github.com/maniraj989",
    features: [
      "Custom digital brand identity and UX design",
      "Full-stack web engineering and development",
      "Performance marketing and growth strategy",
      "Measurable conversion-focused architecture",
    ],
  },
  {
    id: "eguru-nepal",
    title: "eguru nepal",
    description: "Nepal's modern online learning platform empowering academic prep from zero to hero with live classrooms, detailed PDF notes, and expert teachers.",
    image: "/images/project-eguru-nepal.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://egurunp.vercel.app/",
    githubUrl: "https://github.com/maniraj989/eguru",
    features: [
      "Live interactive classrooms and 1-click launch",
      "Board curriculum notes and exam preparation",
      "Real-time student progress tracking",
      "Clean responsive learning management dashboard",
    ],
  },
  {
    id: "mm-agro",
    title: "MM-Agro",
    description: "Comprehensive agricultural inventory management and POS system providing real-time sales registers, credit tracking, and stock valuation.",
    image: "/images/project-mm-agro.png",
    technologies: ["Inventory System", "POS", "PostgreSQL", "Analytics"],
    liveUrl: "https://mm-agro.vercel.app/",
    githubUrl: "https://github.com/maniraj989",
    features: [
      "Cross-counter Point of Sale (POS) and sales register",
      "Live inventory valuation and low-stock alert thresholds",
      "Customer Khata credit sales and receivables ledger",
      "Real-time database synchronization and reporting",
    ],
  },
  {
    id: "jeerey-restaurant",
    title: "Jeerey Restaurant",
    description: "Fine dining restaurant web experience featuring an interactive culinary menu, table reservation booking, and one-click WhatsApp inquiries.",
    image: "/images/project-jeerey-restaurant.png",
    technologies: ["Web UI", "Responsive Design", "Reservations", "WhatsApp API"],
    liveUrl: "https://jeeray.vercel.app/",
    githubUrl: "https://github.com/maniraj989",
    features: [
      "Interactive restaurant food and beverages menu",
      "Direct online table reservation system",
      "Atmospheric fine-dining gallery showcase",
      "Instant WhatsApp concierge customer support",
    ],
  },
];
