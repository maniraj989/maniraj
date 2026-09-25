import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ReactFeature from "@/components/ReactFeature";
import ProjectsSlider from "@/components/ProjectsSlider";
import ExperienceEducation from "@/components/ExperienceEducation";
import ToolsGrid from "@/components/ToolsGrid";
import GithubActivity from "@/components/GithubActivity";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-theme-bg text-theme-text transition-colors duration-300">
      {/* 1. Floating Sticky Navbar with Theme Switcher */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section without photo: Huge typography & Code Composition */}
        <Hero />

        {/* 3. Introduction Section: Large typographic grid */}
        <About />

        {/* 4. React + JavaScript Feature: Dedicated interactive panels */}
        <ReactFeature />

        {/* 5. Selected Work: Horizontal Project Slider */}
        <ProjectsSlider />

        {/* 6. Experience & Education: Editorial timeline & split degrees */}
        <ExperienceEducation />

        {/* 7. Tools of the Trade: Dynamic grid with hover interactions */}
        <ToolsGrid />

        {/* 8. Open Source Activity: Dark break section with 52-week calendar */}
        <GithubActivity />

        {/* 9. Key Achievements: Numbered horizontal editorial list */}
        <Achievements />

        {/* 10. Contact: Bold statement & conversation form */}
        <Contact />
      </main>

      {/* 11. Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}
