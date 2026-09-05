"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "./Icons";

const FIELD =
  "w-full rounded-lg border border-input bg-muted/20 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring/40";

export default function ContactForm({ accessKey }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Honeypot: bots fill hidden fields, humans can't see them.
    if (data.botcheck) return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio enquiry from ${data.name || "someone"}`,
          from_name: "Portfolio",
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setError(result.message || "Something went wrong. Try email instead.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Try email instead.");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-[18rem] flex-col items-center justify-center rounded-xl border border-primary/30 bg-accent/40 px-6 py-10 text-center">
        <p className="font-heading text-lg font-medium">Message sent</p>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          Thanks — it&apos;s in my inbox. I usually reply within a day.
        </p>
        <Button
          variant="outline"
          className="mt-5"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="space-y-4">
        <div>
          <label
            htmlFor="cf-name"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={`mt-1.5 ${FIELD}`}
          />
        </div>

        <div>
          <label
            htmlFor="cf-email"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={`mt-1.5 ${FIELD}`}
          />
        </div>

        <div>
          <label
            htmlFor="cf-message"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
          >
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={4}
            placeholder="Role, project, or what you're building…"
            className={`mt-1.5 resize-y ${FIELD}`}
          />
        </div>
      </div>

      <Button type="submit" className="group mt-5 w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
        {status === "sending" ? null : (
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </Button>

      <p aria-live="polite" className="mt-3 min-h-[1.25rem] text-xs text-destructive">
        {status === "error" ? error : ""}
      </p>
    </form>
  );
}
