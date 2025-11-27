import { writable } from 'svelte/store';

export type Locale = 'pt-BR' | 'en' | 'fr';

export const locale = writable<Locale>('pt-BR');
