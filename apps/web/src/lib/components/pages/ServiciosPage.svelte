<script lang="ts">
  import { tick } from 'svelte';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { Home, Landmark, Wallet, Smartphone, Gamepad2, GraduationCap, MoreHorizontal, ChevronRight, Search, Info, ChevronLeft, MapPin } from '@lucide/svelte';
  import ServiceLogo from '$lib/components/atoms/ServiceLogo.svelte';
  import serviciosData from '$lib/data/servicios.json';

  type Svc = { id: string; nombre: string; descripcion: string };
  type Cat = { id: string; nombre: string; servicios: Svc[] };
  const categorias = serviciosData.categorias as Cat[];

  const categoryMeta: Record<string, { icon: any; color: string; bg: string; description: string }> = {
    'servicios-del-hogar': { icon: Home, color: '#1387C7', bg: '#EBF6FD', description: 'Paga tus servicios de luz, teléfono, internet y televisión' },
    'servicios-financieros': { icon: Landmark, color: '#045098', bg: '#E0EEFA', description: 'Depósitos, pagos de tarjeta y retiros en efectivo' },
    'servicios-medios-de-pago': { icon: Wallet, color: '#51A639', bg: '#E8F5E0', description: 'Paga tus compras en línea y créditos de tienda' },
    'servicios-tiempo-aire-y-datos': { icon: Smartphone, color: '#DB3714', bg: '#FFF0EC', description: 'Recargas telefónicas y paquetes de datos para todas las compañías' },
    'servicios-entretenimiento': { icon: Gamepad2, color: '#8B1A4A', bg: '#FCEEF5', description: 'Tarjetas de regalo, PINs y suscripciones de entretenimiento' },
    'servicios-escuela-y-gobierno': { icon: GraduationCap, color: '#A07800', bg: '#FFF8E0', description: 'Pagos de colegiaturas y trámites institucionales' },
    'servicios-otros-servicios': { icon: MoreHorizontal, color: '#4A5068', bg: '#F0F2F8', description: 'Pagos de catálogos, casetas y otros servicios adicionales' }
  };

  const L = 'https://mikiosko.mx/wp-content/uploads';
  const serviceLogos: Record<string, string> = {
    cfe: `${L}/2025/02/CFE-luz.png`, telmex: `${L}/2025/02/telmex.webp`, mega: `${L}/2025/02/mega.png`, izzi: `${L}/2025/02/izzi.png`, wizz: `${L}/2025/02/wizz.png`, totalplay: `${L}/2025/02/totalplay.png`, sky: `${L}/2025/02/sky.png`, dish: `${L}/2025/02/dish.png`, 'star-tv': `${L}/2025/02/star-tv.png`, santander: `${L}/2025/11/logo_santander_v2.png`, bbva: `${L}/2025/02/BBVA_400x400.png`, 'retiros-multibancos': `${L}/2025/02/RETIROS-MULTIBANCOS.png`, 'compartamos-banco': `${L}/2025/02/COMPARTAMOS-BANCO.png`, 'amazon-pago': `${L}/2025/02/amazon.png`, dapp: `${L}/2025/02/dapp.png`, klar: `${L}/2025/02/klar.png`, elektra: `${L}/2025/02/elektra.png`, 'mercado-pago': `${L}/2025/02/mercado-pago.png`, bradescard: `${L}/2025/02/bradescard.png`, passport: `${L}/2025/05/passport.jpg`, 'todito-cash': `${L}/2025/02/todito-cash.png`, telcel: `${L}/2025/02/TELCEL.png`, att: `${L}/2025/02/ATT.png`, unefon: `${L}/2025/02/unefon.png`, movistar: `${L}/2025/02/movistar.png`, 'virgin-mobile': `${L}/2025/02/virgin-mobile.png`, bait: `${L}/2025/02/bait.png`, 'diri-movil': `${L}/2025/02/diri.png`, pillofon: `${L}/2025/02/pillowfon.png`, freedompop: `${L}/2025/02/freedomPop.png`, google: `${L}/2025/02/google.png`, netflix: `${L}/2025/02/netflix.png`, spotify: `${L}/2025/02/spotify.png`, 'amazon-entretenimiento': `${L}/2025/02/amazon-1.png`, xbox: `${L}/2025/02/xbox.png`, nintendo: `${L}/2025/02/Nintendo.png`, visa: `${L}/2025/02/visa.png`, playstation: `${L}/2025/02/playstation.png`, itunes: `${L}/2025/02/itunes.png`, garena: `${L}/2025/02/GARENA-280x280-1.webp`, 'vix-premium': `${L}/2025/02/vix.png`, roblox: `${L}/2025/05/Roblox.jpg`, 'uber-eats': `${L}/2025/05/Uber-Eats.jpg`, 'paramount-plus': `${L}/2025/05/PARAMOUNT.jpg`, cinepolis: `${L}/2025/05/Cinepolis.jpg`, itc: `${L}/2025/02/instituto-tec-cguzman.png`, 'universidad-de-colima': `${L}/2025/02/universidad-colima.png`, pabs: `${L}/2025/02/pabs.png`, betterware: `${L}/2025/02/BETTERWARE.png`, televia: `${L}/2025/02/televia.png`, ilusion: `${L}/2025/02/ILUSION.png`, lbel: `${L}/2025/02/L-label.png`, andrea: `${L}/2025/02/andrea.png`, tupperware: `${L}/2025/02/tupperware.png`, zermat: `${L}/2025/02/Zermat.png`, 'price-shoes': `${L}/2025/02/price-shoes.png`, just: `${L}/2025/02/just.png`, fuller: `${L}/2025/02/fuller.png`, 'yves-rocher': `${L}/2025/02/yves-rocher.png`
  };

  let activeCategory = $state<string | null>(null);
  let searchText = $state('');
  let expandedService = $state<string | null>(null);
  const sectionEls: Record<string, HTMLDivElement | null> = {};

  let pillsEl = $state<HTMLDivElement | null>(null);
  let canLeft = $state(false);
  let canRight = $state(false);

  const totalServices = categorias.reduce((acc, c) => acc + c.servicios.length, 0);

  const filteredCategorias = $derived.by(() => {
    if (!searchText) return categorias;
    const q = searchText.toLowerCase();
    return categorias
      .map((cat) => ({ ...cat, servicios: cat.servicios.filter((s) => s.nombre.toLowerCase().includes(q) || s.descripcion.toLowerCase().includes(q)) }))
      .filter((cat) => cat.servicios.length > 0);
  });

  function updateButtons() {
    if (!pillsEl) return;
    canLeft = pillsEl.scrollLeft > 4;
    canRight = pillsEl.scrollLeft < pillsEl.scrollWidth - pillsEl.clientWidth - 4;
  }
  function scrollPills(dir: 'left' | 'right') {
    if (!pillsEl) return;
    const amount = pillsEl.clientWidth * 0.6;
    pillsEl.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  }
  function scrollToCategory(id: string) {
    activeCategory = id;
    sectionEls[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Deep-link a /servicios/:category
  $effect(() => {
    const cat = $page.params.category;
    if (cat) {
      activeCategory = cat;
      tick().then(() => setTimeout(() => sectionEls[cat]?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100));
    }
  });

  // Sincronizar el estado de la cabecera para ajustar el top del sticky
  let showHeader = $state(true);
  let lastScrollY = 0;

  function handlePageScroll() {
    const currentScrollY = window.scrollY;
    if (window.innerWidth < 1024) {
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        showHeader = false;
      } else {
        showHeader = true;
      }
    } else {
      showHeader = true;
    }
    lastScrollY = currentScrollY;
  }

  $effect(() => {
    if (pillsEl) {
      updateButtons();
      const ro = new ResizeObserver(updateButtons);
      ro.observe(pillsEl);
      window.addEventListener('scroll', handlePageScroll, { passive: true });
      return () => {
        ro.disconnect();
        window.removeEventListener('scroll', handlePageScroll);
      };
    }
  });
</script>

<div class="flex flex-col">
  <!-- Hero -->
  <div class="w-full py-8 md:py-12" style="background:#EBF6FD">
    <div class="mx-auto max-w-7xl px-4">
      <h1 style="font-size:clamp(32px,5vw,48px); font-weight:800; line-height:1.1; letter-spacing:-0.02em; color:#1A1D2E; margin:0">Servicios</h1>
      <p style="font-size:18px; color:#4A5068; margin:8px 0 0">Mas de {totalServices} servicios disponibles en todas nuestras sucursales</p>
      <div class="relative mt-6 max-w-lg">
        <Search class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style="color:#8890AA" />
        <input type="text" bind:value={searchText} placeholder="Buscar servicio, marca o empresa..." class="w-full rounded-xl py-3.5 pl-12 pr-4 outline-none" style="border:1.5px solid #C8E8F7; font-size:15px; background:#fff" />
      </div>
    </div>
  </div>

  <!-- Pills sticky (Ajusta su top dinámicamente si el header móvil se oculta) -->
  <div class="sticky z-20 w-full transition-all duration-300" style={`background:#fff; border-bottom:1px solid #E2E7F2; box-shadow:0 2px 6px rgba(0,0,0,0.04); top:${showHeader ? '64px' : '0px'}`}>
    <div class="relative mx-auto max-w-7xl px-4">
      <!-- Degradado Izquierdo -->
      <div class="absolute -left-px top-0 bottom-0 z-[5] w-8 pointer-events-none md:left-8 transition-opacity duration-300" style={`background:linear-gradient(to right, #fff 15%, rgba(255, 255, 255, 0) 100%); opacity: ${canLeft ? '1' : '0'};`}></div>
      
      {#if canLeft}
        <button onclick={() => scrollPills('left')} class="absolute left-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-all duration-200 md:flex" style="background:#fff; border:1.5px solid #E2E7F2; box-shadow:0 2px 8px rgba(0,0,0,0.12)" aria-label="Izquierda"><ChevronLeft class="h-4 w-4" style="color:#4A5068" /></button>
      {/if}
      <div bind:this={pillsEl} onscroll={updateButtons} class="scrollbar-hide flex gap-2 overflow-x-auto py-3" style={`padding-left:${canLeft ? '20px' : '0'}; padding-right:${canRight ? '20px' : '0'}; scrollbar-width:none; -ms-overflow-style:none;`}>
        <button onclick={() => { activeCategory = null; window.scrollTo({ top: 0, behavior: 'smooth' }); }} class="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 transition-all duration-200" style={`background:${!activeCategory ? '#1387C7' : '#fff'}; color:${!activeCategory ? '#fff' : '#4A5068'}; border:1.5px solid ${!activeCategory ? '#1387C7' : '#E2E7F2'}; font-size:13px; font-weight:${!activeCategory ? 700 : 500}`}>Todos</button>
        {#each categorias as cat (cat.id)}
          {@const meta = categoryMeta[cat.id]}
          {@const Icon = meta?.icon ?? MoreHorizontal}
          {@const on = activeCategory === cat.id}
          <button onclick={() => scrollToCategory(cat.id)} class="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 transition-all duration-200" style={`background:${on ? (meta?.color ?? '#1387C7') : '#fff'}; color:${on ? '#fff' : '#4A5068'}; border:1.5px solid ${on ? (meta?.color ?? '#1387C7') : '#E2E7F2'}; font-size:13px; font-weight:${on ? 700 : 500}`}>
            <Icon class="h-3.5 w-3.5" />{cat.nombre}
          </button>
        {/each}
      </div>
      <!-- Degradado Derecho -->
      <div class="absolute -right-px top-0 bottom-0 z-[5] w-8 pointer-events-none md:right-8 transition-opacity duration-300" style={`background:linear-gradient(to left, #fff 15%, rgba(255, 255, 255, 0) 100%); opacity: ${canRight ? '1' : '0'};`}></div>
      
      {#if canRight}
        <button onclick={() => scrollPills('right')} class="absolute right-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-all duration-200 md:flex" style="background:#fff; border:1.5px solid #E2E7F2; box-shadow:0 2px 8px rgba(0,0,0,0.12)" aria-label="Derecha"><ChevronRight class="h-4 w-4" style="color:#4A5068" /></button>
      {/if}
    </div>
  </div>

  <style>
    /* Ocultar barra de scroll en navegadores basados en WebKit */
    div.scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  </style>

  <!-- Secciones -->
  <section class="w-full py-10 md:py-16">
    <div class="mx-auto flex max-w-7xl flex-col gap-14 px-4">
      {#each filteredCategorias as cat (cat.id)}
        {@const meta = categoryMeta[cat.id]}
        {@const Icon = meta?.icon ?? MoreHorizontal}
        <div bind:this={sectionEls[cat.id]} style="scroll-margin-top:8rem">
          <div class="mb-6 flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={`background:${meta?.bg ?? '#F0F2F8'}; color:${meta?.color ?? '#4A5068'}`}><Icon class="h-6 w-6" /></div>
            <div class="flex flex-col gap-1">
              <h2 style="font-size:clamp(22px,3vw,28px); font-weight:700; color:#1A1D2E; margin:0; line-height:1.2">{cat.nombre}</h2>
              <p style="font-size:15px; color:#4A5068; margin:0">{meta?.description ?? ''} <span style="color:#8890AA">· {cat.servicios.length} servicio{cat.servicios.length !== 1 ? 's' : ''}</span></p>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {#each cat.servicios as svc (svc.id)}
              {@const isExp = expandedService === svc.id}
              <div class="flex cursor-pointer flex-col rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" style={`background:#fff; border:1.5px solid ${isExp ? (meta?.color ?? '#1387C7') : '#E2E7F2'}; box-shadow:${isExp ? `0 6px 20px ${meta?.color ?? '#1387C7'}22` : '0 2px 8px rgba(0,0,0,0.02)'}`} onclick={() => (expandedService = isExp ? null : svc.id)} role="button" tabindex="0" onkeydown={(e) => { if (e.key === 'Enter') expandedService = isExp ? null : svc.id; }}>
                <div class="flex items-center gap-3.5 p-4">
                  <div class="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl transition-all duration-300" style={`background:#fff; border:1.5px solid ${isExp ? (meta?.color ?? '#E2E7F2') : '#E2E7F2'}; box-shadow:0 2px 6px rgba(0,0,0,0.03)`}>
                    <ServiceLogo src={serviceLogos[svc.id]} alt={svc.nombre} fallbackColor={meta?.color ?? '#4A5068'} fallbackBg={meta?.bg ?? '#F0F2F8'} />
                  </div>
                  <span class="flex-1" style="font-size:15px; font-weight:600; color:#1A1D2E">{svc.nombre}</span>
                  <ChevronRight class="h-4 w-4 shrink-0 transition-transform duration-300" style={`color:#BEC4D2; transform:rotate(${isExp ? 90 : 0}deg)`} />
                </div>
                {#if isExp}
                  <div class="px-4 pb-4 pt-0" style="border-top:1px solid #E2E7F2">
                    <div class="mt-3 flex items-start gap-2 rounded-lg p-3" style="background:#F7F9FF">
                      <Info class="mt-0.5 h-4 w-4 shrink-0" style={`color:${meta?.color ?? '#8890AA'}`} />
                      <p style="font-size:13px; color:#4A5068; margin:0; line-height:1.6">{svc.descripcion}</p>
                    </div>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/each}

      {#if filteredCategorias.length === 0}
        <div class="flex flex-col items-center gap-4 py-16">
          <Search class="h-12 w-12" style="color:#C8E8F7" />
          <p style="font-size:18px; color:#8890AA; text-align:center">No se encontraron servicios para “{searchText}”</p>
          <button onclick={() => (searchText = '')} class="cursor-pointer rounded-xl px-5 py-2.5" style="background:#EBF6FD; border:1.5px solid #C8E8F7; color:#1387C7; font-size:14px; font-weight:600">Limpiar busqueda</button>
        </div>
      {/if}
    </div>
  </section>

  <!-- CTA -->
  <div class="w-full py-12" style="background:linear-gradient(135deg,#045098 0%,#1387C7 100%)">
    <div class="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
      <div class="flex flex-col gap-2">
        <h3 style="font-size:clamp(22px,3vw,28px); font-weight:700; color:#fff; margin:0">¿No encuentras el servicio que buscas?</h3>
        <p style="font-size:16px; color:rgba(255,255,255,0.85); margin:0; max-w-xl">Visita tu sucursal más cercana y pregunta por nuestro catálogo completo de servicios disponibles.</p>
      </div>
      <a href="{base}/sucursales" class="inline-flex items-center gap-2 px-6 py-3.5 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-98" style="background:#FCD700; color:#1A1D2E; font-size:15px; font-weight:700; border-radius:18px; box-shadow:0 6px 20px rgba(0,0,0,0.15)">
        <MapPin class="h-5 w-5" /> Encontrar mi sucursal
      </a>
    </div>
  </div>
</div>
