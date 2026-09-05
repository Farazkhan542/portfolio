export default function SectionHeader({ path, title, description }) {
  const [root, name] = path.split("/");

  return (
    <div className="reveal relative mb-10 overflow-hidden pt-16 md:pt-24 lg:pt-32">
      {/* Sits fully visible in its own band above the label — never behind the
          live text. leading-[1.2] keeps descenders inside the measured box so
          the padding below is honest clearance. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 select-none whitespace-nowrap font-heading text-[2.75rem] font-bold uppercase leading-[1.2] text-foreground/[0.05] md:text-[4.5rem] lg:text-[6rem]"
      >
        {name}
      </span>

      <div className="relative">
        <p className="font-mono text-xs text-muted-foreground">
          {root}/<span className="text-primary">{name}</span>
        </p>
        <h2 className="mt-2 font-heading text-2xl font-medium tracking-tight md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
