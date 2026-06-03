import React from "react";
import { X, MapPin, Clock, Navigation, ExternalLink } from "lucide-react";
import { Button } from "../atoms/Button";
import { MapEmbed } from "../atoms/MapEmbed";
import type { Sucursal } from "../../data/promos";

interface GeoModalProps {
  sucursal: Sucursal;
  onClose: () => void;
}

export function GeoModal({ sucursal, onClose }: GeoModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(26,29,46,0.55)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md"
        style={{
          background: "#FFFFFF",
          borderRadius: "24px",
          boxShadow: "0 20px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Map placeholder */}
        <div className="w-full h-[220px] rounded-t-[24px] overflow-hidden">
          <MapEmbed
            lat={sucursal.lat}
            lng={sucursal.lng}
            zoom={16}
            markerLabel={sucursal.name}
            className="w-full h-full"
          />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
          style={{ background: "#FFFFFF", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
        >
          <X className="w-4 h-4" style={{ color: "#1A1D2E" }} />
        </button>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1A1D2E", margin: 0 }}>
              {sucursal.name}
            </h3>
            <p style={{ fontSize: "14px", color: "#4A5068", margin: "4px 0 0" }}>
              {sucursal.address}
            </p>
            <p style={{ fontSize: "13px", color: "#8890AA", margin: "2px 0 0", fontWeight: 500 }}>
              {sucursal.city}, {sucursal.state}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {sucursal.distance && (
              <div className="flex items-center gap-1.5">
                <Navigation className="w-4 h-4" style={{ color: "#1387C7" }} />
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#1387C7" }}>
                  {sucursal.distance}
                </span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" style={{ color: "#51A639" }} />
              <span style={{ fontSize: "14px", fontWeight: 500, color: "#4A5068" }}>
                {sucursal.hours}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {sucursal.services.map((service) => (
              <span
                key={service}
                className="px-3 py-1 rounded-full"
                style={{ backgroundColor: "#EEF2FB", color: "#4A5068", fontSize: "12px", fontWeight: 500 }}
              >
                {service}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-2">
            <Button
              variant="primary"
              icon={<ExternalLink className="w-4 h-4" />}
              className="flex-1"
              onClick={() => window.open(`https://maps.google.com/?q=${sucursal.lat},${sucursal.lng}`, "_blank")}
            >
              Abrir en Maps
            </Button>
            <Button
              variant="ghost"
              icon={<Navigation className="w-4 h-4" />}
              className="flex-1"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/dir/?api=1&destination=${sucursal.lat},${sucursal.lng}`,
                  "_blank"
                )
              }
            >
              Cómo llegar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}