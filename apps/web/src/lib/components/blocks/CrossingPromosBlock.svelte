<script lang="ts">
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { Sparkles } from '@lucide/svelte';
  import CrossingPromoCard from '$lib/components/molecules/CrossingPromoCard.svelte';
  import GeoModal from '$lib/components/molecules/GeoModal.svelte';
  import { crossingPromos } from '$lib/data/crossingPromos';
  import { sucursales, type Sucursal } from '$lib/data/sucursales';

  const today = new Date().getDay();
  const activeCombos = crossingPromos.filter((c) => c.activeDays.length === 0 || c.activeDays.includes(today));

  const isPromoPage = $derived($page.url.pathname.startsWith(base + '/promociones'));
  let selectedSucursal = $state<Sucursal | null>(null);
  
  const encuentralo = () => {
    selectedSucursal = sucursales[0];
  };
</script>

{#if activeCombos.length > 0}
  <section class="w-full py-12 md:py-16" style="background:#FFFBEA">
    <div class="mx-auto max-w-7xl px-4">
      <div class="mb-8 flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <Sparkles class="h-5 w-5" style="color:#A07800" />
          <span style="font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#A07800">Ahorra más</span>
        </div>
        <h2 style="font-size:clamp(24px,4vw,32px); font-weight:700; line-height:1.2; letter-spacing:-0.01em; color:#1A1D2E; margin:0">
          Combos del Día
          <span class="ml-2 inline-flex items-center justify-center align-middle" style="background:#1A1D2E; color:#fff; font-size:14px; font-weight:700; border-radius:999px; min-width:28px; height:28px; padding:0 8px; line-height:1">{activeCombos.length}</span>
        </h2>
        <p style="font-size:16px; color:#4A5068; margin:0">Dos promos, una gran idea</p>
      </div>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
        {#each activeCombos as combo (combo.id)}
          <CrossingPromoCard {combo} onEncuentralo={encuentralo} />
        {/each}
      </div>

      {#if !isPromoPage}
        <div class="mt-8 flex justify-center">
          <a href="{base}/promociones" class="inline-flex items-center gap-2 px-6 py-3 no-underline transition-all duration-200 hover:-translate-y-0.5" style="background:#1A1D2E; color:#fff; font-size:14px; font-weight:700; border-radius:16px">Ver todos los combos</a>
        </div>
      {/if}
    </div>
  </section>
{/if}

{#if selectedSucursal}
  <GeoModal sucursal={selectedSucursal} onClose={() => (selectedSucursal = null)} />
{/if}
