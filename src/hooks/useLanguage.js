import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';

export function useLanguage() {
  return useContext(LanguageContext);
}
