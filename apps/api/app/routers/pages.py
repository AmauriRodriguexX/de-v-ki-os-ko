from fastapi import APIRouter

from app.schemas.page import PageData
from app.services import strapi
from app.services.mock import get_mock_page

router = APIRouter(tags=["pages"])


@router.get("/pages/{slug:path}", response_model=PageData)
async def get_page(slug: str) -> dict:
    """
    Devuelve una página normalizada. Intenta Strapi primero;
    si no responde o no existe, cae a datos mock.
    """
    try:
        page = await strapi.fetch_page_from_strapi(slug)
    except Exception:
        page = None

    if page is None:
        page = get_mock_page(slug)
    return page
