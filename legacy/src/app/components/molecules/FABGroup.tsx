import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { MapPin, MessageCircle } from "lucide-react";
import { useChatbot } from "../../context/ChatbotContext";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const WA_LINK =
  "https://wa.me/528002905050?text=Quiero%20recibir%20las%20promos%20de%20Kiosko";

interface FABItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  bg: string;
  shadow: string;
  action: () => void;
  hideOnPath?: string;
  pulseColor?: string;
}

export function FABGroup() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { open: openChatbot } = useChatbot();

  const items: FABItem[] = [
    {
      id: "sucursal",
      label: "Encuentra tu Kiosko",
      icon: <MapPin style={{ width: 22, height: 22, color: "#FFFFFF" }} />,
      bg: "#1387C7",
      shadow: "0 4px 16px rgba(19, 135, 199, 0.4)",
      pulseColor: "rgba(19, 135, 199, 0.4)",
      action: () => navigate("/sucursales"),
      hideOnPath: "/sucursales",
    },
    {
      id: "whatsapp",
      label: "Promos por WhatsApp",
      icon: <WhatsAppIcon size={22} />,
      bg: "#25D366",
      shadow: "0 4px 16px rgba(37, 211, 102, 0.4)",
      action: () => window.open(WA_LINK, "_blank", "noopener,noreferrer"),
    },
    {
      id: "soporte",
      label: "Atención al cliente",
      icon: (
        <MessageCircle style={{ width: 22, height: 22, color: "#FFFFFF" }} />
      ),
      bg: "#045098",
      shadow: "0 4px 16px rgba(4, 80, 152, 0.4)",
      action: () => openChatbot(),
    },
  ];

  const visibleItems = items.filter(
    (item) =>
      !item.hideOnPath || !location.pathname.startsWith(item.hideOnPath)
  );

  return (
    <>
      <style>{`
        @keyframes fabPulseRing {
          0% { transform: scale(1); opacity: 0.5; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>

      {/* Desktop only — hidden on mobile where BottomNavBar takes over */}
      <div
        className="hidden md:flex fixed z-50 flex-col items-end gap-3"
        style={{ right: 24, bottom: 24 }}
      >
        {visibleItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            {/* Tooltip — visible on hover */}
            <div
              style={{
                opacity: hoveredId === item.id ? 1 : 0,
                transform:
                  hoveredId === item.id
                    ? "translateX(0)"
                    : "translateX(8px)",
                transition: "all 150ms ease",
                pointerEvents: "none",
                backgroundColor: "#1A1D2E",
                color: "#FFFFFF",
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "Montserrat, sans-serif",
                padding: "6px 12px",
                borderRadius: 10,
                whiteSpace: "nowrap",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              {item.label}
            </div>

            {/* Circular button */}
            <button
              onClick={item.action}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: item.bg,
                border: "none",
                boxShadow: item.shadow,
                color: "#FFFFFF",
              }}
              aria-label={item.label}
            >
              {/* Pulse ring on first item (sucursal) */}
              {item.pulseColor && (
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: `2px solid ${item.pulseColor}`,
                    animation: "fabPulseRing 2s ease-out infinite",
                    pointerEvents: "none",
                  }}
                />
              )}
              {item.icon}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}