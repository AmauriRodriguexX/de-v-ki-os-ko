<script lang="ts">
  import { Star, Gift, History, Download, Smartphone } from '@lucide/svelte';
  import Button from '$lib/components/atoms/Button.svelte';
  import { base } from '$app/paths';
  const yayaLogo = base + '/assets/c7490a2487aafb5bcfe6d42e8f9cb869d7abde70.png';

  const benefits = [
    { icon: Star, label: 'Acumula puntos en cada compra', desc: 'Gana puntos por cada peso gastado' },
    { icon: Gift, label: 'Promos exclusivas para usuarios YAYA', desc: 'Ofertas que nadie más tiene' },
    { icon: History, label: 'Historial de compras', desc: 'Revisa todo lo que has comprado' },
    { icon: Download, label: 'Disponible en iOS y Android', desc: 'Descárgala gratis ahora' }
  ];
</script>

<section class="w-full overflow-hidden py-12 md:py-20">
  <div class="mx-auto max-w-7xl px-4">
    <div class="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
      <!-- Mockup de teléfono — centrado y acotado en móvil -->
      <div class="flex w-full flex-1 justify-center overflow-hidden">
        <div class="relative shrink-0">
          <div class="flex h-[520px] w-[260px] flex-col items-center justify-center overflow-hidden rounded-[40px]" style="background:linear-gradient(180deg,#1387C7 0%,#045098 100%); box-shadow:0 20px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)">
            <div class="absolute left-1/2 top-0 h-7 w-32 -translate-x-1/2 rounded-b-2xl" style="background:#1A1D2E"></div>
            <div class="mt-8 flex flex-col items-center gap-4 px-6 text-center">
              <div class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl" style="background:#FCD700">
                <img src={yayaLogo} alt="YAYA" class="h-16 w-16 rounded-2xl object-cover" />
              </div>
              <span style="font-size:24px; font-weight:800; color:#fff">YAYA</span>
              <span style="font-size:14px; color:rgba(255,255,255,0.8)">Tu programa de lealtad</span>
              <div class="mt-4 flex w-full flex-col gap-2">
                <div class="w-full rounded-xl py-3" style="background:rgba(255,255,255,0.15)">
                  <span style="color:#FCD700; font-size:28px; font-weight:800">1,250</span><br />
                  <span style="color:rgba(255,255,255,0.7); font-size:12px">puntos acumulados</span>
                </div>
                <div class="flex w-full items-center justify-center gap-2 rounded-lg py-2" style="background:#FCD700">
                  <img src={yayaLogo} alt="YAYA" class="h-4 w-4 rounded-sm object-cover" />
                  <span style="color:#1A1D2E; font-size:13px; font-weight:700">3 promos activas</span>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute -right-2 top-20 rounded-xl px-3 py-2 md:-right-6" style="background:#fff; box-shadow:0 8px 24px rgba(0,0,0,0.10)">
            <div class="flex items-center gap-2">
              <Star class="h-4 w-4" style="color:#FCD700" />
              <span style="font-size:13px; font-weight:700; color:#1A1D2E">+50 pts</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Beneficios -->
      <div class="flex flex-1 flex-col gap-8">
        <div class="flex flex-col gap-3">
          <span class="inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1" style="background:#FFF3B8; color:#A07800; font-size:13px; font-weight:600">
            <Smartphone class="h-3.5 w-3.5" /> App móvil
          </span>
          <h2 style="font-size:clamp(28px,4vw,36px); font-weight:700; line-height:1.2; color:#1A1D2E; margin:0">
            <span class="inline-flex flex-wrap items-center gap-2">
              Descarga
              <img src={yayaLogo} alt="YAYA" class="inline-block h-9 w-9 rounded-lg object-cover" style="vertical-align:middle" />
              YAYA y gana con cada compra
            </span>
          </h2>
          <p style="font-size:18px; color:#4A5068; margin:0">El programa de lealtad que te premia cada vez que visitas tu Kiosko</p>
        </div>

        <div class="flex flex-col gap-4">
          {#each benefits as b (b.label)}
            <div class="flex items-start gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style="background:#EBF6FD">
                <b.icon class="h-6 w-6" style="color:#1387C7" />
              </div>
              <div class="flex flex-col">
                <span style="font-size:16px; font-weight:700; color:#1A1D2E">{b.label}</span>
                <span style="font-size:14px; color:#4A5068">{b.desc}</span>
              </div>
            </div>
          {/each}
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <Button variant="primary">App Store</Button>
          <Button variant="ghost">Google Play</Button>
        </div>
      </div>
    </div>
  </div>
</section>
