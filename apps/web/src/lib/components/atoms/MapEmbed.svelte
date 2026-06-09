<script lang="ts">
  import { fade } from 'svelte/transition';
  import { MapPin } from '@lucide/svelte';

  let {
    lat,
    lng,
    zoom = 15,
    class: className = '',
    markerLabel
  }: { lat: number; lng: number; zoom?: number; class?: string; markerLabel?: string } = $props();

  const src = $derived(
    `https://maps.google.com/maps?q=${markerLabel ? encodeURIComponent(markerLabel) : `${lat},${lng}`}&ll=${lat},${lng}&z=${zoom}&output=embed&hl=es`
  );

  let currentSrc = $state('');
  let loading = $state(true);

  // Sincronizar el estado de carga antes de que el DOM se actualice
  $effect.pre(() => {
    if (src !== currentSrc) {
      currentSrc = src;
      loading = true;
    }
  });

  function handleLoad() {
    if (loading) {
      // Retardo sutil de 300ms para asegurar que Google Maps renderice sus tiles
      setTimeout(() => {
        loading = false;
      }, 300);
    }
  }
</script>

<div class={`relative overflow-hidden ${className}`}>
  <iframe
    {src}
    onload={handleLoad}
    class="absolute inset-0 h-full w-full border-0"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="Mapa de ubicación"
  ></iframe>

  {#if loading}
    <div 
      transition:fade={{ duration: 350 }}
      class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#EBF6FD]"
    >
      <!-- Indicador Premium de Carga (Pulsing Map Pin) -->
      <div class="flex flex-col items-center gap-3">
        <!-- Pin de mapa animado en un anillo de carga con colores Kiosko -->
        <div class="relative flex h-14 w-14 items-center justify-center">
          <div class="absolute inset-0 rounded-full bg-[#1387C7]/15 animate-ping" style="animation-duration: 2s;"></div>
          <div class="absolute h-10 w-10 rounded-full bg-[#1387C7]/25 animate-pulse"></div>
          <div class="relative z-10 text-[#1387C7]">
            <MapPin class="h-7 w-7 animate-bounce" style="animation-duration: 1.8s;" />
          </div>
        </div>
        
        <span class="text-[11px] font-extrabold tracking-widest text-[#1A1D2E]/80 uppercase animate-pulse">
          Generando mapa...
        </span>
      </div>
    </div>
  {/if}
</div>

<style>
  /* No se requieren estilos CSS complejos adicionales */
</style>
