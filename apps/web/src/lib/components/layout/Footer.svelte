<script lang="ts">
  import { ChevronDown, Facebook, Instagram, Youtube } from '@lucide/svelte';
  import TikTokIcon from '$lib/components/icons/TikTokIcon.svelte';

  const columns = [
    {
      title: 'Más información',
      links: [
        { label: 'Quienes somos', href: '/' },
        { label: 'Productos Destacados', href: '/' },
        { label: 'Bolsa de trabajo', href: '/' },
        { label: 'Administra una tienda', href: '/' },
        { label: 'Facturación', href: '/facturacion' },
        { label: 'Comunicados', href: '/' },
        { label: 'Proveedores', href: '/' },
        { label: 'Bienes raíces', href: '/' }
      ]
    },
    {
      title: 'Promos',
      links: [
        { label: 'Miércoles Cervecero', href: '/promociones/miercoles-cervecero' },
        { label: 'Sábado al Carbón', href: '/promociones/sabado-al-carbon' },
        { label: 'Kanasta del Hogar', href: '/promociones/kanasta-del-hogar' },
        { label: 'Fiesta', href: '/promociones/fiesta' },
        { label: 'Hidratación', href: '/promociones/hidratacion' }
      ]
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Servicios del hogar', href: '/servicios/servicios-del-hogar' },
        { label: 'Financieros', href: '/servicios/servicios-financieros' },
        { label: 'Medios de pago', href: '/servicios/servicios-medios-de-pago' },
        { label: 'Tiempo Aire y datos', href: '/servicios/servicios-tiempo-aire-y-datos' },
        { label: 'Entretenimiento', href: '/servicios/servicios-entretenimiento' },
        { label: 'Escuela y Gobierno', href: '/servicios/servicios-escuela-y-gobierno' },
        { label: 'Otros Servicios', href: '/servicios/servicios-otros-servicios' }
      ]
    }
  ];

  const contactInfo = {
    title: 'Contacto',
    phones: [
      { label: '800 290 50 50', href: 'tel:8002905050' },
      { label: '(312) 313 44 00', href: 'tel:3123134400' }
    ],
    emails: [
      { question: '¿Tienes un terreno o local comercial que quieras ofrecer?', email: 'Terrenos@mikiosko.mx' },
      { question: '¿Quieres ser proveedor de Kiosko?', email: 'Proveedores@mikiosko.mx' },
      { question: 'Cuéntanos tu experiencia de compra', email: 'Experiencia@mikiosko.mx' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/TiendasKiosko', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/tiendaskiosko/', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@tiendaskiosko', label: 'TikTok' },
    { icon: Youtube, href: 'https://www.youtube.com/@TiendasKiosko', label: 'YouTube' }
  ];

  let openCol = $state<string | null>(null);
  const toggle = (t: string) => (openCol = openCol === t ? null : t);
</script>

<footer style="background:#1A1D2E">
  <div class="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-10">
      <!-- Columnas de enlaces -->
      {#each columns as col (col.title)}
        <div>
          <!-- Desktop -->
          <div class="hidden flex-col gap-4 md:flex">
            <span style="font-size:16px; font-weight:700; color:#fff; font-style:italic">{col.title}</span>
            <div class="flex flex-col gap-2">
              {#each col.links as link (link.label)}
                <a href={link.href} class="no-underline transition-opacity hover:opacity-80" style="font-size:14px; color:#fff">{link.label}</a>
              {/each}
            </div>
          </div>
          <!-- Acordeón móvil -->
          <div class="md:hidden">
            <button onclick={() => toggle(col.title)} class="flex w-full cursor-pointer items-center justify-between py-3" style="background:none; border:none; border-bottom:1px solid rgba(255,255,255,0.2)">
              <span style="font-size:15px; font-weight:700; color:#fff; font-style:italic">{col.title}</span>
              <ChevronDown class="h-5 w-5 transition-transform" style={`color:rgba(255,255,255,0.7); transform:rotate(${openCol === col.title ? 180 : 0}deg)`} />
            </button>
            {#if openCol === col.title}
              <div class="flex flex-col gap-2 py-3 pl-2">
                {#each col.links as link (link.label)}
                  <a href={link.href} class="no-underline" style="font-size:14px; color:#fff">{link.label}</a>
                {/each}
              </div>
            {/if}
          </div>
        </div>
      {/each}

      <!-- Contacto -->
      <div>
        <div class="hidden flex-col gap-4 md:flex">
          <span style="font-size:16px; font-weight:700; color:#fff; font-style:italic">{contactInfo.title}</span>
          <div class="flex flex-col gap-1">
            {#each contactInfo.phones as p (p.label)}
              <a href={p.href} class="no-underline transition-opacity hover:opacity-80" style="font-size:14px; color:#fff">{p.label}</a>
            {/each}
          </div>
          <div class="mt-1 flex flex-col gap-4">
            {#each contactInfo.emails as item (item.email)}
              <div class="flex flex-col gap-0.5">
                <span style="font-size:13px; font-weight:700; color:#fff">{item.question}</span>
                <a href={`mailto:${item.email}`} class="no-underline transition-opacity hover:opacity-80" style="font-size:14px; color:#fff">{item.email}</a>
              </div>
            {/each}
          </div>
        </div>
        <!-- Acordeón móvil -->
        <div class="md:hidden">
          <button onclick={() => toggle(contactInfo.title)} class="flex w-full cursor-pointer items-center justify-between py-3" style="background:none; border:none; border-bottom:1px solid rgba(255,255,255,0.2)">
            <span style="font-size:15px; font-weight:700; color:#fff; font-style:italic">{contactInfo.title}</span>
            <ChevronDown class="h-5 w-5 transition-transform" style={`color:rgba(255,255,255,0.7); transform:rotate(${openCol === contactInfo.title ? 180 : 0}deg)`} />
          </button>
          {#if openCol === contactInfo.title}
            <div class="flex flex-col gap-3 py-3 pl-2">
              {#each contactInfo.phones as p (p.label)}
                <a href={p.href} class="no-underline" style="font-size:14px; color:#fff">{p.label}</a>
              {/each}
              {#each contactInfo.emails as item (item.email)}
                <div class="flex flex-col gap-0.5">
                  <span style="font-size:13px; font-weight:700; color:#fff">{item.question}</span>
                  <a href={`mailto:${item.email}`} class="no-underline" style="font-size:14px; color:#fff">{item.email}</a>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>

    <!-- Barra inferior -->
    <div class="mt-8 flex flex-col items-center justify-between gap-4 pt-6 md:flex-row" style="border-top:1px solid rgba(255,255,255,0.2)">
      <div class="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
        <span style="font-size:12px; color:#fff; letter-spacing:0.04em">&copy; 2024 KIOSKO TODOS LOS DERECHOS RESERVADOS</span>
        <a href="/" class="no-underline transition-opacity hover:opacity-80" style="font-size:12px; color:#fff; letter-spacing:0.04em">AVISO DE PRIVACIDAD</a>
      </div>
      <div class="flex gap-4">
        {#each socialLinks as s (s.label)}
          <a href={s.href} target="_blank" rel="noopener noreferrer" class="transition-opacity hover:opacity-70" aria-label={s.label}>
            <s.icon class="h-5 w-5" style="color:#fff" />
          </a>
        {/each}
      </div>
    </div>
  </div>
</footer>
