<script lang="ts">
  import WhatsAppIcon from '$lib/components/icons/WhatsAppIcon.svelte';

  const waLink = 'https://wa.me/528002905050?text=Hola%2C%20quiero%20unirme%20al%20grupo%20de%20promociones%20de%20Kiosko';
</script>

<div class="flex flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:gap-6 sm:py-5" style="background:#F0F9EC; border:1.5px solid #D4EDCA; border-radius:16px">
  <div class="flex flex-shrink-0 items-center gap-3">
    <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full" style="background:#25D366">
      <WhatsAppIcon size={24} class="text-white" />
    </div>
  </div>

  <div class="flex flex-1 flex-col gap-1 text-center sm:text-left">
    <span style="font-size:16px; font-weight:700; color:#1A1D2E; line-height:1.3">¿Quieres las promos antes que nadie?</span>
    <span style="font-size:14px; color:#4A5068">Únete a nuestro grupo de difusión en WhatsApp</span>
  </div>

  <a href={waLink} target="_blank" rel="noopener noreferrer" class="inline-flex w-full flex-shrink-0 items-center justify-center gap-2 px-6 py-3 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto" style="background:#25D366; color:#fff; font-size:14px; font-weight:700; border-radius:16px">
    <WhatsAppIcon size={16} class="text-white" />
    Unirme al grupo
  </a>
</div>
