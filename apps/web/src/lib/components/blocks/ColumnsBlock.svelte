<script lang="ts">
  import BlockRenderer from '$lib/blocks/BlockRenderer.svelte';
  import type { Block } from '$lib/api/schemas';

  // Bloque CONTENEDOR: vuelve a invocar a BlockRenderer con sus hijos → recursión.
  // En móvil siempre 1 columna; en md+ usa el prop `columns`.
  let { columns = 2, children = [] }: { columns?: number; children?: Block[] } = $props();
</script>

<section class="mx-auto max-w-7xl px-4 py-8">
  <div class="cols-grid gap-6" style={`--cols: ${columns}`}>
    <BlockRenderer blocks={children} />
  </div>
</section>

<style>
  .cols-grid {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    .cols-grid {
      grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
    }
  }
</style>
