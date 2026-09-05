import { Button } from "@/components/ui/Button";
import PipelineDiagram from "./PipelineDiagram";
import { ArrowUpRight, ArrowDown, GitHub, LinkedIn, Mail, WhatsApp } from "./Icons";

const SPECS = [
  { label: "Volume", value: "1.7M", sub: "leads unified" },
  { label: "Deployed", value: "3", sub: "live client systems" },
  { label: "Core stack", value: "Python · Postgres", sub: "Kafka · OpenAI SDK" },
  { label: "Focus", value: "Agents & RAG", sub: "real-time pipelines" },
  { label: "Status", value: "Open to roles", sub: "Karachi · remote" },
];

const SOCIALS = [
  { href: "https://github.com/Farazkhan542", label: "GitHub", icon: <GitHub size={16} /> },
  {
    href: "https://www.linkedin.com/in/muhammad-faraz-khan-7720b1248",
    label: "LinkedIn",
    icon: <LinkedIn size={16} />,
  },
  { href: "mailto:khanfaraz39767@gmail.com", label: "Email", icon: <Mail size={16} /> },
  { href: "https://wa.me/923330343433", label: "WhatsApp", icon: <WhatsApp size={16} /> },
];

export default function Hero() {
  return (
    <section id="home" className="relative pb-14 pt-28 md:pt-32">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        {/* Datasheet header strip */}
        <div className="reveal flex items-center justify-between gap-4 border-b border-border pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:text-[11px]">
          <span>AI Agentic Developer</span>
          <span className="hidden sm:inline">LLM &amp; Data Systems</span>
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" />
            Available
          </span>
        </div>

        {/* Name as the graphic */}
        <h1 className="reveal delay-1 mt-8 font-heading font-semibold leading-[0.86] tracking-[-0.04em] text-[clamp(2.75rem,10vw,8rem)] md:mt-10">
          <span className="block">Muhammad</span>
          <span className="block">Faraz Khan</span>
        </h1>

        {/* Positioning + actions */}
        <div className="mt-8 grid gap-8 border-t border-border pt-8 md:mt-10 md:grid-cols-[1.15fr_0.85fr]">
          <p className="reveal delay-2 max-w-xl text-base leading-relaxed text-muted-foreground">
            I build multi-agent systems that move millions of records and act on
            them — ingestion, verification, enrichment, and outreach that runs
            itself once it&apos;s live.
          </p>

          <div className="reveal delay-2 flex flex-col gap-5 md:items-end">
            <div className="flex flex-wrap gap-3">
              <Button href="#projects" className="group">
                View My Work
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Button>
              <Button href="#contact" variant="outline">
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="transition-colors hover:text-foreground"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Spec grid */}
        <dl className="reveal delay-3 mt-10 grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-5">
          {SPECS.map((spec, i) => (
            <div
              key={spec.label}
              className={`border-b border-r border-border px-4 py-5 ${
                i === SPECS.length - 1 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {spec.label}
              </dt>
              <dd className="mt-2 font-heading text-base font-medium leading-tight text-foreground lg:text-lg">
                {spec.value}
              </dd>
              <dd className="mt-0.5 text-xs text-muted-foreground">{spec.sub}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Full-bleed system trace */}
      <div className="reveal delay-4 mt-12">
        <PipelineDiagram />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <a
          href="#about"
          className="reveal delay-5 mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Scroll
          <ArrowDown size={13} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
