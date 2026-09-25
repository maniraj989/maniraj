"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const updateScrollState = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 5) {
      setScrollProgress(100);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
    setScrollProgress(progress);
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -390 : 390;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroll("left");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scroll("right");
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="work" className="py-24 md:py-32 bg-theme-bg border-b border-theme-border">
      <div className="max-w-editorial mx-auto px-6 sm:px-8">
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-theme-border">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[var(--accent-color)] uppercase font-semibold block mb-2">
              03 // Selected Work
            </span>
            <h2 className="font-editorial-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal tracking-tight text-theme-text leading-tight">
              Featured Case Studies
            </h2>
          </div>

          {/* Slider Controls: ← Previous / Next → */}
          <div className="mt-6 sm:mt-0 flex items-center space-x-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium border border-theme-border bg-theme-surface text-theme-text hover:border-theme-borderStrong transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)]"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-medium border border-theme-border bg-theme-surface text-theme-text hover:border-theme-borderStrong transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-color)]"
              aria-label="Next Project"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://github.com/manirajsharma?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 pl-3 text-xs font-mono text-theme-muted hover:text-[var(--accent-color)] uppercase tracking-wider transition-colors"
            >
              <span>All Repos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          className="relative focus:outline-none"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Projects slider. Use left and right arrow keys to navigate."
        >
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex gap-6 overflow-x-auto no-scrollbar py-3 px-1 scroll-smooth ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Minimal Bottom Position / Scroll Progress Indicator */}
          <div className="mt-10 flex flex-col items-center">
            <div className="w-full max-w-xl h-1 bg-theme-border rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--accent-color)] rounded-full transition-all duration-150 ease-out"
                style={{ width: `${Math.max(25, scrollProgress)}%` }}
              />
            </div>

            <div className="flex items-center justify-between w-full max-w-xl text-[11px] font-mono text-theme-muted mt-2">
              <span>01 // {projectsData[0]?.title}</span>
              <span>0{projectsData.length} // {projectsData[projectsData.length - 1]?.title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
