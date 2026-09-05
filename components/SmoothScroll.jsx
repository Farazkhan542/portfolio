"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Eased "buttery" scroll feel site-wide. Handles in-page #anchor links
 * itself (anchors: true), so plain <a href="#section"> links keep working
 * unmodified. Honors prefers-reduced-motion by default (Lenis disables
 * smoothing and makes programmatic scrolls instant automatically).
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      stopInertiaOnNavigate: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
