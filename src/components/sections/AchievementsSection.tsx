"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { useTranslation } from "@/lib/i18n/I18nProvider";

export function AchievementsSection() {
  const { t } = useTranslation();

  return (
    <section className="content-section bg-surface" id="portafolio">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="mb-16">
          <SectionHeading label={t.portfolio.label} title={t.portfolio.title} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.portfolio.items.map((achievement) => (
            <div
              key={achievement.title}
              className="group relative p-8 rounded-xl bg-surface-container border border-outline-variant/30 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)]"
            >
              {/* Icon + Organization */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {achievement.icon}
                  </span>
                </div>
                <span className="text-xs font-headline uppercase font-bold tracking-widest text-on-surface-variant">
                  {achievement.organization}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-headline font-bold text-on-surface mb-4 group-hover:text-primary transition-colors duration-300">
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="text-on-surface-variant font-light leading-relaxed mb-6">
                {achievement.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {achievement.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-headline font-bold tracking-wide rounded-full bg-primary/10 text-primary/80 group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider variant="curve" fillClass="fill-surface-container-low" />
    </section>
  );
}
