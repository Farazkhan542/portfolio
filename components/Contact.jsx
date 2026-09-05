import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, GitHub, LinkedIn } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Card className="reveal relative overflow-hidden border-border shadow-elevated">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
            aria-hidden="true"
          />

          <CardContent className="relative px-6 py-14 text-center md:py-16">
            <p className="font-mono text-xs text-muted-foreground">
              ~/<span className="text-primary">contact</span>
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight md:text-4xl">
              Let&apos;s build something{" "}
              <span className="text-primary">intelligent together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Have a project in mind, a role to fill, or just want to talk
              agents and RAG? My inbox is always open.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button size="lg" href="mailto:khanfaraz39767@gmail.com">
                <Mail />
                khanfaraz39767@gmail.com
              </Button>
              <Button variant="outline" size="lg" href="tel:+923330343433">
                <Phone />
                +92 333 034 3433
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <a
                href="https://github.com/Farazkhan542"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                <GitHub size={14} />
                GitHub
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.linkedin.com/in/muhammad-faraz-khan-7720b1248"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                <LinkedIn size={14} />
                LinkedIn
              </a>
              <span aria-hidden="true">·</span>
              <span>Karachi, Pakistan</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
