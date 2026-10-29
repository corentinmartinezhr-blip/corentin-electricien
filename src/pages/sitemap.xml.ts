import type { APIRoute } from 'astro';

// Plan du site généré à partir des fichiers de src/pages : une nouvelle page y entre automatiquement.
const fichiers = Object.keys(import.meta.glob('./**/*.astro'));

const chemins = fichiers
  .filter((fichier) => !fichier.endsWith('404.astro'))
  .map((fichier) => {
    const chemin = fichier.replace(/^\.\//, '/').replace(/(index)?\.astro$/, '');
    return chemin.endsWith('/') ? chemin : `${chemin}/`;
  })
  .sort();

export const GET: APIRoute = ({ site }) => {
  const urls = chemins.map((chemin) => `  <url><loc>${new URL(chemin, site).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
