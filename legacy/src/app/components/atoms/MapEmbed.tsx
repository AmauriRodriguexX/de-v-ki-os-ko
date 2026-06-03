import React from "react";

interface MapEmbedProps {
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
  style?: React.CSSProperties;
  markerLabel?: string;
}

export function MapEmbed({
  lat,
  lng,
  zoom = 15,
  className = "",
  style,
  markerLabel,
}: MapEmbedProps) {
  const query = markerLabel
    ? encodeURIComponent(markerLabel)
    : `${lat},${lng}`;

  const src = `https://maps.google.com/maps?q=${query}&ll=${lat},${lng}&z=${zoom}&output=embed&hl=es`;

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <iframe
        src={src}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de ubicación"
      />
    </div>
  );
}
