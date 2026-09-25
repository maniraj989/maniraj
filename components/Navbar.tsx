"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "work", "experience", "stack", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        scrolled
          ? "py-3 bg-theme-bg/85 backdrop-blur-md border-b border-theme-border shadow-xs"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-editorial mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Branding */}
        <Link
          href="#hero"
          className="group flex items-center space-x-2 focus:outline-none"
        >
          <span className="font-mono text-xs tracking-wider text-theme-muted group-hover:text-theme-text transition-colors">
            [
          </span>
          <span className="font-sans font-bold tracking-tight text-sm text-theme-text uppercase">
            Maniraj Sharma
          </span>
          <span className="font-mono text-xs tracking-wider text-theme-muted group-hover:text-theme-text transition-colors">
            ]
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-medium tracking-wide transition-colors py-1 relative ${
                  isActive
                    ? "text-[var(--accent-color)]"
                    : "text-theme-muted hover:text-theme-text"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[var(--accent-color)] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Theme Switcher & Download CV */}
        <div className="hidden lg:flex items-center space-x-5">
          <ThemeSwitcher />

          <a
            href="/resume/maniraj-sharma-cv.pdf"
            download="Maniraj_Sharma_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-theme-text border border-theme-border hover:border-theme-borderStrong hover:bg-theme-surface transition-all duration-150"
          >
            <span>CV</span>
            <Download className="w-3.5 h-3.5 text-[var(--accent-color)]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center space-x-3">
          <ThemeSwitcher />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded text-theme-text hover:bg-theme-surface border border-theme-border transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-theme-bg border-b border-theme-border px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm py-1 flex items-center justify-between ${
                    isActive ? "text-[var(--accent-color)] font-medium" : "text-theme-text"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-theme-border flex items-center justify-between">
            <a
              href="/resume/maniraj-sharma-cv.pdf"
              download="Maniraj_Sharma_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium bg-theme-surface border border-theme-border text-theme-text"
            >
              <span>Download CV</span>
              <Download className="w-3.5 h-3.5 text-[var(--accent-color)]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
