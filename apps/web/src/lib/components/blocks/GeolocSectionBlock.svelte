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

  const stateNames: Record<string, string> = {
    'Todos': 'Todos',
    'Colima': 'Colima',
    'Jalisco': 'Jalisco',
    'Nayarit': 'Nayarit',
    'Sinaloa': 'Sinaloa',
    'Michoacan': 'Michoacán'
  };

  function joinList(arr: string[]): string {
    const mapped = arr.map(s => stateNames[s] || s);
    if (mapped.length === 0) return '';
    if (mapped.length === 1) return mapped[0];
    if (mapped.length === 2) return `${mapped[0]} y ${mapped[1]}`;
    return mapped.slice(0, -1).join(', ') + ' y ' + mapped[mapped.length - 1];
  }

  const citiesWithCount = $derived.by(() => {
    const activeSucursales = filterState === 'Todos'
      ? sucursales
      : sucursales.filter((s) => s.state === filterState);

    const cityData: Record<string, { name: string; count: number; minDistance: number }> = {};
    
    for (const s of activeSucursales) {
      const cityClean = s.city.trim();
      if (!cityData[cityClean]) {
        cityData[cityClean] = { name: cityClean, count: 0, minDistance: 999999 };
      }
      cityData[cityClean].count += 1;
      
      if (userLocation) {
        const dist = haversine(userLocation.lat, userLocation.lng, s.lat, s.lng);
        if (dist < cityData[cityClean].minDistance) {
          cityData[cityClean].minDistance = dist;
        }
      }
    }

    const result = Object.values(cityData);
    
    if (userLocation) {
      return result.sort((a, b) => a.minDistance - b.minDistance);
    } else {
      return result.sort((a, b) => b.count - a.count);
    }
  });

  const subtitleText = $derived.by(() => {
    if (searchText) {
      const q = searchText.toLowerCase().trim();
      const matchingCity = citiesWithCount.find(c => c.name.toLowerCase() === q);
      if (matchingCity) {
        const sampleStore = sucursales.find(s => s.city.toLowerCase() === q);
        const stateName = sampleStore ? (stateNames[sampleStore.state] || sampleStore.state) : '';
        const stateStr = stateName ? `, ${stateName}` : '';
        return `${filtered.length} tienda${filtered.length !== 1 ? 's' : ''} en ${matchingCity.name}${stateStr}`;
      }
      return `${filtered.length} tienda${filtered.length !== 1 ? 's' : ''} encontrada${filtered.length !== 1 ? 's' : ''} para "${searchText}"`;
    }
    
    if (filterState === 'Todos') {
      const allStates = states.filter(s => s !== 'Todos').sort();
      return `${filtered.length} tiendas en ${joinList(allStates)}`;
    }
    
    return `${filtered.length} tiendas en ${stateNames[filterState] || filterState}`;
  });

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

  let searchInputEl = $state<HTMLInputElement | null>(null);

  function scrollToSearch() {
    if (searchInputEl) {
      searchInputEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchInputEl.focus();
    }
  }

  function selectCity(cityName: string) {
    searchText = cityName;
    const firstStore = sucursales.find(s => s.city.toLowerCase() === cityName.toLowerCase());
    if (firstStore) hovered = firstStore;
    scrollToSearch();
  }

  const stateCenters: Record<string, { lat: number; lng: number; zoom: number }> = {
    'Todos': { lat: 21.8, lng: -105.0, zoom: 6 },
    'Colima': { lat: 19.15, lng: -103.95, zoom: 10 },
    'Jalisco': { lat: 20.65, lng: -104.5, zoom: 8 },
    'Nayarit': { lat: 21.75, lng: -104.85, zoom: 8 },
    'Sinaloa': { lat: 24.8, lng: -107.4, zoom: 7 },
    'Michoacan': { lat: 19.5, lng: -102.2, zoom: 9 }
  };

  const mapCenter = $derived.by(() => {
    if (hovered) {
      return { lat: hovered.lat, lng: hovered.lng, zoom: 16 };
    }
    if (userLocation) {
      return { lat: userLocation.lat, lng: userLocation.lng, zoom: 10 };
    }
    return stateCenters[filterState] || stateCenters['Todos'];
  });

  const mapMarkerLabel = $derived.by(() => {
    if (hovered) {
      return `${hovered.name}, ${hovered.city}, ${stateNames[hovered.state] || hovered.state}`;
    }
    if (userLocation) {
      return 'Mi ubicación';
    }
    if (filterState !== 'Todos') {
      return `Tiendas Kiosko en ${stateNames[filterState] || filterState}, México`;
    }
    return 'Tiendas Kiosko, Occidente México';
  });
</script>

<section class="w-full py-12 md:py-20 bg-muted">
  <div class="mx-auto max-w-7xl px-4">
    <!-- Header -->
    <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div class="flex flex-col gap-2">
        <h2 class="text-[clamp(28px,4vw,36px)] font-bold leading-[1.2] tracking-tight text-foreground m-0">Encuentra tu sucursal</h2>
        <p class="text-[18px] text-[#4A5068] m-0">{subtitleText}</p>
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
            {stateNames[st] || st}
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
          lat={mapCenter.lat}
          lng={mapCenter.lng}
          zoom={mapCenter.zoom}
          markerLabel={mapMarkerLabel}
          class="h-full min-h-[260px] w-full md:min-h-[450px]"
        />
        <div class="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-xl px-3 py-2 bg-white/95 shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm">
          <div class="flex h-7 w-7 items-center justify-center rounded-md bg-primary"><MapPin class="h-4 w-4 text-white" /></div>
          <div class="flex flex-col">
            <span class="text-[13px] font-bold text-foreground">{hovered ? hovered.name : 'Sucursales Kiosko'}</span>
            <span class="text-[11px] text-[#4A5068]">{hovered ? `${hovered.city}, ${stateNames[hovered.state] || hovered.state}` : `${filtered.length} ubicaciones`}</span>
          </div>
        </div>
        <div class="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap gap-2 max-h-[140px] overflow-y-auto scrollbar-hide">
          {#each citiesWithCount.slice(0, 5) as city (city.name)}
            <button 
              onclick={() => selectCity(city.name)} 
              class="cursor-pointer rounded-full px-3 py-1.5 transition-all bg-white/92 backdrop-blur-sm border border-border/60 text-xs font-semibold text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.08)] active:scale-95"
            >
              <span class="text-primary">{city.count}</span> {city.name}
            </button>
          {/each}
          {#if citiesWithCount.length > 5}
            <button 
              onclick={scrollToSearch} 
              class="cursor-pointer rounded-full px-3 py-1.5 transition-all bg-white/92 backdrop-blur-sm border border-border/60 text-xs font-semibold text-primary shadow-[0_2px_8px_rgba(0,0,0,0.08)] active:scale-95"
            >
              + {citiesWithCount.length - 5} más
            </button>
          {/if}
        </div>
      </div>

      <!-- Lista -->
      <div class="flex w-full flex-col gap-4 lg:w-[400px]">
        <div class="relative">
          <Search class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style="color:#8890AA" />
          <input bind:this={searchInputEl} type="text" bind:value={searchText} placeholder="Buscar por ciudad, sucursal o dirección..." class="w-full rounded-xl py-3.5 pl-12 pr-4 outline-none border-[1.5px] border-border text-[15px] bg-white" />
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
