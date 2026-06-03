import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value = "",
  onChange,
  placeholder = "Busca productos, sucursales o promos...",
}: SearchBarProps) {
  return (
    <div className="relative flex items-center w-full max-w-md">
      <Search className="absolute left-4 w-5 h-5" style={{ color: "#8890AA" }} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 rounded-full border-none outline-none"
        style={{
          backgroundColor: "#F7F9FF",
          fontSize: "16px",
          color: "#1A1D2E",
        }}
      />
    </div>
  );
}
