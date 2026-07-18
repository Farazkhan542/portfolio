import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, GitHub, LinkedIn } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Card className="reveal border-transparent bg-primary text-primary-foreground shadow-elevated">
          <CardContent className="px-6 py-14 text-center md:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/70">
              05 · Contact
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Let&apos;s build something intelligent together
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Have a project in mind, a role to fill, or just want to talk
              agents and RAG? My inbox is always open.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="highlight" size="lg" href="mailto:khanfaraz39767@gmail.com">
                <Mail />
                khanfaraz39767@gmail.com
              </Button>
              <Button
                size="lg"
                href="tel:+923330343433"
                className="border border-primary-foreground/30 bg-transparent text-primary-foreground shadow-none hover:bg-primary-foreground/10"
              >
                <Phone />
                +92 333 034 3433
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/70">
              <a
                href="https://github.com/Farazkhan542"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-primary-foreground underline-offset-4 hover:underline"
              >
                <GitHub size={14} />
                GitHub
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://www.linkedin.com/in/muhammad-faraz-khan-7720b1248"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-primary-foreground underline-offset-4 hover:underline"
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
