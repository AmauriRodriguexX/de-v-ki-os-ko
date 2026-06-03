import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router";
import {
  Search,
  MapPin,
  Menu,
  X,
  FileText,
  ChevronDown,
  Beer,
  Star,
  IceCream,
  Zap,
  Cookie,
  Wine,
  Home,
  Landmark,
  Wallet,
  Smartphone,
  Gamepad2,
  GraduationCap,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";
import kioskoLogo from "figma:asset/cb8228e32e6fa9418a2c1113e2b9c576071ceb83.png";
import yayaLogo from "figma:asset/c7490a2487aafb5bcfe6d42e8f9cb869d7abde70.png";

// --- Mega Menu Data ---
const sucursalesCities = [
  { label: "Colima", slug: "colima", icon: <MapPin className="w-4 h-4" />, count: 5 },
  { label: "Puerto Vallarta", slug: "puerto-vallarta", icon: <MapPin className="w-4 h-4" />, count: 3 },
  { label: "Tepic", slug: "tepic", icon: <MapPin className="w-4 h-4" />, count: 5 },
  { label: "Mazatlán", slug: "mazatlan", icon: <MapPin className="w-4 h-4" />, count: 5 },
];

const promoCategories = [
  { label: "Combos del Día", slug: "combos", icon: <Sparkles className="w-4 h-4" />, color: "#A07800" },
  { label: "Miércoles Cervecero", slug: "miercoles-cervecero", icon: <Beer className="w-4 h-4" />, color: "#045098" },
  { label: "Súper Lunes", slug: "super-lunes", icon: <Star className="w-4 h-4" />, color: "#FF0200" },
  { label: "Helados", slug: "helados", icon: <IceCream className="w-4 h-4" />, color: "#E91E8C" },
  { label: "Hidratación", slug: "hidratacion", icon: <Zap className="w-4 h-4" />, color: "#1387C7" },
  { label: "Botanas", slug: "botanas", icon: <Cookie className="w-4 h-4" />, color: "#F5A623" },
  { label: "Vinos y Licores", slug: "vinos-y-licores", icon: <Wine className="w-4 h-4" />, color: "#8B1A4A" },
];

const serviciosItems = [
  { label: "Servicios del Hogar", slug: "servicios-del-hogar", icon: <Home className="w-4 h-4" />, group: "cat", count: 9 },
  { label: "Servicios Financieros", slug: "servicios-financieros", icon: <Landmark className="w-4 h-4" />, group: "cat", count: 4 },
  { label: "Medios de Pago", slug: "servicios-medios-de-pago", icon: <Wallet className="w-4 h-4" />, group: "cat", count: 8 },
  { label: "Tiempo Aire y Datos", slug: "servicios-tiempo-aire-y-datos", icon: <Smartphone className="w-4 h-4" />, group: "cat", count: 9 },
  { label: "Entretenimiento", slug: "servicios-entretenimiento", icon: <Gamepad2 className="w-4 h-4" />, group: "cat", count: 15 },
  { label: "Escuela y Gobierno", slug: "servicios-escuela-y-gobierno", icon: <GraduationCap className="w-4 h-4" />, group: "cat", count: 2 },
  { label: "Otros Servicios", slug: "servicios-otros-servicios", icon: <MoreHorizontal className="w-4 h-4" />, group: "cat", count: 12 },
];

type OpenMenu = "sucursales" | "promociones" | "servicios" | null;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileExpanded, setMobileExpanded] = useState<OpenMenu>(null);
  const location = useLocation();
  const menuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleMouseEnter = useCallback((menu: OpenMenu) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setOpenMenu(menu);
  }, []);

  const handleMouseLeave = useCallback(() => {
    menuTimeoutRef.current = setTimeout(() => setOpenMenu(null), 200);
  }, []);

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 w-full"
      style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E2E7F2",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline shrink-0">
          <img
            src={kioskoLogo}
            alt="Kiosko"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {/* Sucursales */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("sucursales")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/sucursales"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg no-underline transition-all duration-200"
              style={{
                fontWeight: 600,
                fontSize: "15px",
                color: isActive("/sucursales") || openMenu === "sucursales" ? "#1387C7" : "#4A5068",
                backgroundColor: openMenu === "sucursales" ? "#EBF6FD" : isActive("/sucursales") ? "#EBF6FD" : "transparent",
              }}
            >
              <MapPin className="w-4 h-4" />
              Sucursales
              <ChevronDown
                className="w-3.5 h-3.5 transition-transform duration-200"
                style={{ transform: openMenu === "sucursales" ? "rotate(180deg)" : "rotate(0)" }}
              />
            </Link>

            {/* Dropdown */}
            {openMenu === "sucursales" && (
              <div
                className="absolute top-full left-0 mt-1 py-2 rounded-xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
                  border: "1px solid #E2E7F2",
                  minWidth: "260px",
                  animation: "menuFadeIn 0.15s ease-out",
                }}
              >
                <div className="px-4 py-2 mb-1">
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#8890AA", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Ciudades
                  </span>
                </div>
                {sucursalesCities.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/sucursales/${city.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 no-underline transition-colors duration-150"
                    style={{ color: "#1A1D2E" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EBF6FD")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#EBF6FD", color: "#1387C7" }}
                    >
                      {city.icon}
                    </div>
                    <div className="flex flex-col">
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>{city.label}</span>
                      <span style={{ fontSize: "12px", color: "#8890AA" }}>{city.count} sucursales</span>
                    </div>
                  </Link>
                ))}
                <div className="mt-1 pt-2 mx-3" style={{ borderTop: "1px solid #E2E7F2" }}>
                  <Link
                    to="/sucursales"
                    className="flex items-center gap-2 px-2 py-2 rounded-lg no-underline transition-colors duration-150"
                    style={{ color: "#1387C7", fontSize: "13px", fontWeight: 600 }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EBF6FD")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    Ver todas las sucursales →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Promociones */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("promociones")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/promociones"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg no-underline transition-all duration-200"
              style={{
                fontWeight: 600,
                fontSize: "15px",
                color: isActive("/promociones") || openMenu === "promociones" ? "#1387C7" : "#4A5068",
                backgroundColor: openMenu === "promociones" ? "#EBF6FD" : isActive("/promociones") ? "#EBF6FD" : "transparent",
              }}
            >
              Promociones
              <span className="relative inline-flex items-center justify-center w-2.5 h-2.5">
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#FF0200", animation: "navBadgePulse 2s ease-out infinite" }}
                />
                <span className="relative w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FF0200" }} />
              </span>
              <ChevronDown
                className="w-3.5 h-3.5 transition-transform duration-200"
                style={{ transform: openMenu === "promociones" ? "rotate(180deg)" : "rotate(0)" }}
              />
            </Link>

            {openMenu === "promociones" && (
              <div
                className="absolute top-full left-0 mt-1 py-2 rounded-xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
                  border: "1px solid #E2E7F2",
                  minWidth: "260px",
                  animation: "menuFadeIn 0.15s ease-out",
                }}
              >
                <div className="px-4 py-2 mb-1">
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#8890AA", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Categorías
                  </span>
                </div>
                {promoCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/promociones/${cat.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 no-underline transition-colors duration-150"
                    style={{ color: "#1A1D2E" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F7F9FF")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                    >
                      {cat.icon}
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: 600 }}>{cat.label}</span>
                  </Link>
                ))}
                <div className="mt-1 pt-2 mx-3" style={{ borderTop: "1px solid #E2E7F2" }}>
                  <Link
                    to="/promociones"
                    className="flex items-center gap-2 px-2 py-2 rounded-lg no-underline transition-colors duration-150"
                    style={{ color: "#1387C7", fontSize: "13px", fontWeight: 600 }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EBF6FD")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    Ver todas las promociones →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* YAYA - no dropdown */}
          <Link
            to="/yaya"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg no-underline transition-all duration-200"
            style={{
              fontWeight: 600,
              fontSize: "15px",
              color: isActive("/yaya") ? "#1387C7" : "#4A5068",
              backgroundColor: isActive("/yaya") ? "#EBF6FD" : "transparent",
            }}
            onMouseEnter={() => setOpenMenu(null)}
          >
            <img src={yayaLogo} alt="YAYA" className="w-5 h-5 rounded object-cover" />
            YAYA
          </Link>

          {/* Servicios */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("servicios")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/servicios"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg no-underline transition-all duration-200"
              style={{
                fontWeight: 600,
                fontSize: "15px",
                color: isActive("/servicios") || openMenu === "servicios" ? "#1387C7" : "#4A5068",
                backgroundColor: openMenu === "servicios" ? "#EBF6FD" : isActive("/servicios") ? "#EBF6FD" : "transparent",
              }}
            >
              Servicios
              <ChevronDown
                className="w-3.5 h-3.5 transition-transform duration-200"
                style={{ transform: openMenu === "servicios" ? "rotate(180deg)" : "rotate(0)" }}
              />
            </Link>

            {openMenu === "servicios" && (
              <div
                className="absolute top-full right-0 mt-1 py-3 px-4 rounded-xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
                  border: "1px solid #E2E7F2",
                  width: "380px",
                  animation: "menuFadeIn 0.15s ease-out",
                }}
              >
                {/* Service categories */}
                <div className="mb-3">
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#8890AA", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Servicios
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {serviciosItems
                    .filter((s) => s.group === "cat")
                    .map((svc) => (
                      <Link
                        key={svc.slug}
                        to={`/servicios/${svc.slug}`}
                        className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl no-underline transition-all duration-150"
                        style={{ backgroundColor: "#EBF6FD", color: "#045098" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#C8E8F7";
                          e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#EBF6FD";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: "#FFFFFF" }}
                        >
                          {svc.icon}
                        </div>
                        <span style={{ fontSize: "12px", fontWeight: 700, textAlign: "center" }}>
                          {svc.label}
                        </span>
                      </Link>
                    ))}
                </div>

                <div className="mt-3 pt-2" style={{ borderTop: "1px solid #E2E7F2" }}>
                  <Link
                    to="/servicios"
                    className="flex items-center gap-2 px-2 py-2 rounded-lg no-underline transition-colors duration-150"
                    style={{ color: "#1387C7", fontSize: "13px", fontWeight: 600 }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EBF6FD")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    Ver todos los servicios →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => { setSearchOpen(!searchOpen); setOpenMenu(null); }}
            className="w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-colors"
            style={{ backgroundColor: searchOpen ? "#EBF6FD" : "#F7F9FF", border: "none" }}
          >
            <Search className="w-5 h-5" style={{ color: "#4A5068" }} />
          </button>
          <Link
            to="/facturacion"
            className="flex items-center gap-1.5 px-4 py-2 no-underline transition-colors"
            style={{
              border: "2px solid #1387C7",
              color: "#1387C7",
              fontWeight: 600,
              fontSize: "14px",
              borderRadius: "16px",
            }}
          >
            <FileText className="w-4 h-4" />
            Facturación
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none" }}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" style={{ color: "#1A1D2E" }} />
          ) : (
            <Menu className="w-6 h-6" style={{ color: "#1A1D2E" }} />
          )}
        </button>
      </div>

      {/* Search bar expanded */}
      {searchOpen && (
        <div className="hidden lg:block border-t" style={{ borderColor: "#E2E7F2" }}>
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#8890AA" }} />
              <input
                type="text"
                placeholder="Busca productos, sucursales o promos..."
                autoFocus
                className="w-full pl-12 pr-4 py-3 rounded-full border-none outline-none"
                style={{ backgroundColor: "#F7F9FF", fontSize: "16px" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t overflow-y-auto"
          style={{ borderColor: "#E2E7F2", backgroundColor: "#FFFFFF", maxHeight: "calc(100vh - 64px)" }}
        >
          <nav className="flex flex-col p-4 gap-1">
            {/* Sucursales accordion */}
            <MobileAccordion
              label="Sucursales"
              icon={<MapPin className="w-4 h-4" />}
              isActive={isActive("/sucursales")}
              isExpanded={mobileExpanded === "sucursales"}
              onToggle={() => setMobileExpanded(mobileExpanded === "sucursales" ? null : "sucursales")}
            >
              {sucursalesCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/sucursales/${city.slug}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg no-underline"
                  style={{ color: "#4A5068", fontSize: "14px", fontWeight: 500 }}
                  onClick={() => setMobileOpen(false)}
                >
                  <MapPin className="w-3.5 h-3.5" style={{ color: "#1387C7" }} />
                  {city.label}
                  <span style={{ fontSize: "12px", color: "#8890AA", marginLeft: "auto" }}>
                    {city.count}
                  </span>
                </Link>
              ))}
              <Link
                to="/sucursales"
                className="flex items-center gap-2 px-4 py-2 rounded-lg no-underline mt-1"
                style={{ color: "#1387C7", fontSize: "13px", fontWeight: 600 }}
                onClick={() => setMobileOpen(false)}
              >
                Ver todas →
              </Link>
            </MobileAccordion>

            {/* Promociones accordion */}
            <MobileAccordion
              label="Promociones"
              isActive={isActive("/promociones")}
              isExpanded={mobileExpanded === "promociones"}
              onToggle={() => setMobileExpanded(mobileExpanded === "promociones" ? null : "promociones")}
              badge
            >
              {promoCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/promociones/${cat.slug}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg no-underline"
                  style={{ color: "#4A5068", fontSize: "14px", fontWeight: 500 }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span style={{ color: cat.color }}>{cat.icon}</span>
                  {cat.label}
                </Link>
              ))}
              <Link
                to="/promociones"
                className="flex items-center gap-2 px-4 py-2 rounded-lg no-underline mt-1"
                style={{ color: "#1387C7", fontSize: "13px", fontWeight: 600 }}
                onClick={() => setMobileOpen(false)}
              >
                Ver todas →
              </Link>
            </MobileAccordion>

            {/* YAYA */}
            <Link
              to="/yaya"
              className="flex items-center gap-2 px-4 py-3 rounded-xl no-underline"
              style={{
                fontWeight: 600,
                fontSize: "16px",
                color: isActive("/yaya") ? "#1387C7" : "#4A5068",
                backgroundColor: isActive("/yaya") ? "#EBF6FD" : "transparent",
              }}
              onClick={() => setMobileOpen(false)}
            >
              <img src={yayaLogo} alt="YAYA" className="w-5 h-5 rounded object-cover" />
              YAYA
            </Link>

            {/* Servicios accordion */}
            <MobileAccordion
              label="Servicios"
              isActive={isActive("/servicios")}
              isExpanded={mobileExpanded === "servicios"}
              onToggle={() => setMobileExpanded(mobileExpanded === "servicios" ? null : "servicios")}
            >
              <div className="px-3">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {serviciosItems
                    .filter((s) => s.group === "cat")
                    .map((svc) => (
                      <Link
                        key={svc.slug}
                        to={`/servicios/${svc.slug}`}
                        className="flex flex-col items-center gap-1 py-2.5 px-2 rounded-xl no-underline"
                        style={{ backgroundColor: "#EBF6FD", color: "#045098", fontSize: "11px", fontWeight: 700, textAlign: "center" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {svc.icon}
                        {svc.label}
                      </Link>
                    ))}
                </div>
              </div>
              <Link
                to="/servicios"
                className="flex items-center gap-2 px-4 py-2 rounded-lg no-underline mt-2"
                style={{ color: "#1387C7", fontSize: "13px", fontWeight: 600 }}
                onClick={() => setMobileOpen(false)}
              >
                Ver todos →
              </Link>
            </MobileAccordion>

            {/* Facturación */}
            <Link
              to="/facturacion"
              className="flex items-center gap-2 px-4 py-3 no-underline mt-2"
              style={{
                border: "2px solid #1387C7",
                color: "#1387C7",
                fontWeight: 600,
                fontSize: "16px",
                borderRadius: "16px",
              }}
              onClick={() => setMobileOpen(false)}
            >
              <FileText className="w-4 h-4" />
              Facturación
            </Link>
          </nav>
        </div>
      )}

      {/* Dropdown animation */}
      <style>{`
        @keyframes menuFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes navBadgePulse {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(2.5); opacity: 0; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </header>
  );
}

// Mobile accordion sub-component
function MobileAccordion({
  label,
  icon,
  isActive,
  isExpanded,
  onToggle,
  badge,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  isActive: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  badge?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer"
        style={{
          fontWeight: 600,
          fontSize: "16px",
          color: isActive ? "#1387C7" : "#4A5068",
          backgroundColor: isExpanded ? "#F7F9FF" : isActive ? "#EBF6FD" : "transparent",
          border: "none",
          background: isExpanded ? "#F7F9FF" : isActive ? "#EBF6FD" : "transparent",
        }}
      >
        {icon}
        {label}
        {badge && (
          <span className="relative inline-flex items-center justify-center w-2.5 h-2.5">
            <span
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: "#FF0200", animation: "navBadgePulse 2s ease-out infinite" }}
            />
            <span className="relative w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FF0200" }} />
          </span>
        )}
        <ChevronDown
          className="w-4 h-4 ml-auto transition-transform duration-200"
          style={{
            color: "#8890AA",
            transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
          }}
        />
      </button>
      {isExpanded && (
        <div
          className="flex flex-col gap-0.5 pl-2 pb-2"
          style={{ animation: "menuFadeIn 0.15s ease-out" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}