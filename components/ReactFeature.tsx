"use client";

import { useState } from "react";

function CategoryIcon({ type }: { type: string }) {
  switch (type) {
    case "core":
      return (
        <svg className="w-6 h-6 text-[#EA2D2E]" viewBox="0 0 32 32" fill="currentColor">
          <path d="M11.8 24.1s-1.8.2-1.2 1.4c.7 1.4 3.7 1.5 4.3 1.5 3.3 0 6.4-.8 9.5-.8 1.8 0 2.8.5 2.8.5s-.8-.7-2.3-.9c-2.4-.3-5.2.2-7.6.2-2.3 0-4.3-.8-5.5-1.9zm-1.1-3.6s-1.9.3-1.1 1.6c.9 1.4 3.4 1.4 4.8 1.4 3.8.1 7.7-.6 11.4-.7 1.7 0 3.3.4 3.3.4s-1.1-.7-3.1-.9c-3.1-.3-6.5.2-9.6.2-2.5 0-4.4-.7-5.7-2zm8.7-8.3c1.3 1.3.8 2.8.8 2.8s2.7-1.4 1.4-3.6c-1.2-2-3.8-3.1-3.8-3.1s1.3 1.2 1.6 3.9zm-4.7-6.2c.9 1.1 2.2 2.7 1 5.3-1.4 3.1-4.7 4.6-4.7 4.6s3.1-.7 4.8-3.9c1.4-2.7.2-4.8-.4-5.6-.6-.7-.7-.4-.7-.4zm7.6 12.1c1.8 2.5-1 4.7-1 4.7s2.5-.8 2.3-3.6c-.2-2.3-2.6-3.8-2.6-3.8s.5 1.5 1.3 2.7z" />
        </svg>
      );
    case "cs":
      return (
        <svg className="w-6 h-6 text-[#F97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case "backend":
      return (
        <svg className="w-6 h-6 text-[#6DB33F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.14 2.53 7.69 6.13 9.17l3.87-3.87a4.996 4.996 0 0 1-1.07-2.97c0-2.76 2.24-5 5-5 .87 0 1.68.22 2.39.61l3.55-3.55A9.97 9.97 0 0 0 12 2zm7.87 8.33l-3.55 3.55c.43.76.68 1.64.68 2.58 0 2.76-2.24 5-5 5-.94 0-1.82-.25-2.58-.68l-3.55 3.55C7.47 25.48 9.63 26 12 26c7.73 0 14-6.27 14-14 0-2.37-.52-4.53-1.45-6.47l-4.68 4.8z" />
        </svg>
      );
    case "database":
      return (
        <svg className="w-6 h-6 text-[#4169E1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "frontend":
      return (
        <svg className="w-6 h-6 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "tools":
      return (
        <svg className="w-6 h-6 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.186.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m21.71 1.954c-.347-.207-.942-.315-1.574-.09-.168.06-.328.143-.474.248-.44-.316-.94-.482-1.464-.482h-1.042c-.22 0-.414.135-.494.343l-.47 1.222a.49.49 0 01-.46.312H.498a.5.5 0 00-.498.513c.094 2.87 1.157 5.488 3.09 7.421 2.227 2.228 5.253 3.473 8.442 3.473 7.828 0 12.44-5.328 12.44-11.458 0-.46-.037-.915-.1-1.36-.015-.098-.05-.192-.1-.274-.216-.36-.612-.668-1.285-.928" />
        </svg>
      );
    default:
      return null;
  }
}

interface StackBullet {
  text: string;
  isStrong?: boolean;
}

interface StackCategory {
  id: string;
  iconType: string;
  category: string;
  title: string;
  description: string;
  bullets: StackBullet[];
  snippetTag: string;
  snippet: string[];
  isDirection?: boolean;
  metaNote?: string;
}

const stackCategories: StackCategory[] = [
  // 1. CORE PROGRAMMING
  {
    id: "core",
    iconType: "core",
    category: "01 // CORE PROGRAMMING",
    title: "Core Programming",
    description: "Primary languages for problem solving and software development",
    bullets: [
      { text: "Java — Primary language for DSA and backend development", isStrong: true },
      { text: "JavaScript — Web development" },
      { text: "TypeScript — Typed frontend/full-stack development" },
      { text: "SQL — Database querying and data management" },
    ],
    snippetTag: "// Java DSA & Problem Solving",
    snippet: [
      "public class BinarySearch {",
      "    public int search(int[] nums, int target) {",
      "        int low = 0, high = nums.length - 1;",
      "        while (low <= high) {",
      "            int mid = low + (high - low) / 2;",
      "            if (nums[mid] == target) return mid;",
      "            if (nums[mid] < target) low = mid + 1;",
      "            else high = mid - 1;",
      "        }",
      "        return -1;",
      "    }",
      "}",
    ],
  },

  // 2. COMPUTER SCIENCE FUNDAMENTALS (Presented as CS fundamentals / areas of study)
  {
    id: "cs",
    iconType: "cs",
    category: "02 // CS FUNDAMENTALS (AREAS OF STUDY)",
    title: "Computer Science Fundamentals",
    description: "Core academic coursework and engineering foundations",
    metaNote: "Academic Coursework & Study Areas",
    bullets: [
      { text: "Data Structures & Algorithms", isStrong: true },
      { text: "Object-Oriented Programming (OOP)" },
      { text: "Database Management Systems (DBMS)" },
      { text: "Operating Systems" },
      { text: "Computer Networks" },
      { text: "Software Engineering & System Design Fundamentals" },
    ],
    snippetTag: "// Coursework & Algorithmic Analysis",
    snippet: [
      "Coursework: DSA · OOP · DBMS · OS · Computer Networks",
      "Complexity: Big-O time and space optimization",
      "Practice: LeetCode & GeeksforGeeks interview preparation",
    ],
  },

  // 3. BACKEND ENGINEERING (Java + Spring Boot visually prominent)
  {
    id: "backend",
    iconType: "backend",
    category: "03 // BACKEND ENGINEERING",
    title: "Backend Engineering",
    description: "APIs, application logic, backend services & system architecture",
    isDirection: true,
    metaNote: "Current Backend Direction",
    bullets: [
      { text: "Java & Spring Boot — Current backend specialization focus", isStrong: true },
      { text: "REST APIs — Structured endpoint design & validation", isStrong: true },
      { text: "Node.js & Express.js — Backend services and routing" },
      { text: "Authentication, authorization and business logic" },
    ],
    snippetTag: "// Spring Boot REST Controller",
    snippet: [
      "@RestController",
      "@RequestMapping(\"/api/v1/services\")",
      "public class ServiceController {",
      "    @GetMapping(\"/{id}\")",
      "    public ResponseEntity<ServiceDTO> getById(@PathVariable UUID id) {",
      "        return ResponseEntity.ok(serviceManager.findById(id));",
      "    }",
      "}",
    ],
  },

  // 4. DATABASES (PostgreSQL is primary)
  {
    id: "databases",
    iconType: "database",
    category: "04 // DATABASES",
    title: "Databases",
    description: "Relational database design, queries & data modeling",
    bullets: [
      { text: "PostgreSQL — Primary database for relational design & queries", isStrong: true },
      { text: "Supabase — Backend services, Auth & Postgres integration" },
      { text: "MySQL — Relational database management & queries" },
      { text: "MongoDB — NoSQL database for application data" },
    ],
    snippetTag: "// PostgreSQL Relational Schema & Indexes",
    snippet: [
      "CREATE TABLE orders (",
      "    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),",
      "    user_id UUID REFERENCES users(id) ON DELETE CASCADE,",
      "    status VARCHAR(50) NOT NULL DEFAULT 'pending',",
      "    created_at TIMESTAMPTZ DEFAULT NOW()",
      ");",
      "CREATE INDEX idx_orders_user ON orders(user_id);",
    ],
  },

  // 5. FRONTEND / FULL-STACK
  {
    id: "frontend",
    iconType: "frontend",
    category: "05 // FRONTEND / FULL-STACK",
    title: "Frontend / Full-Stack",
    description: "Building complete web applications with modern component architectures",
    bullets: [
      { text: "React — Component-based UI development & state hooks" },
      { text: "Next.js — Server-rendered React applications (App Router)" },
      { text: "TypeScript — Typed contracts for UI and data flows" },
      { text: "HTML & CSS — Semantic markup & accessible layout structure" },
      { text: "Tailwind CSS — Utility-first styling for responsive interfaces (actively used)" },
    ],
    snippetTag: "// Next.js Server Component & Data Contract",
    snippet: [
      "interface DashboardProps { userId: string; }",
      "export default async function Dashboard({ userId }: DashboardProps) {",
      "    const profile = await fetchUserProfile(userId);",
      "    return <DashboardView data={profile} />;",
      "}",
    ],
  },

  // 6. ENGINEERING TOOLS (Kept concise)
  {
    id: "tools",
    iconType: "tools",
    category: "06 // ENGINEERING TOOLS",
    title: "Engineering Tools",
    description: "Version control, collaboration and deployment workflows",
    bullets: [
      { text: "Git — Version control, branching and repository history" },
      { text: "GitHub — Repositories, pull requests and team workflows" },
      { text: "Docker — Containerization fundamentals & environment isolation" },
      { text: "Vercel — Production deployment and cloud hosting" },
      { text: "Figma — UI wireframing & component prototypes" },
    ],
    snippetTag: "// Engineering & Deployment Workflow",
    snippet: [
      "git checkout -b feature/backend-endpoints",
      "docker compose up --build -d",
    ],
  },
];

export default function ReactFeature() {
  const [activePanel, setActivePanel] = useState<string>("backend");

  return (
    <section id="stack" className="py-24 md:py-32 bg-theme-bg border-b border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <div className="mb-6">
          <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold">
            02 // Technical Foundation
          </span>
        </div>

        {/* Progression Indicator */}
        <div className="mb-10 p-4 sm:p-5 rounded-xl bg-theme-surface border border-theme-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-sm bg-[var(--accent-color)]" />
            <span className="text-xs font-mono tracking-wider uppercase text-theme-muted font-medium">
              Technical Progression
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs font-mono">
            <span className="text-theme-text font-semibold px-2 py-0.5 rounded bg-theme-elevated border border-theme-border">
              CORE <span className="text-theme-muted font-normal text-[11px]">(Java · DSA · SQL)</span>
            </span>
            <span className="text-theme-muted">→</span>
            <span className="text-[var(--accent-color)] font-semibold px-2 py-0.5 rounded bg-theme-elevated border border-[var(--accent-color)]/30">
              BACKEND <span className="text-theme-muted font-normal text-[11px]">(Spring Boot · REST · Postgres)</span>
            </span>
            <span className="text-theme-muted">→</span>
            <span className="text-theme-text font-medium px-2 py-0.5 rounded bg-theme-elevated border border-theme-border">
              FULL-STACK <span className="text-theme-muted font-normal text-[11px]">(React · Next.js · TS)</span>
            </span>
            <span className="text-theme-muted">→</span>
            <span className="text-theme-muted px-2 py-0.5 rounded bg-theme-elevated border border-theme-border">
              TOOLS <span className="text-theme-muted font-normal text-[11px]">(Git · Docker · Vercel)</span>
            </span>
          </div>
        </div>

        {/* Section Heading & Copy */}
        <div className="mb-14">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-theme-muted block mb-3">
            Primary Stack
          </span>
          <h2 className="font-editorial-serif text-[clamp(2.5rem,5.5vw,5rem)] font-normal tracking-tight text-theme-text leading-[1.02]">
            Java. <br />
            Backend. <br />
            <span className="italic text-[var(--accent-color)]">Full-Stack.</span>
          </h2>
          <p className="mt-4 text-theme-muted text-sm sm:text-base font-normal max-w-xl leading-relaxed">
            Building software with strong fundamentals, reliable backend systems, and modern web interfaces.
          </p>
        </div>

        {/* Interactive Technical Panels: 6 Stack Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stackCategories.map((item) => {
            const isActive = activePanel === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActivePanel(item.id)}
                className={`p-8 sm:p-10 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  item.isDirection
                    ? "bg-theme-surface border-[var(--accent-color)]/50 shadow-sm"
                    : isActive
                    ? "bg-theme-surface border-theme-borderStrong shadow-md"
                    : "bg-theme-surface/60 border-theme-border hover:border-theme-borderStrong"
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Category */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-11 h-11 rounded-lg bg-theme-elevated border border-theme-border flex items-center justify-center">
                      <CategoryIcon type={item.iconType} />
                    </div>

                    <div className="flex items-center gap-2">
                      {item.metaNote && (
                        <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-theme-elevated text-[var(--accent-color)] border border-theme-border font-medium">
                          {item.metaNote}
                        </span>
                      )}
                      <span className="font-mono text-xs text-theme-muted uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-2xl text-theme-text mb-2 tracking-tight flex items-center gap-3">
                    <span>{item.title}</span>
                  </h3>

                  <p className="text-xs font-mono text-[var(--accent-color)] mb-6 font-medium">
                    &quot;{item.description}&quot;
                  </p>

                  <ul className="space-y-3 font-mono text-xs sm:text-sm text-theme-muted mb-8">
                    {item.bullets.map((bullet) => (
                      <li key={bullet.text} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)] shrink-0 mt-1.5" />
                        <span className={bullet.isStrong ? "text-theme-text font-medium" : ""}>
                          {bullet.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code Snippet / Context Box */}
                <div className="p-4 rounded-md bg-theme-elevated border border-theme-border font-mono text-[11px] leading-relaxed text-theme-muted overflow-x-auto">
                  <div className="text-[var(--accent-color)] font-semibold mb-1">
                    {item.snippetTag}
                  </div>
                  {item.snippet.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
