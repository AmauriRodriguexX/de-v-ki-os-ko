import React from "react";
import { Link } from "react-router";
import { Gift, Star, Smartphone, ArrowRight } from "lucide-react";
import yayaLogo from "figma:asset/c7490a2487aafb5bcfe6d42e8f9cb869d7abde70.png";

function AppleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayStoreIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c-.36-.17-.58-.54-.58-.96V1.2c0-.42.22-.79.58-.96l11.83 11.76L3.18 23.76zm1.25-22.8L15.8 12 4.43 23.04 15.8 12 4.43.96zm13.37 9.36L5.9.96l12.82 7.2-1.08 1.12.16.04zm.48 3.36L5.9 23.04l12.9-7.2-1.08-1.12.16-.04zm3.44-2.64c.41.24.41.84 0 1.08L19.2 14.4l-1.44-1.44L19.2 9.6l2.52 1.44z" />
    </svg>
  );
}

interface YayaDownloadBannerProps {
  /** Total possible points from visible promos */
  totalPoints?: number;
  /** Variant: 'inline' for between sections, 'compact' for smaller */
  variant?: "inline" | "compact";
}

export function YayaDownloadBanner({
  totalPoints,
  variant = "inline",
}: YayaDownloadBannerProps) {
  if (variant === "compact") {
    return (
      <Link
        to="/yaya"
        className="no-underline flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: "linear-gradient(135deg, #045098 0%, #1387C7 100%)",
          boxShadow: "0 4px 20px rgba(19,135,199,0.25)",
        }}
      >
        <div
          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#FCD700" }}
        >
          <img
            src={yayaLogo}
            alt="YAYA"
            className="w-10 h-10 object-cover rounded-xl"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 700 }}>
            Gana puntos con cada compra
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "11px" }}>
            Descarga YAYA gratis
          </div>
        </div>
        <ArrowRight
          className="w-4 h-4 shrink-0"
          style={{ color: "#FCD700" }}
        />
      </Link>
    );
  }

  return (
    <section className="w-full py-0">
      <div className="max-w-7xl mx-auto px-4">
        <style>{`
          @keyframes yayaBannerPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes yayaFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
        `}</style>
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, #045098 0%, #1387C7 50%, #045098 100%)",
            boxShadow: "0 8px 32px rgba(4,80,152,0.3)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-12 -right-12 w-40 h-40 rounded-full"
            style={{ backgroundColor: "rgba(252,215,0,0.08)" }}
          />
          <div
            className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          />

          <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 px-6 py-8 md:px-10 md:py-10">
            {/* Left — Icon + Points */}
            <div className="flex items-center gap-5 shrink-0">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  boxShadow: "0 8px 24px rgba(252,215,0,0.3)",
                  animation: "yayaFloat 3s ease-in-out infinite",
                }}
              >
                <img
                  src={yayaLogo}
                  alt="YAYA"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {totalPoints && totalPoints > 0 && (
                <div className="flex flex-col items-center">
                  <div
                    style={{
                      fontSize: "clamp(28px, 4vw, 40px)",
                      fontWeight: 800,
                      color: "#FCD700",
                      lineHeight: 1,
                    }}
                  >
                    +{totalPoints}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.7)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    puntos disponibles
                  </div>
                </div>
              )}
            </div>

            {/* Center — Copy */}
            <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
              <h3
                style={{
                  fontSize: "clamp(20px, 3vw, 26px)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                <span className="inline-flex items-center gap-2 flex-wrap">
                  Estas promos te dan puntos
                  <img src={yayaLogo} alt="YAYA" className="inline-block w-7 h-7 rounded-md object-cover" style={{ verticalAlign: "middle" }} />
                  YAYA
                </span>
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.8)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Descarga la app, escanea al pagar y acumula puntos que canjeas
                por productos gratis en cualquier Kiosko.
              </p>

              {/* Mini benefits */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                {[
                  { icon: <Gift className="w-3.5 h-3.5" />, text: "Puntos por cada compra" },
                  { icon: <Star className="w-3.5 h-3.5" />, text: "Promos exclusivas" },
                  { icon: <Smartphone className="w-3.5 h-3.5" />, text: "100% gratis" },
                ].map((b) => (
                  <span
                    key={b.text}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.12)",
                      color: "#FFFFFF",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {b.icon}
                    {b.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Download buttons */}
            <div className="flex flex-col gap-2.5 shrink-0">
              <a
                href="#"
                className="no-underline flex items-center gap-2.5 px-5 py-3 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#1A1D2E",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                }}
                onClick={(e) => e.preventDefault()}
              >
                <AppleIcon size={20} />
                <div className="flex flex-col">
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: 500,
                      color: "#8890AA",
                      lineHeight: 1.2,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Descargar en
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.2 }}>
                    App Store
                  </span>
                </div>
              </a>
              <a
                href="#"
                className="no-underline flex items-center gap-2.5 px-5 py-3 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "#FFFFFF",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                }}
                onClick={(e) => e.preventDefault()}
              >
                <PlayStoreIcon size={18} />
                <div className="flex flex-col">
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.2,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Disponible en
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.2 }}>
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}