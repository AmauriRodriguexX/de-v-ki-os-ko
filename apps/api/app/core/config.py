from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    strapi_url: str = "http://localhost:1337"
    strapi_token: str = ""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


settings = Settings()
