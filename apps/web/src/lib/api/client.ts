import type { PageData } from './schemas';

const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8000';

/**
 * Pide una página al backend FastAPI por su slug.
 * Se le pasa el `fetch` de SvelteKit para que funcione también en SSR.
 */
export async function fetchPage(
  slug: string,
  fetchFn: typeof fetch = fetch
): Promise<PageData> {
  const res = await fetchFn(`${API_BASE}/api/pages/${slug}`);
  if (!res.ok) throw new Error(`API respondió ${res.status} al cargar "${slug}"`);
  return res.json();
}
