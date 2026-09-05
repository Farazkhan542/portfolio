const STAGES = [
  { label: "MySQL · Excel · Gmail", tone: "graphite" },
  { label: "PostgreSQL", tone: "graphite" },
  { label: "Dedupe + Normalize", tone: "graphite" },
  { label: "Reoon Verify", tone: "data" },
  { label: "AI Enrich", tone: "data" },
  { label: "Retrieval Agent", tone: "relay" },
  { label: "Copywriter Agent", tone: "relay" },
  { label: "Outreach Sent", tone: "signal" },
];

const TONE = {
  graphite: {
    dot: "bg-muted-foreground/50",
    text: "text-muted-foreground",
    border: "border-border",
  },
  data: {
    dot: "bg-[hsl(var(--chart-3))]",
    text: "text-[hsl(var(--chart-3))]",
    border: "border-[hsl(var(--chart-3)/0.35)]",
  },
  relay: {
    dot: "bg-highlight",
    text: "text-highlight",
    border: "border-highlight/30",
  },
  signal: {
    dot: "bg-primary",
    text: "text-primary",
    border: "border-primary/40",
  },
};

function Node({ stage }) {
  const tone = TONE[stage.tone];
  return (
    <div
      className={`flex shrink-0 items-center gap-2 rounded-md border ${tone.border} bg-card px-2.5 py-1.5 md:px-3 md:py-2`}
    >
      <span className={`size-1.5 shrink-0 rounded-full ${tone.dot}`} />
      <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-wide text-foreground md:text-[11px]">
        {stage.label}
      </span>
    </div>
  );
}

function Track({ toTone, vertical = false }) {
  const tone = TONE[toTone];
  return (
    <div
      className={
        vertical
          ? `pipeline-track pipeline-track-vertical ml-[15px] h-6 w-px bg-border md:hidden ${tone.text}`
          : `pipeline-track hidden h-px flex-1 bg-border md:block ${tone.text}`
      }
      style={{ "--packet-delay": `${Math.random() * -2.6}s` }}
      aria-hidden="true"
    >
      <span className="pipeline-packet" />
    </div>
  );
}

export default function PipelineDiagram() {
  return (
    <div className="blueprint-grid rounded-xl border border-border bg-muted/20 p-4 md:p-6">
      <p className="font-mono text-[11px] text-muted-foreground">
        <span className="text-primary">$</span> trace lead-pipeline --client
        digitemb --volume 1.7M --status <span className="text-primary">live</span>
      </p>

      <p className="sr-only">
        Lead pipeline, in order, as data flows left to right:
      </p>
      <div className="mt-4 flex flex-col gap-0 md:flex-row md:items-center md:gap-0">
        {STAGES.map((stage, i) => (
          <div key={stage.label} className="flex flex-col md:contents">
            <Node stage={stage} />
            {i < STAGES.length - 1 && (
              <>
                <Track toTone={STAGES[i + 1].tone} vertical />
                <Track toTone={STAGES[i + 1].tone} />
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-muted-foreground/50" /> ingest &amp; store
        </span>
        <span className="flex items-center gap-1.5">
          <span className={`size-1.5 rounded-full ${TONE.data.dot}`} /> validate &amp; enrich
        </span>
        <span className="flex items-center gap-1.5">
          <span className={`size-1.5 rounded-full ${TONE.relay.dot}`} /> agents &amp; outreach
        </span>
        <span className="flex items-center gap-1.5">
          <span className={`size-1.5 rounded-full ${TONE.signal.dot}`} /> delivered
        </span>
      </div>
    </div>
  );
}
