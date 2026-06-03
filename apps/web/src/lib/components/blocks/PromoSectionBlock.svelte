<script lang="ts">
  import { goto } from '$app/navigation';
  import Tag from '$lib/components/atoms/Tag.svelte';
  import PromoCard from '$lib/components/molecules/PromoCard.svelte';
  import YayaPointsBadge from '$lib/components/molecules/YayaPointsBadge.svelte';
  import { promos, categories } from '$lib/data/promos';

  // El bloque acepta `limit` y `showTitle` igual que el <PromoSection> original.
  let { limit, showTitle = true }: { limit?: number; showTitle?: boolean } = $props();

  let activeCategory = $state('Todos');

  const filtered = $derived(
    activeCategory === 'Todos' ? promos : promos.filter((p) => p.category === activeCategory)
  );
  const displayed = $derived(limit ? filtered.slice(0, limit) : filtered);

  // GeoModal real llega más adelante; por ahora lleva a sucursales.
  const encuentralo = () => goto('/sucursales');
</script>

<section class="w-full py-12 md:py-20">
  <div class="mx-auto max-w-7xl px-4">
    {#if showTitle}
      <div class="mb-8 flex flex-col gap-2">
        <h2 style="font-size:clamp(28px,4vw,36px); font-weight:700; line-height:1.2; letter-spacing:-0.01em; color:#1A1D2E; margin:0">
          Promociones de hoy
        </h2>
        <p style="font-size:18px; color:#4A5068; margin:0">Ofertas disponibles en tu sucursal más cercana</p>
        <div class="mt-2"><YayaPointsBadge points={100} /></div>
      </div>
    {/if}

    <!-- Filtros -->
    <div class="scrollbar-hide mb-6 flex gap-2 overflow-x-auto pb-4">
      {#each categories as cat (cat)}
        <Tag label={cat} active={activeCategory === cat} onclick={() => (activeCategory = cat)} />
      {/each}
    </div>

    <!-- Grid -->
    {#if displayed.length > 0}
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each displayed as promo (promo.id)}
          <PromoCard {promo} onEncuentralo={encuentralo} />
        {/each}
      </div>
    {:else}
      <div class="flex items-center justify-center rounded-2xl py-16" style="background:#F7F9FF">
        <p style="font-size:16px; color:#8890AA">No hay promos activas en esta categoría hoy.</p>
      </div>
    {/if}
  </div>
</section>
