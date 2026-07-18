"use client";

import { useEffect, useRef } from "react";

/**
 * Global page effects: scroll progress bar + reveal-on-scroll.
 */
export default function Effects() {
  const progressRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const cleanups = [];

    // ---------- Scroll progress ----------
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      if (progressRef.current) progressRef.current.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // ---------- Reveal on scroll ----------
    const revealEls = document.querySelectorAll(".reveal");
    if (reducedMotion) {
      revealEls.forEach((el) => el.classList.add("visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
      cleanups.push(() => revealObserver.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed left-0 top-0 z-50 h-0.5 w-0 bg-primary"
      aria-hidden="true"
    />
  );
}
