import { Card, CardContent } from "@/components/ui/Card";
import SectionHeader from "./SectionHeader";
import { Quote } from "./Icons";

const TESTIMONIALS = [
  {
    quote:
      "Faraz took ownership of a 1.7-million-lead migration for our client and built the entire CDC pipeline and multi-agent outreach system with minimal supervision. He works like an engineer twice his experience level.",
    name: "Abdul Mueed",
    role: "Team Lead",
    company: "Marktec",
  },
  {
    quote:
      "During his internship, Faraz shipped a complete Vision-LLM resume analyzer end-to-end — from pipeline to deployment — in weeks. He learns fast and delivers production-quality work.",
    name: "Abis Hussain",
    role: "AI Mentor",
    company: "DataCrumbs",
  },
  {
    quote:
      "Faraz's final-year project on climate-extreme prediction showed strong applied ML skills and genuine research discipline. One of the more self-driven students I've supervised.",
    name: "Dr. Lubaid",
    role: "FYP Supervisor",
    company: "NED University (NED-UIT)",
  },
];

function initials(name) {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader
          label="05 · Testimonials"
          title="What people say about working with me"
        />

        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Card
              key={t.name}
              className={`reveal delay-${i + 1} transition-all hover:border-primary/40 hover:shadow-elevated`}
            >
              <CardContent className="flex h-full flex-col gap-4 py-5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <Quote size={16} />
                </span>

                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-heading text-xs font-semibold text-primary">
                    {initials(t.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{t.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
