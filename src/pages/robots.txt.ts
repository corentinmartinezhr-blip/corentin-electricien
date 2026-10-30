import type { APIRoute } from 'astro';

// Ouvert aux moteurs de recherche en « production » ; fermé en « preparation » (voir publier.yml).
export const GET: APIRoute = ({ site }) => {
  const estProduction = import.meta.env.PUBLIC_SITE_ENV === 'production';
  const contenu = estProduction
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
    : 'User-agent: *\nDisallow: /\n';

  return new Response(contenu, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
