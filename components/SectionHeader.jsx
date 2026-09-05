export default function SectionHeader({ path, title, description }) {
  const [root, name] = path.split("/");

  return (
    <div className="reveal mb-10">
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
  );
}
