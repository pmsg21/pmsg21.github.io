"use client";

import { useTranslation } from "@/lib/i18n/I18nProvider";

export function Footer() {
  const { locale, t } = useTranslation();

  const linkedinUrl =
    locale === "es"
      ? "https://www.linkedin.com/in/frontend-developer-pablo-sierra/"
      : "https://www.linkedin.com/in/frontend-developer-pablo-sierra/?locale=en_US";

  return (
    <footer className="w-full py-12 px-8 bg-surface-container border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="font-body text-sm tracking-wide uppercase text-on-surface/80 hover:text-on-surface transition-colors duration-300 opacity-80 hover:opacity-100">
        {t.footer.copyright}
      </div>
      <div className="flex items-center gap-8">
        <a
          className="font-body text-sm tracking-wide uppercase text-on-surface/80 hover:text-on-surface transition-colors duration-300 opacity-80 hover:opacity-100"
          href="https://github.com/pmsg21"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="font-body text-sm tracking-wide uppercase text-on-surface/80 hover:text-on-surface transition-colors duration-300 opacity-80 hover:opacity-100"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
