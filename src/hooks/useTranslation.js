import { useLanguage } from './useLanguage';

export function useTranslation() {
  const { siteLanguage } = useLanguage();

  function translate(value) {
    return value[siteLanguage] || '';
  }

  return {
    translate,
  };
}
