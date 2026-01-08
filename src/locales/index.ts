import 'i18next';
import en from './en/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof en;
    };
  }
}

export const languages = {
  en: { name: 'English', dir: 'ltr' },
  fa: { name: 'فارسی', dir: 'rtl' },
} as const;

export type Language = keyof typeof languages;

type DotNestedLeafKeys<T> = T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends object
        ? `${K}.${DotNestedLeafKeys<T[K]>}`
        : `${K}`
    }[keyof T & (string | number)]
  : never;

export type TranslationKeys = DotNestedLeafKeys<typeof en>;
