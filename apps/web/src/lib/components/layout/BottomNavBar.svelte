<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { MapPin, MessageCircle } from '@lucide/svelte';
  import WhatsAppIcon from '$lib/components/icons/WhatsAppIcon.svelte';
  import { chatbot } from '$lib/stores/chatbot.svelte';

  const WA_LINK = 'https://wa.me/528002905050?text=Quiero%20recibir%20las%20promos%20de%20Kiosko';

  let pressedId = $state<string | null>(null);

  // Prueba A/B: nombre singular de la sección de tiendas.
  const locSingular = $derived(($page.data.locationsLabelSingular as string) ?? 'Sucursal');

  const items = $derived([
    { id: 'sucursal', label: locSingular, bg: '#1387C7', action: () => goto('/sucursales') },
    { id: 'whatsapp', label: 'WhatsApp', bg: '#25D366', action: () => window.open(WA_LINK, '_blank', 'noopener,noreferrer') },
    { id: 'soporte', label: 'Soporte', bg: '#045098', action: () => chatbot.open() }
  ]);
</script>

<nav class="fixed z-50 md:hidden" style="bottom:16px; left:16px; right:16px; background:rgba(255,255,255,0.66); border-radius:16px; box-shadow:0 4px 30px rgba(0,0,0,0.1); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); padding:10px 16px">
  <div class="flex items-center justify-around">
    {#each items as item (item.id)}
      <button
        onclick={item.action}
        ontouchstart={() => (pressedId = item.id)}
        ontouchend={() => (pressedId = null)}
        onmousedown={() => (pressedId = item.id)}
        onmouseup={() => (pressedId = null)}
        onmouseleave={() => (pressedId = null)}
        class="flex cursor-pointer items-center justify-center"
        style={`background:none; border:none; padding:0; transform:scale(${pressedId === item.id ? 1.1 : 1}); transition:transform 150ms ease`}
        aria-label={item.label}
      >
        <div class="flex items-center justify-center rounded-full" style={`width:44px; height:44px; background:${item.bg}; color:#fff; box-shadow:0 2px 8px ${item.bg}40`}>
          {#if item.id === 'sucursal'}<MapPin style="width:22px; height:22px" />
          {:else if item.id === 'whatsapp'}<WhatsAppIcon size={22} />
          {:else}<MessageCircle style="width:22px; height:22px" />{/if}
        </div>
      </button>
    {/each}
  </div>
</nav>

<!-- Espaciador para que el contenido no quede oculto tras la barra en móvil -->
<div class="md:hidden" style="height:80px"></div>
