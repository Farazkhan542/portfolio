import { Card, CardContent } from "@/components/ui/Card";
import SectionHeader from "./SectionHeader";
import { GraduationCap, MapPin, Award, Cpu } from "./Icons";

const CARDS = [
  {
    icon: <GraduationCap size={16} />,
    title: "Education",
    body: (
      <>
        <strong className="font-medium text-foreground">BS Computer Science</strong>
        <br />
        NED University (NED-UIT)
        <br />
        Sep 2021 – Jul 2025
      </>
    ),
  },
  {
    icon: <MapPin size={16} />,
    title: "Based In",
    body: (
      <>
        <strong className="font-medium text-foreground">Karachi, Pakistan</strong>
        <br />
        Open to remote &amp; on-site roles
        <br />
        Available now
      </>
    ),
  },
  {
    icon: <Award size={16} />,
    title: "Certifications",
    body: (
      <>
        HCCDA-AI · Huawei
        <br />
        Data Science Bootcamp · DataCrumbs
        <br />
        Databases · Coursera / Meta
      </>
    ),
  },
  {
    icon: <Cpu size={16} />,
    title: "Focus",
    body: (
      <>
        Agentic AI · RAG · LLM Apps
        <br />
        Data Engineering · CDC Pipelines
        <br />
        ML &amp; Computer Vision
      </>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader label="01 · About" title="Engineering intelligence into every layer" />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="reveal space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              I&apos;m a Computer Science graduate from{" "}
              <strong className="font-medium text-foreground">
                NED University of Engineering &amp; Technology
              </strong>{" "}
              (2021 – 2025) who fell in love with what happens when large
              language models meet real production data.
            </p>
            <p>
              Today I work as an{" "}
              <strong className="font-medium text-foreground">
                AI Agentic Developer at Marktec
              </strong>
              , where I architected a lead-management platform that unified{" "}
              <strong className="font-medium text-foreground">1.7 million leads</strong>{" "}
              from MySQL, Excel and Gmail into PostgreSQL — kept in sync in real
              time with{" "}
              <strong className="font-medium text-foreground">
                Kafka + Debezium CDC
              </strong>{" "}
              — and powered by a multi-agent system that writes personalized
              outreach at scale.
            </p>
            <p>
              Whether it&apos;s a Vision-LLM resume analyzer, a RAG assistant
              over 500+ documents, or an ML system forecasting climate extremes
              — I build AI that ships.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map((card) => (
              <Card
                key={card.title}
                className="reveal transition-all hover:border-primary/40 hover:shadow-elevated"
              >
                <CardContent className="flex flex-col gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                    {card.icon}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold leading-tight tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {card.body}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
