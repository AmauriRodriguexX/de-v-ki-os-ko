import React, { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, ArrowLeft, AlertTriangle } from "lucide-react";
import { useChatbot } from "../../context/ChatbotContext";
import { sucursales } from "../../data/promos";

/* ───────────── Types ───────────── */
interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  options?: QuickOption[];
  component?: React.ReactNode;
}

interface QuickOption {
  label: string;
  value: string;
  icon?: string;
}

interface IncidentData {
  category?: string;
  subcategory?: string;
  store?: string;
  description?: string;
  name?: string;
  phone?: string;
  folio?: string;
}

type FlowStep =
  | "welcome"
  | "category"
  | "subcategory"
  | "store"
  | "description"
  | "name"
  | "phone"
  | "confirm"
  | "done"
  | "faq"
  | "faq_answer";

/* ───────────── Constants ───────────── */
const CATEGORIES: QuickOption[] = [
  { label: "Producto / Calidad", value: "producto", icon: "📦" },
  { label: "Atención en tienda", value: "atencion", icon: "🙋" },
  { label: "Limpieza", value: "limpieza", icon: "🧹" },
  { label: "Facturación", value: "facturacion", icon: "🧾" },
  { label: "App YAYA", value: "yaya", icon: "📱" },
  { label: "Sugerencia", value: "sugerencia", icon: "💡" },
  { label: "Otro", value: "otro", icon: "❓" },
];

const SUBCATEGORIES: Record<string, QuickOption[]> = {
  producto: [
    { label: "Producto caducado", value: "caducado" },
    { label: "Producto en mal estado", value: "mal_estado" },
    { label: "Falta de producto", value: "falta" },
    { label: "Precio incorrecto", value: "precio" },
    { label: "Otro", value: "otro_producto" },
  ],
  atencion: [
    { label: "Trato inadecuado", value: "trato" },
    { label: "Tiempo de espera", value: "espera" },
    { label: "Cobro incorrecto", value: "cobro" },
    { label: "Otro", value: "otro_atencion" },
  ],
  limpieza: [
    { label: "Tienda sucia", value: "tienda_sucia" },
    { label: "Baños", value: "banos" },
    { label: "Alrededores", value: "alrededores" },
    { label: "Otro", value: "otro_limpieza" },
  ],
  facturacion: [
    { label: "No puedo generar factura", value: "no_genera" },
    { label: "Datos incorrectos", value: "datos_incorrectos" },
    { label: "Ticket no aparece", value: "ticket_no_aparece" },
    { label: "Otro", value: "otro_factura" },
  ],
  yaya: [
    { label: "No puedo registrarme", value: "registro" },
    { label: "Puntos no reflejados", value: "puntos" },
    { label: "Error en la app", value: "error_app" },
    { label: "Otro", value: "otro_yaya" },
  ],
};

const FAQ_OPTIONS: QuickOption[] = [
  { label: "Horarios de tiendas", value: "horarios", icon: "🕐" },
  { label: "Cómo facturar", value: "como_facturar", icon: "🧾" },
  { label: "Programa YAYA", value: "info_yaya", icon: "📱" },
  { label: "Métodos de pago", value: "metodos_pago", icon: "💳" },
];

const FAQ_ANSWERS: Record<string, string> = {
  horarios:
    "La mayoría de nuestras tiendas Kiosko operan de 6:00 a 23:00 hrs. Algunas sucursales como Cedis Kiosko, Villas del Mar, La Huerta y Centro Mazatlán están abiertas las 24 horas. Puedes consultar el horario específico de cada sucursal en la sección Sucursales.",
  como_facturar:
    "Para facturar tu compra: 1) Ve a la sección Facturación en nuestro sitio, 2) Ingresa los datos de tu ticket (número y fecha), 3) Captura tus datos fiscales (RFC, razón social, régimen fiscal, uso de CFDI, código postal y correo), 4) Haz clic en 'Generar factura'. Tienes hasta 72 horas después de tu compra para solicitar tu factura.",
  info_yaya:
    "YAYA es nuestro programa de lealtad. Al registrarte en la app YAYA, acumulas puntos con cada compra en Kiosko que puedes canjear por productos. Descarga la app desde App Store o Google Play y regístrate con tu número de teléfono.",
  metodos_pago:
    "En Kiosko aceptamos: efectivo, tarjetas de débito y crédito (Visa/Mastercard), pagos con QR (CoDi) y pago a través de la app YAYA. La disponibilidad puede variar por sucursal.",
};

function generateFolio(): string {
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `KSK-${y}${m}${d}-${rand}`;
}

function msgId() {
  return Math.random().toString(36).substring(2, 10);
}

const storeOptions: QuickOption[] = sucursales.map((s) => ({
  label: s.name,
  value: s.id,
}));

/* ───────────── Component ───────────── */
export function Chatbot() {
  const { isOpen, close } = useChatbot();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<FlowStep>("welcome");
  const [incident, setIncident] = useState<IncidentData>({});
  const [isTyping, setIsTyping] = useState(false);
  const [storeSearch, setStoreSearch] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, []);

  // Initialize welcome on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(
        "¡Hola! 👋 Soy el asistente virtual de **Kiosko**. ¿En qué puedo ayudarte?",
        [
          { label: "Reportar incidencia", value: "incidencia", icon: "🔔" },
          { label: "Preguntas frecuentes", value: "faq", icon: "❓" },
        ]
      );
      setStep("welcome");
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when step changes to text-input steps
  useEffect(() => {
    if (["description", "name", "phone"].includes(step)) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [step]);

  function addBotMessage(text: string, options?: QuickOption[], component?: React.ReactNode) {
    setIsTyping(true);
    const delay = Math.min(text.length * 12, 1200);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: msgId(),
          sender: "bot",
          text,
          timestamp: new Date(),
          options,
          component,
        },
      ]);
    }, delay);
  }

  function addUserMessage(text: string) {
    setMessages((prev) => [
      ...prev,
      { id: msgId(), sender: "user", text, timestamp: new Date() },
    ]);
  }

  function handleOptionSelect(value: string, displayLabel: string) {
    addUserMessage(displayLabel);

    switch (step) {
      case "welcome":
        if (value === "incidencia") {
          setTimeout(() => {
            addBotMessage(
              "Lamento que hayas tenido un inconveniente. Selecciona la categoría de tu reporte:",
              CATEGORIES
            );
            setStep("category");
          }, 200);
        } else if (value === "faq") {
          setTimeout(() => {
            addBotMessage(
              "Estas son las consultas más frecuentes. Elige una:",
              FAQ_OPTIONS
            );
            setStep("faq");
          }, 200);
        }
        break;

      case "faq":
        setTimeout(() => {
          const answer = FAQ_ANSWERS[value] || "Lo siento, no tengo información sobre eso en este momento.";
          addBotMessage(answer, [
            { label: "Otra pregunta", value: "otra_pregunta", icon: "❓" },
            { label: "Reportar incidencia", value: "incidencia", icon: "🔔" },
            { label: "Eso es todo, gracias", value: "cerrar", icon: "👋" },
          ]);
          setStep("faq_answer");
        }, 200);
        break;

      case "faq_answer":
        if (value === "otra_pregunta") {
          setTimeout(() => {
            addBotMessage("Claro, ¿qué más te gustaría saber?", FAQ_OPTIONS);
            setStep("faq");
          }, 200);
        } else if (value === "incidencia") {
          setTimeout(() => {
            addBotMessage(
              "Selecciona la categoría de tu reporte:",
              CATEGORIES
            );
            setStep("category");
          }, 200);
        } else {
          setTimeout(() => {
            addBotMessage("¡Gracias por contactar a Kiosko! Que tengas excelente día. 🙌");
            setStep("done");
          }, 200);
        }
        break;

      case "category": {
        const cat = CATEGORIES.find((c) => c.value === value);
        setIncident((prev) => ({ ...prev, category: cat?.label || value }));
        const subs = SUBCATEGORIES[value];
        if (subs) {
          setTimeout(() => {
            addBotMessage("¿Podrías ser m��s específico?", subs);
            setStep("subcategory");
          }, 200);
        } else {
          setTimeout(() => {
            addBotMessage(
              "¿En cuál sucursal ocurrió? Puedes buscar o seleccionar:"
            );
            setStep("store");
          }, 200);
        }
        break;
      }

      case "subcategory": {
        const sub =
          Object.values(SUBCATEGORIES)
            .flat()
            .find((s) => s.value === value);
        setIncident((prev) => ({
          ...prev,
          subcategory: sub?.label || value,
        }));
        setTimeout(() => {
          addBotMessage(
            "¿En cuál sucursal ocurrió? Puedes buscar o seleccionar:"
          );
          setStep("store");
        }, 200);
        break;
      }

      case "store": {
        const store = sucursales.find((s) => s.id === value);
        setIncident((prev) => ({
          ...prev,
          store: store?.name || value,
        }));
        setTimeout(() => {
          addBotMessage(
            "Describe brevemente lo que sucedió. Entre más detalle nos des, mejor podremos ayudarte."
          );
          setStep("description");
        }, 200);
        break;
      }

      default:
        break;
    }
  }

  function handleTextSubmit() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    addUserMessage(text);

    switch (step) {
      case "description":
        setIncident((prev) => ({ ...prev, description: text }));
        setTimeout(() => {
          addBotMessage("¿Cuál es tu nombre? (para dar seguimiento a tu caso)");
          setStep("name");
        }, 200);
        break;

      case "name":
        setIncident((prev) => ({ ...prev, name: text }));
        setTimeout(() => {
          addBotMessage(
            "Por último, ¿un número de teléfono donde podamos contactarte? (10 dígitos)"
          );
          setStep("phone");
        }, 200);
        break;

      case "phone": {
        // Basic validation
        const cleaned = text.replace(/\D/g, "");
        if (cleaned.length < 10) {
          setTimeout(() => {
            addBotMessage(
              "El número parece incorrecto. Por favor ingresa 10 dígitos."
            );
          }, 200);
          return;
        }
        const folio = generateFolio();
        const finalIncident = { ...incident, phone: cleaned, folio };
        setIncident(finalIncident);
        setTimeout(() => {
          setStep("confirm");
          addBotMessage(
            "Perfecto. Confirma los datos de tu reporte:",
            undefined,
            <IncidentSummary data={finalIncident} />
          );
          setTimeout(() => {
            addBotMessage("¿Los datos son correctos?", [
              { label: "Sí, enviar reporte", value: "confirm_yes", icon: "✅" },
              { label: "No, corregir", value: "confirm_no", icon: "✏️" },
            ]);
          }, 800);
        }, 200);
        break;
      }

      case "confirm":
        break;

      // Free chat for done state
      default:
        setTimeout(() => {
          addBotMessage(
            "Si necesitas algo más, puedes iniciar un nuevo reporte o hacer una consulta.",
            [
              { label: "Nuevo reporte", value: "incidencia", icon: "🔔" },
              { label: "Preguntas frecuentes", value: "faq", icon: "❓" },
            ]
          );
          setStep("welcome");
        }, 200);
        break;
    }
  }

  // Handle confirm step options
  useEffect(() => {
    // This is handled in handleOptionSelect via a special check
  }, [step]);

  // Override option select for confirm step
  const origHandleOption = handleOptionSelect;
  function handleOption(value: string, label: string) {
    if (step === "confirm") {
      addUserMessage(label);
      if (value === "confirm_yes") {
        setTimeout(() => {
          addBotMessage(
            `¡Listo! Tu reporte ha sido registrado exitosamente con el folio **${incident.folio}**. 🎫\n\nNuestro equipo revisará tu caso y te contactará en las próximas 24-48 horas hábiles. Guarda tu número de folio para seguimiento.`,
            [
              { label: "Nuevo reporte", value: "incidencia", icon: "🔔" },
              { label: "Eso es todo", value: "cerrar", icon: "👋" },
            ]
          );
          setStep("faq_answer");
        }, 200);
      } else {
        setIncident({});
        setTimeout(() => {
          addBotMessage(
            "Sin problema. Vamos de nuevo. Selecciona la categoría:",
            CATEGORIES
          );
          setStep("category");
        }, 200);
      }
      return;
    }
    origHandleOption(value, label);
  }

  function handleReset() {
    setMessages([]);
    setIncident({});
    setInput("");
    setStoreSearch("");
    setStep("welcome");
    // Re-trigger welcome
    setTimeout(() => {
      addBotMessage(
        "¡Hola! 👋 Soy el asistente virtual de **Kiosko**. ¿En qué puedo ayudarte?",
        [
          { label: "Reportar incidencia", value: "incidencia", icon: "🔔" },
          { label: "Preguntas frecuentes", value: "faq", icon: "❓" },
        ]
      );
    }, 100);
  }

  // Filter stores for search
  const filteredStores = storeSearch
    ? storeOptions.filter((s) =>
        s.label.toLowerCase().includes(storeSearch.toLowerCase())
      )
    : storeOptions;

  const showTextInput = ["description", "name", "phone"].includes(step);
  const showStoreSelector = step === "store";

  const placeholders: Record<string, string> = {
    description: "Describe lo que sucedió...",
    name: "Tu nombre completo",
    phone: "Ej: 3121234567",
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop on mobile */}
      <div
        className="fixed inset-0 z-[60] bg-black/30 md:hidden"
        onClick={close}
      />

      <div
        className="fixed z-[61] flex flex-col"
        style={{
          /* Mobile: fullscreen with margins */
          bottom: 0,
          right: 0,
          left: 0,
          top: 0,
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {/* Desktop positioning override */}
        <style>{`
          @media (min-width: 768px) {
            .chatbot-window {
              position: fixed !important;
              bottom: 24px !important;
              right: 84px !important;
              left: auto !important;
              top: auto !important;
              width: 400px !important;
              height: 600px !important;
              border-radius: 20px !important;
              box-shadow: 0 12px 48px rgba(0,0,0,0.18) !important;
            }
          }
        `}</style>

        <div
          className="chatbot-window flex flex-col bg-white overflow-hidden"
          style={{
            height: "100%",
            borderRadius: 0,
          }}
        >
          {/* ── Header ── */}
          <div
            className="flex items-center gap-3 px-4 py-3 shrink-0"
            style={{
              background: "linear-gradient(135deg, #045098 0%, #1387C7 100%)",
              color: "#FFFFFF",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full shrink-0"
              style={{
                width: 38,
                height: 38,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            >
              <span style={{ fontSize: 18 }}>🏪</span>
            </div>
            <div className="flex-1 min-w-0">
              <div style={{ fontWeight: 700, fontSize: 15 }}>
                Kiosko Soporte
              </div>
              <div style={{ fontSize: 11, opacity: 0.85 }}>
                Tiempo de respuesta: 24-48 hrs
              </div>
            </div>
            <button
              onClick={handleReset}
              className="flex items-center justify-center cursor-pointer shrink-0"
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "none",
                color: "#FFFFFF",
              }}
              aria-label="Reiniciar conversación"
              title="Reiniciar"
            >
              <ArrowLeft style={{ width: 16, height: 16 }} />
            </button>
            <button
              onClick={close}
              className="flex items-center justify-center cursor-pointer shrink-0"
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "none",
                color: "#FFFFFF",
              }}
              aria-label="Cerrar chat"
            >
              <X style={{ width: 16, height: 16 }} />
            </button>
          </div>

          {/* ── Messages Area ── */}
          <div
            className="flex-1 overflow-y-auto px-4 py-3"
            style={{ backgroundColor: "#F7F9FF" }}
          >
            <div className="flex flex-col gap-3">
              {messages.map((msg) => (
                <React.Fragment key={msg.id}>
                  <MessageBubble message={msg} />
                  {msg.component && (
                    <div className="ml-0">{msg.component}</div>
                  )}
                  {msg.options && msg.options.length > 0 && (
                    <div className="flex flex-wrap gap-2 ml-0">
                      {msg.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleOption(opt.value, opt.label)}
                          className="cursor-pointer transition-all duration-150 hover:-translate-y-[1px] active:scale-95"
                          style={{
                            padding: "8px 14px",
                            borderRadius: 16,
                            border: "1.5px solid #1387C7",
                            backgroundColor: "#FFFFFF",
                            color: "#1387C7",
                            fontSize: 13,
                            fontWeight: 600,
                            fontFamily: "Montserrat, sans-serif",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          {opt.icon && <span>{opt.icon}</span>}
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}

              {/* Typing indicator */}
              {isTyping && <TypingIndicator />}

              {/* Store selector */}
              {showStoreSelector && !isTyping && (
                <StoreSelector
                  stores={filteredStores}
                  search={storeSearch}
                  onSearchChange={setStoreSearch}
                  onSelect={(id, label) => {
                    setStoreSearch("");
                    handleOption(id, label);
                  }}
                />
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* ── Input Area ── */}
          {showTextInput && (
            <div
              className="shrink-0 px-4 py-3 flex items-center gap-2"
              style={{
                borderTop: "1px solid #E2E7F2",
                backgroundColor: "#FFFFFF",
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTextSubmit()}
                placeholder={placeholders[step] || "Escribe un mensaje..."}
                className="flex-1"
                style={{
                  padding: "10px 14px",
                  borderRadius: 16,
                  border: "1.5px solid #E2E7F2",
                  backgroundColor: "#F7F9FF",
                  fontSize: 14,
                  fontFamily: "Montserrat, sans-serif",
                  outline: "none",
                }}
              />
              <button
                onClick={handleTextSubmit}
                disabled={!input.trim()}
                className="flex items-center justify-center cursor-pointer shrink-0 transition-transform active:scale-90"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: input.trim() ? "#1387C7" : "#C8D0E0",
                  border: "none",
                  color: "#FFFFFF",
                }}
                aria-label="Enviar"
              >
                <Send style={{ width: 18, height: 18 }} />
              </button>
            </div>
          )}

          {/* Safe area spacer on mobile */}
          <div
            className="md:hidden shrink-0"
            style={{ height: "env(safe-area-inset-bottom, 0px)" }}
          />
        </div>
      </div>
    </>
  );
}

/* ───────────── Sub-components ───────────── */

function MessageBubble({ message }: { message: Message }) {
  const isBot = message.sender === "bot";

  // Parse simple markdown bold **text**
  function renderText(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} style={{ fontWeight: 700 }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Handle newlines
      return part.split("\n").map((line, j, arr) => (
        <React.Fragment key={`${i}-${j}`}>
          {line}
          {j < arr.length - 1 && <br />}
        </React.Fragment>
      ));
    });
  }

  return (
    <div
      className={`flex ${isBot ? "justify-start" : "justify-end"}`}
    >
      <div
        style={{
          maxWidth: "85%",
          padding: "10px 14px",
          borderRadius: isBot ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
          backgroundColor: isBot ? "#FFFFFF" : "#1387C7",
          color: isBot ? "#1A1D2E" : "#FFFFFF",
          fontSize: 14,
          lineHeight: 1.5,
          fontFamily: "Montserrat, sans-serif",
          boxShadow: isBot
            ? "0 1px 4px rgba(0,0,0,0.06)"
            : "0 2px 8px rgba(19,135,199,0.25)",
        }}
      >
        {renderText(message.text)}
        <div
          style={{
            fontSize: 10,
            opacity: 0.5,
            marginTop: 4,
            textAlign: isBot ? "left" : "right",
          }}
        >
          {message.timestamp.toLocaleTimeString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div
        className="flex items-center gap-1"
        style={{
          padding: "12px 18px",
          borderRadius: "4px 16px 16px 16px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="inline-block rounded-full"
            style={{
              width: 7,
              height: 7,
              backgroundColor: "#8890AA",
              animation: `typingDot 1.2s ease-in-out ${i * 0.15}s infinite`,
            }}
          />
        ))}
        <style>{`
          @keyframes typingDot {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
            30% { transform: translateY(-4px); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
}

function StoreSelector({
  stores,
  search,
  onSearchChange,
  onSelect,
}: {
  stores: QuickOption[];
  search: string;
  onSearchChange: (v: string) => void;
  onSelect: (id: string, label: string) => void;
}) {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        border: "1.5px solid #E2E7F2",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "10px 12px", borderBottom: "1px solid #E2E7F2" }}>
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar sucursal..."
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: 12,
            border: "1px solid #E2E7F2",
            backgroundColor: "#F7F9FF",
            fontSize: 13,
            fontFamily: "Montserrat, sans-serif",
            outline: "none",
          }}
        />
      </div>
      <div style={{ maxHeight: 200, overflowY: "auto" }}>
        {stores.map((store) => (
          <button
            key={store.value}
            onClick={() => onSelect(store.value, store.label)}
            className="flex items-center w-full cursor-pointer transition-colors"
            style={{
              padding: "10px 14px",
              border: "none",
              backgroundColor: "transparent",
              fontSize: 13,
              fontFamily: "Montserrat, sans-serif",
              color: "#1A1D2E",
              textAlign: "left",
              borderBottom: "1px solid #F0F2F8",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#EEF2FB")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <span style={{ marginRight: 8, fontSize: 14 }}>📍</span>
            {store.label}
          </button>
        ))}
        {stores.length === 0 && (
          <div
            style={{
              padding: "16px",
              textAlign: "center",
              fontSize: 13,
              color: "#8890AA",
            }}
          >
            No se encontraron sucursales
          </div>
        )}
      </div>
    </div>
  );
}

function IncidentSummary({ data }: { data: IncidentData }) {
  const rows = [
    { label: "Categoría", value: data.category },
    data.subcategory && { label: "Detalle", value: data.subcategory },
    { label: "Sucursal", value: data.store },
    { label: "Descripción", value: data.description },
    { label: "Nombre", value: data.name },
    { label: "Teléfono", value: data.phone },
    { label: "Folio", value: data.folio },
  ].filter(Boolean) as { label: string; value: string | undefined }[];

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        border: "1.5px solid #E2E7F2",
        padding: "14px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div
        className="flex items-center gap-2"
        style={{
          marginBottom: 10,
          fontWeight: 700,
          fontSize: 13,
          color: "#045098",
        }}
      >
        <AlertTriangle style={{ width: 14, height: 14 }} />
        Resumen del reporte
      </div>
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex gap-2"
          style={{
            padding: "5px 0",
            borderBottom: "1px solid #F0F2F8",
            fontSize: 12.5,
          }}
        >
          <span style={{ fontWeight: 700, color: "#4A5068", minWidth: 80 }}>
            {row.label}:
          </span>
          <span style={{ color: "#1A1D2E", flex: 1 }}>{row.value}</span>
        </div>
      ))}
    </div>
  );
}