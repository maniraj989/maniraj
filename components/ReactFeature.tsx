"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  // 01 // CORE PROGRAMMING
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

  // 02 // PROBLEM SOLVING
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

  // 03 // FRONTEND & FULL-STACK
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

  // 04 // BACKEND DEVELOPMENT
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
];

export default function ReactFeature() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMultiCard, setIsMultiCard] = useState(false);
  const [slideOffsets, setSlideOffsets] = useState<number[]>([]);

  const dragStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // On desktop / tablet (>= 768px), exactly 2 cards are visible. Max index is total - 2.
  // On mobile (< 768px), exactly 1 card is visible. Max index is total - 1.
  const maxIndex = isMultiCard
    ? Math.max(0, stackCategories.length - 2)
    : stackCategories.length - 1;

  // Calculate pixel offsets for each slide relative to track
  const calculateOffsets = useCallback(() => {
    const isMulti = window.innerWidth >= 768;
    setIsMultiCard(isMulti);
    const offsets = slideRefs.current.map((el) => (el ? el.offsetLeft : 0));
    setSlideOffsets(offsets);
  }, []);

  useEffect(() => {
    calculateOffsets();
    window.addEventListener("resize", calculateOffsets);
    return () => window.removeEventListener("resize", calculateOffsets);
  }, [calculateOffsets]);

  // Keep index within bounds on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch Swipe Handlers (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.touches[0].clientX - dragStartX.current;
    // Add dampening at the boundaries
    if (
      (currentIndex === 0 && diff > 0) ||
      (currentIndex >= maxIndex && diff < 0)
    ) {
      setDragOffset(diff * 0.25);
    } else {
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (dragStartX.current === null) return;
    if (dragOffset < -45 && currentIndex < maxIndex) {
      handleNext();
    } else if (dragOffset > 45 && currentIndex > 0) {
      handlePrev();
    }
    dragStartX.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  // Mouse Drag Handlers (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    dragStartX.current = e.clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null || !isDragging) return;
    const diff = e.clientX - dragStartX.current;
    if (
      (currentIndex === 0 && diff > 0) ||
      (currentIndex >= maxIndex && diff < 0)
    ) {
      setDragOffset(diff * 0.25);
    } else {
      setDragOffset(diff);
    }
  };

  const handleMouseUpOrLeave = () => {
    if (dragStartX.current === null || !isDragging) return;
    if (dragOffset < -55 && currentIndex < maxIndex) {
      handleNext();
    } else if (dragOffset > 55 && currentIndex > 0) {
      handlePrev();
    }
    dragStartX.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  // Compute final track translate
  const baseOffset = slideOffsets[currentIndex] || 0;
  const currentTranslate = -(baseOffset - dragOffset);

  // Compute progress percentage
  const progressPercent = isMultiCard
    ? ((currentIndex + 2) / stackCategories.length) * 100
    : ((currentIndex + 1) / stackCategories.length) * 100;

  return (
    <section id="stack" className="py-24 md:py-32 bg-theme-bg border-b border-theme-border overflow-hidden">
      <div className="max-w-editorial mx-auto px-4 sm:px-8">
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
          <h2 className="font-editorial-serif text-[clamp(2.1rem,5.5vw,5rem)] font-normal tracking-tight text-theme-text leading-[1.02]">
            Java. <br />
            DSA. <br />
            Full-Stack <br />
            <span className="italic text-[var(--accent-color)]">Development.</span>
          </h2>
          <p className="mt-4 text-theme-muted text-sm sm:text-base font-normal max-w-xl leading-relaxed">
            Building practical web applications and software systems with strong programming fundamentals, Data Structures &amp; Algorithms, and modern web architectures.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Technical Stack Carousel"
          className="relative focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[var(--accent-color)] rounded-xl select-none"
        >
          {/* Overflow Viewport */}
          <div
            className={`overflow-hidden py-2 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Track with 24px (gap-6) spacing */}
            <div
              className="flex gap-6 will-change-transform motion-reduce:transition-none"
              style={{
                transform: `translateX(${currentTranslate}px)`,
                transition: isDragging ? "none" : "transform 360ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {stackCategories.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    slideRefs.current[index] = el;
                  }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${item.category}: ${item.title} (${index + 1} of ${stackCategories.length})`}
                  className="w-full md:w-[calc(50%-12px)] shrink-0 flex flex-col"
                >
                  <div
                    className="p-5 sm:p-8 rounded-xl border bg-theme-surface border-theme-border shadow-sm flex flex-col justify-between h-full transition-colors duration-150 hover:border-theme-borderStrong"
                  >
                    <div>
                      {/* Top Bar with Icon & Category */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-lg bg-theme-elevated border border-theme-border flex items-center justify-center">
                          <CategoryIcon type={item.iconType} />
                        </div>

                        <span className="font-mono text-xs text-theme-muted uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-sans font-bold text-xl sm:text-2xl text-theme-text mb-2 tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-mono text-[var(--accent-color)] mb-5 font-medium">
                        &quot;{item.description}&quot;
                      </p>

                      <ul className="space-y-2.5 font-mono text-xs sm:text-[13px] text-theme-muted mb-6">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-sm bg-[var(--accent-color)] shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Code Snippet / Context Box */}
                    <div className="p-3.5 sm:p-4 rounded-md bg-theme-elevated border border-theme-border font-mono text-[11px] leading-relaxed text-theme-muted overflow-x-auto">
                      <div className="text-[var(--accent-color)] font-semibold mb-1">
                        {item.snippetTag}
                      </div>
                      {item.snippet.map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Editorial Controls & Indicator (Underneath Cards) */}
          <div className="mt-10 flex flex-col items-center gap-4">
            {/* Arrows & Slide Counter */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-2 sm:px-3.5 sm:py-2 rounded-md text-xs font-mono border border-theme-border bg-theme-surface text-theme-text hover:border-theme-borderStrong transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[var(--accent-color)]"
                aria-label="Previous card"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="font-mono text-xs sm:text-sm tracking-widest text-theme-muted select-none">
                <span className="text-theme-text font-bold">
                  {isMultiCard
                    ? `0${currentIndex + 1}–0${currentIndex + 2}`
                    : `0${currentIndex + 1}`}
                </span>
                <span className="mx-1.5 text-theme-muted/50">/</span>
                <span>0{stackCategories.length}</span>
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="p-2 sm:px-3.5 sm:py-2 rounded-md text-xs font-mono border border-theme-border bg-theme-surface text-theme-text hover:border-theme-borderStrong transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[var(--accent-color)]"
                aria-label="Next card"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Subtle Progress Bar */}
            <div className="w-full max-w-[220px] sm:max-w-[260px] h-0.5 bg-theme-border rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--accent-color)] transition-all duration-300 ease-out"
                style={{
                  width: `${progressPercent}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
