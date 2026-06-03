export interface QuickAccessItem {
  label: string;
  icon: string;
  href: string;
  color: string;
}

export const quickAccessItems: QuickAccessItem[] = [
  { label: "Cerveza & Bebidas", icon: "🍺", href: "/promociones/cerveza", color: "#EBF6FD" },
  { label: "Despensa Básica", icon: "🛒", href: "/promociones/super-lunes", color: "#FFF3B8" },
  { label: "Snacks & Hidratación", icon: "🍿", href: "/promociones/botanas", color: "#F0F9EC" },
  { label: "YAYA App", icon: "💜", href: "/yaya", color: "#F3F0FF" },
  { label: "Servicios", icon: "⚡", href: "/servicios", color: "#FFF2EE" },
  { label: "Sucursales", icon: "📍", href: "/sucursales", color: "#EBF6FD" },
];
