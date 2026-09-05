import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";
import {
  Layout,
  CloudRain,
  FileText,
  MessageSquare,
  Camera,
  ArrowUpRight,
  GitHub,
} from "./Icons";

const FEATURED = {
  icon: <Layout size={22} />,
  title: "VibeUI",
  tagline:
    "AI-powered UI generation from a conversation — describe your product, get a full set of production-ready React screens grounded in real competitor research.",
  role: "Solo full-stack / AI engineer",
  category: "Full-stack AI web app · Developer tool",
  description:
    "VibeUI turns a short 4-question chat into a complete, multi-screen product UI. It interviews the user, researches their real competitors live on the web, and generates three production-ready React + Tailwind screens (e.g. landing + dashboard + settings) rendered in a live in-browser sandbox — built for people who can write the logic but freeze on frontend design decisions.",
  liveUrl: "https://vibe-ui.faraz-khan.xyz",
  sourceUrl: "https://github.com/Farazkhan542/VibeUI",
  highlights: [
    "Conversational 4-question “vibe interview” that produces a structured design brief",
    "Live web-grounded competitor research (Google Search via Gemini) with a real-time activity log",
    "Multi-screen generation — 3 model-chosen screens per product, not a single component",
    "Live sandboxed preview (Sandpack) with code view and a screen switcher",
    "Multi-tenant auth with encrypted, per-user “bring your own key” API keys",
    "Per-account project history, plus a selectable generation model (Gemini 2.5 Flash / Pro)",
  ],
  stack: [
    {
      label: "Frontend",
      items: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Zustand",
        "Framer Motion",
        "Sandpack",
      ],
    },
    {
      label: "Backend",
      items: [
        "FastAPI",
        "Google Gemini 2.5",
        "Google Search Grounding",
        "Fernet Encryption",
      ],
    },
    {
      label: "Data & Auth",
      items: ["Supabase", "PostgreSQL", "Row-Level Security"],
    },
    {
      label: "Deployment",
      items: ["Vercel", "Custom Domains"],
    },
  ],
};

const PROJECTS = [
  {
    icon: <CloudRain size={18} />,
    badge: "Final Year Project",
    title: "ClimateXtreme Predictor",
    description: (
      <>
        ML climate forecasting system predicting rainfall, floods, droughts and
        heatwaves — achieving{" "}
        <strong className="font-medium text-foreground">
          70–75% validation accuracy
        </strong>{" "}
        on historical datasets.
      </>
    ),
    tags: ["Python", "Random Forest", "LSTM", "XGBoost"],
  },
  {
    icon: <FileText size={18} />,
    link: "https://github.com/Farazkhan542/DocuQueryAI",
    title: "DocuQueryAI",
    description: (
      <>
        RAG document query system enabling semantic search across{" "}
        <strong className="font-medium text-foreground">
          500+ PDF &amp; TXT pages
        </strong>{" "}
        — cutting manual lookup effort by 20–25% vs. keyword search.
      </>
    ),
    tags: ["LangChain", "Gemini", "ChromaDB", "RAG"],
  },
  {
    icon: <MessageSquare size={18} />,
    link: "https://github.com/Farazkhan542/WebTalk-RAG-Assistant",
    title: "WebTalk RAG Assistant",
    description: (
      <>
        Conversational AI for natural-language Q&amp;A over scraped website
        content — reducing user search time by{" "}
        <strong className="font-medium text-foreground">~20%</strong>.
      </>
    ),
    tags: ["LangChain", "ChromaDB", "Streamlit"],
  },
  {
    icon: <Camera size={18} />,
    link: "https://github.com/Farazkhan542/AutoVision_CNN/tree/master",
    title: "AutoVision CNN",
    description: (
      <>
        CNN car-image classifier hitting{" "}
        <strong className="font-medium text-foreground">85% test accuracy</strong>,
        deployed via Flask as a real-time web prediction interface.
      </>
    ),
    tags: ["TensorFlow", "Keras", "Flask"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader path="~/projects" title="Selected work I'm proud of" />

        {/* Featured project */}
        <Card className="reveal mb-4 overflow-hidden border-primary/30 shadow-elevated">
          <CardContent className="grid gap-8 py-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
                  {FEATURED.icon}
                </span>
                <Badge variant="success" className="gap-1.5">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60"></span>
                    <span className="relative inline-flex size-1.5 rounded-full bg-success"></span>
                  </span>
                  Live Product
                </Badge>
                <Badge variant="highlight">Flagship</Badge>
              </div>

              <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight">
                {FEATURED.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {FEATURED.role} · {FEATURED.category}
              </p>

              <p className="mt-4 text-sm font-medium leading-relaxed text-foreground">
                {FEATURED.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {FEATURED.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  href={FEATURED.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  Live Demo
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Button>
                <Button
                  variant="outline"
                  href={FEATURED.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub size={16} />
                  View Source
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:border-l lg:border-border lg:pl-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Highlights
                </p>
                <ul className="mt-3 space-y-2.5">
                  {FEATURED.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Stack
                </p>
                <div className="mt-3 space-y-3">
                  {FEATURED.stack.map((group) => (
                    <div key={group.label}>
                      <p className="text-xs font-medium text-foreground">
                        {group.label}
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <Badge
                            key={item}
                            variant="outline"
                            className="font-mono"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <TiltCard key={project.title} className="h-full">
              <Card className="group reveal h-full transition-all hover:border-primary/40 hover:shadow-elevated">
              <CardContent className="flex h-full flex-col gap-4 py-5">
                <div className="flex items-start justify-between gap-2">
                  <span className="flex size-11 items-center justify-center rounded-lg border border-border text-muted-foreground">
                    {project.icon}
                  </span>
                  {project.badge ? (
                    <Badge variant="highlight">{project.badge}</Badge>
                  ) : null}
                  {project.link ? (
                    <Button
                      variant="outline"
                      size="icon-sm"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  ) : null}
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>

        <div className="reveal mt-8 text-center">
          <Button
            variant="outline"
            href="https://github.com/Farazkhan542"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub size={16} />
            Explore more on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
