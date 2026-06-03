<script lang="ts">
  import BlockRenderer from '$lib/blocks/BlockRenderer.svelte';
  import type { LoadedPage } from '$lib/api/load';

  let { data }: { data: LoadedPage } = $props();
</script>

{#if data._mock}
  <div class="bg-yellow-50 py-2 text-center text-sm text-yellow-800">
    ⚠️ Datos mock — el backend FastAPI no respondió en :8000
  </div>
{/if}

<div class="flex flex-col gap-4">
  <BlockRenderer blocks={data.page.blocks} />
</div>
