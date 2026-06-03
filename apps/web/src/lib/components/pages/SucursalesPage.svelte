<script lang="ts">
  import { page } from '$app/stores';
  import GeolocSectionBlock from '$lib/components/blocks/GeolocSectionBlock.svelte';

  const cityLabels: Record<string, string> = {
    colima: 'Colima',
    guzman: 'Guzmán',
    tecoman: 'Tecomán',
    manzanillo: 'Manzanillo',
    'puerto-vallarta': 'Puerto Vallarta',
    nayarit: 'Nayarit',
    tepic: 'Tepic',
    'los-mochis': 'Los Mochis',
    guadalajara: 'Guadalajara',
    mazatlan: 'Mazatlán'
  };

  const cityName = $derived($page.params.city ? (cityLabels[$page.params.city] ?? $page.params.city) : '');
  // Etiqueta de la prueba A/B (Sucursales | Ubicaciones)
  const locLabel = $derived(($page.data.locationsLabel as string) ?? 'Sucursales');
</script>

<div class="flex flex-col">
  <div class="w-full py-8 md:py-12" style="background:#EBF6FD">
    <div class="mx-auto max-w-7xl px-4">
      <h1 style="font-size:clamp(32px,5vw,48px); font-weight:800; line-height:1.1; letter-spacing:-0.02em; color:#1A1D2E; margin:0">
        {cityName ? `${locLabel} en ${cityName}` : locLabel}
      </h1>
      <p style="font-size:18px; color:#4A5068; margin:8px 0 0">
        {cityName ? `Encuentra la tienda Kiosko más cercana en ${cityName}` : 'Encuentra la tienda Kiosko más cercana a ti'}
      </p>
    </div>
  </div>
  <GeolocSectionBlock initialCity={cityName} />
</div>
