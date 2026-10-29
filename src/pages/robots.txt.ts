import type { APIRoute } from 'astro';

// Avant le lancement officiel, tout le site est fermé aux moteurs de recherche.
export const GET: APIRoute = ({ site }) => {
  const estProduction = import.meta.env.PUBLIC_SITE_ENV === 'production';
  const contenu = estProduction
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
    : 'User-agent: *\nDisallow: /\n';

  return new Response(contenu, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
