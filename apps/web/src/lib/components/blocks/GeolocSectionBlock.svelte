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

  // Lógica de desvanecimiento dinámico (Scroll fade)
  let sliderEl = $state<HTMLDivElement | null>(null);
  let canScrollLeft = $state(false);
  let canScrollRight = $state(false);

  function updateScroll() {
    if (!sliderEl) return;
    canScrollLeft = sliderEl.scrollLeft > 4;
    // canScrollRight es verdadero si hay contenido oculto a la derecha
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

<section class="w-full py-12 md:py-20 bg-muted">
  <div class="mx-auto max-w-7xl px-4">
    <!-- Header -->
    <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div class="flex flex-col gap-2">
        <h2 class="text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-tight text-foreground m-0">Encuentra tu sucursal</h2>
        <p class="text-[18px] text-[#4A5068] m-0">{filtered.length} tiendas en {filterState === 'Todos' ? 'Colima, Jalisco, Nayarit y Sinaloa' : filterState}</p>
      </div>
      <button 
        onclick={() => (locModalOpen = true)} 
        class="flex items-center gap-2 rounded-xl px-5 py-3 transition-all duration-200 border-[1.5px] text-sm font-semibold 
          {userLocation 
            ? 'bg-[#D4EDCA] border-[#51A639] text-[#2D6B1B]' 
            : 'bg-[#EBF6FD] border-[#C8E8F7] text-[#045098]'}"
      >
        <LocateFixed class="h-4 w-4" />
        {userLocation ? 'Ubicación activa' : 'Usar mi ubicación'}
      </button>
    </div>

    <!-- Filtros por estado con desvanecimiento degradado interactivo en las orillas (Mejora UX estilo YouTube) -->
    <div class="relative w-full mb-6">
      <!-- Degradado Izquierdo (Sólo visible si canScrollLeft es verdadero) -->
      <div class="absolute -left-px top-0 bottom-0 z-10 w-8 pointer-events-none transition-opacity duration-300" style={`background:linear-gradient(to right, #F7F9FF 15%, rgba(247, 249, 255, 0) 100%); opacity: ${canScrollLeft ? '1' : '0'};`}></div>
      
      <div 
        bind:this={sliderEl} 
        onscroll={updateScroll} 
        class="scrollbar-hide flex gap-2 overflow-x-auto pb-2 px-2 scroll-smooth" 
        style="scrollbar-width:none; -ms-overflow-style:none;"
      >
        {#each states as st (st)}
          <button 
            onclick={() => (filterState = st)} 
            class="cursor-pointer whitespace-nowrap rounded-full px-4 py-2.5 transition-all duration-200 active:scale-95 border-[1.5px] text-sm
              {filterState === st 
                ? 'bg-primary border-primary text-white font-bold' 
                : 'bg-white border-border text-[#4A5068] font-medium'}"
          >
            {st}
          </button>
        {/each}
      </div>

      <!-- Degradado Derecho (Sólo visible si canScrollRight es verdadero) -->
      <div class="absolute -right-px top-0 bottom-0 z-10 w-8 pointer-events-none transition-opacity duration-300" style={`background:linear-gradient(to left, #F7F9FF 15%, rgba(247, 249, 255, 0) 100%); opacity: ${canScrollRight ? '1' : '0'};`}></div>
    </div>

    <div class="flex flex-col gap-8 lg:flex-row">
      <!-- Mapa -->
      <div class="relative min-h-[260px] flex-1 overflow-hidden rounded-2xl md:min-h-[450px] border-[1.5px] border-border">
        <MapEmbed
          lat={hovered?.lat ?? userLocation?.lat ?? 21.5}
          lng={hovered?.lng ?? userLocation?.lng ?? -104.9}
          zoom={hovered ? 16 : userLocation ? 10 : 6}
          markerLabel={hovered?.name ?? (userLocation ? 'Mi ubicación' : undefined)}
          class="h-full min-h-[260px] w-full md:min-h-[450px]"
        />
        <div class="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-xl px-3 py-2 bg-white/95 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
          <div class="flex h-7 w-7 items-center justify-center rounded-md bg-primary"><MapPin class="h-4 w-4 text-white" /></div>
          <div class="flex flex-col">
            <span class="text-[13px] font-bold text-foreground">{hovered ? hovered.name : 'Sucursales Kiosko'}</span>
            <span class="text-[11px] text-[#4A5068]">{hovered ? `${hovered.city}, ${hovered.state}` : `${filtered.length} ubicaciones`}</span>
          </div>
        </div>
        <div class="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2">
          {#each cities.filter((c) => filterState === 'Todos' || sucursales.some((s) => s.city === c && s.state === filterState)) as city (city)}
            <button 
              onclick={() => { const cs = sucursales.find((s) => s.city === city); if (cs) hovered = cs; }} 
              class="cursor-pointer rounded-full px-3 py-1.5 transition-all bg-white/92 backdrop-blur-sm border border-border/60 text-xs font-semibold text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <span class="text-primary">{sucursales.filter((s) => s.city === city).length}</span> {city}
            </button>
          {/each}
        </div>
      </div>

      <!-- Lista -->
      <div class="flex w-full flex-col gap-4 lg:w-[400px]">
        <div class="relative">
          <Search class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style="color:#8890AA" />
          <input type="text" bind:value={searchText} placeholder="Buscar por ciudad, sucursal o dirección..." class="w-full rounded-xl py-3.5 pl-12 pr-4 outline-none border-[1.5px] border-border text-[15px] bg-white" />
        </div>

        <div class="flex items-center justify-between px-1">
          <span class="text-[13px] text-muted-foreground font-medium">{filtered.length} sucursal{filtered.length !== 1 ? 'es' : ''} encontrada{filtered.length !== 1 ? 's' : ''}</span>
          {#if userLocation}
            <span class="flex items-center gap-1 text-xs text-[#51A639] font-semibold"><Navigation class="h-3 w-3" /> Ordenado por cercanía</span>
          {/if}
        </div>

        <div class="kiosko-scroll flex max-h-[300px] flex-col gap-3 overflow-y-auto pr-1 md:max-h-[520px]">
          {#each filtered as suc (suc.id)}
            <button 
              onclick={() => (selected = suc)} 
              onmouseenter={() => (hovered = suc)} 
              onmouseleave={() => (hovered = null)} 
              class="flex cursor-pointer items-start gap-3 rounded-xl p-4 text-left transition-all duration-200 hover:-translate-y-px border-[1.5px] shadow-[0_1px_3px_rgba(0,0,0,0.05)]
                {hovered?.id === suc.id 
                  ? 'bg-[#EBF6FD] border-primary' 
                  : 'bg-white border-border'}"
            >
              <div class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EBF6FD]"><MapPin class="h-5 w-5 text-primary" /></div>
              <div class="flex min-w-0 flex-1 flex-col gap-1">
                <span class="text-[15px] font-bold text-foreground">{suc.name}</span>
                <span class="line-clamp-2 text-[13px] text-[#4A5068]">{suc.address}</span>
                <div class="mt-1 flex flex-wrap items-center gap-3">
                  {#if suc.distance}
                    <span class="flex items-center gap-1 text-xs text-primary font-semibold"><Navigation class="h-3 w-3" /> {suc.distance}</span>
                  {/if}
                  <span class="flex items-center gap-1 text-xs text-[#51A639] font-medium"><Clock class="h-3 w-3" /> {suc.hours}</span>
                  <span class="rounded-full px-2 py-0.5 text-[11px] font-semibold bg-[#EEF2FB] text-[#4A5068]">{suc.city}</span>
                </div>
              </div>
              <ChevronRight class="mt-2 h-5 w-5 shrink-0" style="color:#BEC4D2" />
            </button>
          {/each}
          {#if filtered.length === 0}
            <div class="flex flex-col items-center gap-3 py-8">
              <MapPin class="h-10 w-10" style="color:#C8E8F7" />
              <p class="text-[15px] text-muted-foreground text-center">No se encontraron sucursales.<br />Intenta con otra búsqueda.</p>
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
