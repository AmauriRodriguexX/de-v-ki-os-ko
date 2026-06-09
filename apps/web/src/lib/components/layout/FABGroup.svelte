<script lang="ts">
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { MapPin, MessageCircle } from '@lucide/svelte';
  import WhatsAppIcon from '$lib/components/icons/WhatsAppIcon.svelte';
  import { chatbot } from '$lib/stores/chatbot.svelte';

  const WA_LINK = 'https://wa.me/528002905050?text=Quiero%20recibir%20las%20promos%20de%20Kiosko';

  let hoveredId = $state<string | null>(null);

  const items = [
    { id: 'sucursal', label: 'Encuentra tu Kiosko', bg: '#1387C7', shadow: '0 4px 16px rgba(19,135,199,0.4)', pulseColor: 'rgba(19,135,199,0.4)', action: () => goto(`${base}/sucursales`), hideOnPath: '/sucursales' },
    { id: 'whatsapp', label: 'Promos por WhatsApp', bg: '#25D366', shadow: '0 4px 16px rgba(37,211,102,0.4)', pulseColor: '', action: () => window.open(WA_LINK, '_blank', 'noopener,noreferrer'), hideOnPath: '' },
    { id: 'soporte', label: 'Atención al cliente', bg: '#045098', shadow: '0 4px 16px rgba(4,80,152,0.4)', pulseColor: '', action: () => chatbot.open(), hideOnPath: '' }
  ];

  const visibleItems = $derived(
    items.filter((i) => !i.hideOnPath || !$page.url.pathname.startsWith(base + i.hideOnPath))
  );
</script>

<!-- Solo desktop — en móvil manda la BottomNavBar -->
<div class="fixed z-50 hidden flex-col items-end gap-3 md:flex" style="right:24px; bottom:24px">
  {#each visibleItems as item (item.id)}
    <div class="flex items-center gap-3">
      <!-- Tooltip -->
      <div style={`opacity:${hoveredId === item.id ? 1 : 0}; transform:translateX(${hoveredId === item.id ? 0 : 8}px); transition:all 150ms ease; pointer-events:none; background:#1A1D2E; color:#fff; font-size:12px; font-weight:600; padding:6px 12px; border-radius:10px; white-space:nowrap; box-shadow:0 4px 12px rgba(0,0,0,0.15)`}>
        {item.label}
      </div>

      <!-- Botón circular -->
      <button
        onclick={item.action}
        onmouseenter={() => (hoveredId = item.id)}
        onmouseleave={() => (hoveredId = null)}
        class="relative flex cursor-pointer items-center justify-center transition-transform hover:scale-110 active:scale-95"
        style={`width:48px; height:48px; border-radius:50%; background:${item.bg}; border:none; box-shadow:${item.shadow}; color:#fff`}
        aria-label={item.label}
      >
        {#if item.pulseColor}
          <span class="absolute inset-0 rounded-full" style={`border:2px solid ${item.pulseColor}; animation:fabPulseRing 2s ease-out infinite; pointer-events:none`}></span>
        {/if}
        {#if item.id === 'sucursal'}<MapPin style="width:22px; height:22px; color:#fff" />
        {:else if item.id === 'whatsapp'}<WhatsAppIcon size={22} />
        {:else}<MessageCircle style="width:22px; height:22px; color:#fff" />{/if}
      </button>
    </div>
  {/each}
</div>
