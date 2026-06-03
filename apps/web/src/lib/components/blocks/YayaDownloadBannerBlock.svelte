<script lang="ts">
  import YayaDownloadBanner from '$lib/components/molecules/YayaDownloadBanner.svelte';

  let { totalPoints }: { totalPoints?: number } = $props();
</script>

<div class="py-6 md:py-10">
  <YayaDownloadBanner {totalPoints} />
</div>
