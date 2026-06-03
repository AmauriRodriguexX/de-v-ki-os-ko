<script lang="ts">
  let {
    text = '',
    buttonLabel = '',
    href = '#'
  }: { text?: string; buttonLabel?: string; href?: string } = $props();
</script>

<div class="flex flex-col items-center justify-between gap-4 rounded-2xl p-8 text-white md:flex-row" style="background: linear-gradient(135deg, #045098 0%, #1387C7 100%)">
  <p class="text-xl font-bold">{text}</p>
  {#if buttonLabel}
    <a href={href} class="whitespace-nowrap rounded-full px-6 py-3 font-bold no-underline transition hover:brightness-95" style="background:#FCD700; color:#1A1D2E">
      {buttonLabel}
    </a>
  {/if}
</div>
