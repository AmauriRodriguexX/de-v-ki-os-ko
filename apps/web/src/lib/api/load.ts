import { fetchPage } from './client';
import { getMockPage } from './mock';
import type { PageData } from './schemas';

export type LoadedPage = { page: PageData; _mock: boolean };

/**
 * Carga una página desde FastAPI; si el backend no responde,
 * cae a datos mock para que el PoC siga funcionando.
 */
export async function loadPage(slug: string, fetchFn: typeof fetch): Promise<LoadedPage> {
  try {
    const page = await fetchPage(slug, fetchFn);
    return { page, _mock: false };
  } catch {
    return { page: getMockPage(slug), _mock: true };
  }
}
