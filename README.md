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

Para implementar las funciones inteligentes del chatbot (extracción de tickets por foto/QR, consultas de YAYA y promociones), se evaluaron 3 proveedores líderes. A continuación se detalla la comparativa técnica, de costos y su idoneidad para el negocio de Kiosko:

### 1. Tabla Comparativa de Costos (USD)

| Proveedor / Modelo | Costo Input (por 1M tokens) | Costo Output (por 1M tokens) | Costo por Imagen (OCR de Ticket) | Soporta Visión (Fotos) |
|---|---|---|---|---|
| **Gemini 2.5/1.5 Flash (Recomendado)** | **$0.075** | **$0.30** | **~$0.00002** (nativo por tokens) | Sí (Nativo) |
| **GPT-4o mini** | $0.15 | $0.60 | **$0.002** | Sí (Nativo) |
| **Claude 3.5 Haiku** | $0.80 | $4.00 | *No disponible* | No (Solo texto) |
| **Claude 3.5 Sonnet** (para soporte de fotos) | $3.00 | $15.00 | **$0.004** | Sí (Nativo) |

> [!IMPORTANT]
> **Claude 3.5 Haiku** (el modelo económico de Anthropic) **no tiene soporte para procesar imágenes**. Si quisiéramos implementar la lectura de tickets por foto/QR con Anthropic, estaríamos obligados a subir a **Claude 3.5 Sonnet**, lo que incrementa los costos de tokens y procesamiento unas **47 veces** en comparación con Gemini Flash.

---

### 2. Proyección de Costo Mensual Estimado
Para una base de **30,000 interacciones al mes** (~1,000 chats diarios) donde se procesan **5,000 fotos de tickets** para facturación:

* **Escenario de Uso:**
  * Input promedio por chat (prompts, historial, herramientas): 1,500 tokens.
  * Output promedio por chat (respuesta del bot): 300 tokens.
  * Total de tokens de entrada: 45 Millones.
  * Total de tokens de salida: 9 Millones.
  * Cargas de tickets físicos: 5,000 imágenes de tickets.

* **Costo Mensual con Gemini Flash:**
  * 45M Input tokens × $0.075/M = $3.38
  * 9M Output tokens × $0.30/M = $2.70
  * 5,000 imágenes × $0.00002 = $0.10
  * **Costo mensual total: ~$6.18 USD** (~$110 MXN)

* **Costo Mensual con GPT-4o mini:**
  * 45M Input tokens × $0.15/M = $6.75
  * 9M Output tokens × $0.60/M = $5.40
  * 5,000 imágenes × $0.002 = $10.00
  * **Costo mensual total: ~$22.15 USD** (~$400 MXN)

* **Costo Mensual con Claude 3.5 Sonnet (Requerido para fotos):**
  * 45M Input tokens × $3.00/M = $135.00
  * 9M Output tokens × $15.00/M = $135.00
  * 5,000 imágenes × $0.004 = $20.00
  * **Costo mensual total: ~$290.00 USD** (~$5,200 MXN)

---

### 3. Ventaja Competitiva de Gemini Flash para Kiosko
1. **Líder en Multimodalidad Económica:** Permite realizar OCR de tickets con fotos o códigos QR de forma prácticamente gratuita (10 centavos de dólar por 5,000 tickets).
2. **Velocidad Extrema (Baja Latencia):** Es el modelo más rápido en responder, idóneo para clientes en móviles con conexiones de datos móviles.
3. **Structured Outputs Nativo:** Garantiza que las respuestas de facturación o puntos YAYA se mapeen en un JSON rígido y sin errores sintácticos antes de interactuar con el backend de FastAPI.

---

### 4. Guía de Implementación en el Proyecto

La arquitectura sugerida consta de tres capas:

1. **Frontend (SvelteKit):**
   * Modificar el componente [Chatbot.svelte](file:///D:/t2o%20carpet%20especial/mikiosko/de-v-ki-os-ko/apps/web/src/lib/components/organisms/Chatbot.svelte) para habilitar un botón de carga de imagen (`<input type="file" accept="image/*" capture="environment">`).
   * Enviar la imagen codificada en base64 o como FormData hacia el backend de FastAPI.
2. **Backend (FastAPI - `apps/api`):**
   * Crear el endpoint `POST /api/chatbot/ticket` que reciba la imagen.
   * Utilizar el SDK de Google Generative AI para llamar a `gemini-1.5-flash` enviando el buffer de la imagen junto con un esquema Pydantic para estructurar los datos extraídos (RFC, Folio, Monto, Fecha).
   * Guardar la información fiscal en la sesión personalizada del usuario (conectada a los datos de la app YAYA).
3. **Integración con Servicios Externos:**
   * Una vez confirmados los datos del ticket por el usuario en el chat, el backend realiza la petición al sistema de facturación real de Kiosko y le retorna el PDF/XML al chatbot para su descarga inmediata.
