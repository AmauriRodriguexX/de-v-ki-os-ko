import React from "react";
import { MapPin } from "lucide-react";
import { Button } from "../atoms/Button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { YayaPointsBadge } from "./YayaPointsBadge";
import type { CrossingPromo } from "../../data/crossingPromos";

interface CrossingPromoCardProps {
  combo: CrossingPromo;
  onEncuentralo?: () => void;
}

export function CrossingPromoCard({
  combo,
  onEncuentralo,
}: CrossingPromoCardProps) {
  return (
    <div
      className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        border: "2px solid #FFF3B8",
        boxShadow: "0 4px 16px rgba(252,215,0,0.15)",
      }}
    >
      {/* Image header */}
      {combo.imageUrl && (
        <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50">
          <ImageWithFallback
            src={combo.imageUrl}
            alt={combo.label}
            className="w-full h-full object-cover"
          />
          {/* Badge overlay */}
          <div className="absolute top-3 left-3">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(252, 215, 0, 0.95)",
                color: "#1A1D2E",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              🔥 Combo del día
            </span>
          </div>
          {/* YAYA points overlay */}
          {combo.yayaPoints > 0 && (
            <div className="absolute top-3 right-3">
              <YayaPointsBadge points={combo.yayaPoints} compact />
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        {/* Title */}
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#1A1D2E",
            lineHeight: 1.2,
          }}
        >
          {combo.label}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#8890AA",
            lineHeight: 1.5,
          }}
        >
          {combo.description}
        </p>

        {/* Day validity */}
        {combo.dayText && (
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#1387C7",
              fontStyle: "italic",
            }}
          >
            {combo.dayText}
          </p>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-3 pt-2">
          <span style={{ fontSize: "30px", fontWeight: 800, color: "#1387C7" }}>
            {combo.comboPrice}
          </span>
        </div>

        {/* YAYA points banner */}
        {combo.yayaPoints > 0 && (
          <div className="mt-1">
            <YayaPointsBadge points={combo.yayaPoints} />
          </div>
        )}

        {/* CTA Button */}
        <div className="pt-3">
          <Button
            variant="encuentralo"
            icon={<MapPin className="w-4 h-4" />}
            onClick={onEncuentralo}
            className="w-full"
          >
            Encuéntralo en sucursal
          </Button>
        </div>
      </div>
    </div>
  );
}