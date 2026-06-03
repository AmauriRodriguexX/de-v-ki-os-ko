<script lang="ts">
  import { MapPin } from '@lucide/svelte';
  import Button from '$lib/components/atoms/Button.svelte';
  import YayaPointsBadge from '$lib/components/molecules/YayaPointsBadge.svelte';
  import type { CrossingPromo } from '$lib/data/crossingPromos';

  let { combo, onEncuentralo }: { combo: CrossingPromo; onEncuentralo?: () => void } = $props();
</script>

<div class="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1" style="background:#fff; border-radius:16px; border:2px solid #FFF3B8; box-shadow:0 4px 16px rgba(252,215,0,0.15)">
  {#if combo.imageUrl}
    <div class="relative h-48 w-full overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50">
      <img src={combo.imageUrl} alt={combo.label} class="h-full w-full object-cover" />
      <div class="absolute left-3 top-3">
        <span class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 backdrop-blur-sm" style="background:rgba(252,215,0,0.95); color:#1A1D2E; font-size:12px; font-weight:700">🔥 Combo del día</span>
      </div>
      {#if combo.yayaPoints > 0}
        <div class="absolute right-3 top-3"><YayaPointsBadge points={combo.yayaPoints} compact /></div>
      {/if}
    </div>
  {/if}

  <div class="flex flex-col gap-3 p-5">
    <h3 style="font-size:20px; font-weight:700; color:#1A1D2E; line-height:1.2">{combo.label}</h3>
    <p style="font-size:14px; font-weight:400; color:#8890AA; line-height:1.5">{combo.description}</p>
    {#if combo.dayText}
      <p style="font-size:13px; font-weight:600; color:#1387C7; font-style:italic">{combo.dayText}</p>
    {/if}
    <div class="flex items-baseline gap-3 pt-2">
      <span style="font-size:30px; font-weight:800; color:#1387C7">{combo.comboPrice}</span>
    </div>
    {#if combo.yayaPoints > 0}
      <div class="mt-1"><YayaPointsBadge points={combo.yayaPoints} /></div>
    {/if}
    <div class="pt-3">
      <Button variant="encuentralo" class="w-full" onclick={onEncuentralo}>
        {#snippet icon()}<MapPin class="h-4 w-4" />{/snippet}
        Encuéntralo en sucursal
      </Button>
    </div>
  </div>
</div>
