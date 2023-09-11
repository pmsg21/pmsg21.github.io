import { createContext } from 'react';
import animateLettersHelper from '../helpers/animateLettersHelper';

export const AnimateLettersContext = createContext();

export const AnimateLettersContextProvider = ({ children }) => {
  return (
    <AnimateLettersContext.Provider value={{ animateLettersHelper }}>
      {children}
    </AnimateLettersContext.Provider>
  );
};
