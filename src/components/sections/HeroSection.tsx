"use client";

import { TypewriterText } from "@/components/ui/TypewriterText";
import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { useTranslation } from "@/lib/i18n/I18nProvider";

export function HeroSection() {
  const { locale, t } = useTranslation();

  const linkedinUrl =
    locale === "es"
      ? "https://www.linkedin.com/in/frontend-developer-pablo-sierra/"
      : "https://www.linkedin.com/in/frontend-developer-pablo-sierra/?locale=en_US";

  return (
    <section
      className="content-section justify-center overflow-hidden bg-surface"
      id="inicio"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 text-center px-4 w-full">
        <p className="font-headline text-primary tracking-[0.2em] uppercase mb-4 text-sm font-semibold h-6">
          <TypewriterText texts={t.hero.roles} />
        </p>
        <h1 className="font-headline text-6xl md:text-8xl font-black text-on-surface tracking-tighter mb-6">
          Pablo Sierra
        </h1>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-light">
          {t.hero.subtitle.before}
          <span className="text-on-surface font-medium">
            {t.hero.subtitle.bold1}
          </span>
          {t.hero.subtitle.middle}
          <span className="text-on-surface font-medium">
            {t.hero.subtitle.bold2}
          </span>
          {t.hero.subtitle.after}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button href={linkedinUrl}>{t.hero.linkedin}</Button>
          <Button variant="ghost" href="https://github.com/pmsg21">
            {t.hero.github}
          </Button>
        </div>
      </div>

      <SectionDivider variant="wave" fillClass="fill-surface-container-low" />
    </section>
  );
}
