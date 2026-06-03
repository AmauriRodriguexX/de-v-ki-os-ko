import React from "react";

interface BadgeProps {
  label: string;
  bg: string;
  color: string;
}

export function Badge({ label, bg, color }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full"
      style={{
        backgroundColor: bg,
        color: color,
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
        lineHeight: 1.2,
      }}
    >
      {label}
    </span>
  );
}
