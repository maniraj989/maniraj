"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
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

    if (maxScroll <= 0) {
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
    const scrollAmount = direction === "left" ? -384 : 384;
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
    const walk = (x - startX) * 1.4;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative focus:outline-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Projects carousel"
    >
      {/* Floating Arrows */}
      <button
        type="button"
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#E6E7EA] shadow-sm items-center justify-center text-[#111111] transition-all duration-150 ${
          !canScrollLeft
            ? "opacity-20 cursor-not-allowed"
            : "hover:border-neutral-400 active:scale-95"
        }`}
        aria-label="Previous project"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#E6E7EA] shadow-sm items-center justify-center text-[#111111] transition-all duration-150 ${
          !canScrollRight
            ? "opacity-20 cursor-not-allowed"
            : "hover:border-neutral-400 active:scale-95"
        }`}
        aria-label="Next project"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex gap-6 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Minimal Bottom Scrollbar Indicator matching Reference */}
      <div className="mt-8 flex flex-col items-center">
        <div className="w-full max-w-2xl h-1 bg-[#E6E7EA] rounded-full overflow-hidden">
          <div
            className="h-full bg-editorial-accent rounded-full transition-all duration-150 ease-out"
            style={{ width: `${Math.max(20, scrollProgress)}%` }}
          />
        </div>

        {/* Mobile helper buttons */}
        <div className="flex md:hidden items-center justify-center space-x-3 mt-4">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-1.5 rounded-full border border-[#E6E7EA] bg-white text-[#111111] disabled:opacity-20"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[11px] text-[#8E95A0]">Swipe to explore</span>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-1.5 rounded-full border border-[#E6E7EA] bg-white text-[#111111] disabled:opacity-20"
            aria-label="Next project"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
