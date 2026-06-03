import httpx

from app.core.config import settings


async def fetch_page_from_strapi(slug: str) -> dict | None:
    """
    Trae una página de Strapi por su slug y normaliza su Dynamic Zone
    a una lista plana de bloques `{ title, slug, blocks: [...] }`.

    Devuelve None si Strapi no tiene la página (para que el router caiga a mock).
    """
    url = f"{settings.strapi_url}/api/pages"
    params = {"filters[slug][$eq]": slug, "populate": "deep"}
    headers = {}
    if settings.strapi_token:
        headers["Authorization"] = f"Bearer {settings.strapi_token}"

    async with httpx.AsyncClient(timeout=5) as client:
        resp = await client.get(url, params=params, headers=headers)
        resp.raise_for_status()
        data = resp.json()

    items = data.get("data") or []
    if not items:
        return None
    return _normalize_page(items[0])


def _normalize_page(entry: dict) -> dict:
    # Strapi v4 anida los campos bajo "attributes"; v5 ya no. Soportamos ambos.
    attrs = entry.get("attributes", entry)
    raw_blocks = attrs.get("blocks") or []
    return {
        "title": attrs.get("title", ""),
        "slug": attrs.get("slug", ""),
        "blocks": [_normalize_block(b) for b in raw_blocks],
    }


def _normalize_block(block: dict) -> dict:
    """
    Aplana un bloque de la Dynamic Zone. Mantiene `__component` y normaliza
    recursivamente cualquier lista de hijos (bloques contenedores).
    """
    out: dict = {}
    for key, value in block.items():
        if key == "children" and isinstance(value, list):
            out[key] = [_normalize_block(child) for child in value]
        else:
            out[key] = value
    return out
