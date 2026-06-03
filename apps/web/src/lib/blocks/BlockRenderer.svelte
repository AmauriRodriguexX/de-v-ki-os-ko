<script lang="ts">
  import type { Block } from '$lib/api/schemas';
  import { registry } from './registry';

  let { blocks = [] }: { blocks?: Block[] } = $props();
</script>

{#each blocks as block (block.id)}
  {@const Cmp = registry[block.__component]}
  {#if Cmp}
    <Cmp {...block} />
  {:else}
    <div class="rounded border border-dashed border-red-300 bg-red-50 p-3 text-sm text-red-600">
      Bloque sin registrar: <code>{block.__component}</code>
    </div>
  {/if}
{/each}
