<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.css';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import BottomNavBar from '$lib/components/layout/BottomNavBar.svelte';
  import FABGroup from '$lib/components/layout/FABGroup.svelte';
  import Chatbot from '$lib/components/organisms/Chatbot.svelte';

  let { children, data } = $props();

  // Registro de la variante de la prueba A/B (Sucursales vs Ubicaciones).
  onMount(() => {
    const variant = data?.abLocations;
    if (!variant) return;
    console.info(`[A/B] locations_label = ${variant}`);
    type WindowWithDL = Window & { dataLayer?: Record<string, unknown>[] };
    const w = window as WindowWithDL;
    w.dataLayer = w.dataLayer ?? [];
    w.dataLayer.push({ event: 'ab_locations_view', variant });
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
