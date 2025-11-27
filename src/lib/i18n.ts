import { derived } from 'svelte/store';
import { locale, type Locale } from './stores/locale';

import ptBR from '../locales/pt-BR.json';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const translations: Record<Locale, Record<string, string>> = {
  'pt-BR': ptBR,
  'en': en,
  'fr': fr,
};

export const t = derived(locale, ($locale) => {
  const dict = translations[$locale] as Record<string, string>;
  return (key: string) => dict[key] || key;
});
