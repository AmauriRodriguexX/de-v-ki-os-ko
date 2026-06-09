<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { MapPin, MessageCircle, Home } from '@lucide/svelte';
  import WhatsAppIcon from '$lib/components/icons/WhatsAppIcon.svelte';
  import { chatbot } from '$lib/stores/chatbot.svelte';

  const WA_LINK = 'https://wa.me/528002905050?text=Quiero%20recibir%20las%20promos%20de%20Kiosko';

  let pressedId = $state<string | null>(null);
  let isOverDarkBg = $state(false);

  // Prueba A/B: nombre singular de la sección de tiendas.
  const locSingular = $derived(($page.data.locationsLabelSingular as string) ?? 'Sucursal');

  const items = $derived([
    { id: 'inicio', label: 'Inicio', bg: '#1A1D2E', action: () => goto(`${base}/`) },
    { id: 'sucursal', label: locSingular, bg: '#1387C7', action: () => goto(`${base}/sucursales`) },
    { id: 'whatsapp', label: 'WhatsApp', bg: '#25D366', action: () => window.open(WA_LINK, '_blank', 'noopener,noreferrer') },
    { id: 'soporte', label: 'Soporte', bg: '#045098', action: () => chatbot.open() }
  ]);

  onMount(() => {
    // Buscar la etiqueta footer para observar su intersección con la barra de navegación
    const footerEl = document.querySelector('footer');
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Si el footer está visible, significa que la barra de navegación (abajo)
        // se superpone visualmente sobre el fondo azul oscuro del footer.
        isOverDarkBg = entry.isIntersecting;
      },
      {
        // Activa la intersección un poco antes de que toque la barra para mayor suavidad
        rootMargin: '0px 0px 100px 0px',
        threshold: 0.05
      }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  });
</script>

<nav class="fixed z-50 md:hidden transition-all duration-300" style={`bottom:24px; left:24px; right:24px; background:${isOverDarkBg ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.42)'}; border:1px solid ${isOverDarkBg ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.48)'}; border-radius:28px; box-shadow:0 12px 40px rgba(26,29,46,0.15), 0 1px 0 rgba(255,255,255,0.3) inset; backdrop-filter:blur(32px); -webkit-backdrop-filter:blur(32px); padding:14px 18px`}>
  <div class="flex items-center justify-around">
    {#each items as item (item.id)}
      <button
        onclick={item.action}
        ontouchstart={() => (pressedId = item.id)}
        ontouchend={() => (pressedId = null)}
        onmousedown={() => (pressedId = item.id)}
        onmouseup={() => (pressedId = null)}
        onmouseleave={() => (pressedId = null)}
        class="flex flex-col items-center justify-center gap-1 cursor-pointer transition-transform duration-200"
        style={`background:none; border:none; padding:0; transform:scale(${pressedId === item.id ? 0.92 : 1}); -webkit-tap-highlight-color:transparent;`}
        aria-label={item.label}
      >
        <!-- Icono con micro-sombra e iluminación -->
        <div class="flex items-center justify-center rounded-2xl transition-all duration-300" style={`width:46px; height:46px; background:${item.bg}; color:#fff; box-shadow:0 4px 14px ${item.bg}55`}>
          {#if item.id === 'inicio'}<Home style="width:20px; height:20px" />
          {:else if item.id === 'sucursal'}<MapPin style="width:20px; height:20px" />
          {:else if item.id === 'whatsapp'}<WhatsAppIcon size={20} />
          {:else}<MessageCircle style="width:20px; height:20px" />{/if}
        </div>
        <!-- Etiqueta minimalista del item (Cambia de color dinámicamente de gris oscuro a blanco) -->
        <span class="transition-colors duration-300" style={`font-size:10px; font-weight:700; color:${isOverDarkBg ? '#ffffff' : '#4A5068'}; letter-spacing:0.02em`}>{item.label}</span>
      </button>
    {/each}
  </div>
</nav>

<!-- BottomNavBar es de posicionamiento absoluto/fijo, no inyecta espaciado directo en el flujo html para evitar pintar fondos blancos -->
