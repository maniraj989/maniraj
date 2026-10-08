export interface Project {
  id: string;
  title: string;
  category?: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  features?: string[];
  problem?: string;
  solution?: string;
  role?: string;
  architecture?: string;
  challenges?: string;
  outcome?: string;
}

export const projectsData: Project[] = [
  {
    id: "mm-digital-garage",
    title: "MM Digital Garage",
    category: "Digital Agency & Systems",
    description: "Digital strategy, design, and technology agency helping businesses build powerful digital experiences that drive measurable real growth.",
    image: "/images/project-mm-digital-garage.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js"],
    liveUrl: "https://www.mmdigitalgarage.tech/",
    githubUrl: "https://github.com/maniraj989",
    features: [
      "Custom digital brand identity and responsive UI architecture",
      "Full-stack web engineering with Next.js and Tailwind CSS",
      "Serverless contact lead capture and inquiry processing",
      "High-performance architecture optimized for fast load times and SEO",
    ],
    problem:
      "Businesses and local enterprises often struggle with fragmented digital presences, slow legacy websites, and poor conversion structures that fail to turn visitors into inquiries.",
    solution:
      "Architected and deployed a modern full-stack web platform combining clean editorial visual design, fast server-rendered page delivery, and reliable customer contact pipelines.",
    role:
      "Founder & Full-Stack Developer — Designed the user experience, engineered frontend components with Next.js and Tailwind CSS, built backend inquiry workflows, and managed production deployment.",
    architecture:
      "Built with Next.js App Router for fast server rendering, Tailwind CSS for design consistency, TypeScript for strict type safety, and edge-hosted on Vercel with CDN caching.",
    challenges:
      "Balancing a refined dark editorial aesthetic with strict accessibility color contrast and sub-second page performance across diverse mobile viewports.",
    outcome:
      "Deployed the production agency website at mmdigitalgarage.tech, creating an established operational platform for digital client projects.",
  },
  {
    id: "eguru-nepal",
    title: "eguru nepal",
    category: "E-Learning Platform",
    description: "Online learning platform empowering academic preparation with live interactive classrooms, detailed syllabus PDF notes, and student progress tracking.",
    image: "/images/project-eguru-nepal.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React"],
    liveUrl: "https://egurunp.vercel.app/",
    githubUrl: "https://github.com/maniraj989/eguru",
    features: [
      "Live interactive classrooms and 1-click launch connectivity",
      "Curriculum-aligned lecture notes and exam preparation material",
      "Real-time student progress tracking and subject directories",
      "Clean, responsive learning dashboard optimized for mobile and desktop",
    ],
    problem:
      "Students preparing for standardized academic and board examinations frequently struggle with fragmented study materials, expensive tutoring, and disjointed note access.",
    solution:
      "Developed a centralized e-learning portal organizing syllabus notes by class and subject, providing direct classroom access and downloadable study resources.",
    role:
      "Full-Stack Developer — Built the responsive study portal with Next.js & TypeScript, configured Supabase database tables and storage buckets, and implemented subject filtering.",
    architecture:
      "Frontend powered by Next.js and Tailwind CSS; Supabase PostgreSQL handles user records and curriculum metadata; Supabase Storage securely serves downloadable study PDFs.",
    challenges:
      "Optimizing file delivery and navigation responsiveness for students accessing the platform over low-bandwidth mobile connections.",
    outcome:
      "Launched live at egurunp.vercel.app, delivering a dependable, accessible study repository for academic curriculum prep.",
  },
  {
    id: "mm-agro",
    title: "MM-Agro",
    category: "Agro Inventory & POS System",
    description: "Comprehensive agricultural inventory management and POS system providing real-time sales registers, credit tracking, and stock valuation.",
    image: "/images/project-mm-agro.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Node.js"],
    liveUrl: "https://mm-agro.vercel.app/",
    githubUrl: "https://github.com/maniraj989",
    features: [
      "Counter Point of Sale (POS) register with fast transaction logging",
      "Live inventory valuation and low-stock threshold alert triggers",
      "Customer Khata credit sales and receivables ledger tracking",
      "Real-time database synchronization and multi-category stock catalog",
    ],
    problem:
      "Agricultural retailers rely on error-prone handwritten notebooks (Khata), resulting in inventory stockouts, untracked customer credit, and delayed accounts receivable.",
    solution:
      "Engineered an automated inventory and Point-of-Sale (POS) management web application with instant stock deduction, customer ledger balance tracking, and valuation reports.",
    role:
      "Full-Stack Developer — Designed relational database schemas, developed POS checkout logic, engineered the customer credit ledger interface, and implemented inventory threshold alerts.",
    architecture:
      "Next.js and TypeScript application with relational data modeling, transactional queries for counter sales, and responsive UI for desktop and tablet counter terminals.",
    challenges:
      "Ensuring transactional consistency between inventory deductions and customer credit balance ledgers during peak in-store counter hours.",
    outcome:
      "Successfully launched at mm-agro.vercel.app, replacing manual paper bookkeeping with automated stock alerts and transparent ledger records.",
  },
  {
    id: "jeerey-restaurant",
    title: "Jeereu Restaurant",
    category: "Restaurant Web App & Reservations",
    description: "Fine dining restaurant web experience featuring an interactive culinary menu, table reservation booking, and one-click WhatsApp inquiries.",
    image: "/images/project-jeerey-restaurant.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "WhatsApp API"],
    liveUrl: "https://jeeray.vercel.app/",
    githubUrl: "https://github.com/maniraj989",
    features: [
      "Interactive restaurant food and beverages menu with category filtering",
      "Direct online table reservation booking form",
      "Atmospheric fine-dining gallery and culinary showcase",
      "Instant WhatsApp concierge customer support integration",
    ],
    problem:
      "Dining guests often face friction discovering current menus, making table bookings during peak service hours, or getting fast customer assistance from restaurants.",
    solution:
      "Built a modern, mobile-first dining web application featuring an interactive categorized menu, table booking inquiry form, and instant WhatsApp deep-link support.",
    role:
      "Frontend & Full-Stack Developer — Designed responsive visual layouts, implemented client-side menu filtering, built booking forms, and integrated WhatsApp messaging.",
    architecture:
      "Component-driven React and Next.js frontend with Tailwind CSS styling, optimized media loading for high-resolution dish photography, and WhatsApp URL API protocols.",
    challenges:
      "Delivering high visual fidelity with appetizing imagery while preserving fast mobile loading times and avoiding layout shifts (CLS).",
    outcome:
      "Deployed at jeeray.vercel.app, elevating customer engagement, streamlining table reservation inquiries, and improving guest communication.",
  },
];
