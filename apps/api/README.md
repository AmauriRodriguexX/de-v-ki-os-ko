# apps/api — Kiosko API (FastAPI)

BFF entre el front (SvelteKit) y Strapi. Normaliza el payload de Strapi a
`{ title, slug, blocks: [...] }` para el render recursivo del front.

## Correr

```bash
python -m venv .venv
.venv\Scripts\activate        # Windows  (en Linux/mac: source .venv/bin/activate)
pip install -r requirements.txt
cp .env.example .env          # ajustar STRAPI_URL / STRAPI_TOKEN
uvicorn app.main:app --reload --port 8000
```

- `GET /health` → estado
- `GET /api/pages/{slug}` → página normalizada (p.ej. `/api/pages/home`)

Si Strapi no está disponible, responde con datos mock automáticamente.

## Estructura

```
app/
├─ main.py            # app FastAPI + CORS
├─ core/config.py     # settings (STRAPI_URL, STRAPI_TOKEN)
├─ routers/pages.py   # endpoints de páginas
├─ services/
│  ├─ strapi.py       # cliente + normalizador de Dynamic Zones
│  └─ mock.py         # respaldo sin Strapi
└─ schemas/page.py    # modelo pydantic del payload
```
