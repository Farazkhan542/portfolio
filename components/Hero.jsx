"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "./Icons";

const ROLES = [
  "AI Agents",
  "RAG Pipelines",
  "LLM Applications",
  "Multi-Agent Systems",
  "Data Platforms",
];

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = ROLES[0];
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timerId;

    const typeLoop = () => {
      const current = ROLES[roleIndex];

      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          timerId = setTimeout(typeLoop, 1800);
          return;
        }
        timerId = setTimeout(typeLoop, 70);
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
          timerId = setTimeout(typeLoop, 350);
          return;
        }
        timerId = setTimeout(typeLoop, 38);
      }
    };

    typeLoop();
    return () => clearTimeout(timerId);
  }, []);

  return (
    <section id="home" className="relative flex min-h-svh items-center pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="reveal mb-6">
            <Badge variant="success" className="gap-2 px-3 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60"></span>
                <span className="relative inline-flex size-2 rounded-full bg-success"></span>
              </span>
              Open to AI Engineering opportunities
            </Badge>
          </div>

          <h1 className="reveal delay-1 font-heading text-4xl font-semibold tracking-tight md:text-6xl">
            Hi, I&apos;m <span className="text-primary">Muhammad Faraz Khan</span>
          </h1>

          <div className="reveal delay-2 mt-4 flex flex-wrap items-baseline gap-2 font-heading text-xl font-semibold md:text-2xl">
            <span className="text-muted-foreground">I build</span>
            <span className="text-primary">
              <span ref={typedRef}></span>
              <span className="animate-blink font-normal">|</span>
            </span>
          </div>

          <p className="reveal delay-3 mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            AI Agentic Developer &amp; LLM Engineer from Karachi, Pakistan —
            architecting multi-agent systems, RAG pipelines and real-time data
            platforms that turn raw data into intelligent, automated products.
          </p>

          <div className="reveal delay-4 mt-8 flex flex-wrap gap-3">
            <Button href="#projects" size="lg" className="group">
              View My Work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>

          <div className="reveal delay-5 mt-8 flex gap-2.5">
            <Button
              variant="outline"
              size="icon"
              href="https://github.com/Farazkhan542"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub />
            </Button>
            <Button
              variant="outline"
              size="icon"
              href="https://www.linkedin.com/in/muhammad-faraz-khan-7720b1248"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </Button>
            <Button
              variant="outline"
              size="icon"
              href="mailto:khanfaraz39767@gmail.com"
              aria-label="Email"
            >
              <Mail />
            </Button>
          </div>
        </div>

        <div className="reveal delay-3 relative" aria-hidden="true">
          <Card className="overflow-hidden shadow-elevated">
            <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
              <span className="size-2.5 rounded-full bg-muted-foreground/25"></span>
              <span className="size-2.5 rounded-full bg-muted-foreground/25"></span>
              <span className="size-2.5 rounded-full bg-primary"></span>
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                agent_pipeline.py
              </span>
            </div>
            <pre className="overflow-x-auto whitespace-pre p-5 font-mono text-[13px] leading-7 text-foreground/80">
              <code>
                <span className="text-primary">from</span>
                {" openai_agents "}
                <span className="text-primary">import</span>
                {" Agent\n\n"}
                <span className="text-foreground">retrieval_agent</span>
                {" = Agent(\n    name="}
                <span className="text-chart-4">&quot;Retrieval&quot;</span>
                {",\n    tools=["}
                <span className="text-foreground">query_postgres</span>
                {"],\n)\n"}
                <span className="text-foreground">copywriter</span>
                {" = Agent(\n    name="}
                <span className="text-chart-4">&quot;Copywriter&quot;</span>
                {",\n    model="}
                <span className="text-chart-4">&quot;gpt-4&quot;</span>
                {",\n)\n\n"}
                <span className="italic text-muted-foreground">
                  # 1.7M leads → personalized outreach
                </span>
                {"\n"}
                <span className="text-foreground">run_pipeline</span>
                {"(leads="}
                <span className="text-highlight">1_700_000</span>
                {")\n"}
                <span className="text-chart-4">✓ agents deployed · emails flowing</span>
              </code>
            </pre>
          </Card>

          <Badge
            variant="solid"
            className="absolute -top-3 right-[8%] hidden animate-floaty px-3 py-1.5 shadow-elevated lg:inline-flex"
          >
            Multi-Agent Systems
          </Badge>
          <Badge
            variant="solid"
            className="absolute -left-8 bottom-[18%] hidden animate-floaty px-3 py-1.5 shadow-elevated [animation-delay:-1.8s] lg:inline-flex"
          >
            RAG Pipelines
          </Badge>
          <Badge
            variant="solid"
            className="absolute -bottom-3 right-[14%] hidden animate-floaty px-3 py-1.5 shadow-elevated [animation-delay:-3.4s] lg:inline-flex"
          >
            Real-time CDC
          </Badge>
        </div>
      </div>
    </section>
  );
}
