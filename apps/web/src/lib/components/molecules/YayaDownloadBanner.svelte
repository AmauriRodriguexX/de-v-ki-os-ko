<script lang="ts">
  import { Gift, Star, Smartphone, ArrowRight } from '@lucide/svelte';
  import { base } from '$app/paths';
  const yayaLogo = base + '/assets/c7490a2487aafb5bcfe6d42e8f9cb869d7abde70.png';

  let { totalPoints, variant = 'inline' }: { totalPoints?: number; variant?: 'inline' | 'compact' } = $props();
</script>

{#if variant === 'compact'}
  <a href="{base}/yaya" class="flex items-center gap-3 rounded-2xl px-4 py-3 no-underline transition-all duration-200 hover:-translate-y-0.5" style="background:linear-gradient(135deg,#045098 0%,#1387C7 100%); box-shadow:0 4px 20px rgba(19,135,199,0.25)">
    <div class="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl" style="background:#FCD700">
      <img src={yayaLogo} alt="YAYA" class="h-10 w-10 rounded-xl object-cover" />
    </div>
    <div class="min-w-0 flex-1">
      <div style="color:#fff; font-size:13px; font-weight:700">Gana puntos con cada compra</div>
      <div style="color:rgba(255,255,255,0.7); font-size:11px">Descarga YAYA gratis</div>
    </div>
    <ArrowRight class="h-4 w-4 shrink-0" style="color:#FCD700" />
  </a>
{:else}
  <section class="w-full py-0">
    <div class="mx-auto max-w-7xl px-4">
      <div class="relative overflow-hidden rounded-3xl" style="background:linear-gradient(135deg,#045098 0%,#1387C7 50%,#045098 100%); box-shadow:0 8px 32px rgba(4,80,152,0.3)">
        <div class="absolute -right-12 -top-12 h-40 w-40 rounded-full" style="background:rgba(252,215,0,0.08)"></div>
        <div class="absolute -bottom-8 -left-8 h-32 w-32 rounded-full" style="background:rgba(255,255,255,0.05)"></div>

        <div class="relative flex flex-col items-center gap-6 px-6 py-8 md:flex-row md:gap-10 md:px-10 md:py-10">
          <!-- Icono + puntos -->
          <div class="flex shrink-0 items-center gap-5">
            <div class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl md:h-20 md:w-20" style="box-shadow:0 8px 24px rgba(252,215,0,0.3); animation:yayaFloat 3s ease-in-out infinite">
              <img src={yayaLogo} alt="YAYA" class="h-full w-full rounded-2xl object-cover" />
            </div>
            {#if totalPoints && totalPoints > 0}
              <div class="flex flex-col items-center">
                <div style="font-size:clamp(28px,4vw,40px); font-weight:800; color:#FCD700; line-height:1">+{totalPoints}</div>
                <div style="font-size:12px; font-weight:600; color:rgba(255,255,255,0.7); white-space:nowrap">puntos disponibles</div>
              </div>
            {/if}
          </div>

          <!-- Copy -->
          <div class="flex flex-1 flex-col gap-2 text-center md:text-left">
            <h3 style="font-size:clamp(20px,3vw,26px); font-weight:800; color:#fff; line-height:1.2; margin:0">
              <span class="inline-flex flex-wrap items-center gap-2">
                Estas promos te dan puntos
                <img src={yayaLogo} alt="YAYA" class="inline-block h-7 w-7 rounded-md object-cover" style="vertical-align:middle" />
                YAYA
              </span>
            </h3>
            <p style="font-size:15px; color:rgba(255,255,255,0.8); margin:0; line-height:1.5">Descarga la app, escanea al pagar y acumula puntos que canjeas por productos gratis en cualquier Kiosko.</p>
            <div class="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
              {#each [{ icon: Gift, text: 'Puntos por cada compra' }, { icon: Star, text: 'Promos exclusivas' }, { icon: Smartphone, text: '100% gratis' }] as b (b.text)}
                <span class="inline-flex items-center gap-1.5 rounded-full px-3 py-1" style="background:rgba(255,255,255,0.12); color:#fff; font-size:12px; font-weight:600">
                  <b.icon class="h-3.5 w-3.5" />{b.text}
                </span>
              {/each}
            </div>
          </div>

          <!-- Botones de descarga -->
          <div class="flex shrink-0 flex-col gap-2.5">
            <a href="{base}/yaya" class="flex items-center gap-2.5 rounded-2xl px-5 py-3 no-underline transition-all duration-200 hover:-translate-y-0.5" style="background:#fff; color:#1A1D2E; box-shadow:0 4px 12px rgba(0,0,0,0.12)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              <div class="flex flex-col">
                <span style="font-size:9px; font-weight:500; color:#8890AA; line-height:1.2; text-transform:uppercase; letter-spacing:0.04em">Descargar en</span>
                <span style="font-size:15px; font-weight:700; line-height:1.2">App Store</span>
              </div>
            </a>
            <a href="{base}/yaya" class="flex items-center gap-2.5 rounded-2xl px-5 py-3 no-underline transition-all duration-200 hover:-translate-y-0.5" style="background:rgba(255,255,255,0.12); color:#fff; border:1.5px solid rgba(255,255,255,0.25)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c-.36-.17-.58-.54-.58-.96V1.2c0-.42.22-.79.58-.96l11.83 11.76L3.18 23.76z" /></svg>
              <div class="flex flex-col">
                <span style="font-size:9px; font-weight:500; color:rgba(255,255,255,0.6); line-height:1.2; text-transform:uppercase; letter-spacing:0.04em">Disponible en</span>
                <span style="font-size:15px; font-weight:700; line-height:1.2">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}
