# Kiosko — Monorepo

Migración del proyecto kiosko (antes React/Vite, ahora en `legacy/`) a:

- **`apps/web`** — SvelteKit + Svelte 5 (runes) + Tailwind 4
- **`apps/api`** — FastAPI (BFF / normalizador hacia Strapi)
- **`cms`** — Strapi (headless CMS, Dynamic Zones)

## Arquitectura

```
navegador → SvelteKit (+page.server.ts) → FastAPI (apps/api) → Strapi (cms)
```

FastAPI aplana el payload anidado de Strapi a un array limpio de **bloques**
(`{ blocks: [...] }`). El front los pinta con un **render recursivo**:
`BlockRenderer.svelte` + `registry.ts` mapean `__component → componente Svelte`,
y los bloques contenedores vuelven a llamar a `BlockRenderer` (recursión).

## Cómo correr

```bash
# Frontend
pnpm install
pnpm dev               # http://localhost:5173

# Backend (en otra terminal)
cd apps/api
python -m venv .venv && .venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000        # http://localhost:8000
```

Si el backend no está arriba, el front cae a datos **mock** automáticamente.
