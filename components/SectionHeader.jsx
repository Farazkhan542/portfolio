export default function SectionHeader({ label, title, description }) {
  return (
    <div className="reveal mb-10">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
        {label}
      </p>
      <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
