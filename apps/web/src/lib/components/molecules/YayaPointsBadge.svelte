<script lang="ts">
  import { Download } from '@lucide/svelte';
  import { base } from '$app/paths';

  let { points, compact = false }: { points: number; compact?: boolean } = $props();

  const yayaLogo = base + '/assets/c7490a2487aafb5bcfe6d42e8f9cb869d7abde70.png';
  let showTooltip = $state(false);
</script>

{#if points && points > 0}
  {#if compact}
    <span class="inline-flex items-center gap-1 rounded-full px-2 py-0.5" style="background:#FCD700; color:#1A1D2E; font-size:10px; font-weight:700">
      <img src={yayaLogo} alt="YAYA" class="h-3 w-3 rounded-sm object-cover" />
      +{points} pts
    </span>
  {:else}
    <div class="relative inline-flex">
      <a
        href="{base}/yaya"
        class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        style="background:linear-gradient(90deg,#FCD700 0%,#FFE44D 40%,#FFF3B8 50%,#FFE44D 60%,#FCD700 100%); background-size:200% 100%; animation:yayaShimmer 3s ease-in-out infinite; color:#1A1D2E; font-size:12px; font-weight:700"
        onmouseenter={() => (showTooltip = true)}
        onmouseleave={() => (showTooltip = false)}
      >
        <img src={yayaLogo} alt="YAYA" class="h-4 w-4 rounded-sm object-cover" />
        +{points} puntos YAYA
      </a>
      {#if showTooltip}
        <div class="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-xl px-3 py-2" style="background:#1A1D2E; color:#fff; font-size:11px; font-weight:600; box-shadow:0 4px 16px rgba(0,0,0,0.2)">
          <div class="flex items-center gap-1.5">
            <Download class="h-3 w-3" style="color:#FCD700" />
            Descarga la app y acumula puntos
          </div>
          <div class="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2" style="border-left:6px solid transparent; border-right:6px solid transparent; border-top:6px solid #1A1D2E"></div>
        </div>
      {/if}
    </div>
  {/if}
{/if}
