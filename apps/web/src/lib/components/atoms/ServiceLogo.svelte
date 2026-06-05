<script lang="ts">
  let {
    src,
    alt,
    fallbackColor,
    fallbackBg
  }: { src?: string; alt: string; fallbackColor: string; fallbackBg: string } = $props();

  let imgFailed = $state(false);
  let imgLoaded = $state(false);

  const initials = $derived(
    alt.split(/[\s-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase() ?? '').join('')
  );
</script>

{#if !src || imgFailed}
  <div class="flex h-full w-full items-center justify-center rounded-lg" style={`background:${fallbackBg}; color:${fallbackColor}; font-size:13px; font-weight:700; letter-spacing:0.02em`}>
    {initials || '?'}
  </div>
{:else}
  {#if !imgLoaded}
    <div class="absolute inset-0 flex h-full w-full items-center justify-center rounded-lg" style={`background:${fallbackBg}; color:${fallbackColor}; font-size:13px; font-weight:700`}>
      {initials}
    </div>
  {/if}
  <img
    {src}
    {alt}
    class="h-9 w-9 object-contain"
    loading="lazy"
    referrerpolicy="no-referrer"
    onload={() => (imgLoaded = true)}
    onerror={() => (imgFailed = true)}
    style={`opacity:${imgLoaded ? 1 : 0}`}
  />
{/if}
