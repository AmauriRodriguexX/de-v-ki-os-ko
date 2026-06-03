<script lang="ts">
  let {
    label,
    active = false,
    onclick
  }: { label: string; active?: boolean; onclick?: () => void } = $props();
</script>

<button
  {onclick}
  class="inline-flex cursor-pointer items-center whitespace-nowrap rounded-full px-4 py-2 transition-all duration-200"
  style={`background:${active ? '#1387C7' : '#EEF2FB'}; color:${active ? '#fff' : '#4A5068'}; font-weight:600; font-size:14px; border:none`}
>
  {label}
</button>
