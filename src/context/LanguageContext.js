import { createContext, useEffect, useState } from 'react';
import jqueryHelper from '../helpers/jqueryHelper';

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [siteLanguage, setSiteLanguage] = useState('es');

  const handleLanguageChange = () => {
    setSiteLanguage(siteLanguage === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    jqueryHelper();
  }, [siteLanguage]);

  return (
    <LanguageContext.Provider value={{ siteLanguage, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
