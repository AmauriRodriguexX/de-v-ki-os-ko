import React, { useRef, useEffect } from "react";
import { useParams } from "react-router";
import { PromoSection } from "../components/organisms/PromoSection";
import { CrossingPromosSection } from "../components/organisms/CrossingPromosSection";
import { YayaDownloadBanner } from "../components/molecules/YayaDownloadBanner";
import { Sparkles } from "lucide-react";
import { promos } from "../data/promos";
import { crossingPromos } from "../data/crossingPromos";

export function Promociones() {
  const combosRef = useRef<HTMLDivElement>(null);
  const { category } = useParams();

  // Auto-scroll to combos when navigating to /promociones/combos
  useEffect(() => {
    if (category === "combos" && combosRef.current) {
      setTimeout(() => {
        combosRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [category]);

  // Calculate total YAYA points across all promos
  const totalYayaPoints =
    promos.reduce((sum, p) => sum + (p.yayaPoints || 0), 0) +
    crossingPromos.reduce((sum, c) => sum + (c.yayaPoints || 0), 0);

  return (
    <div className="flex flex-col">
      <div className="w-full py-8 md:py-12" style={{ backgroundColor: "#EBF6FD" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#1A1D2E",
              margin: 0,
            }}
          >
            Promociones
          </h1>
          <p style={{ fontSize: "18px", color: "#4A5068", margin: "8px 0 0" }}>
            Todas las ofertas disponibles hoy en tu sucursal más cercana
          </p>

          {/* Quick jump to combos */}
          <button
            onClick={() => combosRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#FCD700",
              color: "#1A1D2E",
              fontSize: "14px",
              fontWeight: 700,
              borderRadius: 16,
              border: "none",
            }}
          >
            <Sparkles className="w-4 h-4" />
            Ver Combos del Día
          </button>
        </div>
      </div>

      {/* Combos del Día section */}
      <div ref={combosRef}>
        <CrossingPromosSection />
      </div>

      {/* YAYA Download Banner — between combos and regular promos */}
      <div className="py-6 md:py-10">
        <YayaDownloadBanner totalPoints={totalYayaPoints} />
      </div>

      {/* Regular promos */}
      <PromoSection showTitle={false} />
    </div>
  );
}