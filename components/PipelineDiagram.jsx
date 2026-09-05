const STAGES = [
  { label: "MySQL · Excel · Gmail", tone: "graphite", group: "ingest" },
  { label: "PostgreSQL", tone: "graphite" },
  { label: "Dedupe + Normalize", tone: "graphite" },
  { label: "Reoon Verify", tone: "data", group: "validate" },
  { label: "AI Enrich", tone: "data" },
  { label: "Retrieval Agent", tone: "relay", group: "agents" },
  { label: "Copywriter Agent", tone: "relay" },
  { label: "Outreach Sent", tone: "signal", group: "delivered" },
];

const TONE = {
  graphite: { text: "text-muted-foreground", fill: "hsl(var(--muted-foreground))" },
  data: { text: "text-[hsl(var(--chart-3))]", fill: "hsl(var(--chart-3))" },
  relay: { text: "text-highlight", fill: "hsl(var(--highlight))" },
  signal: { text: "text-primary", fill: "hsl(var(--primary))" },
};

const WIDTH = 1000;
const HEIGHT = 300;
const Y = HEIGHT / 2;
const PAD = 34;
const STEP = (WIDTH - PAD * 2) / (STAGES.length - 1);
const POINTS = STAGES.map((stage, i) => ({
  ...stage,
  x: PAD + STEP * i,
  above: i % 2 === 0,
}));

function DesktopDiagram() {
  return (
    <div className="relative hidden aspect-[1000/300] w-full md:block">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" style={{ stopColor: TONE.graphite.fill }} />
            <stop offset="27%" style={{ stopColor: TONE.graphite.fill }} />
            <stop offset="32%" style={{ stopColor: TONE.data.fill }} />
            <stop offset="55%" style={{ stopColor: TONE.data.fill }} />
            <stop offset="60%" style={{ stopColor: TONE.relay.fill }} />
            <stop offset="83%" style={{ stopColor: TONE.relay.fill }} />
            <stop offset="88%" style={{ stopColor: TONE.signal.fill }} />
            <stop offset="100%" style={{ stopColor: TONE.signal.fill }} />
          </linearGradient>
          <filter id="pipeline-glow" x="-20%" y="-300%" width="140%" height="700%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line
          className="pipeline-flow-line"
          pathLength="1"
          x1={PAD}
          y1={Y}
          x2={WIDTH - PAD}
          y2={Y}
          stroke="url(#flow)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#pipeline-glow)"
        />

        {POINTS.map((p) => (
          <circle key={p.label} cx={p.x} cy={Y} r="5" fill={TONE[p.tone].fill} />
        ))}

        <g className="pipeline-pulses motion-reduce:hidden">
          {[0, 1, 2].map((i) => (
            <circle key={i} r="4.5" fill="hsl(var(--primary))" filter="url(#pipeline-glow)">
              <animateMotion
                dur="4.2s"
                begin={`${i * 1.4}s`}
                repeatCount="indefinite"
                path={`M${PAD},${Y} L${WIDTH - PAD},${Y}`}
              />
            </circle>
          ))}
        </g>
      </svg>

      {POINTS.map((p) => (
        <div
          key={p.label}
          className="absolute"
          style={{
            left: `${(p.x / WIDTH) * 100}%`,
            top: "50%",
            transform: p.above
              ? "translate(-50%, calc(-100% - 16px))"
              : "translate(-50%, 16px)",
          }}
        >
          {p.group && (
            <p className={`font-mono text-[10px] uppercase tracking-wider ${TONE[p.tone].text}`}>
              {p.group}
            </p>
          )}
          <p className="whitespace-nowrap font-heading text-sm font-medium text-foreground">
            {p.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function MobileDiagram() {
  return (
    <div className="md:hidden">
      <div className="relative space-y-0 pl-5">
        <div className="absolute bottom-2 left-[3px] top-2 w-px bg-gradient-to-b from-muted-foreground via-[hsl(var(--chart-3))] to-primary opacity-40" />
        {STAGES.map((stage, i) => (
          <div key={stage.label} className="relative py-2.5 first:pt-0 last:pb-0">
            <span
              className="absolute -left-5 top-[calc(50%-3px)] size-1.5 rounded-full"
              style={{ backgroundColor: TONE[stage.tone].fill }}
            />
            {stage.group && (
              <p className={`font-mono text-[10px] uppercase tracking-wider ${TONE[stage.tone].text}`}>
                {stage.group}
              </p>
            )}
            <p className="font-heading text-sm font-medium text-foreground">{stage.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PipelineDiagram() {
  return (
    <div className="blueprint-grid rounded-xl border border-border bg-muted/20 p-5 md:p-10">
      <p className="font-mono text-[11px] text-muted-foreground">
        <span className="text-primary">$</span> trace lead-pipeline --client
        digitemb --volume 1.7M --status <span className="text-primary">live</span>
      </p>

      <p className="sr-only">
        Lead pipeline, in order, as data flows left to right: sources feed
        PostgreSQL, then dedupe and normalize, then verify and enrich, then a
        Retrieval Agent and Copywriter Agent generate and send outreach.
      </p>

      <div className="mt-8 md:mt-2">
        <DesktopDiagram />
        <MobileDiagram />
      </div>
    </div>
  );
}
