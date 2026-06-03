import React from "react";
import { useParams } from "react-router";
import { GeolocSection } from "../components/organisms/GeolocSection";

const cityLabels: Record<string, string> = {
  colima: "Colima",
  "puerto-vallarta": "Puerto Vallarta",
  tepic: "Tepic",
  mazatlan: "Mazatlán",
};

export function Sucursales() {
  const { city } = useParams<{ city?: string }>();
  const cityName = city ? cityLabels[city] ?? city : undefined;

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
            {cityName ? `Sucursales en ${cityName}` : "Sucursales"}
          </h1>
          <p style={{ fontSize: "18px", color: "#4A5068", margin: "8px 0 0" }}>
            {cityName
              ? `Encuentra la tienda Kiosko más cercana en ${cityName}`
              : "Encuentra la tienda Kiosko más cercana a ti"}
          </p>
        </div>
      </div>
      <GeolocSection initialCity={cityName} />
    </div>
  );
}
