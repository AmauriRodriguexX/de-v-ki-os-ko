<script lang="ts">
  import { onMount } from 'svelte';
  import { ChevronLeft, ChevronRight, Sparkles, Star, Flame, TrendingUp } from '@lucide/svelte';
  import YayaPointsBadge from '$lib/components/molecules/YayaPointsBadge.svelte';

  type Product = {
    id: string; name: string; brand: string; price: string; oldPrice?: string;
    badge: string; badgeBg: string; badgeColor: string; badgeIcon: typeof Sparkles;
    category: string; image: string; yayaPoints?: number;
  };

  const U = (s: string) => `https://images.unsplash.com/${s}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`;

  const products: Product[] = [
    { id: '1', name: 'Cerveza Artesanal IPA', brand: 'Craft Selection', price: '$89', oldPrice: '$119', badge: 'Nuevo', badgeBg: '#1387C7', badgeColor: '#FFFFFF', badgeIcon: Sparkles, category: 'Cervezas', image: U('photo-1761281254116-82a6bded6c30'), yayaPoints: 18 },
    { id: '2', name: 'Energizante Voltio 473ml', brand: 'Voltio', price: '$35', badge: 'Popular', badgeBg: '#FF0200', badgeColor: '#FFFFFF', badgeIcon: Flame, category: 'Bebidas', image: U('photo-1766172435627-440d05dbbdf0'), yayaPoints: 7 },
    { id: '3', name: "Doritos Flamin' Hot 180g", brand: 'Sabritas', price: '$45', oldPrice: '$55', badge: 'Destacado', badgeBg: '#FCD700', badgeColor: '#1A1D2E', badgeIcon: Star, category: 'Antojo', image: U('photo-1641693148759-843d17ceac24'), yayaPoints: 9 },
    { id: '4', name: 'Cold Brew Vainilla 355ml', brand: 'Café Kiosko', price: '$49', badge: 'Nuevo', badgeBg: '#1387C7', badgeColor: '#FFFFFF', badgeIcon: Sparkles, category: 'Café', image: U('photo-1761670835862-1ece89ae3d38'), yayaPoints: 10 },
    { id: '5', name: 'Chocolate Premium 70% Cacao', brand: 'Selectos', price: '$65', badge: 'Trending', badgeBg: '#51A639', badgeColor: '#FFFFFF', badgeIcon: TrendingUp, category: 'Dulces', image: U('photo-1750085037110-d38f296e9613'), yayaPoints: 13 },
    { id: '6', name: 'Agua Mineral Limón 355ml', brand: 'Topo Chico', price: '$22', oldPrice: '$28', badge: 'Destacado', badgeBg: '#FCD700', badgeColor: '#1A1D2E', badgeIcon: Star, category: 'Bebidas', image: U('photo-1650412034038-c44b0ac9af0d'), yayaPoints: 5 },
    { id: '7', name: 'Paleta Helada Mango Chile', brand: 'Kiosko Fresh', price: '$29', badge: 'Nuevo', badgeBg: '#1387C7', badgeColor: '#FFFFFF', badgeIcon: Sparkles, category: 'Antojo', image: U('photo-1710915125520-2bb01788996a'), yayaPoints: 6 },
    { id: '8', name: 'Barra Proteína Choco-Coco', brand: 'FitSnack', price: '$39', badge: 'Popular', badgeBg: '#FF0200', badgeColor: '#FFFFFF', badgeIcon: Flame, category: 'Saludable', image: U('photo-1678875525705-1952dd9dd430'), yayaPoints: 8 }
  ];

  const GAP = 20;

  let perPage = $state(4);
  let pageIdx = $state(0);
  let containerW = $state(0);

  let isDragging = $state(false);
  let dragDelta = $state(0);
  let dragStartX = 0;

  const totalPages = $derived(Math.ceil(products.length / perPage));
  const cardW = $derived(containerW > 0 ? (containerW - (perPage - 1) * GAP) / perPage : 0);
  const shiftPerPage = $derived(containerW + GAP);
  const tx = $derived(-(pageIdx * shiftPerPage) + (isDragging ? dragDelta : 0));

  onMount(() => {
    const update = () => {
      const w = window.innerWidth;
      perPage = w < 640 ? 1 : w < 1024 ? 2 : 4;
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  });

  // Reiniciar página al cambiar el breakpoint
  $effect(() => {
    perPage;
    pageIdx = 0;
  });

  function goTo(p: number) {
    if (p < 0 || p >= totalPages) return;
    pageIdx = p;
  }

  function onPointerDown(e: PointerEvent) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    isDragging = true;
    dragStartX = e.clientX;
    dragDelta = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }
  function onPointerMove(e: PointerEvent) {
    if (!isDragging) return;
    dragDelta = e.clientX - dragStartX;
  }
  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    const threshold = containerW * 0.15;
    if (dragDelta < -threshold && pageIdx < totalPages - 1) pageIdx += 1;
    else if (dragDelta > threshold && pageIdx > 0) pageIdx -= 1;
    dragDelta = 0;
  }
</script>

<section class="w-full overflow-hidden py-12 md:py-16" style="background:#F7F9FF">
  <div class="mx-auto max-w-7xl px-4">
    <!-- Header -->
    <div class="mb-8 flex items-end justify-between">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <Sparkles class="h-5 w-5" style="color:#1387C7" />
          <span style="font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#1387C7">Lo más nuevo</span>
        </div>
        <h2 style="font-size:clamp(24px,4vw,32px); font-weight:700; line-height:1.2; letter-spacing:-0.01em; color:#1A1D2E; margin:0">Productos destacados</h2>
        <p style="font-size:16px; color:#4A5068; margin:0">Descubre lo nuevo que llegó a tu Kiosko</p>
      </div>

      <div class="hidden items-center gap-2 sm:flex">
        <button onclick={() => goTo(pageIdx - 1)} disabled={pageIdx === 0} class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all" style={`background:${pageIdx > 0 ? '#fff' : '#EEF0F6'}; border:1px solid #E2E5EE; opacity:${pageIdx > 0 ? 1 : 0.4}`} aria-label="Anterior">
          <ChevronLeft class="h-5 w-5" style="color:#1A1D2E" />
        </button>
        <button onclick={() => goTo(pageIdx + 1)} disabled={pageIdx >= totalPages - 1} class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all" style={`background:${pageIdx < totalPages - 1 ? '#fff' : '#EEF0F6'}; border:1px solid #E2E5EE; opacity:${pageIdx < totalPages - 1 ? 1 : 0.4}`} aria-label="Siguiente">
          <ChevronRight class="h-5 w-5" style="color:#1A1D2E" />
        </button>
      </div>
    </div>

    <!-- Viewport -->
    <div
      class="overflow-hidden"
      style="touch-action:pan-y"
      role="region"
      aria-label="Carrusel de productos"
      bind:clientWidth={containerW}
      onpointerdown={onPointerDown}
      onpointermove={onPointerMove}
      onpointerup={onPointerUp}
      onpointercancel={onPointerUp}
    >
      <div class="flex" style={`gap:${GAP}px; transform:translateX(${tx}px); transition:${isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)'}; will-change:transform; cursor:${isDragging ? 'grabbing' : 'grab'}; user-select:none`}>
        {#each products as product (product.id)}
          <div class="group" style={`width:${cardW}px; flex-shrink:0`}>
            <div class="relative mb-3 overflow-hidden rounded-2xl" style="aspect-ratio:3/4; background:#fff">
              <img src={product.image} alt={product.name} draggable="false" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute left-3 top-3">
                <span class="inline-flex items-center gap-1 rounded-full px-2.5 py-1" style={`background:${product.badgeBg}; color:${product.badgeColor}; font-size:11px; font-weight:700; letter-spacing:0.03em`}>
                  <product.badgeIcon class="h-3 w-3" />
                  {product.badge}
                </span>
              </div>
              <div class="absolute bottom-3 left-3">
                <span class="rounded-full px-2.5 py-1" style="background:rgba(255,255,255,0.9); backdrop-filter:blur(8px); font-size:11px; font-weight:600; color:#4A5068">{product.category}</span>
              </div>
              {#if product.yayaPoints && product.yayaPoints > 0}
                <div class="absolute right-3 top-3"><YayaPointsBadge points={product.yayaPoints} compact /></div>
              {/if}
            </div>

            <div class="flex flex-col gap-1 px-1">
              <span style="font-size:12px; font-weight:500; color:#8890AA; text-transform:uppercase; letter-spacing:0.04em">{product.brand}</span>
              <span style="font-size:15px; font-weight:600; color:#1A1D2E; line-height:1.3">{product.name}</span>
              <div class="mt-1 flex items-baseline gap-2">
                <span style="font-size:21px; font-weight:800; color:#1387C7">{product.price}</span>
                {#if product.oldPrice}
                  <span style="font-size:14px; font-weight:500; color:#8890AA; text-decoration:line-through">{product.oldPrice}</span>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Dots -->
    {#if totalPages > 1}
      <div class="mt-8 flex items-center justify-center gap-2">
        {#each Array(totalPages) as _, i (i)}
          <button onclick={() => goTo(i)} class="cursor-pointer rounded-full transition-all duration-300" style={`width:${pageIdx === i ? '24px' : '8px'}; height:8px; background:${pageIdx === i ? '#1387C7' : '#D1D5E0'}; border:none`} aria-label={`Ir a página ${i + 1}`}></button>
        {/each}
      </div>
    {/if}
  </div>
</section>
