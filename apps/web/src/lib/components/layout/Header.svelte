<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import {
    Search, MapPin, Menu, X, FileText, ChevronDown,
    Beer, Star, Zap, Cookie, Wine, Home, Landmark,
    Wallet, Smartphone, Gamepad2, GraduationCap, MoreHorizontal, Sparkles
  } from '@lucide/svelte';

  const A = base + '/assets';
  const kioskoLogo = `${A}/cb8228e32e6fa9418a2c1113e2b9c576071ceb83.png`;
  const yayaLogo = `${A}/c7490a2487aafb5bcfe6d42e8f9cb869d7abde70.png`;

  // Zonas de sucursales. `count` opcional: solo se muestra donde hay datos.
  const sucursalesCities: { label: string; slug: string; count?: number }[] = [
    { label: 'Colima', slug: 'colima', count: 5 },
    { label: 'Guzmán', slug: 'guzman' },
    { label: 'Tecomán', slug: 'tecoman' },
    { label: 'Manzanillo', slug: 'manzanillo' },
    { label: 'Puerto Vallarta', slug: 'puerto-vallarta', count: 3 },
    { label: 'Nayarit', slug: 'nayarit' },
    { label: 'Tepic', slug: 'tepic', count: 5 },
    { label: 'Los Mochis', slug: 'los-mochis' },
    { label: 'Guadalajara', slug: 'guadalajara' }
  ];

  const promoCategories = [
    { label: 'Combos del Día', slug: 'combos', icon: Sparkles, color: '#A07800' },
    { label: 'Miércoles Cervecero', slug: 'miercoles-cervecero', icon: Beer, color: '#045098' },
    { label: 'Super Lunes', slug: 'super-lunes', icon: Star, color: '#FF0200' },
    { label: 'Cerveza, vinos y licores', slug: 'cerveza-vinos-y-licores', icon: Wine, color: '#8B1A4A' },
    { label: 'Bebidas', slug: 'bebidas', icon: Zap, color: '#1387C7' },
    { label: 'Antojo', slug: 'antojo', icon: Cookie, color: '#F5A623' },
    { label: 'Hogar y Despensa', slug: 'hogar-y-despensa', icon: Home, color: '#51A639' }
  ];

  const serviciosItems = [
    { label: 'Servicios del Hogar', slug: 'servicios-del-hogar', icon: Home },
    { label: 'Servicios Financieros', slug: 'servicios-financieros', icon: Landmark },
    { label: 'Medios de Pago', slug: 'servicios-medios-de-pago', icon: Wallet },
    { label: 'Tiempo Aire y Datos', slug: 'servicios-tiempo-aire-y-datos', icon: Smartphone },
    { label: 'Entretenimiento', slug: 'servicios-entretenimiento', icon: Gamepad2 },
    { label: 'Escuela y Gobierno', slug: 'servicios-escuela-y-gobierno', icon: GraduationCap },
    { label: 'Otros Servicios', slug: 'servicios-otros-servicios', icon: MoreHorizontal }
  ];

  type OpenMenu = 'sucursales' | 'promociones' | 'servicios' | null;

  let openMenu = $state<OpenMenu>(null);
  let mobileOpen = $state(false);
  let searchOpen = $state(false);
  let mobileExpanded = $state<OpenMenu>(null);
  let hideTimer: ReturnType<typeof setTimeout>;

  const path = $derived($page.url.pathname);
  const isActive = (p: string) => path.startsWith(base + p);

  // Prueba A/B: nombre de la sección ("Sucursales" | "Ubicaciones") desde el +layout.server.
  const locLabel = $derived(($page.data.locationsLabel as string) ?? 'Sucursales');

  import { onMount } from 'svelte';

  function enter(menu: OpenMenu) {
    clearTimeout(hideTimer);
    openMenu = menu;
  }
  function leave() {
    hideTimer = setTimeout(() => (openMenu = null), 200);
  }

  // Scroll inteligente en móvil
  let showHeader = $state(true);
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.scrollY;
    // Ocultar sólo en móviles/tabletas (ancho < 1024px)
    if (window.innerWidth < 1024) {
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        showHeader = false; // Scroll abajo
      } else {
        showHeader = true; // Scroll arriba
      }
    } else {
      showHeader = true;
    }
    lastScrollY = currentScrollY;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // Bloquear scroll del body al abrir el menú móvil
  $effect(() => {
    if (typeof document !== 'undefined') {
      if (mobileOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  });

  // Cerrar menús al cambiar de ruta
  $effect(() => {
    path;
    openMenu = null;
    mobileOpen = false;
    mobileExpanded = null;
  });
</script>

<header class="sticky top-0 z-40 w-full transition-transform duration-300" style={`background:rgba(255,255,255,0.66); box-shadow:0 4px 30px rgba(0,0,0,0.1); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); transform: translateY(${showHeader ? '0' : '-100%'})`}>
  <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
    <!-- Logo -->
    <a href="{base}/" class="flex shrink-0 items-center gap-2 py-2 no-underline">
      <img src={kioskoLogo} alt="Kiosko" class="h-8 w-auto object-contain md:h-9" />
    </a>

    <!-- Nav desktop -->
    <nav class="hidden items-center gap-0.5 lg:flex">
      <!-- Sucursales -->
      <div class="relative" onmouseenter={() => enter('sucursales')} onmouseleave={leave} role="none">
        <a href="{base}/sucursales" class="flex items-center gap-1.5 rounded-lg px-4 py-2.5 no-underline transition-all duration-200"
          style={`font-weight:600; font-size:15px; color:${isActive('/sucursales') || openMenu === 'sucursales' ? '#1387C7' : '#4A5068'}; background:${openMenu === 'sucursales' || isActive('/sucursales') ? '#EBF6FD' : 'transparent'}`}>
          <MapPin class="h-4 w-4" /> {locLabel}
          <ChevronDown class="h-3.5 w-3.5 transition-transform duration-200" style={`transform: rotate(${openMenu === 'sucursales' ? 180 : 0}deg)`} />
        </a>
        {#if openMenu === 'sucursales'}
          <div class="absolute left-0 top-full mt-1 rounded-xl py-2" style="background:#fff; box-shadow:0 12px 40px rgba(0,0,0,0.12); border:1px solid #E2E7F2; min-width:260px; animation:menuFadeIn 0.15s ease-out">
            <div class="mb-1 px-4 py-2"><span style="font-size:11px; font-weight:700; color:#8890AA; text-transform:uppercase; letter-spacing:0.05em">Ciudades</span></div>
            {#each sucursalesCities as c (c.slug)}
              <a href={`${base}/sucursales/${c.slug}`} class="flex items-center gap-3 px-4 py-2.5 no-underline transition-colors hover:bg-[#EBF6FD]" style="color:#1A1D2E">
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style="background:#EBF6FD; color:#1387C7"><MapPin class="h-4 w-4" /></div>
                <div class="flex flex-col">
                  <span style="font-size:14px; font-weight:600">{c.label}</span>
                  <span style="font-size:12px; color:#8890AA">{c.count ? `${c.count} ${locLabel.toLowerCase()}` : 'Próximamente'}</span>
                </div>
              </a>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Promociones -->
      <div class="relative" onmouseenter={() => enter('promociones')} onmouseleave={leave} role="none">
        <a href="{base}/promociones" class="flex items-center gap-1.5 rounded-lg px-4 py-2.5 no-underline transition-all duration-200"
          style={`font-weight:600; font-size:15px; color:${isActive('/promociones') || openMenu === 'promociones' ? '#1387C7' : '#4A5068'}; background:${openMenu === 'promociones' || isActive('/promociones') ? '#EBF6FD' : 'transparent'}`}>
          Promociones
          <span class="relative inline-flex h-2.5 w-2.5 items-center justify-center">
            <span class="absolute inset-0 rounded-full" style="background:#FF0200; animation:navBadgePulse 2s ease-out infinite"></span>
            <span class="relative h-1.5 w-1.5 rounded-full" style="background:#FF0200"></span>
          </span>
          <ChevronDown class="h-3.5 w-3.5 transition-transform duration-200" style={`transform: rotate(${openMenu === 'promociones' ? 180 : 0}deg)`} />
        </a>
        {#if openMenu === 'promociones'}
          <div class="absolute left-0 top-full mt-1 rounded-xl py-2" style="background:#fff; box-shadow:0 12px 40px rgba(0,0,0,0.12); border:1px solid #E2E7F2; min-width:260px; animation:menuFadeIn 0.15s ease-out">
            <div class="mb-1 px-4 py-2"><span style="font-size:11px; font-weight:700; color:#8890AA; text-transform:uppercase; letter-spacing:0.05em">Categorías</span></div>
            {#each promoCategories as cat (cat.slug)}
              <a href={`${base}/promociones/${cat.slug}`} class="flex items-center gap-3 px-4 py-2.5 no-underline transition-colors hover:bg-[#F7F9FF]" style="color:#1A1D2E">
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={`background:${cat.color}15; color:${cat.color}`}>
                  <cat.icon class="h-4 w-4" />
                </div>
                <span style="font-size:14px; font-weight:600">{cat.label}</span>
              </a>
            {/each}
          </div>
        {/if}
      </div>

      <!-- YAYA -->
      <a href="{base}/yaya" onmouseenter={() => (openMenu = null)} class="flex items-center gap-1.5 rounded-lg px-4 py-2.5 no-underline transition-all duration-200"
        style={`font-weight:600; font-size:15px; color:${isActive('/yaya') ? '#1387C7' : '#4A5068'}; background:${isActive('/yaya') ? '#EBF6FD' : 'transparent'}`}>
        <img src={yayaLogo} alt="YAYA" class="h-5 w-5 rounded object-cover" /> YAYA
      </a>

      <!-- Servicios -->
      <div class="relative" onmouseenter={() => enter('servicios')} onmouseleave={leave} role="none">
        <a href="{base}/servicios" class="flex items-center gap-1.5 rounded-lg px-4 py-2.5 no-underline transition-all duration-200"
          style={`font-weight:600; font-size:15px; color:${isActive('/servicios') || openMenu === 'servicios' ? '#1387C7' : '#4A5068'}; background:${openMenu === 'servicios' || isActive('/servicios') ? '#EBF6FD' : 'transparent'}`}>
          Servicios
          <ChevronDown class="h-3.5 w-3.5 transition-transform duration-200" style={`transform: rotate(${openMenu === 'servicios' ? 180 : 0}deg)`} />
        </a>
        {#if openMenu === 'servicios'}
          <div class="absolute right-0 top-full mt-1 rounded-xl px-4 py-3" style="background:#fff; box-shadow:0 12px 40px rgba(0,0,0,0.12); border:1px solid #E2E7F2; width:380px; animation:menuFadeIn 0.15s ease-out">
            <div class="mb-3"><span style="font-size:11px; font-weight:700; color:#8890AA; text-transform:uppercase; letter-spacing:0.05em">Servicios</span></div>
            <div class="grid grid-cols-3 gap-2">
              {#each serviciosItems as svc (svc.slug)}
                <a href={`${base}/servicios/${svc.slug}`} class="flex flex-col items-center gap-1.5 rounded-xl px-2 py-3 no-underline transition-all hover:-translate-y-0.5" style="background:#EBF6FD; color:#045098">
                  <div class="flex h-9 w-9 items-center justify-center rounded-lg" style="background:#fff"><svc.icon class="h-4 w-4" /></div>
                  <span style="font-size:12px; font-weight:700; text-align:center">{svc.label}</span>
                </a>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </nav>

    <!-- Acciones desktop -->
    <div class="hidden items-center gap-3 lg:flex">
      <button onclick={() => { searchOpen = !searchOpen; openMenu = null; }} class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl transition-colors" style={`background:${searchOpen ? 'rgba(19,135,199,0.15)' : 'rgba(255,255,255,0.3)'}; backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); box-shadow:0 4px 30px rgba(0,0,0,0.1); border:1px solid rgba(255,255,255,0.5)`} aria-label="Buscar">
        <Search class="h-5 w-5" style="color:#4A5068" />
      </button>
      <a href="{base}/facturacion" class="flex items-center gap-1.5 px-4 py-2.5 no-underline transition-colors" style="border:2px solid #1387C7; color:#1387C7; font-weight:600; font-size:14px; border-radius:16px">
        <FileText class="h-4 w-4" /> Facturación
      </a>
    </div>

    <!-- Hamburguesa móvil (Área táctil ampliada) -->
    <button class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full active:bg-[#EBF6FD] lg:hidden" onclick={() => (mobileOpen = !mobileOpen)} style="background:none; border:none" aria-label="Menú">
      {#if mobileOpen}<X class="h-6 w-6" style="color:#1A1D2E" />{:else}<Menu class="h-6 w-6" style="color:#1A1D2E" />{/if}
    </button>
  </div>

  <!-- Búsqueda expandida -->
  {#if searchOpen}
    <div class="hidden border-t lg:block" style="border-color:#E2E7F2">
      <div class="mx-auto max-w-7xl px-4 py-3">
        <div class="relative mx-auto max-w-lg">
          <Search class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style="color:#8890AA" />
          <input type="text" placeholder="Busca productos, sucursales o promos..." class="w-full rounded-full border-none py-3 pl-12 pr-4 outline-none" style="background:#F7F9FF; font-size:16px" />
        </div>
      </div>
    </div>
  {/if}

</header>

<!-- Menú móvil como Slide-over Drawer (Mejora #2) (Fuera del header para evitar bugs de z-index/translateY) -->
{#if mobileOpen}
  <!-- Backdrop oscuro con desenfoque clickeable para cerrar -->
  <div class="fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm lg:hidden" onclick={() => (mobileOpen = false)} role="presentation"></div>

  <!-- Panel del Drawer Lateral -->
  <div class="fixed bottom-0 right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col border-l border-[#E2E7F2] bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden" style="animation: slideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)">
    <!-- Header del drawer con branding y botón de cierre -->
    <div class="flex h-16 items-center justify-between border-b border-[#E2E7F2] px-6">
      <a href="{base}/" class="flex py-2 no-underline">
        <img src={kioskoLogo} alt="Kiosko" class="h-7 w-auto object-contain" />
      </a>
      <button onclick={() => (mobileOpen = false)} class="flex h-10 w-10 items-center justify-center rounded-full active:bg-[#EBF6FD]" style="border:none; background:none" aria-label="Cerrar"><X class="h-5 w-5" style="color:#1A1D2E" /></button>
    </div>

    <nav class="flex-1 overflow-y-auto p-6 scrollbar-hide">
      <div class="flex flex-col gap-2">
        {#each [{ k: 'sucursales', label: locLabel }, { k: 'promociones', label: 'Promociones' }, { k: 'servicios', label: 'Servicios' }] as m (m.k)}
          <div class="flex flex-col">
            <button onclick={() => (mobileExpanded = mobileExpanded === m.k ? null : (m.k as OpenMenu))} class="flex items-center gap-2 rounded-xl px-4 py-3.5 text-left" style={`font-weight:600; font-size:16px; color:${isActive('/' + m.k) ? '#1387C7' : '#4A5068'}; background:${mobileExpanded === m.k ? '#F7F9FF' : isActive('/' + m.k) ? '#EBF6FD' : 'transparent'}; border:none`}>
              {m.label}
              <ChevronDown class="ml-auto h-4 w-4 transition-transform duration-200" style={`color:#8890AA; transform: rotate(${mobileExpanded === m.k ? 180 : 0}deg)`} />
            </button>
            {#if mobileExpanded === m.k}
              <div class="mt-1 flex flex-col gap-1.5 pb-2 pl-4" style="animation: menuFadeIn 0.2s ease-out">
                {#if m.k === 'sucursales'}
                  {#each sucursalesCities as c (c.slug)}
                    <a href={`${base}/sucursales/${c.slug}`} class="flex items-center gap-2 rounded-lg py-2.5 pr-2 no-underline active:bg-[#F7F9FF]" style="color:#4A5068; font-size:14px; font-weight:500">
                      <MapPin class="h-4 w-4" style="color:#1387C7" />
                      {c.label}
                      <span style="font-size:12px; color:#8890AA; margin-left:auto">{c.count ?? ''}</span>
                    </a>
                  {/each}
                {:else if m.k === 'promociones'}
                  {#each promoCategories as cat (cat.slug)}
                    <a href={`${base}/promociones/${cat.slug}`} class="flex items-center gap-2 rounded-lg py-2.5 pr-2 no-underline active:bg-[#F7F9FF]" style="color:#4A5068; font-size:14px; font-weight:500">
                      <span style={`color:${cat.color}`}><cat.icon class="h-4.5 w-4.5" /></span>
                      {cat.label}
                    </a>
                  {/each}
                {:else}
                  <div class="grid grid-cols-2 gap-2 py-2">
                    {#each serviciosItems as svc (svc.slug)}
                      <a href={`${base}/servicios/${svc.slug}`} class="flex flex-col items-center gap-1 rounded-xl px-2 py-3 no-underline active:scale-95" style="background:#EBF6FD; color:#045098; font-size:11px; font-weight:700; text-align:center">
                        <svc.icon class="h-4 w-4" />
                        {svc.label}
                      </a>
                    {/each}
                  </div>
                {/if}
              </div>
            {/if}
          </div>
        {/each}

        <a href="{base}/yaya" class="flex items-center gap-2 rounded-xl px-4 py-3.5 no-underline active:bg-[#EBF6FD]" style={`font-weight:600; font-size:16px; color:${isActive('/yaya') ? '#1387C7' : '#4A5068'}; background:${isActive('/yaya') ? '#EBF6FD' : 'transparent'}`}>
          <img src={yayaLogo} alt="YAYA" class="h-5 w-5 rounded object-cover" /> YAYA
        </a>
        <a href="{base}/facturacion" class="mt-4 flex items-center justify-center gap-2 py-3.5 no-underline active:scale-98" style="border:2px solid #1387C7; color:#1387C7; font-weight:600; font-size:16px; border-radius:16px">
          <FileText class="h-4 w-4" /> Facturación
        </a>
      </div>
    </nav>
  </div>

  <!-- Animación del drawer slide-in -->
  <style>
    @keyframes slideIn {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
  </style>
{/if}
