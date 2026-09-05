"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Pins a section while the viewport scrolls, translating its track sideways —
 * scroll down, the content moves left. `header` stays anchored inside the
 * pinned view (with a progress rule) so the pin doesn't read as dead space.
 *
 * Desktop only: on touch/narrow screens and under prefers-reduced-motion it
 * degrades to a normal swipeable snap row, since scroll-jacking is hostile
 * on phones.
 */
export default function HorizontalScroll({ children, header, className = "" }) {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const [runway, setRunway] = useState(0);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    let active = false;

    const measure = () => {
      const track = trackRef.current;
      active = desktop.matches && !reduced.matches;

      if (!active || !track) {
        setRunway(0);
        if (track) track.style.transform = "";
        return;
      }
      setRunway(Math.max(0, track.scrollWidth - window.innerWidth));
    };

    const update = () => {
      frame = 0;
      const outer = outerRef.current;
      const track = trackRef.current;
      if (!outer || !track) return;

      if (!active) {
        track.style.transform = "";
        return;
      }

      const travel = outer.offsetHeight - window.innerHeight;
      const progress =
        travel > 0
          ? Math.min(1, Math.max(0, -outer.getBoundingClientRect().top / travel))
          : 0;
      const overflow = Math.max(0, track.scrollWidth - window.innerWidth);

      track.style.transform = `translate3d(${-progress * overflow}px, 0, 0)`;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    desktop.addEventListener("change", onResize);
    reduced.addEventListener("change", onResize);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      desktop.removeEventListener("change", onResize);
      reduced.removeEventListener("change", onResize);
    };
  }, [children]);

  const pinned = runway > 0;

  const headerBlock = header ? (
    <div className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-8">
      <div className="flex items-baseline justify-between gap-4">{header}</div>
      {pinned ? (
        <div className="mt-4 h-px w-full bg-border">
          <div ref={progressRef} className="h-px bg-primary" style={{ width: 0 }} />
        </div>
      ) : null}
    </div>
  ) : null;

  return (
    <div
      ref={outerRef}
      className={className}
      style={pinned ? { height: `calc(100vh + ${runway}px)` } : undefined}
    >
      <div
        className={
          pinned
            ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden"
            : ""
        }
      >
        {headerBlock}

        <div
          className={
            pinned
              ? ""
              : "overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }
        >
          <div
            ref={trackRef}
            className={`flex w-max gap-5 px-4 will-change-transform md:px-8 ${
              pinned ? "" : "snap-x snap-mandatory"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
