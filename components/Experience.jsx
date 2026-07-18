import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import SectionHeader from "./SectionHeader";

const JOBS = [
  {
    period: "Feb 2026 — Present",
    live: true,
    role: "AI Agentic Developer",
    company: "Marktec",
    subtitle:
      "Lead Management & Email Automation Platform — Client: DigitEMB (1.7M leads)",
    points: [
      <>
        Ingested <strong className="font-medium text-foreground">1.7M leads</strong>{" "}
        from MySQL, Excel and Gmail into a unified PostgreSQL database.
      </>,
      <>
        Built real-time{" "}
        <strong className="font-medium text-foreground">Change Data Capture</strong>{" "}
        with Apache Kafka + Debezium to continuously sync all sources.
      </>,
      <>
        Designed a deduplication &amp; normalization pipeline resolving every
        lead to one canonical record.
      </>,
      <>
        Integrated{" "}
        <strong className="font-medium text-foreground">Reoon Email Verifier</strong>{" "}
        for deliverability scoring and an OpenAI-powered enrichment bot for
        missing attributes.
      </>,
      <>
        Architected a{" "}
        <strong className="font-medium text-foreground">multi-agent system</strong>{" "}
        (OpenAI Agents SDK): a Retrieval Agent queries PostgreSQL, a Copywriter
        Agent generates personalized outreach.
      </>,
    ],
    tags: [
      "Python",
      "PostgreSQL",
      "Apache Kafka",
      "Debezium",
      "OpenAI Agents SDK",
      "Docker",
    ],
  },
  {
    period: "Jan 2026 — Feb 2026",
    live: false,
    role: "AI Engineer Intern",
    company: "DataCrumbs",
    subtitle: "Resume Analyzer & Email Outreach Agent",
    points: [
      <>
        Built a Streamlit app accepting resumes (image/PDF) + job descriptions,
        auto-saving uploads to Google Drive.
      </>,
      <>
        Implemented a{" "}
        <strong className="font-medium text-foreground">Vision LLM pipeline</strong>{" "}
        extracting skills, experience &amp; layout — scoring resume-to-JD match
        (0–100) with structured feedback.
      </>,
      <>
        Developed an email agent that formats &amp; delivers the full analysis
        report to candidates; deployed on Streamlit Cloud.
      </>,
      <>
        Shipped an{" "}
        <strong className="font-medium text-foreground">n8n workflow</strong>{" "}
        sending personalized daily proposal emails from Google Sheets — zero
        manual intervention.
      </>,
    ],
    tags: [
      "Python",
      "Streamlit",
      "Vision LLM",
      "Google Drive API",
      "n8n",
      "Google Sheets API",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader label="02 · Experience" title="Where I've been building things" />

        <div className="relative max-w-3xl space-y-6 border-l border-border pl-8">
          {JOBS.map((job) => (
            <div key={job.company} className="reveal relative">
              <span className="absolute -left-[38.5px] top-6 size-3 rounded-full border-2 border-background bg-primary ring-4 ring-primary/15"></span>

              <Card className="transition-all hover:border-primary/40 hover:shadow-elevated">
                <CardContent className="py-5">
                  <Badge variant={job.live ? "primary" : "outline"} className="font-mono">
                    {job.period}
                  </Badge>

                  <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight">
                    {job.role}{" "}
                    <span className="font-normal text-muted-foreground">
                      @ {job.company}
                    </span>
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-primary">
                    {job.subtitle}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
