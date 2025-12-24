export const locales = ['ro', 'hu', 'en'] as const;
export const defaultLocale = 'ro' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ro: 'Română',
  hu: 'Magyar',
  en: 'English',
};

export const localeFlags: Record<Locale, string> = {
  ro: 'RO',
  hu: 'HU',
  en: 'EN',
};

