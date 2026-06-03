<script lang="ts">
  import { page } from '$app/stores';
  import { Sparkles } from '@lucide/svelte';
  import CrossingPromosBlock from '$lib/components/blocks/CrossingPromosBlock.svelte';
  import PromoSectionBlock from '$lib/components/blocks/PromoSectionBlock.svelte';
  import YayaDownloadBanner from '$lib/components/molecules/YayaDownloadBanner.svelte';
  import { promos } from '$lib/data/promos';
  import { crossingPromos } from '$lib/data/crossingPromos';

  let combosEl = $state<HTMLDivElement | null>(null);

  const totalYayaPoints =
    promos.reduce((s, p) => s + (p.yayaPoints || 0), 0) +
    crossingPromos.reduce((s, c) => s + (c.yayaPoints || 0), 0);

  // Auto-scroll a combos al entrar a /promociones/combos
  $effect(() => {
    if ($page.params.category === 'combos' && combosEl) {
      setTimeout(() => combosEl?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  });
</script>

<div class="flex flex-col">
  <div class="w-full py-8 md:py-12" style="background:#EBF6FD">
    <div class="mx-auto max-w-7xl px-4">
      <h1 style="font-size:clamp(32px,5vw,48px); font-weight:800; line-height:1.1; letter-spacing:-0.02em; color:#1A1D2E; margin:0">Promociones</h1>
      <p style="font-size:18px; color:#4A5068; margin:8px 0 0">Todas las ofertas disponibles hoy en tu sucursal más cercana</p>
      <button onclick={() => combosEl?.scrollIntoView({ behavior: 'smooth' })} class="mt-4 inline-flex cursor-pointer items-center gap-2 px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5" style="background:#FCD700; color:#1A1D2E; font-size:14px; font-weight:700; border-radius:16px; border:none">
        <Sparkles class="h-4 w-4" /> Ver Combos del Día
      </button>
    </div>
  </div>

  <div bind:this={combosEl}>
    <CrossingPromosBlock />
  </div>

  <div class="py-6 md:py-10">
    <YayaDownloadBanner totalPoints={totalYayaPoints} />
  </div>

  <PromoSectionBlock showTitle={false} />
</div>
