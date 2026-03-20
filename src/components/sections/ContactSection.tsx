"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTranslation } from "@/lib/i18n/I18nProvider";
import { useContactForm } from "@/hooks/useContactForm";

export function ContactSection() {
  const { locale, t } = useTranslation();
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  const linkedinUrl =
    locale === "es"
      ? "https://www.linkedin.com/in/frontend-developer-pablo-sierra/"
      : "https://www.linkedin.com/in/frontend-developer-pablo-sierra/?locale=en_US";

  const isDisabled = status === "sending" || status === "success";

  const buttonLabel =
    status === "sending" ? t.contact.form.sending : t.contact.form.send;

  return (
    <section className="content-section bg-surface-container-low" id="contacto">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Contact info */}
        <div className="space-y-12">
          <SectionHeading label={t.contact.label} title={t.contact.title} />
          <div className="space-y-6">
            <a
              href="mailto:pmsg21@gmail.com"
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <div className="text-xs uppercase tracking-tighter text-on-surface-variant">
                  Email
                </div>
                <div className="text-lg font-body font-medium text-on-surface group-hover:text-primary transition-colors duration-300">
                  pmsg21@gmail.com
                </div>
              </div>
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined">share</span>
              </div>
              <div>
                <div className="text-xs uppercase tracking-tighter text-on-surface-variant">
                  LinkedIn
                </div>
                <div className="text-lg font-body font-medium text-on-surface group-hover:text-primary transition-colors duration-300">
                  frontend-developer-pablo-sierra
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Contact form */}
        <GlassCard className="p-10 rounded-xl">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                {t.contact.form.name}
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-0 py-3 text-on-surface outline-none"
                placeholder={t.contact.form.namePlaceholder}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isDisabled}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                {t.contact.form.email}
              </label>
              <input
                className={`w-full bg-transparent border-0 border-b transition-all px-0 py-3 text-on-surface outline-none ${
                  status === "invalid-email"
                    ? "border-red-500 focus:border-red-500"
                    : "border-outline-variant focus:border-primary"
                }`}
                placeholder={t.contact.form.emailPlaceholder}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isDisabled}
              />
              {status === "invalid-email" && (
                <p className="text-red-400 text-xs mt-1">
                  {t.contact.form.invalidEmail}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                {t.contact.form.message}
              </label>
              <textarea
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-0 py-3 text-on-surface resize-none outline-none"
                placeholder={t.contact.form.messagePlaceholder}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                disabled={isDisabled}
              />
            </div>
            <button
              className="w-full py-4 font-bold rounded transition-all shadow-lg shadow-primary/10 uppercase tracking-[0.2em] text-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed bg-primary text-on-primary hover:bg-primary-dim"
              type="submit"
              disabled={isDisabled}
            >
              {status === "sending" && (
                <span className="inline-block w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin mr-2 align-middle" />
              )}
              {buttonLabel}
            </button>

            {/* Status alerts */}
            {status === "success" && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium animate-in fade-in">
                <span className="material-symbols-outlined text-lg">
                  check_circle
                </span>
                {t.contact.form.success}
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
                <span className="material-symbols-outlined text-lg">error</span>
                {t.contact.form.error}
              </div>
            )}
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
