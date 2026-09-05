import { Button } from "@/components/ui/Button";
import PipelineDiagram from "./PipelineDiagram";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="relative pb-16 pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="max-w-3xl">
          <h1 className="reveal font-heading text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[4rem] lg:text-[4.6rem]">
            Muhammad Faraz Khan builds systems that{" "}
            <span className="text-primary">read data and act on it.</span>
          </h1>

          <p className="reveal delay-1 mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            AI Agentic Developer &amp; LLM Engineer based in Karachi, Pakistan.
            I built the system that turns 1.7M scattered leads into verified
            records and lets a team of agents write the outreach themselves.
          </p>

          <div className="reveal delay-2 mt-8 flex flex-wrap items-center gap-3">
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

          <div className="reveal delay-3 mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-muted-foreground/60" />
              Open to new AI engineering roles
            </span>
            <span className="flex items-center gap-2.5">
              <a
                href="https://github.com/Farazkhan542"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-foreground"
              >
                <GitHub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-faraz-khan-7720b1248"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-foreground"
              >
                <LinkedIn size={16} />
              </a>
              <a
                href="mailto:khanfaraz39767@gmail.com"
                aria-label="Email"
                className="transition-colors hover:text-foreground"
              >
                <Mail size={16} />
              </a>
            </span>
          </div>
        </div>

        <div className="reveal delay-4 mt-14">
          <PipelineDiagram />
        </div>
      </div>
    </section>
  );
}
