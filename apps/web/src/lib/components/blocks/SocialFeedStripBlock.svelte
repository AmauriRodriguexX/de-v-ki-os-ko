<script lang="ts">
  import { Instagram, Facebook, ExternalLink, Heart, MessageCircle, Share2, Play, Eye, ChevronLeft, ChevronRight } from '@lucide/svelte';
  import TikTokIcon from '$lib/components/icons/TikTokIcon.svelte';

  type Net = 'instagram' | 'facebook' | 'tiktok';
  type Post = { id: string; network: Net; type: 'image' | 'video' | 'reel'; image: string; caption: string; date: string; url: string; likes: number; comments: number; shares?: number; views?: number };

  const U = (s: string) => `https://images.unsplash.com/${s}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`;

  const posts: Post[] = [
    { id: 'ig-1', network: 'instagram', type: 'image', image: U('photo-1769485016826-a7d5bfe50119'), caption: 'Tu Kiosko favorito ahora luce increible. Ven a conocer el nuevo look de tu sucursal 🎉✨', date: 'Hace 2 dias', url: 'https://www.instagram.com/tiendaskiosko/', likes: 1243, comments: 87 },
    { id: 'ig-2', network: 'instagram', type: 'reel', image: U('photo-1752962638825-468316c39ee4'), caption: 'Sabado Heladero 🍦 2x1 en helados todo el dia. ¿Cual es tu sabor favorito?', date: 'Hace 4 dias', url: 'https://www.instagram.com/tiendaskiosko/', likes: 2891, comments: 214, views: 45200 },
    { id: 'ig-3', network: 'instagram', type: 'image', image: U('photo-1583124688253-60c350bc90d7'), caption: 'Empieza tu mañana con el mejor cafe ☕ Solo $29 el combo cafe + pan dulce', date: 'Hace 1 semana', url: 'https://www.instagram.com/tiendaskiosko/', likes: 956, comments: 43 },
    { id: 'fb-1', network: 'facebook', type: 'image', image: U('photo-1772012936964-83cb4d6f4781'), caption: 'Miercoles Cervecero 🍺 2x1 en cervezas seleccionadas. ¡Solo en tu Kiosko!', date: 'Hace 3 dias', url: 'https://www.facebook.com/TiendasKiosko', likes: 3412, comments: 198, shares: 456 },
    { id: 'fb-2', network: 'facebook', type: 'image', image: U('photo-1758272133542-b3107b947fc2'), caption: '¡Arma tu party pack! 🎊 Botanas + bebidas con descuento especial este fin de semana', date: 'Hace 5 dias', url: 'https://www.facebook.com/TiendasKiosko', likes: 1876, comments: 132, shares: 289 },
    { id: 'fb-3', network: 'facebook', type: 'image', image: U('photo-1763888537845-8fcf31cb0570'), caption: 'Domingo de Vinos 🍷 Hasta 30% en vinos seleccionados. Para disfrutar en familia', date: 'Hace 1 semana', url: 'https://www.facebook.com/TiendasKiosko', likes: 2104, comments: 156, shares: 312 },
    { id: 'tt-1', network: 'tiktok', type: 'video', image: U('photo-1708861619016-25ed5586687b'), caption: 'POV: Entras a Kiosko solo por un chicle 🤣 #KioskoMoments #RelatableContent', date: 'Hace 1 dia', url: 'https://www.tiktok.com/@tiendaskiosko', likes: 15420, comments: 843, views: 234000 },
    { id: 'tt-2', network: 'tiktok', type: 'video', image: U('photo-1694101493190-acc6c4418ad7'), caption: 'Jueves de Botanas 🔥 ¿Cuantas te llevas? #JuevesDeBotanas #Kiosko', date: 'Hace 3 dias', url: 'https://www.tiktok.com/@tiendaskiosko', likes: 8932, comments: 412, views: 156000 },
    { id: 'tt-3', network: 'tiktok', type: 'video', image: U('photo-1757800734076-5f94a34ec30c'), caption: 'Viernes de Hidratacion 💧 Las mejores bebidas para tu workout #FitLife #Kiosko', date: 'Hace 6 dias', url: 'https://www.tiktok.com/@tiendaskiosko', likes: 6210, comments: 287, views: 98500 }
  ];

  const meta: Record<Net, { icon: any; color: string; label: string; handle: string; url: string; bgGradient: string }> = {
    instagram: { icon: Instagram, color: '#E1306C', label: 'Instagram', handle: '@tiendaskiosko', url: 'https://www.instagram.com/tiendaskiosko/', bgGradient: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' },
    facebook: { icon: Facebook, color: '#1877F2', label: 'Facebook', handle: 'Tiendas Kiosko', url: 'https://www.facebook.com/TiendasKiosko', bgGradient: 'linear-gradient(180deg, #1877F2, #0C5DC7)' },
    tiktok: { icon: TikTokIcon, color: '#000000', label: 'TikTok', handle: '@tiendaskiosko', url: 'https://www.tiktok.com/@tiendaskiosko', bgGradient: 'linear-gradient(180deg, #000000, #1a1a2e)' }
  };

  const networks = ['todos', 'instagram', 'facebook', 'tiktok'] as const;
  type Filter = (typeof networks)[number];

  const fmt = (n: number) => (n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M' : n >= 1e3 ? (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K' : `${n}`);

  let activeFilter = $state<Filter>('todos');
  let scrollEl = $state<HTMLDivElement | null>(null);
  let canLeft = $state(false);
  let canRight = $state(true);

  const filtered = $derived(activeFilter === 'todos' ? posts : posts.filter((p) => p.network === activeFilter));
  const useGrid = $derived(activeFilter !== 'todos');

  function updateButtons() {
    if (!scrollEl) return;
    canLeft = scrollEl.scrollLeft > 4;
    canRight = scrollEl.scrollLeft < scrollEl.scrollWidth - scrollEl.clientWidth - 4;
  }
  function scroll(dir: 'left' | 'right') {
    scrollEl?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  }
  $effect(() => {
    activeFilter;
    if (scrollEl) scrollEl.scrollLeft = 0;
    const t = setTimeout(updateButtons, 50);
    return () => clearTimeout(t);
  });
</script>

<section class="w-full py-12 md:py-16" style="background:#F7F9FF">
  <div class="mx-auto max-w-7xl px-4">
    <!-- Header -->
    <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div class="flex flex-col gap-2">
        <span style="font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#1387C7">Redes Sociales</span>
        <h2 style="font-size:clamp(28px,4vw,36px); font-weight:700; line-height:1.2; letter-spacing:-0.01em; color:#1A1D2E; margin:0">Últimas publicaciones</h2>
        <p style="font-size:18px; color:#4A5068; margin:0">Entérate de lo que pasa en Kiosko</p>
      </div>

      <div class="flex items-center gap-2 self-start overflow-x-auto pb-1 md:self-auto">
        {#each networks as n (n)}
          {@const m = n !== 'todos' ? meta[n] : null}
          <button onclick={() => (activeFilter = n)} class="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border-0 px-4 py-2 transition-all duration-200" style={`background:${activeFilter === n ? (m ? m.color : '#1387C7') : '#fff'}; border:${activeFilter === n ? 'none' : '1.5px solid #E2E7F2'}; color:${activeFilter === n ? '#fff' : '#4A5068'}; font-size:14px; font-weight:${activeFilter === n ? 700 : 500}`}>
            {#if m}{@const Icon = m.icon}<Icon class="h-3.5 w-3.5" style={`color:${activeFilter === n ? '#fff' : '#8890AA'}`} />{/if}
            {n === 'todos' ? 'Todos' : m!.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- Cards -->
    <div class="relative">
      {#if !useGrid && canLeft}
        <button onclick={() => scroll('left')} class="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 transition-all hover:scale-110 md:flex" style="background:#fff; box-shadow:0 4px 16px rgba(0,0,0,0.12)" aria-label="Anterior"><ChevronLeft class="h-5 w-5" style="color:#1A1D2E" /></button>
      {/if}
      {#if !useGrid && canRight}
        <button onclick={() => scroll('right')} class="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 transition-all hover:scale-110 md:flex" style="background:#fff; box-shadow:0 4px 16px rgba(0,0,0,0.12)" aria-label="Siguiente"><ChevronRight class="h-5 w-5" style="color:#1A1D2E" /></button>
      {/if}

      {#if useGrid}
        {@const m = meta[activeFilter as Net]}
        {@const Icon = m.icon}
        <div class="mb-5 flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl" style={`background:${m.bgGradient}`}><Icon class="h-5 w-5" style="color:#fff" /></div>
          <div class="flex flex-col">
            <span style="font-size:16px; font-weight:700; color:#1A1D2E">{m.label}</span>
            <span style="font-size:13px; color:#8890AA">{m.handle} · {filtered.length} publicaciones</span>
          </div>
          <a href={m.url} target="_blank" rel="noopener noreferrer" class="ml-auto rounded-xl px-4 py-2 no-underline transition-all duration-200 hover:-translate-y-0.5" style={`background:${m.color}; color:#fff; font-size:13px; font-weight:700`}>Seguir</a>
        </div>
      {/if}

      <div bind:this={scrollEl} onscroll={updateButtons} class={useGrid ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3' : 'scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2'}>
        {#each filtered as post (post.id)}
          {@const m = meta[post.network]}
          {@const Icon = m.icon}
          <a href={post.url} target="_blank" rel="noopener noreferrer" class={`group flex flex-col overflow-hidden no-underline transition-all duration-300 hover:-translate-y-1 ${useGrid ? '' : 'shrink-0 snap-start'}`} style={`background:#fff; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04); ${useGrid ? '' : 'width:min(100%,320px); min-width:280px'}`}>
            <div class="relative h-[220px] overflow-hidden">
              <img src={post.image} alt={post.caption} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div class="pointer-events-none absolute inset-0" style="background:linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%)"></div>
              <div class="absolute left-3 top-3">
                <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1" style={`background:${m.bgGradient}; color:#fff; font-size:11px; font-weight:700`}><Icon class="h-3 w-3" style="color:#fff" />{m.label}</span>
              </div>
              {#if post.type === 'video' || post.type === 'reel'}
                <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full opacity-80 transition-opacity group-hover:opacity-100" style="background:rgba(0,0,0,0.5); backdrop-filter:blur(4px)"><Play class="ml-0.5 h-5 w-5" style="color:#fff; fill:#fff" /></div>
                </div>
              {/if}
              {#if post.views}
                <div class="absolute bottom-3 right-3">
                  <span class="inline-flex items-center gap-1 rounded-md px-2 py-0.5" style="background:rgba(0,0,0,0.6); color:#fff; font-size:11px; font-weight:600"><Eye class="h-3 w-3" />{fmt(post.views)}</span>
                </div>
              {/if}
            </div>

            <div class="flex flex-col gap-3 p-4">
              <p class="line-clamp-2" style="font-size:14px; font-weight:500; color:#1A1D2E; line-height:1.5; margin:0">{post.caption}</p>
              <div class="flex items-center gap-4">
                <span class="inline-flex items-center gap-1" style="font-size:12px; color:#8890AA; font-weight:500"><Heart class="h-3.5 w-3.5" style="color:#E1306C" />{fmt(post.likes)}</span>
                <span class="inline-flex items-center gap-1" style="font-size:12px; color:#8890AA; font-weight:500"><MessageCircle class="h-3.5 w-3.5" />{fmt(post.comments)}</span>
                {#if post.shares}
                  <span class="inline-flex items-center gap-1" style="font-size:12px; color:#8890AA; font-weight:500"><Share2 class="h-3.5 w-3.5" />{fmt(post.shares)}</span>
                {/if}
              </div>
              <div class="flex items-center justify-between">
                <span style="font-size:12px; color:#8890AA; font-weight:500">{post.date}</span>
                <ExternalLink class="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" style="color:#8890AA" />
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>

    <!-- Barra de redes -->
    <div class="mt-8 flex flex-col items-stretch gap-3 rounded-2xl p-4 sm:flex-row sm:items-center sm:gap-4" style="background:#fff; border:1.5px solid #E2E7F2">
      <span style="font-size:14px; font-weight:700; color:#1A1D2E; white-space:nowrap">Siguenos en:</span>
      <div class="flex flex-wrap items-center gap-3">
        {#each ['instagram', 'facebook', 'tiktok'] as Net[] as n (n)}
          {@const m = meta[n]}
          {@const Icon = m.icon}
          <a href={m.url} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-xl px-3 py-2 no-underline transition-all duration-200 hover:-translate-y-0.5" style="background:#EEF2FB; border:1.5px solid #E2E7F2">
            <Icon class="h-4 w-4" style={`color:${m.color}`} />
            <span style="font-size:13px; font-weight:600; color:#1A1D2E">{m.handle}</span>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
