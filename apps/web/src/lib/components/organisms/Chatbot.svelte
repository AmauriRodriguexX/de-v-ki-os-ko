<script lang="ts">
  import { tick } from 'svelte';
  import { X, Send, ArrowLeft, AlertTriangle } from '@lucide/svelte';
  import { chatbot } from '$lib/stores/chatbot.svelte';
  import { sucursales } from '$lib/data/sucursales';

  type QuickOption = { label: string; value: string; icon?: string };
  type IncidentData = { category?: string; subcategory?: string; store?: string; description?: string; name?: string; phone?: string; folio?: string };
  type Message = { id: string; sender: 'bot' | 'user'; text: string; timestamp: Date; options?: QuickOption[]; summary?: IncidentData };
  type FlowStep = 'welcome' | 'category' | 'subcategory' | 'store' | 'description' | 'name' | 'phone' | 'confirm' | 'done' | 'faq' | 'faq_answer';

  const CATEGORIES: QuickOption[] = [
    { label: 'Producto / Calidad', value: 'producto', icon: '📦' },
    { label: 'Atención en tienda', value: 'atencion', icon: '🙋' },
    { label: 'Limpieza', value: 'limpieza', icon: '🧹' },
    { label: 'Facturación', value: 'facturacion', icon: '🧾' },
    { label: 'App YAYA', value: 'yaya', icon: '📱' },
    { label: 'Sugerencia', value: 'sugerencia', icon: '💡' },
    { label: 'Otro', value: 'otro', icon: '❓' }
  ];
  const SUBCATEGORIES: Record<string, QuickOption[]> = {
    producto: [{ label: 'Producto caducado', value: 'caducado' }, { label: 'Producto en mal estado', value: 'mal_estado' }, { label: 'Falta de producto', value: 'falta' }, { label: 'Precio incorrecto', value: 'precio' }, { label: 'Otro', value: 'otro_producto' }],
    atencion: [{ label: 'Trato inadecuado', value: 'trato' }, { label: 'Tiempo de espera', value: 'espera' }, { label: 'Cobro incorrecto', value: 'cobro' }, { label: 'Otro', value: 'otro_atencion' }],
    limpieza: [{ label: 'Tienda sucia', value: 'tienda_sucia' }, { label: 'Baños', value: 'banos' }, { label: 'Alrededores', value: 'alrededores' }, { label: 'Otro', value: 'otro_limpieza' }],
    facturacion: [{ label: 'No puedo generar factura', value: 'no_genera' }, { label: 'Datos incorrectos', value: 'datos_incorrectos' }, { label: 'Ticket no aparece', value: 'ticket_no_aparece' }, { label: 'Otro', value: 'otro_factura' }],
    yaya: [{ label: 'No puedo registrarme', value: 'registro' }, { label: 'Puntos no reflejados', value: 'puntos' }, { label: 'Error en la app', value: 'error_app' }, { label: 'Otro', value: 'otro_yaya' }]
  };
  const FAQ_OPTIONS: QuickOption[] = [
    { label: 'Horarios de tiendas', value: 'horarios', icon: '🕐' },
    { label: 'Cómo facturar', value: 'como_facturar', icon: '🧾' },
    { label: 'Programa YAYA', value: 'info_yaya', icon: '📱' },
    { label: 'Métodos de pago', value: 'metodos_pago', icon: '💳' }
  ];
  const FAQ_ANSWERS: Record<string, string> = {
    horarios: 'La mayoría de nuestras tiendas Kiosko operan de 6:00 a 23:00 hrs. Algunas sucursales como Cedis Kiosko, Villas del Mar, La Huerta y Centro Mazatlán están abiertas las 24 horas. Puedes consultar el horario específico de cada sucursal en la sección Sucursales.',
    como_facturar: "Para facturar tu compra: 1) Ve a la sección Facturación, 2) Ingresa los datos de tu ticket, 3) Captura tus datos fiscales, 4) Haz clic en 'Generar factura'. Tienes hasta 72 horas después de tu compra.",
    info_yaya: 'YAYA es nuestro programa de lealtad. Al registrarte en la app YAYA acumulas puntos con cada compra que puedes canjear por productos. Descárgala desde App Store o Google Play.',
    metodos_pago: 'En Kiosko aceptamos: efectivo, tarjetas de débito y crédito (Visa/Mastercard), pagos con QR (CoDi) y pago a través de la app YAYA. La disponibilidad puede variar por sucursal.'
  };

  const storeOptions: QuickOption[] = sucursales.map((s) => ({ label: s.name, value: s.id }));
  const msgId = () => Math.random().toString(36).substring(2, 10);
  function generateFolio() {
    const d = new Date();
    const r = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `KSK-${`${d.getFullYear()}`.slice(-2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}-${r}`;
  }

  let messages = $state<Message[]>([]);
  let input = $state('');
  let step = $state<FlowStep>('welcome');
  let incident = $state<IncidentData>({});
  let isTyping = $state(false);
  let storeSearch = $state('');
  let endEl = $state<HTMLDivElement | null>(null);
  let inputEl = $state<HTMLInputElement | null>(null);

  const placeholders: Record<string, string> = { description: 'Describe lo que sucedió...', name: 'Tu nombre completo', phone: 'Ej: 3121234567' };

  const showTextInput = $derived(['description', 'name', 'phone'].includes(step));
  const showStoreSelector = $derived(step === 'store');
  const filteredStores = $derived(storeSearch ? storeOptions.filter((s) => s.label.toLowerCase().includes(storeSearch.toLowerCase())) : storeOptions);

  function scrollToBottom() {
    setTimeout(() => endEl?.scrollIntoView({ behavior: 'smooth' }), 50);
  }
  function addBotMessage(text: string, options?: QuickOption[], summary?: IncidentData) {
    isTyping = true;
    const delay = Math.min(text.length * 12, 1200);
    setTimeout(() => {
      isTyping = false;
      messages = [...messages, { id: msgId(), sender: 'bot', text, timestamp: new Date(), options, summary }];
    }, delay);
  }
  function addUserMessage(text: string) {
    messages = [...messages, { id: msgId(), sender: 'user', text, timestamp: new Date() }];
  }

  function welcome() {
    addBotMessage('¡Hola! 👋 Soy el asistente virtual de **Kiosko**. ¿En qué puedo ayudarte?', [
      { label: 'Reportar incidencia', value: 'incidencia', icon: '🔔' },
      { label: 'Preguntas frecuentes', value: 'faq', icon: '❓' }
    ]);
    step = 'welcome';
  }

  function handleOption(value: string, label: string) {
    // Paso de confirmación
    if (step === 'confirm') {
      addUserMessage(label);
      if (value === 'confirm_yes') {
        setTimeout(() => {
          addBotMessage(`¡Listo! Tu reporte ha sido registrado con el folio **${incident.folio}**. 🎫\n\nNuestro equipo revisará tu caso y te contactará en 24-48 horas hábiles.`, [
            { label: 'Nuevo reporte', value: 'incidencia', icon: '🔔' },
            { label: 'Eso es todo', value: 'cerrar', icon: '👋' }
          ]);
          step = 'faq_answer';
        }, 200);
      } else {
        incident = {};
        setTimeout(() => { addBotMessage('Sin problema. Vamos de nuevo. Selecciona la categoría:', CATEGORIES); step = 'category'; }, 200);
      }
      return;
    }

    addUserMessage(label);
    switch (step) {
      case 'welcome':
        if (value === 'incidencia') setTimeout(() => { addBotMessage('Lamento que hayas tenido un inconveniente. Selecciona la categoría de tu reporte:', CATEGORIES); step = 'category'; }, 200);
        else if (value === 'faq') setTimeout(() => { addBotMessage('Estas son las consultas más frecuentes. Elige una:', FAQ_OPTIONS); step = 'faq'; }, 200);
        break;
      case 'faq':
        setTimeout(() => {
          addBotMessage(FAQ_ANSWERS[value] || 'Lo siento, no tengo información sobre eso por ahora.', [
            { label: 'Otra pregunta', value: 'otra_pregunta', icon: '❓' },
            { label: 'Reportar incidencia', value: 'incidencia', icon: '🔔' },
            { label: 'Eso es todo, gracias', value: 'cerrar', icon: '👋' }
          ]);
          step = 'faq_answer';
        }, 200);
        break;
      case 'faq_answer':
        if (value === 'otra_pregunta') setTimeout(() => { addBotMessage('Claro, ¿qué más te gustaría saber?', FAQ_OPTIONS); step = 'faq'; }, 200);
        else if (value === 'incidencia') setTimeout(() => { addBotMessage('Selecciona la categoría de tu reporte:', CATEGORIES); step = 'category'; }, 200);
        else setTimeout(() => { addBotMessage('¡Gracias por contactar a Kiosko! Que tengas excelente día. 🙌'); step = 'done'; }, 200);
        break;
      case 'category': {
        const cat = CATEGORIES.find((c) => c.value === value);
        incident = { ...incident, category: cat?.label || value };
        const subs = SUBCATEGORIES[value];
        if (subs) setTimeout(() => { addBotMessage('¿Podrías ser más específico?', subs); step = 'subcategory'; }, 200);
        else setTimeout(() => { addBotMessage('¿En cuál sucursal ocurrió? Puedes buscar o seleccionar:'); step = 'store'; }, 200);
        break;
      }
      case 'subcategory': {
        const sub = Object.values(SUBCATEGORIES).flat().find((s) => s.value === value);
        incident = { ...incident, subcategory: sub?.label || value };
        setTimeout(() => { addBotMessage('¿En cuál sucursal ocurrió? Puedes buscar o seleccionar:'); step = 'store'; }, 200);
        break;
      }
      case 'store': {
        const store = sucursales.find((s) => s.id === value);
        incident = { ...incident, store: store?.name || value };
        storeSearch = '';
        setTimeout(() => { addBotMessage('Describe brevemente lo que sucedió. Entre más detalle nos des, mejor podremos ayudarte.'); step = 'description'; }, 200);
        break;
      }
    }
  }

  function handleTextSubmit() {
    const text = input.trim();
    if (!text) return;
    input = '';
    addUserMessage(text);
    switch (step) {
      case 'description':
        incident = { ...incident, description: text };
        setTimeout(() => { addBotMessage('¿Cuál es tu nombre? (para dar seguimiento a tu caso)'); step = 'name'; }, 200);
        break;
      case 'name':
        incident = { ...incident, name: text };
        setTimeout(() => { addBotMessage('Por último, ¿un número de teléfono donde podamos contactarte? (10 dígitos)'); step = 'phone'; }, 200);
        break;
      case 'phone': {
        const cleaned = text.replace(/\D/g, '');
        if (cleaned.length < 10) { setTimeout(() => addBotMessage('El número parece incorrecto. Por favor ingresa 10 dígitos.'), 200); return; }
        const folio = generateFolio();
        incident = { ...incident, phone: cleaned, folio };
        const snapshot = { ...incident };
        setTimeout(() => {
          step = 'confirm';
          addBotMessage('Perfecto. Confirma los datos de tu reporte:', undefined, snapshot);
          setTimeout(() => addBotMessage('¿Los datos son correctos?', [
            { label: 'Sí, enviar reporte', value: 'confirm_yes', icon: '✅' },
            { label: 'No, corregir', value: 'confirm_no', icon: '✏️' }
          ]), 800);
        }, 200);
        break;
      }
      default:
        setTimeout(() => { addBotMessage('Si necesitas algo más, inicia un nuevo reporte o haz una consulta.', [
          { label: 'Nuevo reporte', value: 'incidencia', icon: '🔔' },
          { label: 'Preguntas frecuentes', value: 'faq', icon: '❓' }
        ]); step = 'welcome'; }, 200);
        break;
    }
  }

  function handleReset() {
    messages = []; incident = {}; input = ''; storeSearch = ''; step = 'welcome';
    setTimeout(welcome, 100);
  }

  function summaryRows(d: IncidentData) {
    return [
      { label: 'Categoría', value: d.category },
      ...(d.subcategory ? [{ label: 'Detalle', value: d.subcategory }] : []),
      { label: 'Sucursal', value: d.store },
      { label: 'Descripción', value: d.description },
      { label: 'Nombre', value: d.name },
      { label: 'Teléfono', value: d.phone },
      { label: 'Folio', value: d.folio }
    ].filter((r) => r.value);
  }

  function renderHtml(text: string) {
    const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return esc.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>');
  }
  const time = (d: Date) => d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });

  // Inicializa el saludo al abrir
  $effect(() => {
    if (chatbot.isOpen && messages.length === 0) welcome();
  });
  // Auto-scroll
  $effect(() => {
    messages; isTyping;
    scrollToBottom();
  });
  // Enfoca el input en pasos de texto
  $effect(() => {
    if (showTextInput) tick().then(() => setTimeout(() => inputEl?.focus(), 300));
  });
</script>

{#if chatbot.isOpen}
  <div class="fixed inset-0 z-[60] bg-black/30 md:hidden" onclick={() => chatbot.close()} role="presentation"></div>

  <div class="chatbot-window fixed inset-0 z-[61] flex flex-col overflow-hidden bg-white" style="font-family: Montserrat, sans-serif">
    <!-- Header -->
    <div class="flex shrink-0 items-center gap-3 px-4 py-3" style="background:linear-gradient(135deg,#045098 0%,#1387C7 100%); color:#fff">
      <div class="flex shrink-0 items-center justify-center rounded-full" style="width:38px; height:38px; background:rgba(255,255,255,0.2)"><span style="font-size:18px">🏪</span></div>
      <div class="min-w-0 flex-1">
        <div style="font-weight:700; font-size:15px">Kiosko Soporte</div>
        <div style="font-size:11px; opacity:0.85">Tiempo de respuesta: 24-48 hrs</div>
      </div>
      <button onclick={handleReset} class="flex shrink-0 cursor-pointer items-center justify-center" style="width:32px; height:32px; border-radius:50%; background:rgba(255,255,255,0.15); border:none; color:#fff" aria-label="Reiniciar" title="Reiniciar"><ArrowLeft style="width:16px; height:16px" /></button>
      <button onclick={() => chatbot.close()} class="flex shrink-0 cursor-pointer items-center justify-center" style="width:32px; height:32px; border-radius:50%; background:rgba(255,255,255,0.15); border:none; color:#fff" aria-label="Cerrar"><X style="width:16px; height:16px" /></button>
    </div>

    <!-- Mensajes -->
    <div class="flex-1 overflow-y-auto px-4 py-3" style="background:#F7F9FF">
      <div class="flex flex-col gap-3">
        {#each messages as msg (msg.id)}
          <div class={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
            <div style={`max-width:85%; padding:10px 14px; border-radius:${msg.sender === 'bot' ? '4px 16px 16px 16px' : '16px 4px 16px 16px'}; background:${msg.sender === 'bot' ? '#fff' : '#1387C7'}; color:${msg.sender === 'bot' ? '#1A1D2E' : '#fff'}; font-size:14px; line-height:1.5; box-shadow:${msg.sender === 'bot' ? '0 1px 4px rgba(0,0,0,0.06)' : '0 2px 8px rgba(19,135,199,0.25)'}`}>
              {@html renderHtml(msg.text)}
              <div style={`font-size:10px; opacity:0.5; margin-top:4px; text-align:${msg.sender === 'bot' ? 'left' : 'right'}`}>{time(msg.timestamp)}</div>
            </div>
          </div>

          {#if msg.summary}
            <div style="background:#fff; border-radius:16px; border:1.5px solid #E2E7F2; padding:14px">
              <div class="flex items-center gap-2" style="margin-bottom:10px; font-weight:700; font-size:13px; color:#045098"><AlertTriangle style="width:14px; height:14px" /> Resumen del reporte</div>
              {#each summaryRows(msg.summary) as row (row.label)}
                <div class="flex gap-2" style="padding:5px 0; border-bottom:1px solid #F0F2F8; font-size:12.5px">
                  <span style="font-weight:700; color:#4A5068; min-width:80px">{row.label}:</span>
                  <span style="color:#1A1D2E; flex:1">{row.value}</span>
                </div>
              {/each}
            </div>
          {/if}

          {#if msg.options && msg.options.length > 0}
            <div class="flex flex-wrap gap-2">
              {#each msg.options as opt (opt.value)}
                <button onclick={() => handleOption(opt.value, opt.label)} class="inline-flex cursor-pointer items-center gap-1.5 transition-all duration-150 hover:-translate-y-px active:scale-95" style="padding:8px 14px; border-radius:16px; border:1.5px solid #1387C7; background:#fff; color:#1387C7; font-size:13px; font-weight:600">
                  {#if opt.icon}<span>{opt.icon}</span>{/if}{opt.label}
                </button>
              {/each}
            </div>
          {/if}
        {/each}

        {#if isTyping}
          <div class="flex justify-start">
            <div class="flex items-center gap-1" style="padding:12px 18px; border-radius:4px 16px 16px 16px; background:#fff; box-shadow:0 1px 4px rgba(0,0,0,0.06)">
              {#each [0, 1, 2] as i (i)}
                <span class="inline-block rounded-full" style={`width:7px; height:7px; background:#8890AA; animation:typingDot 1.2s ease-in-out ${i * 0.15}s infinite`}></span>
              {/each}
            </div>
          </div>
        {/if}

        {#if showStoreSelector && !isTyping}
          <div style="background:#fff; border-radius:16px; border:1.5px solid #E2E7F2; overflow:hidden">
            <div style="padding:10px 12px; border-bottom:1px solid #E2E7F2">
              <input bind:value={storeSearch} placeholder="Buscar sucursal..." style="width:100%; padding:8px 12px; border-radius:12px; border:1px solid #E2E7F2; background:#F7F9FF; font-size:13px; outline:none" />
            </div>
            <div style="max-height:200px; overflow-y:auto">
              {#each filteredStores as store (store.value)}
                <button onclick={() => handleOption(store.value, store.label)} class="flex w-full cursor-pointer items-center transition-colors hover:bg-[#EEF2FB]" style="padding:10px 14px; border:none; background:transparent; font-size:13px; color:#1A1D2E; text-align:left; border-bottom:1px solid #F0F2F8">
                  <span style="margin-right:8px; font-size:14px">📍</span>{store.label}
                </button>
              {/each}
              {#if filteredStores.length === 0}
                <div style="padding:16px; text-align:center; font-size:13px; color:#8890AA">No se encontraron sucursales</div>
              {/if}
            </div>
          </div>
        {/if}

        <div bind:this={endEl}></div>
      </div>
    </div>

    <!-- Input -->
    {#if showTextInput}
      <div class="flex shrink-0 items-center gap-2 px-4 py-3" style="border-top:1px solid #E2E7F2; background:#fff">
        <input bind:this={inputEl} bind:value={input} onkeydown={(e) => e.key === 'Enter' && handleTextSubmit()} placeholder={placeholders[step] || 'Escribe un mensaje...'} class="flex-1" style="padding:10px 14px; border-radius:16px; border:1.5px solid #E2E7F2; background:#F7F9FF; font-size:14px; outline:none" />
        <button onclick={handleTextSubmit} disabled={!input.trim()} class="flex shrink-0 cursor-pointer items-center justify-center transition-transform active:scale-90" style={`width:40px; height:40px; border-radius:50%; background:${input.trim() ? '#1387C7' : '#C8D0E0'}; border:none; color:#fff`} aria-label="Enviar"><Send style="width:18px; height:18px" /></button>
      </div>
    {/if}
  </div>
{/if}

<style>
  @media (min-width: 768px) {
    .chatbot-window {
      position: fixed !important;
      inset: auto !important;
      bottom: 24px !important;
      right: 84px !important;
      width: 400px !important;
      height: 600px !important;
      border-radius: 20px !important;
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.18) !important;
    }
  }
</style>
