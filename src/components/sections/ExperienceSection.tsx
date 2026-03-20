"use client";

import { TimelineItem } from "@/components/ui/TimelineItem";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { useTranslation } from "@/lib/i18n/I18nProvider";

export function ExperienceSection() {
  const { locale, t } = useTranslation();

  const cvFile =
    locale === "es"
      ? "/files/CV_Pablo_Sierra_ES.pdf"
      : "/files/CV_Pablo_Sierra _EN.pdf";

  return (
    <section
      className="content-section pb-48! bg-surface-container-low"
      id="cv"
    >
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Experience */}
        <div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between justify-start gap-4 lg:gap-0 mb-12">
            <h2 className="font-headline text-3xl font-bold text-on-surface flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                work
              </span>{" "}
              {t.experience.title}
            </h2>
            <a
              href={cvFile}
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-headline font-bold text-sm rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] group"
            >
              <span className="material-symbols-outlined text-lg group-hover:translate-y-0.5 transition-transform duration-300">
                download
              </span>
              {t.cv.download}
            </a>
          </div>
          <div className="space-y-12 border-l border-outline-variant/30 ml-3 group/timeline">
            {t.experience.items.map((entry) => (
              <TimelineItem
                key={entry.period + entry.organization}
                period={entry.period}
                title={entry.title}
                organization={entry.organization}
                description={entry.description}
                isActive={entry.isActive}
                isTimeline
              />
            ))}
          </div>
        </div>

        {/* Education + Freelance + Certifications */}
        <div className="space-y-16">
          {/* Education */}
          <div>
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-12 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                school
              </span>{" "}
              {t.education.title}
            </h2>
            <div className="space-y-12 border-l border-outline-variant/30 ml-3">
              {t.education.items.map((entry) => (
                <TimelineItem
                  key={entry.period + entry.organization}
                  period={entry.period}
                  title={entry.title}
                  organization={entry.organization}
                  description={entry.description}
                  isActive={entry.isActive}
                />
              ))}
            </div>
          </div>

          {/* Freelance Projects */}
          <div>
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-12 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                rocket_launch
              </span>{" "}
              {t.freelance.title}
            </h2>
            <div className="space-y-12 border-l border-outline-variant/30 ml-3">
              {t.freelance.items.map((entry) => (
                <TimelineItem
                  key={entry.period + entry.organization}
                  period={entry.period}
                  title={entry.title}
                  organization={entry.organization}
                  description={entry.description}
                  isActive={entry.isActive}
                  url={entry.url}
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-12 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                workspace_premium
              </span>{" "}
              {t.certifications.title}
            </h2>
            <div className="space-y-12 border-l border-outline-variant/30 ml-3">
              {t.certifications.items.map((entry) => (
                <TimelineItem
                  key={entry.period + entry.title}
                  period={entry.period}
                  title={entry.title}
                  organization={entry.organization}
                  description={entry.description}
                  isActive={entry.isActive}
                  url={entry.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionDivider variant="angle" fillClass="fill-surface" />
    </section>
  );
}
