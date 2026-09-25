"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check target element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest("[data-cursor='view']");
      const interactive = target.closest("a, button, [role='button'], input, textarea");

      if (projectCard) {
        setCursorState("view");
      } else if (interactive) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      {cursorState === "view" ? (
        <div className="w-16 h-16 rounded-full bg-[var(--accent-color)] text-white text-[11px] font-bold tracking-wider flex items-center justify-center shadow-lg animate-in zoom-in-75 duration-150">
          VIEW →
        </div>
      ) : cursorState === "hover" ? (
        <div className="w-8 h-8 rounded-full border border-[var(--accent-color)] bg-[var(--accent-color)]/15 backdrop-blur-[1px] transition-all duration-150 scale-125" />
      ) : (
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-color)] transition-transform duration-100" />
      )}
    </div>
  );
}
