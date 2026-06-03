import React from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { MapPin } from "lucide-react";
import { YayaPointsBadge } from "./YayaPointsBadge";
import type { Promo } from "../../data/promos";

interface PromoCardProps {
  promo: Promo;
  onEncuentralo?: () => void;
}

export function PromoCard({ promo, onEncuentralo }: PromoCardProps) {
  return (
    <div
      className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <div className="relative h-[180px] overflow-hidden">
        <img
          src={promo.image}
          alt={promo.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge label={promo.badge} bg={promo.badgeBg} color={promo.badgeColor} />
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4 flex-1">
        <span
          className="inline-flex items-center gap-1 self-start px-2.5 py-0.5 rounded-full"
          style={{ backgroundColor: "#EEF2FB", color: "#4A5068", fontSize: "12px", fontWeight: 500 }}
        >
          {promo.category}
        </span>

        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#1A1D2E",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {promo.name}
        </h3>

        <p style={{ fontSize: "14px", color: "#4A5068", lineHeight: 1.5, margin: 0 }}>
          {promo.description}
        </p>

        <div className="flex items-baseline gap-2 mt-1">
          <span style={{ fontSize: "24px", fontWeight: 800, color: "#1387C7" }}>
            {promo.price}
          </span>
        </div>

        <span style={{ fontSize: "12px", color: "#8890AA", fontWeight: 500 }}>
          Vigencia: {promo.vigencia}
        </span>

        {promo.yayaPoints && promo.yayaPoints > 0 && (
          <div className="mt-1">
            <YayaPointsBadge points={promo.yayaPoints} />
          </div>
        )}

        <div className="mt-auto pt-3">
          <Button
            variant="encuentralo"
            icon={<MapPin className="w-4 h-4" />}
            onClick={onEncuentralo}
            className="w-full"
          >
            Encuéntralo
          </Button>
        </div>
      </div>
    </div>
  );
}