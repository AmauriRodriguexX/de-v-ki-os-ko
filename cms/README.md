# cms — Strapi (headless CMS)

Aquí vivirá la instancia de Strapi. Aún no inicializada.

## Inicializar

```bash
npx create-strapi-app@latest . --quickstart
```

## Modelo de contenido sugerido

Crear un Content-Type **Page** con:

- `title` (Text)
- `slug` (UID, basado en title)
- `blocks` (**Dynamic Zone**) con componentes:
  - `blocks.hero` — title, subtitle, ctaLabel, ctaHref, image
  - `blocks.promo-section` — title, items (componente repetible)
  - `blocks.featured-products` — title, products (repetible)
  - `blocks.cta-banner` — text, buttonLabel, href
  - `blocks.columns` — columns (number), children (Dynamic Zone anidada → recursión)

El nombre de cada componente (`__component`) debe coincidir con las claves del
`registry.ts` del front y del normalizador en `apps/api/app/services/strapi.py`.
