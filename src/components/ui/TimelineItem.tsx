interface TimelineItemProps {
  period: string;
  title: string;
  organization: string;
  description: string;
  isActive: boolean;
  url?: string;
  isTimeline?: boolean;
}

export function TimelineItem({
  period,
  title,
  organization,
  description,
  isActive,
  url,
  isTimeline,
}: TimelineItemProps) {
  const dotBase = "absolute rounded-full top-1 transition-all duration-300";
  const textTransition = "transition-colors duration-300";

  // Active timeline item: all effects on by default, dims when timeline hovered, restores when THIS item hovered
  if (isActive && isTimeline) {
    return (
      <div className="group/item">
        <div className="relative pl-10">
          <div
            className={`${dotBase} w-4 h-4 -left-2 bg-primary shadow-[0_0_15px_rgba(129,236,255,0.5)] group-hover/timeline:bg-outline group-hover/timeline:shadow-none group-hover/timeline:w-3 group-hover/timeline:h-3 group-hover/timeline:-left-[6px] group-hover/item:bg-primary! group-hover/item:shadow-[0_0_15px_rgba(129,236,255,0.5)]! group-hover/item:w-4! group-hover/item:h-4! group-hover/item:-left-2!`}
          />
          <div className="transition-transform duration-300 origin-left scale-[1.03] group-hover/timeline:scale-100 group-hover/item:scale-[1.03]!">
            <span
              className={`text-xs font-headline uppercase font-bold tracking-widest ${textTransition} text-primary group-hover/timeline:text-on-surface-variant group-hover/item:text-primary!`}
            >
              {period}
            </span>
            <h3
              className={`text-xl font-headline font-bold mt-2 ${textTransition} text-primary group-hover/timeline:text-on-surface group-hover/item:text-primary!`}
            >
              {title}
            </h3>
            <p className="text-on-surface-variant text-sm mt-1 mb-4">
              {organization}
            </p>
            <p className="text-on-surface-variant font-light leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Non-active timeline item: idle by default, gains effects on hover
  if (isTimeline) {
    return (
      <div className="group/item">
        <div className="relative pl-10">
          <div
            className={`${dotBase} w-3 h-3 -left-[6px] bg-outline group-hover/item:bg-primary group-hover/item:shadow-[0_0_10px_rgba(129,236,255,0.4)]`}
          />
          <div className="transition-transform duration-300 origin-left scale-100 group-hover/item:scale-[1.03]">
            <span
              className={`text-xs font-headline uppercase font-bold tracking-widest ${textTransition} text-on-surface-variant group-hover/item:text-primary`}
            >
              {period}
            </span>
            <h3
              className={`text-xl font-headline font-bold mt-2 ${textTransition} text-on-surface group-hover/item:text-primary`}
            >
              {title}
            </h3>
            <p className="text-on-surface-variant text-sm mt-1 mb-4">
              {organization}
            </p>
            <p className="text-on-surface-variant font-light leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Certification item (has url): scale + colors on hover
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="relative pl-10">
          <div
            className={`${dotBase} w-3 h-3 -left-[6px] bg-outline group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(129,236,255,0.4)]`}
          />
          <div className="transition-transform duration-300 origin-left group-hover:scale-[1.03]">
            <span
              className={`text-xs font-headline uppercase font-bold tracking-widest ${textTransition} text-on-surface-variant group-hover:text-primary`}
            >
              {period}
            </span>
            <h3
              className={`text-xl font-headline font-bold mt-2 flex items-center gap-2 ${textTransition} text-on-surface group-hover:text-primary`}
            >
              {title}
              <span
                className={`material-symbols-outlined text-base ${textTransition} text-on-surface-variant group-hover:text-primary`}
              >
                open_in_new
              </span>
            </h3>
            <p className="text-on-surface-variant text-sm mt-1 mb-4">
              {organization}
            </p>
            <p className="text-on-surface-variant font-light leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </a>
    );
  }

  // Default (static, e.g. education)
  return (
    <div className="relative pl-10">
      <div
        className={`${dotBase} ${isActive ? "w-4 h-4 -left-2 bg-primary shadow-[0_0_15px_rgba(129,236,255,0.5)]" : "w-3 h-3 -left-[6px] bg-outline"}`}
      />
      <span
        className={`text-xs font-headline uppercase font-bold tracking-widest ${isActive ? "text-primary" : "text-on-surface-variant"}`}
      >
        {period}
      </span>
      <h3 className="text-xl font-headline font-bold text-on-surface mt-2">
        {title}
      </h3>
      <p className="text-on-surface-variant text-sm mt-1 mb-4">
        {organization}
      </p>
      <p className="text-on-surface-variant font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}
