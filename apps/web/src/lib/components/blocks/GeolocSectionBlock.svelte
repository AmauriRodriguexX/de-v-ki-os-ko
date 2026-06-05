<script lang="ts">
  import { MapPin, Clock, Search, Navigation, ChevronRight, LocateFixed } from '@lucide/svelte';
  import MapEmbed from '$lib/components/atoms/MapEmbed.svelte';
  import GeoModal from '$lib/components/molecules/GeoModal.svelte';
  import LocationPermissionModal from '$lib/components/molecules/LocationPermissionModal.svelte';
  import { sucursales, type Sucursal } from '$lib/data/sucursales';

  let { initialCity = '' }: { initialCity?: string } = $props();

  function haversine(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  const states = ['Todos', ...Array.from(new Set(sucursales.map((s) => s.state)))];
  const cities = Array.from(new Set(sucursales.map((s) => s.city)));

  let searchText = $state('');
  $effect(() => { searchText = initialCity; });
  let filterState = $state('Todos');
  let selected = $state<Sucursal | null>(null);
  let hovered = $state<Sucursal | null>(null);
  let userLocation = $state<{ lat: number; lng: number } | null>(null);

  type Enriched = Sucursal & { _distanceNum?: number };

  const enriched = $derived<Enriched[]>(
    sucursales.map((s) => {
      if (!userLocation) return { ...s, distance: '' };
      const d = haversine(userLocation.lat, userLocation.lng, s.lat, s.lng);
      return { ...s, distance: d < 1 ? `${Math.round(d * 1000)} m` : `${d.toFixed(1)} km`, _distanceNum: d };
    })
  );

  const filtered = $derived.by(() => {
    let result = enriched;
    if (filterState !== 'Todos') result = result.filter((s) => s.state === filterState);
    if (searchText) {
      const q = searchText.toLowerCase();
      result = result.filter((s) => s.name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q) || s.address.toLowerCase().includes(q) || s.state.toLowerCase().includes(q));
    }
    if (userLocation) result = [...result].sort((a, b) => (a._distanceNum ?? 999) - (b._distanceNum ?? 999));
    return result;
  });

  let locModalOpen = $state(false);
</script>

<section class="w-full py-12 md:py-20" style="background:#F7F9FF">
  <div class="mx-auto max-w-7xl px-4">
    <!-- Header -->
    <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div class="flex flex-col gap-2">
        <h2 style="font-size:clamp(28px,4vw,36px); font-weight:700; line-height:1.2; letter-spacing:-0.01em; color:#1A1D2E; margin:0">Encuentra tu sucursal</h2>
        <p style="font-size:18px; color:#4A5068; margin:0">{filtered.length} tiendas en {filterState === 'Todos' ? 'Colima, Jalisco, Nayarit y Sinaloa' : filterState}</p>
      </div>
      <button onclick={() => (locModalOpen = true)} class="flex items-center gap-2 rounded-xl px-5 py-3 transition-all duration-200" style={`background:${userLocation ? '#D4EDCA' : '#EBF6FD'}; border:1.5px solid ${userLocation ? '#51A639' : '#C8E8F7'}; color:${userLocation ? '#2D6B1B' : '#045098'}; font-size:14px; font-weight:600`}>
        <LocateFixed class="h-4 w-4" />
        {userLocation ? 'Ubicación activa' : 'Usar mi ubicación'}
      </button>
    </div>

    <!-- Filtros por estado -->
    <div class="mb-6 flex gap-2 overflow-x-auto pb-2">
      {#each states as st (st)}
        <button onclick={() => (filterState = st)} class="cursor-pointer whitespace-nowrap rounded-full px-4 py-2 transition-all duration-200" style={`background:${filterState === st ? '#1387C7' : '#fff'}; color:${filterState === st ? '#fff' : '#4A5068'}; border:1.5px solid ${filterState === st ? '#1387C7' : '#E2E7F2'}; font-size:14px; font-weight:${filterState === st ? 700 : 500}`}>{st}</button>
      {/each}
    </div>

    <div class="flex flex-col gap-8 lg:flex-row">
      <!-- Mapa -->
      <div class="relative min-h-[260px] flex-1 overflow-hidden rounded-2xl md:min-h-[450px]" style="border:1.5px solid #E2E7F2">
        <MapEmbed
          lat={hovered?.lat ?? userLocation?.lat ?? 21.5}
          lng={hovered?.lng ?? userLocation?.lng ?? -104.9}
          zoom={hovered ? 16 : userLocation ? 10 : 6}
          markerLabel={hovered?.name ?? (userLocation ? 'Mi ubicación' : undefined)}
          class="h-full min-h-[260px] w-full md:min-h-[450px]"
        />
        <div class="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-xl px-3 py-2" style="background:rgba(255,255,255,0.95); box-shadow:0 4px 12px rgba(0,0,0,0.1); backdrop-filter:blur(8px)">
          <div class="flex h-7 w-7 items-center justify-center rounded-md" style="background:#1387C7"><MapPin class="h-4 w-4 text-white" /></div>
          <div class="flex flex-col">
            <span style="font-size:13px; font-weight:700; color:#1A1D2E">{hovered ? hovered.name : 'Sucursales Kiosko'}</span>
            <span style="font-size:11px; color:#4A5068">{hovered ? `${hovered.city}, ${hovered.state}` : `${filtered.length} ubicaciones`}</span>
          </div>
        </div>
        <div class="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2">
          {#each cities.filter((c) => filterState === 'Todos' || sucursales.some((s) => s.city === c && s.state === filterState)) as city (city)}
            <button onclick={() => { const cs = sucursales.find((s) => s.city === city); if (cs) hovered = cs; }} class="cursor-pointer rounded-full px-3 py-1.5 transition-all" style="background:rgba(255,255,255,0.92); backdrop-filter:blur(8px); border:1px solid rgba(226,231,242,0.6); font-size:12px; font-weight:600; color:#1A1D2E; box-shadow:0 2px 8px rgba(0,0,0,0.08)">
              <span style="color:#1387C7">{sucursales.filter((s) => s.city === city).length}</span> {city}
            </button>
          {/each}
        </div>
      </div>

      <!-- Lista -->
      <div class="flex w-full flex-col gap-4 lg:w-[400px]">
        <div class="relative">
          <Search class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style="color:#8890AA" />
          <input type="text" bind:value={searchText} placeholder="Buscar por ciudad, sucursal o dirección..." class="w-full rounded-xl py-3.5 pl-12 pr-4 outline-none" style="border:1.5px solid #E2E7F2; font-size:15px; background:#fff" />
        </div>

        <div class="flex items-center justify-between px-1">
          <span style="font-size:13px; color:#8890AA; font-weight:500">{filtered.length} sucursal{filtered.length !== 1 ? 'es' : ''} encontrada{filtered.length !== 1 ? 's' : ''}</span>
          {#if userLocation}
            <span class="flex items-center gap-1" style="font-size:12px; color:#51A639; font-weight:600"><Navigation class="h-3 w-3" /> Ordenado por cercanía</span>
          {/if}
        </div>

        <div class="kiosko-scroll flex max-h-[300px] flex-col gap-3 overflow-y-auto pr-1 md:max-h-[520px]">
          {#each filtered as suc (suc.id)}
            <button onclick={() => (selected = suc)} onmouseenter={() => (hovered = suc)} onmouseleave={() => (hovered = null)} class="flex cursor-pointer items-start gap-3 rounded-xl p-4 text-left transition-all duration-200 hover:-translate-y-px" style={`background:${hovered?.id === suc.id ? '#EBF6FD' : '#fff'}; border:1.5px solid ${hovered?.id === suc.id ? '#1387C7' : '#E2E7F2'}; box-shadow:0 1px 3px rgba(0,0,0,0.05)`}>
              <div class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style="background:#EBF6FD"><MapPin class="h-5 w-5" style="color:#1387C7" /></div>
              <div class="flex min-w-0 flex-1 flex-col gap-1">
                <span style="font-size:15px; font-weight:700; color:#1A1D2E">{suc.name}</span>
                <span class="line-clamp-2" style="font-size:13px; color:#4A5068">{suc.address}</span>
                <div class="mt-1 flex flex-wrap items-center gap-3">
                  {#if suc.distance}
                    <span class="flex items-center gap-1" style="font-size:12px; color:#1387C7; font-weight:600"><Navigation class="h-3 w-3" /> {suc.distance}</span>
                  {/if}
                  <span class="flex items-center gap-1" style="font-size:12px; color:#51A639; font-weight:500"><Clock class="h-3 w-3" /> {suc.hours}</span>
                  <span class="rounded-full px-2 py-0.5" style="font-size:11px; font-weight:600; background:#EEF2FB; color:#4A5068">{suc.city}</span>
                </div>
              </div>
              <ChevronRight class="mt-2 h-5 w-5 shrink-0" style="color:#BEC4D2" />
            </button>
          {/each}
          {#if filtered.length === 0}
            <div class="flex flex-col items-center gap-3 py-8">
              <MapPin class="h-10 w-10" style="color:#C8E8F7" />
              <p style="font-size:15px; color:#8890AA; text-align:center">No se encontraron sucursales.<br />Intenta con otra búsqueda.</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  {#if selected}
    <GeoModal sucursal={selected} onClose={() => (selected = null)} />
  {/if}

  <LocationPermissionModal
    open={locModalOpen}
    onClose={() => (locModalOpen = false)}
    onLocationGranted={(lat, lng) => (userLocation = { lat, lng })}
  />
</section>
