"use client";

import { useState } from "react";

function CategoryIcon({ type }: { type: string }) {
  switch (type) {
    case "java":
      return (
        <svg className="w-6 h-6 text-[#EA2D2E]" viewBox="0 0 32 32" fill="currentColor">
          <path d="M11.8 24.1s-1.8.2-1.2 1.4c.7 1.4 3.7 1.5 4.3 1.5 3.3 0 6.4-.8 9.5-.8 1.8 0 2.8.5 2.8.5s-.8-.7-2.3-.9c-2.4-.3-5.2.2-7.6.2-2.3 0-4.3-.8-5.5-1.9zm-1.1-3.6s-1.9.3-1.1 1.6c.9 1.4 3.4 1.4 4.8 1.4 3.8.1 7.7-.6 11.4-.7 1.7 0 3.3.4 3.3.4s-1.1-.7-3.1-.9c-3.1-.3-6.5.2-9.6.2-2.5 0-4.4-.7-5.7-2zm8.7-8.3c1.3 1.3.8 2.8.8 2.8s2.7-1.4 1.4-3.6c-1.2-2-3.8-3.1-3.8-3.1s1.3 1.2 1.6 3.9zm-4.7-6.2c.9 1.1 2.2 2.7 1 5.3-1.4 3.1-4.7 4.6-4.7 4.6s3.1-.7 4.8-3.9c1.4-2.7.2-4.8-.4-5.6-.6-.7-.7-.4-.7-.4zm7.6 12.1c1.8 2.5-1 4.7-1 4.7s2.5-.8 2.3-3.6c-.2-2.3-2.6-3.8-2.6-3.8s.5 1.5 1.3 2.7z" />
        </svg>
      );
    case "dsa":
      return (
        <svg className="w-6 h-6 text-[#F97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
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
    case "backend":
      return (
        <svg className="w-6 h-6 text-[#339933]" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 2.5L2.8 10.1v11.8L16 29.5l13.2-7.6V10.1L16 2.5zm10.7 17.8L16 26.5 5.3 20.3V11.7L16 5.5l10.7 6.2v8.6z" />
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

interface StackCategory {
  id: string;
  iconType: string;
  category: string;
  title: string;
  description: string;
  bullets: string[];
  snippetTag: string;
  snippet: string[];
}

const stackCategories: StackCategory[] = [
  // 1. Java
  {
    id: "java",
    iconType: "java",
    category: "01 // CORE PROGRAMMING",
    title: "Java",
    description: "Programming fundamentals, OOP and problem solving",
    bullets: [
      "Java fundamentals and core syntax",
      "Object-oriented programming principles",
      "Collections framework and exception handling",
      "Writing clean, structured and modular code",
    ],
    snippetTag: "// Java OOP & Structured Logic",
    snippet: [
      "public class Main {",
      "    public static void main(String[] args) {",
      "        // Programming fundamentals & OOP logic",
      "    }",
      "}",
    ],
  },

  // 2. Data Structures & Algorithms
  {
    id: "dsa",
    iconType: "dsa",
    category: "02 // PROBLEM SOLVING",
    title: "Data Structures & Algorithms",
    description: "Placement-oriented problem solving, LeetCode and GeeksforGeeks practice",
    bullets: [
      "Arrays, strings, linked lists, stacks and queues",
      "Trees, graphs, recursion and hashing",
      "Sorting and searching algorithms",
      "Time and space complexity analysis",
      "LeetCode and GeeksforGeeks practice",
    ],
    snippetTag: "// Time & Space Complexity Analysis",
    snippet: [
      "int low = 0, high = n - 1;",
      "while (low <= high) {",
      "    int mid = low + (high - low) / 2;",
      "}",
    ],
  },

  // 3. JavaScript / TypeScript & React / Next.js
  {
    id: "frontend",
    iconType: "frontend",
    category: "03 // FRONTEND & FULL-STACK",
    title: "React & Next.js",
    description: "Component-based frontend and full-stack React applications",
    bullets: [
      "Modern JavaScript (ES6+) & type-safe TypeScript development",
      "Component-based UI development with React hooks",
      "Next.js application development and server rendering",
      "Responsive interface development with Tailwind CSS",
    ],
    snippetTag: "// Declarative UI Architecture",
    snippet: [
      "const [state, dispatch] = useReducer(reducer, initial);",
      "useEffect(() => subscribeToData(dispatch), []);",
    ],
  },

  // 4. Node.js / Express.js
  {
    id: "backend",
    iconType: "backend",
    category: "04 // BACKEND DEVELOPMENT",
    title: "Node.js & Express.js",
    description: "Backend APIs, server-side logic and integrations",
    bullets: [
      "Node.js backend development and runtime logic",
      "REST API development with Express.js",
      "Currently learning Spring Boot for Java backend services",
      "Authentication, route validation and API integrations",
    ],
    snippetTag: "// RESTful API Service",
    snippet: [
      "router.post('/api/auth/login', async (req, res) => {",
      "    return res.status(200).json({ success: true });",
      "});",
    ],
  },

  // 5. PostgreSQL / Supabase & MongoDB
  {
    id: "database",
    iconType: "database",
    category: "05 // DATABASES & SERVICES",
    title: "PostgreSQL & Supabase",
    description: "Relational database design and backend services",
    bullets: [
      "PostgreSQL database design and relational modeling",
      "Supabase backend services, database and Auth integration",
      "MongoDB for NoSQL application data in real projects",
      "Structured SQL queries, tables and data integrity",
    ],
    snippetTag: "// Relational Schema & Queries",
    snippet: [
      "SELECT users.id, profiles.role FROM users",
      "JOIN profiles ON users.id = profiles.user_id;",
    ],
  },

  // 6. Git / GitHub & Docker
  {
    id: "tools",
    iconType: "tools",
    category: "06 // DEVELOPMENT TOOLS",
    title: "Git, GitHub & Docker",
    description: "Version control, collaboration and deployment fundamentals",
    bullets: [
      "Git version control and branching workflows",
      "GitHub repositories and collaborative code reviews",
      "Docker fundamentals and containerized environments",
      "Production deployment workflows with Vercel",
    ],
    snippetTag: "// Collaborative Workflow",
    snippet: [
      "git checkout -b feature/system-pipeline",
      "docker compose up --build -d",
    ],
  },
];

export default function ReactFeature() {
  const [activePanel, setActivePanel] = useState<string>("java");

  return (
    <section id="stack" className="py-24 md:py-32 bg-theme-bg border-b border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <div className="mb-6">
          <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold">
            02 // Technical Foundation
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-14">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-theme-muted block mb-3">
            Primary Stack
          </span>
          <h2 className="font-editorial-serif text-[clamp(2.5rem,5.5vw,5rem)] font-normal tracking-tight text-theme-text leading-[1.02]">
            Java. <br />
            DSA. <br />
            Full-Stack <br />
            <span className="italic text-[var(--accent-color)]">Development.</span>
          </h2>
          <p className="mt-4 text-theme-muted text-sm sm:text-base font-normal max-w-xl leading-relaxed">
            Building practical web applications and software systems with strong programming fundamentals, Data Structures &amp; Algorithms, and modern web architectures.
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
                  isActive
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

                    <span className="font-mono text-xs text-theme-muted uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-2xl text-theme-text mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-[var(--accent-color)] mb-6 font-medium">
                    &quot;{item.description}&quot;
                  </p>

                  <ul className="space-y-3 font-mono text-xs sm:text-sm text-theme-muted mb-8">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)] shrink-0" />
                        <span>{bullet}</span>
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
