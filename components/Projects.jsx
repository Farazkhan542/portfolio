import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import SectionHeader from "./SectionHeader";
import {
  CloudRain,
  FileText,
  MessageSquare,
  Camera,
  ArrowUpRight,
  GitHub,
} from "./Icons";

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
        <SectionHeader label="03 · Projects" title="Selected work I'm proud of" />

        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="group reveal transition-all hover:border-primary/40 hover:shadow-elevated"
            >
              <CardContent className="flex h-full flex-col gap-4 py-5">
                <div className="flex items-start justify-between gap-2">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
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
