import React from "react";

type ButtonVariant = "primary" | "danger" | "encuentralo" | "ghost";
type ButtonSize = "sm" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "#1387C7",
    color: "#FFFFFF",
    fontWeight: 700,
    border: "none",
  },
  danger: {
    background: "#FF0200",
    color: "#FFFFFF",
    fontWeight: 700,
    border: "none",
  },
  encuentralo: {
    background: "#FCD700",
    color: "#1A1D2E",
    fontWeight: 700,
    border: "none",
  },
  ghost: {
    background: "transparent",
    color: "#1387C7",
    border: "2px solid #1387C7",
    fontWeight: 600,
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    padding: "10px 20px",
    fontSize: "14px",
    borderRadius: "16px",
  },
  lg: {
    padding: "16px 28px",
    fontSize: "16px",
    borderRadius: "16px",
  },
};

export function Button({ variant = "primary", size = "lg", children, icon, className = "", style, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-[1px] ${className}`}
      style={{ ...variantStyles[variant], ...sizeStyles[size], ...style }}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}