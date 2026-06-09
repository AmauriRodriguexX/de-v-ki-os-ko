<script lang="ts">
  import { goto } from '$app/navigation';
  import Tag from '$lib/components/atoms/Tag.svelte';
  import PromoCard from '$lib/components/molecules/PromoCard.svelte';
  import YayaPointsBadge from '$lib/components/molecules/YayaPointsBadge.svelte';
  import GeoModal from '$lib/components/molecules/GeoModal.svelte';
  import { promos, categories } from '$lib/data/promos';
  import { sucursales, type Sucursal } from '$lib/data/sucursales';

  // El bloque acepta `limit` y `showTitle` igual que el <PromoSection> original.
  let { limit, showTitle = true }: { limit?: number; showTitle?: boolean } = $props();

  let activeCategory = $state('Todos');
  let selectedSucursal = $state<Sucursal | null>(null);

  const filtered = $derived(
    activeCategory === 'Todos' ? promos : promos.filter((p) => p.category === activeCategory)
  );
  const displayed = $derived(limit ? filtered.slice(0, limit) : filtered);

  // Seleccionar la sucursal más idónea para mostrar o la primera por defecto
  const encuentralo = () => {
    // Tomamos la primera sucursal como referencia
    selectedSucursal = sucursales[0];
  };
  // Lógica de desvanecimiento dinámico (Scroll fade)
  let sliderEl = $state<HTMLDivElement | null>(null);
  let canScrollLeft = $state(false);
  let canScrollRight = $state(false);

  function updateScroll() {
    if (!sliderEl) return;
    canScrollLeft = sliderEl.scrollLeft > 4;
    canScrollRight = sliderEl.scrollLeft < sliderEl.scrollWidth - sliderEl.clientWidth - 4;
  }

  $effect(() => {
    if (sliderEl) {
      updateScroll();
      const ro = new ResizeObserver(updateScroll);
      ro.observe(sliderEl);
      return () => ro.disconnect();
    }
  });
</script>

<section class="w-full py-12 md:py-20">
  <div class="mx-auto max-w-7xl px-4">
    {#if showTitle}
      <div class="mb-8 flex flex-col gap-2">
        <h2 class="text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-tight text-foreground m-0">
          Promociones de hoy
        </h2>
        <p class="text-[18px] text-[#4A5068] m-0">Ofertas disponibles en tu sucursal más cercana</p>
        <div class="mt-2"><YayaPointsBadge points={100} /></div>
      </div>
    {/if}

    <!-- Filtros con desvanecimiento degradado en las orillas (Mejora UX estilo YouTube) -->
    <div class="relative w-full mb-6">
      <!-- Degradado Izquierdo (sobre fondo blanco de la sección) -->
      <div class="absolute -left-px top-0 bottom-0 z-10 w-8 pointer-events-none transition-opacity duration-300" style={`background:linear-gradient(to right, #ffffff 15%, rgba(255, 255, 255, 0) 100%); opacity: ${canScrollLeft ? '1' : '0'};`}></div>
      
      <div 
        bind:this={sliderEl}
        onscroll={updateScroll}
        class="scrollbar-hide flex gap-2 overflow-x-auto pb-4 px-2 scroll-smooth" 
        style="scrollbar-width:none; -ms-overflow-style:none;"
      >
        {#each categories as cat (cat)}
          <Tag label={cat} active={activeCategory === cat} onclick={() => (activeCategory = cat)} />
        {/each}
      </div>

      <!-- Degradado Derecho -->
      <div class="absolute -right-px top-0 bottom-0 z-10 w-8 pointer-events-none transition-opacity duration-300" style={`background:linear-gradient(to left, #ffffff 15%, rgba(255, 255, 255, 0) 100%); opacity: ${canScrollRight ? '1' : '0'};`}></div>
    </div>

    <!-- Grid -->
    {#if displayed.length > 0}
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each displayed as promo (promo.id)}
          <PromoCard {promo} onEncuentralo={encuentralo} />
        {/each}
      </div>
    {:else}
      <div class="flex items-center justify-center rounded-2xl py-16 bg-muted">
        <p class="text-base text-muted-foreground">No hay promos activas en esta categoría hoy.</p>
      </div>
    {/if}
  </div>
</section>

{#if selectedSucursal}
  <GeoModal sucursal={selectedSucursal} onClose={() => (selectedSucursal = null)} />
{/if}
