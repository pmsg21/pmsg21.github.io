"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { navSections } from "@/data/navigation";
import { useTranslation } from "@/lib/i18n/I18nProvider";
import { useTheme } from "@/lib/theme/ThemeProvider";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isClickScrolling = useRef(false);
  const clickTarget = useRef<string | null>(null);
  const { locale, t, toggleLocale } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  // Scroll detection
  useEffect(() => {
    const sectionIds = navSections.map((s) => s.href.replace("#", ""));

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      if (atBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      const detectionLine = window.innerHeight * 0.5;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (!el) continue;

        if (el.getBoundingClientRect().top <= detectionLine) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }

      setActiveSection(sectionIds[0]);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click scroll lock
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (!isClickScrolling.current) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isClickScrolling.current = false;
        clickTarget.current = null;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");

      isClickScrolling.current = true;
      clickTarget.current = id;
      setActiveSection(id);
      setDrawerOpen(false);

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl shadow-[0_0_40px_rgba(129,236,255,0.05)] transition-colors duration-500 border-b border-outline-variant/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleClick(e, "#inicio")}
            className="text-xl font-black text-primary tracking-tighter font-headline cursor-pointer hover:scale-105 transition-transform duration-300 inline-block"
          >
            Pablo Sierra
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-x-8">
            {navSections.map((section, index) => {
              const sectionId = section.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={section.href}
                  className={`font-headline font-bold tracking-tight transition-all duration-300 ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-on-surface/70 hover:text-on-surface pb-1 border-b-2 border-transparent"
                  }`}
                  href={section.href}
                  onClick={(e) => handleClick(e, section.href)}
                >
                  {t.nav.items[index]}
                </a>
              );
            })}
          </div>

          {/* Desktop controls */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className="p-2 hover:bg-surface-container rounded-lg transition-all duration-300 scale-95 active:scale-90 cursor-pointer flex items-center gap-1.5"
              onClick={toggleLocale}
              aria-label={
                locale === "en" ? "Switch to Spanish" : "Cambiar a Inglés"
              }
            >
              <span className="material-symbols-outlined text-on-surface/70 text-xl">
                language
              </span>
              <span className="font-headline font-bold text-sm text-on-surface/70">
                {locale === "en" ? "ES" : "EN"}
              </span>
            </button>
            <button
              className="p-2 hover:bg-surface-container rounded-lg transition-all duration-300 scale-95 active:scale-90 cursor-pointer"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <span className="material-symbols-outlined text-on-surface/70">
                {theme === "dark" ? "dark_mode" : "light_mode"}
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 hover:bg-surface-container rounded-lg transition-all duration-300 cursor-pointer"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-on-surface/70 text-2xl">
              menu
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 z-70 h-full w-72 bg-surface-container border-l border-outline-variant/30 shadow-[-8px_0_40px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out lg:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!drawerOpen}
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/30">
            <span className="font-headline font-black text-primary tracking-tighter text-lg">
              {t.nav.menu ?? "Menu"}
            </span>
            <button
              className="p-2 hover:bg-surface-container-highest rounded-lg transition-all duration-300 cursor-pointer"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-on-surface/70">
                close
              </span>
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navSections.map((section, index) => {
              const sectionId = section.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={section.href}
                  href={section.href}
                  onClick={(e) => handleClick(e, section.href)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg font-headline font-bold tracking-tight transition-all duration-300 ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-on-surface/70 hover:text-on-surface hover:bg-surface-container-highest"
                  }`}
                >
                  {isActive && (
                    <span className="w-1 h-5 bg-primary rounded-full" />
                  )}
                  <span className={isActive ? "" : "ml-5"}>
                    {t.nav.items[index]}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Drawer footer — controls */}
          <div className="px-6 py-5 border-t border-outline-variant/30 flex items-center gap-3">
            <button
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-highest hover:bg-surface-container rounded-lg transition-all duration-300 cursor-pointer"
              onClick={toggleLocale}
              aria-label={
                locale === "en" ? "Switch to Spanish" : "Cambiar a Inglés"
              }
            >
              <span className="material-symbols-outlined text-on-surface/70 text-xl">
                language
              </span>
              <span className="font-headline font-bold text-sm text-on-surface/70">
                {locale === "en" ? "ES" : "EN"}
              </span>
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-highest hover:bg-surface-container rounded-lg transition-all duration-300 cursor-pointer"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <span className="material-symbols-outlined text-on-surface/70 text-xl">
                {theme === "dark" ? "dark_mode" : "light_mode"}
              </span>
              <span className="font-headline font-bold text-sm text-on-surface/70">
                {theme === "dark"
                  ? locale === "es"
                    ? "Oscuro"
                    : "Dark"
                  : locale === "es"
                    ? "Claro"
                    : "Light"}
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
