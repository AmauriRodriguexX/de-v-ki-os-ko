<script lang="ts">
  import { X, Clock, Navigation, ExternalLink } from '@lucide/svelte';
  import Button from '$lib/components/atoms/Button.svelte';
  import MapEmbed from '$lib/components/atoms/MapEmbed.svelte';
  import type { Sucursal } from '$lib/data/sucursales';

  let { sucursal, onClose }: { sucursal: Sucursal; onClose: () => void } = $props();

  const maps = () => window.open(`https://maps.google.com/?q=${sucursal.lat},${sucursal.lng}`, '_blank');
  const dir = () => window.open(`https://www.google.com/maps/dir/?api=1&destination=${sucursal.lat},${sucursal.lng}`, '_blank');
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(26,29,46,0.55)" onclick={onClose} role="presentation">
  <div class="relative w-full max-w-md" style="background:#fff; border-radius:24px; box-shadow:0 20px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)" onclick={(e) => e.stopPropagation()} role="presentation">
    <div class="h-[220px] w-full overflow-hidden rounded-t-[24px]">
      <MapEmbed lat={sucursal.lat} lng={sucursal.lng} zoom={16} markerLabel={sucursal.name} class="h-full w-full" />
    </div>

    <button onclick={onClose} class="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full" style="background:#fff; box-shadow:0 2px 8px rgba(0,0,0,0.12)" aria-label="Cerrar">
      <X class="h-4 w-4" style="color:#1A1D2E" />
    </button>

    <div class="flex flex-col gap-4 p-6">
      <div>
        <h3 style="font-size:20px; font-weight:700; color:#1A1D2E; margin:0">{sucursal.name}</h3>
        <p style="font-size:14px; color:#4A5068; margin:4px 0 0">{sucursal.address}</p>
        <p style="font-size:13px; color:#8890AA; margin:2px 0 0; font-weight:500">{sucursal.city}, {sucursal.state}</p>
      </div>

      <div class="flex items-center gap-4">
        {#if sucursal.distance}
          <div class="flex items-center gap-1.5">
            <Navigation class="h-4 w-4" style="color:#1387C7" />
            <span style="font-size:14px; font-weight:600; color:#1387C7">{sucursal.distance}</span>
          </div>
        {/if}
        <div class="flex items-center gap-1.5">
          <Clock class="h-4 w-4" style="color:#51A639" />
          <span style="font-size:14px; font-weight:500; color:#4A5068">{sucursal.hours}</span>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        {#each sucursal.services as service (service)}
          <span class="rounded-full px-3 py-1" style="background:#EEF2FB; color:#4A5068; font-size:12px; font-weight:500">{service}</span>
        {/each}
      </div>

      <div class="mt-2 flex gap-3">
        <Button variant="primary" class="flex-1" onclick={maps}>
          {#snippet icon()}<ExternalLink class="h-4 w-4" />{/snippet}
          Abrir en Maps
        </Button>
        <Button variant="ghost" class="flex-1" onclick={dir}>
          {#snippet icon()}<Navigation class="h-4 w-4" />{/snippet}
          Cómo llegar
        </Button>
      </div>
    </div>
  </div>
</div>
