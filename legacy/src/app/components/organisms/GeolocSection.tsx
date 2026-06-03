import React, { useState, useMemo } from "react";
import { MapPin, Clock, Search, Navigation, ChevronRight, LocateFixed } from "lucide-react";
import { sucursales } from "../../data/promos";
import type { Sucursal } from "../../data/promos";
import { GeoModal } from "../molecules/GeoModal";
import { LocationPermissionModal } from "../molecules/LocationPermissionModal";
import { MapEmbed } from "../atoms/MapEmbed";

function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const states = ["Todos", ...Array.from(new Set(sucursales.map((s) => s.state)))];
const cities = Array.from(new Set(sucursales.map((s) => s.city)));

interface GeolocSectionProps {
  initialCity?: string;
}

export function GeolocSection({ initialCity }: GeolocSectionProps) {
  const [searchText, setSearchText] = useState(initialCity ?? "");
  const [filterState, setFilterState] = useState("Todos");
  const [selectedSucursal, setSelectedSucursal] = useState<Sucursal | null>(null);
  const [hoveredSucursal, setHoveredSucursal] = useState<Sucursal | null>(null);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const enrichedSucursales = useMemo(() => {
    return sucursales.map((s) => {
      if (!userLocation) return { ...s, distance: "" };
      const d = haversineDistance(userLocation.lat, userLocation.lng, s.lat, s.lng);
      return {
        ...s,
        distance: d < 1 ? `${Math.round(d * 1000)} m` : `${d.toFixed(1)} km`,
        _distanceNum: d,
      };
    });
  }, [userLocation]);

  const filtered = useMemo(() => {
    let result = enrichedSucursales;

    if (filterState !== "Todos") {
      result = result.filter((s) => s.state === filterState);
    }

    if (searchText) {
      const q = searchText.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.city.toLowerCase().includes(q) ||
          s.address.toLowerCase().includes(q) ||
          s.state.toLowerCase().includes(q)
      );
    }

    if (userLocation) {
      result = [...result].sort(
        (a, b) => ((a as any)._distanceNum ?? 999) - ((b as any)._distanceNum ?? 999)
      );
    }

    return result;
  }, [enrichedSucursales, filterState, searchText, userLocation]);

  const handleLocationGranted = (lat: number, lng: number) => {
    setUserLocation({ lat, lng });
  };

  return (
    <section className="w-full py-12 md:py-20" style={{ backgroundColor: "#F7F9FF" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="flex flex-col gap-2">
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
              Encuentra tu sucursal
            </h2>
            <p style={{ fontSize: "18px", color: "#4A5068", margin: 0 }}>
              {filtered.length} tiendas en {filterState === "Todos" ? "Colima, Jalisco, Nayarit y Sinaloa" : filterState}
            </p>
          </div>

          <button
            onClick={() => setLocationModalOpen(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl cursor-pointer transition-all duration-200"
            style={{
              backgroundColor: userLocation ? "#D4EDCA" : "#EBF6FD",
              border: userLocation ? "1.5px solid #51A639" : "1.5px solid #C8E8F7",
              color: userLocation ? "#2D6B1B" : "#045098",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <LocateFixed className="w-4 h-4" />
            {userLocation ? "Ubicación activa" : "Usar mi ubicación"}
          </button>
        </div>

        {/* State filter pills */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => setFilterState(state)}
              className="px-4 py-2 rounded-full cursor-pointer whitespace-nowrap transition-all duration-200"
              style={{
                backgroundColor: filterState === state ? "#1387C7" : "#FFFFFF",
                color: filterState === state ? "#FFFFFF" : "#4A5068",
                border: filterState === state ? "1.5px solid #1387C7" : "1.5px solid #E2E7F2",
                fontSize: "14px",
                fontWeight: filterState === state ? 700 : 500,
              }}
            >
              {state}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Google Maps embed */}
          <div
            className="flex-1 min-h-[450px] rounded-2xl overflow-hidden relative"
            style={{ border: "1.5px solid #E2E7F2" }}
          >
            <MapEmbed
              lat={hoveredSucursal?.lat ?? (userLocation?.lat ?? 21.5)}
              lng={hoveredSucursal?.lng ?? (userLocation?.lng ?? -104.9)}
              zoom={hoveredSucursal ? 16 : userLocation ? 10 : 6}
              markerLabel={hoveredSucursal?.name ?? (userLocation ? "Mi ubicación" : undefined)}
              className="w-full h-full min-h-[450px]"
            />

            {/* Overlay brand badge */}
            <div
              className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl z-10"
              style={{
                backgroundColor: "rgba(255,255,255,0.95)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{ backgroundColor: "#1387C7" }}
              >
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#1A1D2E" }}>
                  {hoveredSucursal ? hoveredSucursal.name : "Sucursales Kiosko"}
                </span>
                <span style={{ fontSize: "11px", color: "#4A5068" }}>
                  {hoveredSucursal
                    ? `${hoveredSucursal.city}, ${hoveredSucursal.state}`
                    : `${filtered.length} ubicaciones`}
                </span>
              </div>
            </div>

            {/* City quick chips on map */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-2 flex-wrap">
              {cities
                .filter((c) => filterState === "Todos" || sucursales.some((s) => s.city === c && s.state === filterState))
                .map((city) => {
                  const citySuc = sucursales.find((s) => s.city === city);
                  return (
                    <button
                      key={city}
                      onClick={() => {
                        if (citySuc) setHoveredSucursal(citySuc);
                      }}
                      className="px-3 py-1.5 rounded-full cursor-pointer transition-all"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(226,231,242,0.6)",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#1A1D2E",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      }}
                    >
                      <span style={{ color: "#1387C7" }}>
                        {sucursales.filter((s) => s.city === city).length}
                      </span>{" "}
                      {city}
                    </button>
                  );
                })}
            </div>
          </div>

          {/* List */}
          <div className="w-full lg:w-[400px] flex flex-col gap-4">
            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                style={{ color: "#8890AA" }}
              />
              <input
                type="text"
                placeholder="Buscar por ciudad, sucursal o dirección..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl outline-none"
                style={{
                  border: "1.5px solid #E2E7F2",
                  fontSize: "15px",
                  backgroundColor: "#FFFFFF",
                }}
              />
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between px-1">
              <span style={{ fontSize: "13px", color: "#8890AA", fontWeight: 500 }}>
                {filtered.length} sucursal{filtered.length !== 1 ? "es" : ""} encontrada
                {filtered.length !== 1 ? "s" : ""}
              </span>
              {userLocation && (
                <span
                  className="flex items-center gap-1"
                  style={{ fontSize: "12px", color: "#51A639", fontWeight: 600 }}
                >
                  <Navigation className="w-3 h-3" />
                  Ordenado por cercanía
                </span>
              )}
            </div>

            {/* Sucursales list */}
            <div className="flex flex-col gap-3 max-h-[520px] overflow-y-auto pr-1 kiosko-scroll">
              {filtered.map((suc) => (
                <button
                  key={suc.id}
                  onClick={() => setSelectedSucursal(suc)}
                  onMouseEnter={() => setHoveredSucursal(suc)}
                  onMouseLeave={() => setHoveredSucursal(null)}
                  className="flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200 text-left hover:-translate-y-[1px]"
                  style={{
                    backgroundColor:
                      hoveredSucursal?.id === suc.id ? "#EBF6FD" : "#FFFFFF",
                    border:
                      hoveredSucursal?.id === suc.id
                        ? "1.5px solid #1387C7"
                        : "1.5px solid #E2E7F2",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#EBF6FD" }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "#1387C7" }} />
                  </div>
                  <div className="flex-1 flex flex-col gap-1 min-w-0">
                    <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1D2E" }}>
                      {suc.name}
                    </span>
                    <span
                      style={{ fontSize: "13px", color: "#4A5068" }}
                      className="line-clamp-2"
                    >
                      {suc.address}
                    </span>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      {suc.distance && (
                        <span
                          className="flex items-center gap-1"
                          style={{
                            fontSize: "12px",
                            color: "#1387C7",
                            fontWeight: 600,
                          }}
                        >
                          <Navigation className="w-3 h-3" /> {suc.distance}
                        </span>
                      )}
                      <span
                        className="flex items-center gap-1"
                        style={{
                          fontSize: "12px",
                          color: "#51A639",
                          fontWeight: 500,
                        }}
                      >
                        <Clock className="w-3 h-3" /> {suc.hours}
                      </span>
                      <span
                        className="px-2 py-0.5 rounded-full"
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          backgroundColor: "#EEF2FB",
                          color: "#4A5068",
                        }}
                      >
                        {suc.city}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className="w-5 h-5 shrink-0 mt-2"
                    style={{ color: "#BEC4D2" }}
                  />
                </button>
              ))}

              {filtered.length === 0 && (
                <div className="flex flex-col items-center gap-3 py-8">
                  <MapPin className="w-10 h-10" style={{ color: "#C8E8F7" }} />
                  <p style={{ fontSize: "15px", color: "#8890AA", textAlign: "center" }}>
                    No se encontraron sucursales.
                    <br />
                    Intenta con otra búsqueda.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedSucursal && (
        <GeoModal
          sucursal={selectedSucursal}
          onClose={() => setSelectedSucursal(null)}
        />
      )}

      <LocationPermissionModal
        open={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
        onLocationGranted={handleLocationGranted}
      />
    </section>
  );
}