<script lang="ts">
  import { Shield, Target, Award, Users } from '@lucide/svelte';
</script>

<div class="flex flex-col">
  <!-- Hero Section -->
  <div class="w-full py-16 md:py-24" style="background:linear-gradient(135deg,#045098 0%,#1387C7 100%)">
    <div class="mx-auto max-w-7xl px-4 text-center">
      <h1 style="font-size:clamp(36px,6vw,56px); font-weight:800; line-height:1.1; letter-spacing:-0.03em; color:#fff; margin:0">
        Quiénes Somos
      </h1>
      <p class="mx-auto mt-4 max-w-2xl" style="font-size:18px; color:rgba(255,255,255,0.9); line-height:1.6">
        Conoce más sobre la historia, misión y visión de KIOSKO®, el punto de encuentro de tu localidad.
      </p>
    </div>
  </div>

  <!-- Content Section -->
  <section class="w-full py-16 md:py-24" style="background:#fff">
    <div class="mx-auto max-w-5xl px-4">
      <!-- Nosotros / Quiénes somos -->
      <div class="mb-20 flex flex-col gap-6 text-center">
        <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl" style="background:#EBF6FD">
          <Users class="h-8 w-8" style="color:#1387C7" />
        </div>
        <h2 style="font-size:clamp(28px,4vw,36px); font-weight:700; color:#1A1D2E; margin:0">Nosotros</h2>
        <p class="mx-auto max-w-3xl" style="font-size:18px; color:#4A5068; line-height:1.8; font-weight:500">
          KIOSKO® es la tienda de conveniencia y convivencia en el corazón de tu localidad. Es el punto de encuentro que conecta a familias, vecinos y amigos a través de una experiencia memorable para hacer grande tu día y festejar con alegría. Con un servicio cálido y cercano, como con una oferta comprometida con la comunidad, KIOSKO® ¡Celebremos lo nuestro!
        </p>
      </div>

      <!-- Misión & Visión Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <!-- Misión -->
        <div class="flex flex-col gap-4 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style="background:#F7F9FF; border:1.5px solid #E2E7F2; box-shadow:0 4px 12px rgba(0,0,0,0.02)">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl" style="background:#E0EEFA">
            <Target class="h-7 w-7" style="color:#045098" />
          </div>
          <h3 style="font-size:24px; font-weight:700; color:#1A1D2E; margin:0">Misión</h3>
          <p style="font-size:16px; color:#4A5068; line-height:1.7; margin:0">
            Brindar la mejor y más cercana experiencia de compra.
          </p>
        </div>

        <!-- Visión -->
        <div class="flex flex-col gap-4 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style="background:#FFFDF5; border:1.5px solid #FFF1C5; box-shadow:0 4px 12px rgba(0,0,0,0.02)">
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl" style="background:#FFF9E6">
            <Award class="h-7 w-7" style="color:#A07800" />
          </div>
          <h3 style="font-size:24px; font-weight:700; color:#1A1D2E; margin:0">Visión</h3>
          <p style="font-size:16px; color:#4A5068; line-height:1.7; margin:0">
            Ser la mejor cadena de tiendas, reconocida por su excelencia operativa, valores de su gente y compromiso con la comunidad.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Compromiso Section -->
  <section class="w-full py-16 md:py-24" style="background:#F7F9FF; border-top:1px solid #E2E7F2">
    <div class="mx-auto max-w-4xl px-4 text-center">
      <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl" style="background:#D4EDCA">
        <Shield class="h-7 w-7" style="color:#2D6B1B" />
      </div>
      <h2 class="mt-6" style="font-size:28px; font-weight:700; color:#1A1D2E; margin-top:20px; margin-bottom:12px">Nuestro Compromiso</h2>
      <p style="font-size:16px; color:#4A5068; line-height:1.8; margin:0">
        Cada día abrimos nuestras puertas con el firme compromiso de ofrecer un servicio de calidad, productos frescos y la cercanía que tu familia necesita. Celebramos junto a ti cada paso, cada día.
      </p>
    </div>
  </section>
</div>
