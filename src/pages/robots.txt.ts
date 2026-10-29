import type { APIRoute } from 'astro';

// Le site de test ne doit jamais être indexé par Google.
export const GET: APIRoute = () => {
  const estProduction = import.meta.env.PUBLIC_SITE_ENV === 'production';
  const contenu = estProduction
    ? 'User-agent: *\nAllow: /\n'
    : 'User-agent: *\nDisallow: /\n';
  return new Response(contenu, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
