"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "./Icons";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [active, setActive] = useState("home");

  function openMenu() {
    setMenuMounted(true);
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false); // stays mounted through the closing animation, see onAnimationEnd below
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 h-16 border-b border-transparent transition-all",
        scrolled &&
          "border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/65"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 md:px-8">
        <a href="#home" className="mr-auto flex items-center gap-2.5">
          <span className="grid size-9 grid-cols-2 gap-0.5 rounded-lg border border-border bg-muted/40 p-1.5">
            <span className="rounded-[2px] bg-muted-foreground/40" />
            <span className="rounded-[2px] bg-[hsl(var(--chart-3))]" />
            <span className="rounded-[2px] bg-highlight" />
            <span className="animate-pulse rounded-[2px] bg-primary" />
          </span>
          <span className="font-heading text-lg font-medium tracking-tight">
            Faraz Khan
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        <Button href="#contact" size="sm" className="hidden md:inline-flex">
          Hire Me
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => (menuOpen ? closeMenu() : openMenu())}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {menuMounted && (
        <div
          className={cn(
            "absolute inset-x-4 top-[68px] rounded-xl border border-border bg-popover p-2 shadow-popover md:hidden",
            menuOpen
              ? "animate-[scale-up_210ms_ease-out_forwards]"
              : "animate-[scale-down_150ms_ease-in_forwards]"
          )}
          onAnimationEnd={() => {
            if (!menuOpen) setMenuMounted(false);
          }}
        >
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className={cn(
                "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active === link.id
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
