import React, { useState } from "react";
import { Download } from "lucide-react";
import { Link } from "react-router";
import yayaLogo from "figma:asset/c7490a2487aafb5bcfe6d42e8f9cb869d7abde70.png";

interface YayaPointsBadgeProps {
  points: number;
  /** Compact mode for small cards */
  compact?: boolean;
}

export function YayaPointsBadge({ points, compact = false }: YayaPointsBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  if (!points || points <= 0) return null;

  if (compact) {
    return (
      <span
        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
        style={{
          backgroundColor: "#FCD700",
          color: "#1A1D2E",
          fontSize: "10px",
          fontWeight: 700,
        }}
      >
        <img src={yayaLogo} alt="YAYA" className="w-3 h-3 rounded-sm object-cover" />
        +{points} pts
      </span>
    );
  }

  return (
    <div className="relative inline-flex">
      <style>{`
        @keyframes yayaShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      <Link
        to="/yaya"
        className="no-underline inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        style={{
          background: "linear-gradient(90deg, #FCD700 0%, #FFE44D 40%, #FFF3B8 50%, #FFE44D 60%, #FCD700 100%)",
          backgroundSize: "200% 100%",
          animation: "yayaShimmer 3s ease-in-out infinite",
          color: "#1A1D2E",
          fontSize: "12px",
          fontWeight: 700,
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <img src={yayaLogo} alt="YAYA" className="w-4 h-4 rounded-sm object-cover" />
        +{points} puntos YAYA
      </Link>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-xl whitespace-nowrap z-10"
          style={{
            backgroundColor: "#1A1D2E",
            color: "#FFFFFF",
            fontSize: "11px",
            fontWeight: 600,
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <div className="flex items-center gap-1.5">
            <Download className="w-3 h-3" style={{ color: "#FCD700" }} />
            Descarga la app y acumula puntos
          </div>
          {/* Arrow */}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid #1A1D2E",
            }}
          />
        </div>
      )}
    </div>
  );
}