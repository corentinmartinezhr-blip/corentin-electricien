// @ts-check
import { defineConfig } from 'astro/config';

// Site 100 % statique : des fichiers HTML/CSS déposés sur o2switch, pas de serveur Node.
export default defineConfig({
  site: 'https://corentin-electricien.fr',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
