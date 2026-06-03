<script lang="ts">
  import { FileText } from '@lucide/svelte';
  import Button from '$lib/components/atoms/Button.svelte';
</script>

<div class="flex flex-col items-center px-4 py-16 md:py-24">
  <div class="flex w-full max-w-lg flex-col items-center gap-6 text-center">
    <div class="flex h-20 w-20 items-center justify-center rounded-2xl" style="background:#EBF6FD">
      <FileText class="h-10 w-10" style="color:#1387C7" />
    </div>

    <div class="flex flex-col gap-2">
      <h1 style="font-size:clamp(28px,4vw,36px); font-weight:700; line-height:1.2; color:#1A1D2E; margin:0">Facturación electrónica</h1>
      <p style="font-size:16px; color:#4A5068; margin:0">Genera tu factura de compras realizadas en cualquier tienda Kiosko</p>
    </div>

    <div class="mt-4 flex w-full flex-col gap-4">
      <div class="flex flex-col gap-1.5 text-left">
        <label for="rfc" style="font-size:14px; font-weight:600; color:#1A1D2E">RFC</label>
        <input id="rfc" type="text" placeholder="Ingresa tu RFC" class="w-full rounded-xl px-4 py-3.5 outline-none transition-all" style="border:1.5px solid #E2E7F2; font-size:16px" />
      </div>
      <div class="flex flex-col gap-1.5 text-left">
        <label for="ticket" style="font-size:14px; font-weight:600; color:#1A1D2E">Número de ticket</label>
        <input id="ticket" type="text" placeholder="Ej. 0001-2345-6789" class="w-full rounded-xl px-4 py-3.5 outline-none transition-all" style="border:1.5px solid #E2E7F2; font-size:16px" />
      </div>
      <div class="flex flex-col gap-1.5 text-left">
        <label for="email" style="font-size:14px; font-weight:600; color:#1A1D2E">Correo electrónico</label>
        <input id="email" type="email" placeholder="tu@correo.com" class="w-full rounded-xl px-4 py-3.5 outline-none transition-all" style="border:1.5px solid #E2E7F2; font-size:16px" />
      </div>
      <Button variant="primary" size="sm" class="mt-2 w-full">Generar factura</Button>
    </div>
  </div>
</div>
