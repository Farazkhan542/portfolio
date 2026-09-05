"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINES = [
  "waking up the agents",
  "syncing 1.7M records",
  "status: caffeinated",
  "ready",
];

const STORAGE_KEY = "faraz-portfolio-booted";
const LINE_DELAY = 220; // ms between each line appearing
const HOLD_AFTER = 380; // ms to hold once the sequence finishes
const EXIT_DURATION = 450; // ms for the wipe-away

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    let alreadyBooted = false;
    try {
      alreadyBooted = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // sessionStorage unavailable (private mode, etc.) — just show it once and move on
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (alreadyBooted || reducedMotion) {
      setVisible(false);
      return;
    }

    const timers = [];
    LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setLineCount(i + 1), i * LINE_DELAY));
    });

    const finish = () => {
      setExiting(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
      timers.push(setTimeout(() => setVisible(false), EXIT_DURATION));
    };

    timers.push(
      setTimeout(finish, LINES.length * LINE_DELAY + HOLD_AFTER)
    );

    const skip = () => {
      timers.forEach(clearTimeout);
      finish();
    };
    window.addEventListener("keydown", skip, { once: true });
    window.addEventListener("click", skip, { once: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-background transition-all ease-in-out",
        exiting && "pointer-events-none -translate-y-full opacity-0"
      )}
      style={{ transitionDuration: `${EXIT_DURATION}ms` }}
    >
      <div className="grid size-11 grid-cols-2 gap-1 rounded-lg border border-border bg-muted/40 p-2">
        <span className="rounded-[2px] bg-muted-foreground/40" />
        <span className="rounded-[2px] bg-[hsl(var(--chart-3))]" />
        <span className="rounded-[2px] bg-highlight" />
        <span className="animate-pulse rounded-[2px] bg-primary" />
      </div>

      <div className="w-64">
        {LINES.slice(0, lineCount).map((line, i) => (
          <p key={line} className="flex items-center gap-2 font-mono text-[13px]">
            <span className="text-primary">$</span>
            <span
              className={i === LINES.length - 1 ? "text-primary" : "text-muted-foreground"}
            >
              {line}
            </span>
          </p>
        ))}
      </div>

      <div className="h-px w-40 overflow-hidden bg-border">
        <div
          className="h-full bg-primary transition-[width] ease-linear"
          style={{
            width: `${(lineCount / LINES.length) * 100}%`,
            transitionDuration: `${LINE_DELAY}ms`,
          }}
        />
      </div>

      <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground/60">
        press any key to skip
      </p>
    </div>
  );
}
