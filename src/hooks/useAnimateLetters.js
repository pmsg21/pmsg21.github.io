import { AnimateLettersContext } from '../context/AnimateLettersContext';
import { useContext } from 'react';

export function useAnimateLetters() {
  return useContext(AnimateLettersContext);
}
