<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { MapPin, ChevronRight, ChevronLeft, Beer, IceCream, Zap, Wine, Cookie } from '@lucide/svelte';

  type Slide = {
    id: string;
    day: string;
    headline: string;
    subheadline: string;
    badge: string;
    badgeBg: string;
    badgeColor: string;
    bgGradient: string;
    image: string;
    ctaLabel: string;
    ctaHref: string;
    icon: typeof Beer;
  };

  const A = base + '/assets';
  const defaultSlides: Slide[] = [
    {
      id: 'miercoles', day: 'Miércoles', headline: 'Miércoles Cervecero',
      subheadline: 'Los mejores precios en cervezas. 12 pack desde $189. Solo hoy en tu Kiosko más cercano.',
      badge: 'Solo hoy', badgeBg: '#FCD700', badgeColor: '#1A1D2E',
      bgGradient: 'linear-gradient(135deg, #045098 0%, #1387C7 50%, #C8E8F7 100%)',
      image: `${A}/7508da2467d33e80cba845bc3594aca9e7ea7799.png`, ctaLabel: 'Ver cervezas', ctaHref: '/promociones', icon: Beer
    },
    {
      id: 'botanas', day: 'Jueves', headline: 'Jueves de Botanas',
      subheadline: 'Combos irresistibles en tus snacks favoritos. Doritos + bebida desde $45.',
      badge: 'Combo', badgeBg: '#FF0200', badgeColor: '#FFFFFF',
      bgGradient: 'linear-gradient(135deg, #DB3714 0%, #FF0200 50%, #FFD5D5 100%)',
      image: `${A}/979d75ae6d036252e5c81b57835bfc68a039883a.png`, ctaLabel: 'Ver botanas', ctaHref: '/promociones', icon: Cookie
    },
    {
      id: 'hidratacion', day: 'Viernes', headline: 'Viernes de Hidratación',
      subheadline: 'Bebidas y energéticos al 2x1. Electrolit, Gatorade y más al mejor precio.',
      badge: '2x1', badgeBg: '#51A639', badgeColor: '#FFFFFF',
      bgGradient: 'linear-gradient(135deg, #2D6B1B 0%, #51A639 50%, #D4EDCA 100%)',
      image: `${A}/f1ee4434c4f32c0ed3bbdd7d17011e232f7fd506.png`, ctaLabel: 'Ver bebidas', ctaHref: '/promociones', icon: Zap
    },
    {
      id: 'helados', day: 'Sábado', headline: 'Sábado Heladero',
      subheadline: 'Paletas y helados desde $25. Magnum, Holanda y más para refrescarte este fin de semana.',
      badge: 'Nuevo', badgeBg: '#D4EDCA', badgeColor: '#2D6B1B',
      bgGradient: 'linear-gradient(135deg, #1387C7 0%, #C8E8F7 50%, #EBF6FD 100%)',
      image: `${A}/3184b0a3d8971a80a9d8b91ea315bc4f44a6fe73.png`, ctaLabel: 'Ver helados', ctaHref: '/promociones', icon: IceCream
    },
    {
      id: 'vinos', day: 'Domingo', headline: 'Domingo de Vinos',
      subheadline: 'Selección especial de vinos y licores con hasta 25% de descuento para tu reunión familiar.',
      badge: '-25%', badgeBg: '#FFF3B8', badgeColor: '#A07800',
      bgGradient: 'linear-gradient(135deg, #3D0C3C 0%, #6B1849 50%, #FFD5D5 100%)',
      image: `${A}/5b9982ab82efe4c428a7b3a5327ead52a26923d9.png`, ctaLabel: 'Ver vinos', ctaHref: '/promociones', icon: Wine
    }
  ];

  let { slides = defaultSlides }: { slides?: Slide[] } = $props();

  function todayIndex(): number {
    const map: Record<number, number> = { 0: 4, 1: 0, 2: 0, 3: 0, 4: 1, 5: 2, 6: 3 };
    return map[new Date().getDay()] ?? 0;
  }

  let current = $state(0);
  let isTransitioning = $state(false);
  let firstSlide = true;

  const slide = $derived(slides[current]);

  function goTo(i: number) {
    if (isTransitioning) return;
    isTransitioning = true;
    current = i;
    setTimeout(() => (isTransitioning = false), 500);
  }
  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  onMount(() => {
    current = todayIndex();
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      timer = setTimeout(() => {
        firstSlide = false;
        next();
        tick();
      }, firstSlide ? 5000 : 8000);
    };
    tick();
    return () => clearTimeout(timer);
  });
</script>

<section class="relative w-full overflow-hidden min-h-dvh md:min-h-[520px]">
  <div class="absolute inset-0 transition-all duration-700 ease-out" style={`background: ${slide.bgGradient}`}></div>

  <div class="absolute inset-0 overflow-hidden">
    <img src={slide.image} alt="" class="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 transition-opacity duration-700 md:opacity-30" style="mask-image: linear-gradient(to right, transparent, black 40%)" />
  </div>

  <div class="relative mx-auto flex min-h-dvh max-w-7xl flex-col items-start gap-8 px-4 pt-24 pb-28 md:min-h-[520px] md:flex-row md:items-center md:gap-12 md:py-16">
    <!-- Izquierda: contenido -->
    <div class="z-10 flex flex-1 flex-col gap-6 text-left transition-all duration-500" style={`opacity:${isTransitioning ? 0 : 1}; transform: translateY(${isTransitioning ? '12px' : '0'})`}>
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-start gap-2">
          <span class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-white" style="background: rgba(255,255,255,0.2); backdrop-filter: blur(8px); font-size:13px; font-weight:600">
            <slide.icon class="h-5 w-5" />
            {slide.day}
          </span>
          <span class="inline-flex items-center rounded-full px-3 py-1.5" style={`background:${slide.badgeBg}; color:${slide.badgeColor}; font-size:12px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase`}>
            {slide.badge}
          </span>
        </div>

        <h1 style="font-size: clamp(36px, 6vw, 56px); font-weight:800; line-height:1.05; letter-spacing:-0.03em; color:#fff; margin:0; text-shadow:0 2px 16px rgba(0,0,0,0.15)">
          {slide.headline}
        </h1>
        <p class="max-w-lg" style="font-size:clamp(14px,4vw,18px); font-weight:400; line-height:1.6; color:rgba(255,255,255,0.9); margin:0">
          {slide.subheadline}
        </p>
      </div>

      <!-- Imagen móvil responsiva en el cuerpo del contenido (visible solo en celulares/tablets) -->
      <div class="block w-full overflow-hidden rounded-2xl md:hidden" style={`opacity:${isTransitioning ? 0 : 1}; transform: scale(${isTransitioning ? 0.95 : 1}); box-shadow:0 12px 32px rgba(0,0,0,0.2); aspect-ratio:16/9`}>
        <img src={slide.image} alt={slide.headline} class="h-full w-full object-cover" />
      </div>

      <div class="flex flex-col justify-start gap-3 sm:flex-row w-full sm:w-auto">
        <a href="{base}/sucursales" class="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 font-semibold no-underline transition text-center" style="background:#FCD700; color:#1A1D2E; box-shadow:0 6px 20px rgba(0,0,0,0.2)">
          <MapPin class="h-5 w-5" /> Encontrar mi Kiosko
        </a>
        <a href="{base}{slide.ctaHref}" class="inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3.5 font-semibold text-white no-underline transition hover:bg-white/10 text-center" style="border-color: rgba(255,255,255,0.5)">
          {slide.ctaLabel} <ChevronRight class="h-5 w-5" />
        </a>
      </div>
    </div>

    <!-- Derecha: tarjeta visual (visible solo de desktop en adelante) -->
    <div class="z-10 hidden max-w-md flex-1 items-center justify-center transition-all duration-500 md:flex" style={`opacity:${isTransitioning ? 0 : 1}; transform: scale(${isTransitioning ? 0.95 : 1})`}>
      <div class="relative w-full overflow-hidden rounded-3xl" style="box-shadow:0 20px 60px rgba(0,0,0,0.25); aspect-ratio:4/5; max-height:440px">
        <img src={slide.image} alt={slide.headline} class="h-full w-full object-cover" />
        <div class="absolute inset-0" style="background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)"></div>
        <div class="absolute left-4 top-4">
          <span class="rounded-full px-3 py-1.5" style={`background:${slide.badgeBg}; color:${slide.badgeColor}; font-size:13px; font-weight:800`}>{slide.badge}</span>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-6">
          <h3 style="font-size:22px; font-weight:800; color:#fff; margin:0 0 4px; text-shadow:0 1px 8px rgba(0,0,0,0.3)">{slide.headline}</h3>
          <p style="font-size:14px; color:rgba(255,255,255,0.85); margin:0">Disponible hoy en tu sucursal</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Controles -->
  <div class="absolute bottom-6 left-0 right-0 z-20">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4">
      <div class="flex items-center gap-2">
        {#each slides as s, i (s.id)}
          <button onclick={() => goTo(i)} aria-label={`Ir a slide ${i + 1}`} class="cursor-pointer rounded-full transition-all duration-300" style={`width:${i === current ? '32px' : '10px'}; height:10px; background:${i === current ? '#fff' : 'rgba(255,255,255,0.4)'}; border:none`}></button>
        {/each}
      </div>
      <div class="flex items-center gap-2">
        <button onclick={prev} aria-label="Anterior" class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full" style="background:rgba(255,255,255,0.15); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.25)">
          <ChevronLeft class="h-5 w-5 text-white" />
        </button>
        <button onclick={next} aria-label="Siguiente" class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full" style="background:rgba(255,255,255,0.15); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.25)">
          <ChevronRight class="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  </div>

  <!-- Barra de días -->
  <div class="absolute left-0 right-0 top-0 z-20">
    <div class="mx-auto max-w-7xl px-4 pt-4">
      <div class="scrollbar-hide flex gap-1.5 overflow-x-auto">
        {#each slides as s, i (s.id)}
          <button onclick={() => goTo(i)} class="flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 transition-all duration-200" style={`background:${i === current ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)'}; backdrop-filter:blur(8px); border:1px solid ${i === current ? 'rgba(255,255,255,0.4)' : 'transparent'}; color:#fff; font-size:13px; font-weight:${i === current ? 700 : 500}`}>
            <s.icon class="h-4 w-4" />
            <span class="hidden sm:inline">{s.day}</span>
          </button>
        {/each}
      </div>
    </div>
  </div>
</section>
