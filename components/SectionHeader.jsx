export default function SectionHeader({ path, title, description }) {
  const [root, name] = path.split("/");

  return (
    <div className="reveal relative mb-10 overflow-hidden pt-12 md:pt-16">
      {/* Cropped by the wrapper so only the word's lower edge shows, in its own
          band above the label — it must never sit behind the live text. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 left-0 select-none whitespace-nowrap font-heading text-[3.5rem] font-bold uppercase leading-none text-foreground/[0.05] md:-top-10 md:text-[6rem] lg:-top-16 lg:text-[7.5rem]"
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
