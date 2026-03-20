"use client";

import { SkillCard } from "@/components/ui/SkillCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { useTranslation } from "@/lib/i18n/I18nProvider";

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section className="content-section bg-surface pb-48!" id="habilidades">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="mb-16">
          <SectionHeading label={t.skills.label} title={t.skills.title} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.skills.items.map((skill) => (
            <SkillCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>

      <SectionDivider variant="steps" fillClass="fill-surface-container-low" />
    </section>
  );
}
