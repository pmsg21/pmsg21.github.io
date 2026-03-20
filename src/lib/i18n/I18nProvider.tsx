"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Locale, TranslationType } from "./translations";
import { typedTranslations } from "./translations";

const STORAGE_KEY = "portfolio-locale";

interface I18nContextType {
  locale: Locale;
  t: TranslationType;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  t: typedTranslations.en,
  toggleLocale: () => {},
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Always start with "en" on server and initial client render to avoid hydration mismatch
  const [locale, setLocale] = useState<Locale>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  // Sync with localStorage after hydration
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es") {
      setLocale("es");
      document.documentElement.lang = "es";
    }
    setIsHydrated(true);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  useEffect(() => {
    if (isHydrated) {
      document.documentElement.lang = locale;
    }
  }, [locale, isHydrated]);

  const t = typedTranslations[locale];

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  return useContext(I18nContext);
}
