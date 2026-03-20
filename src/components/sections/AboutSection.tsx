"use client";

import Image from "next/image";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { useTranslation } from "@/lib/i18n/I18nProvider";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="content-section bg-surface-container-low" id="acerca">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Portrait */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative h-[400px] md:h-[500px] w-full bg-surface-container-highest rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-outline-variant">
            <Image
              alt="Pablo Sierra Professional Portrait"
              className="object-cover"
              src="/images/profile-img.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-primary font-headline tracking-widest uppercase text-xs font-bold">
              {t.about.label}
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tight">
              {t.about.title}
            </h2>
          </div>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
            {t.about.bio1}
          </p>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
            {t.about.bio2}
          </p>
          <div className="pt-6 border-t border-outline-variant/30 flex gap-12">
            {t.about.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-tighter text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionDivider variant="diagonal" fillClass="fill-surface" />
    </section>
  );
}
