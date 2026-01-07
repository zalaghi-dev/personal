import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'en' | 'fa';
type Direction = 'ltr' | 'rtl';

interface LanguageState {
  lang: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: 'en',
      direction: 'ltr',
      setLanguage: (lang) =>
        set({
          lang,
          direction: lang === 'fa' ? 'rtl' : 'ltr',
        }),
    }),
    {
      name: 'language-storage',
    }
  )
);
