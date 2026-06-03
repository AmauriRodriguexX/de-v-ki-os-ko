import type { PageData } from './schemas';

/**
 * Datos de respaldo para cuando el backend FastAPI aún no está disponible.
 * Imitan la forma del payload ya normalizado (`{ title, slug, blocks }`).
 */
const mockPages: Record<string, PageData> = {
  home: {
    title: 'Inicio',
    slug: 'home',
    // Mismo orden que el Home.tsx original. Los bloques leen sus datos sembrados.
    blocks: [
      { id: 1, __component: 'blocks.hero' },
      { id: 2, __component: 'blocks.promo-section', limit: 6 },
      { id: 3, __component: 'blocks.crossing-promos' },
      { id: 4, __component: 'blocks.yaya-download-banner', totalPoints: 151 },
      { id: 5, __component: 'blocks.featured-products' },
      { id: 6, __component: 'blocks.geoloc' },
      { id: 7, __component: 'blocks.social-feed' },
      { id: 8, __component: 'blocks.whatsapp-newsletter' },
      { id: 9, __component: 'blocks.yaya-section' }
    ]
  }
};

export function getMockPage(slug: string): PageData {
  return (
    mockPages[slug] ?? {
      title: slug,
      slug,
      blocks: [
        {
          id: 0,
          __component: 'blocks.cta-banner',
          text: `Página "${slug}" — pendiente de contenido en Strapi`,
          buttonLabel: 'Volver al inicio',
          href: '/'
        }
      ]
    }
  );
}
