import React, { useState, useMemo } from "react";
import { Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router";
import { CrossingPromoCard } from "../molecules/CrossingPromoCard";
import { GeoModal } from "../molecules/GeoModal";
import { crossingPromos } from "../../data/crossingPromos";
import { sucursales } from "../../data/promos";

export function CrossingPromosSection() {
  const [geoModal, setGeoModal] = useState(false);
  const location = useLocation();
  const isPromoPage = location.pathname.startsWith("/promociones");

  // Filter combos active today
  const today = new Date().getDay(); // 0=domingo
  const activeCombos = useMemo(
    () =>
      crossingPromos.filter(
        (c) => c.activeDays.length === 0 || c.activeDays.includes(today)
      ),
    [today]
  );

  if (activeCombos.length === 0) return null;

  return (
    <section className="w-full py-12 md:py-16" style={{ backgroundColor: "#FFFBEA" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" style={{ color: "#A07800" }} />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#A07800",
              }}
            >
              Ahorra más
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#1A1D2E",
              margin: 0,
            }}
          >
            Combos del Día
            <span
              className="inline-flex items-center justify-center ml-2 align-middle"
              style={{
                backgroundColor: "#1A1D2E",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 700,
                borderRadius: "999px",
                minWidth: "28px",
                height: "28px",
                padding: "0 8px",
                lineHeight: 1,
              }}
            >
              {activeCombos.length}
            </span>
          </h2>
          <p style={{ fontSize: "16px", color: "#4A5068", margin: 0 }}>
            Dos promos, una gran idea
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {activeCombos.map((combo) => (
            <CrossingPromoCard
              key={combo.id}
              combo={combo}
              onEncuentralo={() => setGeoModal(true)}
            />
          ))}
        </div>

        {/* CTA — only show on Home */}
        {!isPromoPage && (
          <div className="flex justify-center mt-8">
            <Link
              to="/promociones"
              className="no-underline inline-flex items-center gap-2 px-6 py-3 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#1A1D2E",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 700,
                borderRadius: "16px",
              }}
            >
              Ver todos los combos
            </Link>
          </div>
        )}
      </div>

      {/* GeoModal */}
      {geoModal && (
        <GeoModal
          sucursal={sucursales[0]}
          onClose={() => setGeoModal(false)}
        />
      )}
    </section>
  );
}