from typing import Any

from pydantic import BaseModel


class PageData(BaseModel):
    """Payload normalizado que consume el front: una lista de bloques."""

    title: str
    slug: str
    blocks: list[dict[str, Any]]
