<script lang="ts">
  import { Gift, Zap, Shield, TrendingUp } from '@lucide/svelte';
  import YayaSectionBlock from '$lib/components/blocks/YayaSectionBlock.svelte';
  import { base } from '$app/paths';
  const yayaLogo = base + '/assets/c7490a2487aafb5bcfe6d42e8f9cb869d7abde70.png';

  const features = [
    { icon: Gift, title: 'Recompensas instantáneas', desc: 'Canjea tus puntos al momento en cualquier sucursal' },
    { icon: Zap, title: 'Ofertas flash', desc: 'Promos exclusivas que solo duran horas, solo para usuarios YAYA' },
    { icon: Shield, title: 'Seguro y confiable', desc: 'Tu información protegida con los más altos estándares' },
    { icon: TrendingUp, title: 'Sube de nivel', desc: 'Más compras = más beneficios. Alcanza nivel Gold y Platinum' }
  ];
</script>

<div class="flex flex-col">
  <YayaSectionBlock />

  <section class="w-full py-12 md:py-20" style="background:#F7F9FF">
    <div class="mx-auto max-w-7xl px-4">
      <div class="mb-12 text-center">
        <h2 style="font-size:clamp(28px,4vw,36px); font-weight:700; line-height:1.3; color:#1A1D2E; margin:0">
          <span class="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>¿Por qué descargar</span>
            <span class="inline-flex items-center gap-1.5">
              <img src={yayaLogo} alt="YAYA" class="h-9 w-9 rounded-xl object-cover shadow-sm" style="vertical-align:middle" />
              <span>YAYA?</span>
            </span>
          </span>
        </h2>
        <p style="font-size:18px; color:#4A5068; margin:8px 0 0">Beneficios que te hacen la vida más fácil</p>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {#each features as f (f.title)}
          <div class="flex flex-col gap-4 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1" style="background:#fff; box-shadow:0 4px 12px rgba(0,0,0,0.08)">
            <div class="flex h-14 w-14 items-center justify-center rounded-xl" style="background:#EBF6FD">
              <f.icon class="h-7 w-7" style="color:#1387C7" />
            </div>
            <div class="flex flex-col gap-1">
              <span style="font-size:18px; font-weight:700; color:#1A1D2E">{f.title}</span>
              <span style="font-size:15px; color:#4A5068; line-height:1.5">{f.desc}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
