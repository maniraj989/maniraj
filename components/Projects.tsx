import { ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import ProjectCarousel from "./ProjectCarousel";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 bg-white border-b border-editorial-border">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#E6E7EA]">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#8E95A0] uppercase">
              Selected Projects
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal tracking-tight text-[#111111] mt-2">
              Selected Work
            </h2>
          </div>

          <a
            href="https://github.com/maniraj989?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-medium text-[#111111] hover:text-editorial-accent transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Carousel */}
        <ProjectCarousel projects={projectsData} />
      </div>
    </section>
  );
}
