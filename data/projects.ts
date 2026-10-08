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
    id: "digirestro",
    title: "DigiRestro – Cloud POS & Restaurant SaaS",
    description: "Enterprise restaurant management SaaS featuring real-time Kitchen Display System (KDS), interactive table floor plans, and QR self-ordering.",
    image: "/images/project-digirestro.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    liveUrl: "https://digirestro-omega.vercel.app",
    githubUrl: "https://github.com/maniraj989/digirestro",
    features: [
      "Cloud-based POS with fast order settlement & receipt print",
      "Interactive table floors & live occupancy status",
      "Real-time Kitchen Display System (KDS) order routing",
      "Inventory tracking, recipe costing & revenue analytics",
    ],
  },
  {
    id: "eguru",
    title: "EGURU – Academic E-Learning Platform",
    description: "Online learning platform tailored for management student boards (BBA, BBS, BBM, BIM, +2) in Nepal with syllabus notes and video lectures.",
    image: "/images/project-eguru.jpg",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "TanStack Query", "Recharts"],
    liveUrl: "https://eguru-steel.vercel.app",
    githubUrl: "https://github.com/maniraj989/eguru",
    features: [
      "Board curriculum syllabus (BBA, BBS, BIM, BBM)",
      "Video lecture streaming & downloadable class notes",
      "Student learning progress analytics with interactive charts",
      "Role-based authentication & student profiles with Supabase",
    ],
  },
  {
    id: "stocksense",
    title: "StockSense – Smart Inventory System",
    description: "Enterprise inventory management system built with Java 21, Spring Boot, and Vaadin for warehouse stock tracking and auditing.",
    image: "/images/project-stocksense.jpg",
    technologies: ["Java 21", "Spring Boot", "Vaadin", "PostgreSQL", "JPA"],
    liveUrl: "https://github.com/maniraj989/stocksense",
    githubUrl: "https://github.com/maniraj989/stocksense",
    features: [
      "Real-time stock level monitoring & SKU categorization",
      "Automated low-inventory notifications & restocking triggers",
      "Robust relational schema modeling with JPA & PostgreSQL",
      "Reactive full-stack UI powered by Vaadin Flow",
    ],
  },
  {
    id: "hotel-himalayan",
    title: "Hotel Himalayan – Luxury Hospitality",
    description: "Responsive luxury hotel web portal for Hotel Himalayan (Janakpurdham, Nepal) with interactive dining menu reader and room booking inquiry.",
    image: "/images/project-hotel.jpg",
    technologies: ["JavaScript", "HTML5", "CSS3", "Ionicons", "Responsive Web"],
    liveUrl: "https://hotelhimalayan.vercel.app",
    githubUrl: "https://github.com/maniraj989/hotelwebsite",
    features: [
      "Interactive multi-page restaurant menu flip-book modal",
      "Mountain-view suites showcase with detailed amenity filters",
      "Direct WhatsApp and one-click telephone booking integration",
      "Fast mobile-first touch navigation and guest review slider",
    ],
  },
  {
    id: "nexalaya-global",
    title: "Nexalaya Global – Educational Consultancy",
    description: "International educational consultancy portal helping students apply to universities worldwide with visa assistance and scholarship roadmaps.",
    image: "/images/project-nexalaya.jpg",
    technologies: ["JavaScript", "HTML5", "CSS3", "EmailJS", "tsParticles"],
    liveUrl: "https://nexalayaglobal.vercel.app",
    githubUrl: "https://github.com/maniraj989/Nexalaya-Global",
    features: [
      "Study-in-India & global university program directories",
      "Automated student consultation inquiry capture via EmailJS",
      "Interactive scholarship guidance & admission checklists",
      "Fluid particle animations with high-converting CTA funnels",
    ],
  },
  {
    id: "mm-digital",
    title: "MM Digital – Creative & Marketing Agency",
    description: "Modern digital agency website showcasing creative branding, performance marketing, search optimization, and web engineering.",
    image: "/images/project-mmdigital.jpg",
    technologies: ["JavaScript", "HTML5", "CSS3", "Modern Web UI"],
    liveUrl: "https://mmdigital-nu.vercel.app",
    githubUrl: "https://github.com/maniraj989/mmdigital",
    features: [
      "Comprehensive digital service catalog & case study gallery",
      "Performance-optimized semantic architecture & animations",
      "Interactive client project discovery intake flow",
      "Futuristic dark-mode UI with neon visual accents",
    ],
  },
  {
    id: "digital-cafe-india",
    title: "Digital Cafe India – Growth Agency",
    description: "Corporate digital marketing agency portal featuring SEO, graphic design, social media strategy, lead generation, and quote forms.",
    image: "/images/project-digitalcafe.jpg",
    technologies: ["JavaScript", "HTML5", "CSS3", "FontAwesome"],
    liveUrl: "https://digitalcafeindia.vercel.app",
    githubUrl: "https://github.com/maniraj989/digitalcafeindia",
    features: [
      "Multi-step interactive service quotation request form",
      "Floating 1-click WhatsApp customer support integration",
      "Structured SEO and digital growth marketing offerings",
      "Office location map, business hours & corporate directory",
    ],
  },
  {
    id: "maniraj-portfolio",
    title: "Editorial Portfolio – Maniraj Sharma",
    description: "High-performance developer portfolio featuring live GitHub contribution calendar integration, theme switching, and case studies.",
    image: "/images/project-zenith.jpg",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Resend"],
    liveUrl: "https://maniraj-beta.vercel.app",
    githubUrl: "https://github.com/maniraj989/maniraj",
    features: [
      "Live 52-week GitHub workspace contribution heatmap",
      "Curated multi-palette theme engine (Dark, Mono, Sunset)",
      "Interactive draggable project case study carousel",
      "Serverless contact form with Resend email delivery",
    ],
  },
];
