import { Card, CardContent } from "@/components/ui/Card";
import ContactForm from "./ContactForm";
import { Mail, WhatsApp, GitHub, LinkedIn, ArrowUpRight } from "./Icons";

const METHODS = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "khanfaraz39767@gmail.com",
    href: "mailto:khanfaraz39767@gmail.com",
  },
  {
    icon: <WhatsApp size={18} />,
    label: "WhatsApp",
    value: "+92 333 034 3433",
    href: "https://wa.me/923330343433",
  },
  {
    icon: <LinkedIn size={18} />,
    label: "LinkedIn",
    value: "Muhammad Faraz Khan",
    href: "https://www.linkedin.com/in/muhammad-faraz-khan-7720b1248",
  },
  {
    icon: <GitHub size={18} />,
    label: "GitHub",
    value: "Farazkhan542",
    href: "https://github.com/Farazkhan542",
  },
];

export default function Contact() {
  // Only rendered once the key exists, so a dead form is never shipped.
  const formKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Card className="reveal relative overflow-hidden border-border shadow-elevated">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
            aria-hidden="true"
          />

          <CardContent className="relative px-6 py-14 md:py-16">
            <div className="text-center">
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
            </div>

            <div
              className={`mx-auto mt-10 grid gap-8 text-left ${
                formKey ? "max-w-4xl md:grid-cols-2" : "max-w-2xl"
              }`}
            >
              <div className={formKey ? "space-y-3" : "grid gap-3 sm:grid-cols-2"}>
                {METHODS.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      method.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="group flex items-center gap-3 rounded-lg border border-border bg-muted/20 px-4 py-3 transition-all hover:border-primary/40 hover:bg-muted/40"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground">
                      {method.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] uppercase tracking-wide text-muted-foreground">
                        {method.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-foreground">
                        {method.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                    />
                  </a>
                ))}
              </div>

              {formKey ? <ContactForm accessKey={formKey} /> : null}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Karachi, Pakistan
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
