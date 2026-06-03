<script lang="ts">
  let {
    lat,
    lng,
    zoom = 15,
    class: className = '',
    markerLabel
  }: { lat: number; lng: number; zoom?: number; class?: string; markerLabel?: string } = $props();

  const src = $derived(
    `https://maps.google.com/maps?q=${markerLabel ? encodeURIComponent(markerLabel) : `${lat},${lng}`}&ll=${lat},${lng}&z=${zoom}&output=embed&hl=es`
  );
</script>

<div class={`relative overflow-hidden ${className}`}>
  <iframe
    {src}
    class="absolute inset-0 h-full w-full border-0"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="Mapa de ubicación"
  ></iframe>
</div>
