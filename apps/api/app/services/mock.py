"""Datos de respaldo para desarrollar el API sin tener Strapi corriendo."""

_MOCK_PAGES: dict[str, dict] = {
    "home": {
        "title": "Inicio",
        "slug": "home",
        # Mismo orden que el Home.tsx original. La mayoría de bloques leen sus
        # propios datos sembrados en el front; aquí solo se declara la secuencia.
        "blocks": [
            {"id": 1, "__component": "blocks.hero"},
            {"id": 2, "__component": "blocks.promo-section", "limit": 6},
            {"id": 3, "__component": "blocks.crossing-promos"},
            {"id": 4, "__component": "blocks.yaya-download-banner", "totalPoints": 151},
            {"id": 5, "__component": "blocks.featured-products"},
            {"id": 6, "__component": "blocks.geoloc"},
            {"id": 7, "__component": "blocks.social-feed"},
            {"id": 8, "__component": "blocks.whatsapp-newsletter"},
            {"id": 9, "__component": "blocks.yaya-section"},
        ],
    },
}


def get_mock_page(slug: str) -> dict:
    if slug in _MOCK_PAGES:
        return _MOCK_PAGES[slug]
    return {
        "title": slug,
        "slug": slug,
        "blocks": [
            {
                "id": 0,
                "__component": "blocks.cta-banner",
                "text": f'Página "{slug}" — pendiente de contenido en Strapi',
                "buttonLabel": "Volver al inicio",
                "href": "/",
            }
        ],
    }
