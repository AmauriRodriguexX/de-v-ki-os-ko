/** Un bloque tal como llega del API (FastAPI, normalizado desde Strapi). */
export type Block = {
  id: number | string;
  /** Discriminador del tipo de bloque, p.ej. "blocks.hero" */
  __component: string;
  /** El resto de campos depende del tipo de bloque */
  [key: string]: unknown;
};

/** Payload de una página: una lista ordenada de bloques (Dynamic Zone de Strapi). */
export type PageData = {
  title: string;
  slug: string;
  blocks: Block[];
};
