<script lang="ts">
  import { MapPin, X, Shield, Navigation, LoaderCircle, AlertCircle } from '@lucide/svelte';
  import Button from '$lib/components/atoms/Button.svelte';

  type Status = 'idle' | 'requesting' | 'granted' | 'denied' | 'unavailable';
  const FALLBACK = { lat: 19.2433, lng: -103.7247 }; // Colima centro

  let {
    open,
    onClose,
    onLocationGranted
  }: { open: boolean; onClose: () => void; onLocationGranted: (lat: number, lng: number) => void } = $props();

  let status = $state<Status>('idle');

  function finish(lat: number, lng: number) {
    status = 'granted';
    setTimeout(() => {
      onLocationGranted(lat, lng);
      onClose();
      status = 'idle';
    }, 1200);
  }

  function handleAllow() {
    if (!('geolocation' in navigator)) {
      status = 'unavailable';
      return;
    }
    status = 'requesting';
    navigator.geolocation.getCurrentPosition(
      (pos) => finish(pos.coords.latitude, pos.coords.longitude),
      () => finish(FALLBACK.lat, FALLBACK.lng),
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 300000 }
    );
  }
</script>

{#if open}
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(26,29,46,0.6); backdrop-filter:blur(4px)" onclick={onClose} role="presentation">
    <div class="relative w-full max-w-sm" style="background:#fff; border-radius:24px; box-shadow:0 24px 64px rgba(0,0,0,0.18); overflow:hidden" onclick={(e) => e.stopPropagation()} role="presentation">
      <!-- Header visual -->
      <div class="flex w-full flex-col items-center justify-center px-6 py-10" style="background:linear-gradient(135deg,#045098 0%,#1387C7 100%)">
        <div class="relative flex h-24 w-24 items-center justify-center">
          <div class="absolute inset-0 rounded-full" style="border:2px solid rgba(255,255,255,0.1); animation:locPulse 2s ease-in-out infinite"></div>
          <div class="absolute rounded-full" style="inset:8px; border:2px solid rgba(255,255,255,0.15); animation:locPulse 2s ease-in-out 0.3s infinite"></div>
          <div class="absolute rounded-full" style="inset:16px; border:2px solid rgba(255,255,255,0.2); animation:locPulse 2s ease-in-out 0.6s infinite"></div>
          <div class="flex h-14 w-14 items-center justify-center rounded-full" style="background:rgba(255,255,255,0.2); backdrop-filter:blur(8px)">
            {#if status === 'requesting'}<LoaderCircle class="h-7 w-7 animate-spin text-white" />
            {:else if status === 'granted'}<Navigation class="h-7 w-7 text-white" />
            {:else}<MapPin class="h-7 w-7 text-white" />{/if}
          </div>
        </div>
        <h3 class="mt-5" style="font-size:20px; font-weight:800; color:#fff; margin:0; text-align:center">
          {status === 'requesting' ? 'Obteniendo ubicación...' : status === 'granted' ? '¡Ubicación encontrada!' : status === 'denied' ? 'Acceso denegado' : 'Permitir ubicación'}
        </h3>
      </div>

      <button onclick={onClose} class="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full" style="background:rgba(255,255,255,0.2); backdrop-filter:blur(8px); border:none" aria-label="Cerrar"><X class="h-4 w-4 text-white" /></button>

      <div class="flex flex-col gap-5 p-6">
        {#if status === 'idle'}
          <p style="font-size:15px; color:#4A5068; margin:0; text-align:center; line-height:1.6">Para mostrarte las sucursales más cercanas, necesitamos acceder a tu ubicación.</p>
          <div class="flex flex-col gap-3">
            {#each [{ icon: Navigation, text: 'Encuentra tu Kiosko más cercano' }, { icon: MapPin, text: 'Distancias exactas a cada sucursal' }, { icon: Shield, text: 'Tu ubicación no se almacena' }] as item (item.text)}
              <div class="flex items-center gap-3 rounded-xl px-4 py-2.5" style="background:#F7F9FF">
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style="background:#EBF6FD; color:#1387C7"><item.icon class="h-4 w-4" /></div>
                <span style="font-size:14px; color:#1A1D2E; font-weight:500">{item.text}</span>
              </div>
            {/each}
          </div>
          <div class="mt-1 flex flex-col gap-2.5">
            <Button variant="primary" class="w-full" onclick={handleAllow}>
              {#snippet icon()}<MapPin class="h-5 w-5" />{/snippet}
              Permitir acceso
            </Button>
            <button onclick={onClose} class="cursor-pointer py-2" style="background:none; border:none; font-size:14px; color:#8890AA; font-weight:500">Ahora no</button>
          </div>
        {:else if status === 'requesting'}
          <p style="font-size:15px; color:#4A5068; margin:0; text-align:center; line-height:1.6">Acepta el permiso en tu navegador para continuar...</p>
        {:else if status === 'granted'}
          <div class="flex flex-col items-center gap-3 py-2">
            <div class="flex h-12 w-12 items-center justify-center rounded-full" style="background:#D4EDCA"><Navigation class="h-6 w-6" style="color:#51A639" /></div>
            <p style="font-size:15px; color:#51A639; margin:0; font-weight:600; text-align:center">Buscando sucursales cercanas...</p>
          </div>
        {:else}
          <div class="flex flex-col items-center gap-4 py-2">
            <div class="flex h-12 w-12 items-center justify-center rounded-full" style="background:#FFD5D5"><AlertCircle class="h-6 w-6" style="color:#FF0200" /></div>
            <div class="flex flex-col gap-1 text-center">
              <p style="font-size:15px; color:#1A1D2E; margin:0; font-weight:600">{status === 'unavailable' ? 'Geolocalización no disponible' : 'Permiso denegado'}</p>
              <p style="font-size:13px; color:#4A5068; margin:0; line-height:1.5">{status === 'unavailable' ? 'Tu navegador no soporta geolocalización.' : 'Puedes habilitarlo desde la configuración de tu navegador, o buscar tu ciudad manualmente.'}</p>
            </div>
            <div class="flex w-full gap-3">
              <Button variant="ghost" size="sm" class="flex-1" onclick={() => (status = 'idle')}>Reintentar</Button>
              <Button variant="primary" size="sm" class="flex-1" onclick={onClose}>Buscar manual</Button>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
