export default function SectionHeader({ path, title, description }) {
  const [root, name] = path.split("/");

  return (
    <div className="reveal relative mb-10 overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-3 left-0 select-none whitespace-nowrap font-heading text-[3.5rem] font-bold uppercase leading-none text-foreground/[0.05] md:-top-6 md:text-[6rem] lg:text-[7.5rem]"
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
