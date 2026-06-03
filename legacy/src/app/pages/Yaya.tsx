import React from "react";
import { YayaSection } from "../components/organisms/YayaSection";
import { Gift, Zap, Shield, TrendingUp } from "lucide-react";
import yayaLogo from "figma:asset/c7490a2487aafb5bcfe6d42e8f9cb869d7abde70.png";

const features = [
  { icon: Gift, title: "Recompensas instantáneas", desc: "Canjea tus puntos al momento en cualquier sucursal" },
  { icon: Zap, title: "Ofertas flash", desc: "Promos exclusivas que solo duran horas, solo para usuarios YAYA" },
  { icon: Shield, title: "Seguro y confiable", desc: "Tu información protegida con los más altos estándares" },
  { icon: TrendingUp, title: "Sube de nivel", desc: "Más compras = más beneficios. Alcanza nivel Gold y Platinum" },
];

export function Yaya() {
  return (
    <div className="flex flex-col">
      <YayaSection />

      {/* Features Grid */}
      <section className="w-full py-12 md:py-20" style={{ backgroundColor: "#F7F9FF" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#1A1D2E",
                margin: 0,
              }}
            >
              <span className="inline-flex items-center gap-2">
                ¿Por qué descargar
                <img src={yayaLogo} alt="YAYA" className="inline-block w-9 h-9 rounded-lg object-cover" style={{ verticalAlign: "middle" }} />
                YAYA?
              </span>
            </h2>
            <p style={{ fontSize: "18px", color: "#4A5068", margin: "8px 0 0" }}>
              Beneficios que te hacen la vida más fácil
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-4 p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#EBF6FD" }}
                >
                  <f.icon className="w-7 h-7" style={{ color: "#1387C7" }} />
                </div>
                <div className="flex flex-col gap-1">
                  <span style={{ fontSize: "18px", fontWeight: 700, color: "#1A1D2E" }}>
                    {f.title}
                  </span>
                  <span style={{ fontSize: "15px", color: "#4A5068", lineHeight: 1.5 }}>
                    {f.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}