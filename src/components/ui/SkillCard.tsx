interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="glass-card p-8 group hover:border-primary/40 transition-all duration-500">
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
        <span className="material-symbols-outlined text-4xl">{icon}</span>
      </div>
      <h3 className="font-headline text-xl font-bold text-on-surface mb-2">
        {title}
      </h3>
      <p className="text-on-surface-variant text-sm font-light">
        {description}
      </p>
    </div>
  );
}
