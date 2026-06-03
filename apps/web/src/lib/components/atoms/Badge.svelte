<script lang="ts">
  let {
    label,
    bg = '#EBF6FD',
    color = '#045098'
  }: { label: string; bg?: string; color?: string } = $props();
</script>

<span class="inline-flex items-center rounded-full px-2.5 py-1" style={`background:${bg}; color:${color}; font-size:12px; font-weight:800; letter-spacing:0.03em`}>
  {label}
</span>
