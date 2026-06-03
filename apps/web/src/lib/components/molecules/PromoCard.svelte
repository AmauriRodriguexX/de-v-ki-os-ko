<script lang="ts">
  import { MapPin } from '@lucide/svelte';
  import Badge from '$lib/components/atoms/Badge.svelte';
  import Button from '$lib/components/atoms/Button.svelte';
  import YayaPointsBadge from '$lib/components/molecules/YayaPointsBadge.svelte';
  import type { Promo } from '$lib/data/promos';

  let { promo, onEncuentralo }: { promo: Promo; onEncuentralo?: () => void } = $props();
</script>

<div class="group flex cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1" style="background:#fff; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05)">
  <div class="relative h-[180px] overflow-hidden">
    <img src={promo.image} alt={promo.name} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div class="absolute left-3 top-3">
      <Badge label={promo.badge} bg={promo.badgeBg} color={promo.badgeColor} />
    </div>
  </div>

  <div class="flex flex-1 flex-col gap-2 p-4">
    <span class="inline-flex items-center gap-1 self-start rounded-full px-2.5 py-0.5" style="background:#EEF2FB; color:#4A5068; font-size:12px; font-weight:500">
      {promo.category}
    </span>

    <h3 style="font-size:16px; font-weight:700; color:#1A1D2E; line-height:1.3; margin:0">{promo.name}</h3>
    <p style="font-size:14px; color:#4A5068; line-height:1.5; margin:0">{promo.description}</p>

    <div class="mt-1 flex items-baseline gap-2">
      <span style="font-size:24px; font-weight:800; color:#1387C7">{promo.price}</span>
    </div>

    <span style="font-size:12px; color:#8890AA; font-weight:500">Vigencia: {promo.vigencia}</span>

    {#if promo.yayaPoints && promo.yayaPoints > 0}
      <div class="mt-1"><YayaPointsBadge points={promo.yayaPoints} /></div>
    {/if}

    <div class="mt-auto pt-3">
      <Button variant="encuentralo" class="w-full" onclick={onEncuentralo}>
        {#snippet icon()}<MapPin class="h-4 w-4" />{/snippet}
        Encuéntralo
      </Button>
    </div>
  </div>
</div>
