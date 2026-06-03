import React from "react";

interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function Tag({ label, active = false, onClick }: TagProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 rounded-full cursor-pointer transition-all duration-200 whitespace-nowrap"
      style={{
        backgroundColor: active ? "#1387C7" : "#EEF2FB",
        color: active ? "#FFFFFF" : "#4A5068",
        fontWeight: 600,
        fontSize: "14px",
        border: "none",
      }}
    >
      {label}
    </button>
  );
}
