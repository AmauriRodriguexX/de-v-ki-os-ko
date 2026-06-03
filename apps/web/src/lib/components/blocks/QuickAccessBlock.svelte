<script lang="ts">
  import { quickAccessItems } from '$lib/data/quickAccess';
</script>

<section class="w-full py-6 md:py-10">
  <div class="mx-auto max-w-7xl px-4">
    <div class="grid grid-cols-3 gap-3 md:gap-4 lg:grid-cols-6">
      {#each quickAccessItems as item (item.label)}
        <a href={item.href} class="flex flex-col items-center gap-2 no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-95" style={`background:${item.color}; border-radius:16px; padding:20px 16px`}>
          <span style="font-size:32px; line-height:1">{item.icon}</span>
          <span style="font-size:13px; font-weight:700; color:#1A1D2E; text-align:center; line-height:1.3">{item.label}</span>
        </a>
      {/each}
    </div>
  </div>
</section>
