# Kiosko — Monorepo

---

## Tabla de contenidos

- [Arquitectura](#arquitectura)
- [Stack](#stack)
- [Estructura del monorepo](#estructura-del-monorepo)
- [Cómo correr el proyecto](#cómo-correr-el-proyecto)
- [Sistema de bloques](#sistema-de-bloques)
- [Prueba A/B](#prueba-ab)
- [Decisiones de diseño](#decisiones-de-diseño)
- [Pendientes](#pendientes)

---

## Arquitectura

```
Navegador
    |
    v
SvelteKit (apps/web)          — SSR + routing por archivos
    |  +page.server.ts
    v
FastAPI (apps/api)            — BFF: normaliza y oculta Strapi
    |  /api/pages/{slug}
    v
Strapi (cms/)                 — Headless CMS con Dynamic Zones
```

FastAPI actúa como BFF (Backend for Frontend): aplana el payload anidado de Strapi a un array limpio de bloques `{ title, slug, blocks: [...] }` que el front consume directamente. Si FastAPI no responde, el frontend cae a datos mock automáticamente.

---

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | SvelteKit 2 + Svelte 5 (runes) |
| Estilos | Tailwind CSS 4 |
| Iconos | @lucide/svelte |
| Backend | FastAPI 0.115 + Pydantic |
| CMS | Strapi (pendiente de inicializar) |
| Runtime | Node 20 + pnpm 9 + Python 3.12 |

---

## Estructura del monorepo

```
kiosko/
├── apps/
│   ├── web/                          # SvelteKit
│   │   └── src/
│   │       ├── routes/               # Rutas (file-based routing)
│   │       │   ├── +layout.svelte
│   │       │   ├── +layout.server.ts # A/B test + nav global
│   │       │   ├── +page.svelte      # Home (BlockRenderer)
│   │       │   ├── promociones/
│   │       │   ├── servicios/
│   │       │   ├── sucursales/
│   │       │   ├── yaya/
│   │       │   └── facturacion/
│   │       └── lib/
│   │           ├── api/              # Cliente FastAPI + mock + schemas
│   │           ├── blocks/           # BlockRenderer + registry
│   │           ├── components/
│   │           │   ├── atoms/        # Button, Tag, Badge, ServiceLogo, MapEmbed
│   │           │   ├── molecules/    # PromoCard, CrossingPromoCard, GeoModal...
│   │           │   ├── organisms/    # Chatbot
│   │           │   ├── blocks/       # HeroBlock, PromoSectionBlock...
│   │           │   ├── layout/       # Header, Footer, BottomNavBar, FABGroup
│   │           │   ├── pages/        # ServiciosPage, SucursalesPage...
│   │           │   └── icons/        # WhatsAppIcon, TikTokIcon
│   │           ├── data/             # Datos sembrados (promos, sucursales, etc.)
│   │           └── stores/           # chatbot.svelte.ts
│   │
│   └── api/                          # FastAPI
│       └── app/
│           ├── main.py
│           ├── core/config.py        # STRAPI_URL, STRAPI_TOKEN
│           ├── routers/pages.py      # GET /api/pages/{slug}
│           ├── schemas/page.py       # PageData (pydantic)
│           └── services/
│               ├── strapi.py         # Cliente + normalizador de Dynamic Zones
│               └── mock.py           # Datos de respaldo
│
├── cms/                              # Strapi (pendiente)
├── legacy/                           # React 18 original (referencia, no tocar)
├── pnpm-workspace.yaml
└── package.json
```

---

## Cómo correr el proyecto

### Frontend

```bash
pnpm install
pnpm dev
# http://localhost:5173
```

### Backend

```bash
cd apps/api
py -3.12 -m venv .venv
.venv\Scripts\activate          # Windows
# source .venv/bin/activate     # Mac/Linux
pip install -r requirements.txt
cp .env.example .env            # ajustar STRAPI_URL y STRAPI_TOKEN
uvicorn app.main:app --reload --port 8000
# http://localhost:8000
```

Si el backend no está disponible el frontend sirve datos mock automáticamente. Un banner amarillo en desarrollo indica qué modo está activo.

### Variables de entorno

| Archivo | Variable | Descripción |
|---|---|---|
| `apps/web/.env` | `VITE_API_BASE` | URL del backend FastAPI |
| `apps/api/.env` | `STRAPI_URL` | URL de Strapi |
| `apps/api/.env` | `STRAPI_TOKEN` | Token de API de Strapi |

---

## Sistema de bloques

El frontend usa un patrón de render recursivo inspirado en las Dynamic Zones de Strapi. Cada página es un array de bloques con un discriminador `__component`:

```json
{
  "slug": "home",
  "blocks": [
    { "id": 1, "__component": "blocks.hero" },
    { "id": 2, "__component": "blocks.promo-section", "limit": 6 },
    { "id": 3, "__component": "blocks.columns", "columns": 2, "children": [
      { "id": 31, "__component": "blocks.cta-banner", "text": "..." }
    ]}
  ]
}
```

`BlockRenderer.svelte` itera el array, consulta `registry.ts` y renderiza el componente correspondiente. Los bloques contenedor como `ColumnsBlock` vuelven a llamar a `BlockRenderer` con sus hijos, cerrando la recursión.

Para registrar un bloque nuevo:

1. Crear el componente en `src/lib/components/blocks/`
2. Añadir la entrada en `src/lib/blocks/registry.ts`
3. Crear el componente en Strapi con el mismo nombre de `__component`

---

## Prueba A/B

El nombre de la sección de tiendas ("Sucursales" vs "Ubicaciones") se determina en el servidor con asignación 50/50.

- Cookie: `ab_locations` (90 días, sin HttpOnly para que el cliente pueda leerla si es necesario)
- Los datos expuestos al layout son `locationsLabel` y `locationsLabelSingular`
- Cada sesión registra un evento `ab_locations_view` en `window.dataLayer` para integración con cualquier herramienta de analítica

Para conectar con GA4 u otra herramienta, escuchar el evento desde `window.dataLayer`.

---

## Decisiones de diseño

**Por qué SvelteKit sobre Next.js o Nuxt**
Edward Alarcón (líder técnico) definió el stack. Svelte 5 con runes reduce el boilerplate de estado reactivo y los bundles son más ligeros, lo que encaja con el objetivo de mejorar el rendimiento en móvil de los kioscos.

**Por qué FastAPI delante de Strapi**
Strapi v4 devuelve payloads muy anidados (`data.attributes.blocks[n].attributes...`). FastAPI los normaliza a un contrato limpio antes de que lleguen al front, oculta el token de Strapi y centraliza la lógica de caché futura.

**Categorías de producto**
- "Helados" y "Botanas" se unificaron en "Antojo"
- "Hidratación" pasó a "Bebidas"
- "Vinos y Licores" se renombró a "Cerveza, vinos y licores"
- El Hero mantiene los nombres de campaña por día ("Miércoles Cervecero", etc.) que son decisión de marketing

**Zonas de sucursales**
El menú incluye las 9 zonas de expansión: Colima, Guzmán, Tecomán, Manzanillo, Puerto Vallarta, Nayarit, Tepic, Los Mochis y Guadalajara. Las zonas sin sucursales activas muestran "Próximamente".

---

## Pendientes

| Tarea | Descripción | Estado |
|---|---|---|
| Inicializar Strapi | `cd cms && npx create-strapi-app@latest . --quickstart`. El modelo de contenido sugerido está en `cms/README.md` | Pendiente |
| Deploy a GitHub Pages | Cambiar a `adapter-static`, configurar GitHub Actions | ✔ Completado |
| Analítica A/B | Conectar `window.dataLayer` a GA4 o PostHog para medir conversión "Sucursales" vs "Ubicaciones" | Pendiente |
| GeoModal en PromoSection | El botón "Encuéntralo" en tarjetas de promo redirige a `/sucursales` en lugar de abrir el modal de mapa | Pendiente |
| Chatbot backend | El flujo del chatbot genera folios localmente; conectar al sistema de tickets real | Pendiente |
| Logotipo "Compra Segura" | Agregar logotipo de compra segura en la sección/tarjetas de promociones | Pendiente |
| Facturación por IA (Chatbot) | Permitir al usuario subir una foto de su ticket o escanear el código QR desde el chatbot para extraer los datos de facturación automáticamente (Gemini Flash). Integrar con inicio de sesión para guardar datos fiscales de forma recurrente. | Pendiente |

---

## Propuesta de Modelos de IA para el Chatbot

Para implementar las funciones inteligentes del chatbot (extracción de tickets por foto/QR, consultas de YAYA y promociones), se evaluaron 3 modelos eficientes:

1. **Gemini 2.5 Flash / 1.5 Flash (Recomendado / Ganador):**
   * **Por qué es el más adecuado:** Es el modelo más rápido y con el costo por token más bajo del mercado. Su soporte para español es sobresaliente. Su **multimodalidad nativa** lo hace el más robusto para procesar imágenes de tickets físicos (OCR) y extraer la información estructurada mediante *Structured Outputs* de forma precisa y económica.
2. **GPT-4o mini:**
   * **Detalles:** Muy rápido y estable para *Function Calling*, pero el procesamiento de imágenes y el costo a gran escala en producción es ligeramente superior al de Gemini Flash.
3. **Claude 3.5 Haiku:**
   * **Detalles:** Excelente nivel conversacional y empático, ideal para atención al cliente compleja, pero sus costos por token y latencia son mayores.
