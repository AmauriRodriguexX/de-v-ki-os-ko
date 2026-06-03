from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import pages

app = FastAPI(title="Kiosko API", version="0.1.0")

# Permite que el front (SvelteKit) consuma el API en desarrollo.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(pages.router, prefix="/api")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
