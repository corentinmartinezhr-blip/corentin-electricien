// @ts-check
import { defineConfig } from 'astro/config';

// Site 100 % statique : des fichiers HTML/CSS déposés sur o2switch, pas de serveur Node.
export default defineConfig({
  site: 'https://corentin-electricien.fr',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    // Le CSS (~15 Ko) est écrit directement dans la page : une requête bloquante de moins.
    inlineStylesheets: 'always',
  },
});
