// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://delaguialuzon.fr',
  // i18n prêt pour EN/RU. FR reste à la racine (pas de préfixe /fr).
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    // URLs propres : /contact/ au lieu de /contact.html
    format: 'directory',
  },
});
