interface SectionHeadingProps {
  label: string;
  title: string;
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div>
      <span className="text-primary font-headline tracking-widest uppercase text-xs font-bold">
        {label}
      </span>
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tight mt-4">
        {title}
      </h2>
    </div>
  );
}
