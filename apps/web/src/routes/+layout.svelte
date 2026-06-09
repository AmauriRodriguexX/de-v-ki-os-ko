<script lang="ts">
  import { onMount } from 'svelte';
  import { onNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import '../app.css';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import BottomNavBar from '$lib/components/layout/BottomNavBar.svelte';
  import FABGroup from '$lib/components/layout/FABGroup.svelte';
  import Chatbot from '$lib/components/organisms/Chatbot.svelte';

  let { children, data } = $props();

  // Transiciones de página nativas fluidas (View Transitions API)
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  // Registro de la variante de la prueba A/B (Sucursales vs Ubicaciones) + Scroll Reveal dinámico
  onMount(() => {
    // 1. A/B Testing
    const variant = data?.abLocations;
    if (variant) {
      console.info(`[A/B] locations_label = ${variant}`);
      type WindowWithDL = Window & { dataLayer?: Record<string, unknown>[] };
      const w = window as WindowWithDL;
      w.dataLayer = w.dataLayer ?? [];
      w.dataLayer.push({ event: 'ab_locations_view', variant });
    }

    // 2. Observer global para animar elementos al hacer scroll (Scroll Reveal)
    let observer: IntersectionObserver;
    
    function setupRevealObserver() {
      // Buscar secciones grandes o elementos a revelar en la página
      const targets = document.querySelectorAll('section, .reveal-item');
      
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-active');
              // Opcional: dejar de observar una vez revelado para optimizar rendimiento
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px', // Revelar un poco antes de llegar a la vista
          threshold: 0.08
        }
      );

      targets.forEach((t) => {
        // Asignar clase de estado inicial
        if (!t.classList.contains('reveal-active')) {
          t.classList.add('reveal-ready');
          observer.observe(t);
        }
      });
    }

    // Ejecutar revelación inicial
    setupRevealObserver();

    // Re-registrar al cambiar de página (SvelteKit reactivity)
    const unsubscribe = page.subscribe(() => {
      // Esperar a que el DOM se renderice con la nueva página
      setTimeout(() => {
        setupRevealObserver();
      }, 100);
    });

    return () => {
      if (observer) observer.disconnect();
      unsubscribe();
    };
  });
</script>

<div class="flex min-h-screen flex-col">
  <Header />
  <main class="flex-1">
    {@render children()}
  </main>
  <Footer />
  <BottomNavBar />
  <FABGroup />
  <Chatbot />
</div>
