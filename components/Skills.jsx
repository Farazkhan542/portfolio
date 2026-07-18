import { Fragment } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import SectionHeader from "./SectionHeader";
import { Sparkles, Database, Code, Wrench } from "./Icons";

const SKILL_GROUPS = [
  {
    icon: <Sparkles size={16} />,
    title: "AI & LLMs",
    skills: [
      "OpenAI Agents SDK",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "GPT-4",
      "Gemini",
      "LLaMA 2",
      "Vision LLM",
    ],
  },
  {
    icon: <Database size={16} />,
    title: "Data Engineering",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Apache Kafka",
      "Debezium",
      "ChromaDB",
      "FAISS",
      "Pinecone",
    ],
  },
  {
    icon: <Code size={16} />,
    title: "Programming & Frameworks",
    skills: ["Python", "Flask", "Streamlit", "TensorFlow", "Keras"],
  },
  {
    icon: <Wrench size={16} />,
    title: "Tools & Platforms",
    skills: ["Docker", "Git", "n8n", "REST APIs", "Google Sheets API", "AWS"],
  },
];

const MARQUEE = [
  "Python",
  "LangChain",
  "OpenAI Agents SDK",
  "PostgreSQL",
  "Kafka",
  "RAG",
  "Docker",
  "TensorFlow",
  "ChromaDB",
  "n8n",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader label="04 · Skills" title="My technical arsenal" />

        <div className="grid gap-4 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <Card
              key={group.title}
              className="reveal transition-all hover:border-primary/40 hover:shadow-elevated"
            >
              <CardContent className="py-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                    {group.icon}
                  </span>
                  <h3 className="font-heading text-base font-semibold leading-tight tracking-tight">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="font-mono">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="reveal marquee-mask mt-12 overflow-hidden border-y border-border py-5"
          aria-hidden="true"
        >
          <div className="flex w-max animate-scroll-x gap-8 whitespace-nowrap font-heading text-base font-semibold text-muted-foreground">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <Fragment key={i}>
                <span>{item}</span>
                <span className="self-center text-[9px] text-primary">◆</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
