import React, { useState } from "react";
import { PromoCard } from "../molecules/PromoCard";
import { Tag } from "../atoms/Tag";
import { GeoModal } from "../molecules/GeoModal";
import { YayaDownloadBanner } from "../molecules/YayaDownloadBanner";
import { promos, categories, sucursales } from "../../data/promos";
import type { Promo } from "../../data/promos";

interface PromoSectionProps {
  limit?: number;
  showTitle?: boolean;
}

export function PromoSection({ limit, showTitle = true }: PromoSectionProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedPromo, setSelectedPromo] = useState<Promo | null>(null);

  const filtered =
    activeCategory === "Todos"
      ? promos
      : promos.filter((p) => p.category === activeCategory);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {showTitle && (
          <div className="flex flex-col gap-2 mb-8">
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "#1A1D2E",
                margin: 0,
              }}
            >
              Promociones de hoy
            </h2>
            <p style={{ fontSize: "18px", color: "#4A5068", margin: 0 }}>
              Ofertas disponibles en tu sucursal más cercana
            </p>
            {/* Compact YAYA reminder */}
            <div className="mt-2 max-w-sm">
              <YayaDownloadBanner variant="compact" />
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map((cat) => (
            <Tag
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        {/* Grid */}
        {displayed.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((promo) => (
              <PromoCard
                key={promo.id}
                promo={promo}
                onEncuentralo={() => setSelectedPromo(promo)}
              />
            ))}
          </div>
        ) : (
          <div
            className="flex items-center justify-center py-16 rounded-2xl"
            style={{ backgroundColor: "#F7F9FF" }}
          >
            <p style={{ fontSize: "16px", color: "#8890AA" }}>
              No hay promos activas en esta categoría hoy.
            </p>
          </div>
        )}
      </div>

      {/* Geo Modal */}
      {selectedPromo && (
        <GeoModal
          sucursal={sucursales[0]}
          onClose={() => setSelectedPromo(null)}
        />
      )}
    </section>
  );
}