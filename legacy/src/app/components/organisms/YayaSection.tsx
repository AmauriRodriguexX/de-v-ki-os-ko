import React from "react";
import { Star, Gift, History, Download, Smartphone } from "lucide-react";
import { Button } from "../atoms/Button";
import yayaLogo from "figma:asset/c7490a2487aafb5bcfe6d42e8f9cb869d7abde70.png";

const benefits = [
  { icon: Star, label: "Acumula puntos en cada compra", desc: "Gana puntos por cada peso gastado" },
  { icon: Gift, label: "Promos exclusivas para usuarios YAYA", desc: "Ofertas que nadie más tiene" },
  { icon: History, label: "Historial de compras", desc: "Revisa todo lo que has comprado" },
  { icon: Download, label: "Disponible en iOS y Android", desc: "Descárgala gratis ahora" },
];

export function YayaSection() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div
                className="w-[260px] h-[520px] rounded-[40px] overflow-hidden flex flex-col items-center justify-center"
                style={{
                  background: "linear-gradient(180deg, #1387C7 0%, #045098 100%)",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 rounded-b-2xl"
                  style={{ backgroundColor: "#1A1D2E" }}
                />
                {/* App content */}
                <div className="flex flex-col items-center gap-4 px-6 text-center mt-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: "#FCD700" }}
                  >
                    <img src={yayaLogo} alt="YAYA" className="w-16 h-16 object-cover rounded-2xl" />
                  </div>
                  <span style={{ fontSize: "24px", fontWeight: 800, color: "#FFFFFF" }}>YAYA</span>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
                    Tu programa de lealtad
                  </span>
                  <div className="mt-4 flex flex-col gap-2 w-full">
                    <div
                      className="w-full py-3 rounded-xl"
                      style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                    >
                      <span style={{ color: "#FCD700", fontSize: "28px", fontWeight: 800 }}>1,250</span>
                      <br />
                      <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px" }}>puntos acumulados</span>
                    </div>
                    <div
                      className="w-full py-2 rounded-lg flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#FCD700" }}
                    >
                      <img src={yayaLogo} alt="YAYA" className="w-4 h-4 rounded-sm object-cover" />
                      <span style={{ color: "#1A1D2E", fontSize: "13px", fontWeight: 700 }}>3 promos activas</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating element */}
              <div
                className="absolute -right-6 top-20 px-4 py-2 rounded-xl"
                style={{ background: "#FFFFFF", boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" style={{ color: "#FCD700" }} />
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#1A1D2E" }}>+50 pts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span
                className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full"
                style={{ backgroundColor: "#FFF3B8", color: "#A07800", fontSize: "13px", fontWeight: 600 }}
              >
                <Smartphone className="w-3.5 h-3.5" />
                App móvil
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 36px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#1A1D2E",
                  margin: 0,
                }}
              >
                <span className="inline-flex items-center gap-2 flex-wrap">
                  Descarga
                  <img src={yayaLogo} alt="YAYA" className="inline-block w-9 h-9 rounded-lg object-cover" style={{ verticalAlign: "middle" }} />
                  YAYA y gana con cada compra
                </span>
              </h2>
              <p style={{ fontSize: "18px", color: "#4A5068", margin: 0 }}>
                El programa de lealtad que te premia cada vez que visitas tu Kiosko
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {benefits.map((b) => (
                <div key={b.label} className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#EBF6FD" }}
                  >
                    <b.icon className="w-6 h-6" style={{ color: "#1387C7" }} />
                  </div>
                  <div className="flex flex-col">
                    <span style={{ fontSize: "16px", fontWeight: 700, color: "#1A1D2E" }}>
                      {b.label}
                    </span>
                    <span style={{ fontSize: "14px", color: "#4A5068" }}>{b.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary">
                 App Store
              </Button>
              <Button variant="ghost">
                 Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}