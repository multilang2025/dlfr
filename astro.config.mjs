// @ts-check
import fs from 'node:fs';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Slugs des pages filles encore en brouillon (draft:true) → exclus du sitemap.
// Auto-maintenu : dès qu'un JSON passe draft:false, sa page rejoint le sitemap.
const leavesUrl = new URL('./src/data/leaves/', import.meta.url);
const draftSlugs = fs.existsSync(leavesUrl)
  ? fs.readdirSync(leavesUrl)
      .filter((f) => f.endsWith('.json'))
      .filter((f) => JSON.parse(fs.readFileSync(new URL(f, leavesUrl), 'utf8')).draft === true)
      .map((f) => f.replace(/\.json$/, ''))
  : [];

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

  integrations: [
    sitemap({
      filter: (page) => !draftSlugs.some((slug) => page.endsWith(`/${slug}/`)),
    }),
  ],
});