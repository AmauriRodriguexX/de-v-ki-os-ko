import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router";
import {
  Home,
  Landmark,
  Wallet,
  Smartphone,
  Gamepad2,
  GraduationCap,
  MoreHorizontal,
  ChevronRight as ChevronRightIcon,
  Search,
  Info,
  ChevronLeft,
  type LucideIcon,
} from "lucide-react";
import serviciosData from "../../imports/mikiosko-servicios.json";
import { ServiceLogo } from "../components/atoms/ServiceLogo";

// Category metadata
interface CategoryMeta {
  icon: LucideIcon;
  color: string;
  bg: string;
  description: string;
}

const categoryMeta: Record<string, CategoryMeta> = {
  "servicios-del-hogar": {
    icon: Home,
    color: "#1387C7",
    bg: "#EBF6FD",
    description: "Paga tus servicios de luz, teléfono, internet y televisión",
  },
  "servicios-financieros": {
    icon: Landmark,
    color: "#045098",
    bg: "#E0EEFA",
    description: "Depósitos, pagos de tarjeta y retiros en efectivo",
  },
  "servicios-medios-de-pago": {
    icon: Wallet,
    color: "#51A639",
    bg: "#E8F5E0",
    description: "Paga tus compras en línea y créditos de tienda",
  },
  "servicios-tiempo-aire-y-datos": {
    icon: Smartphone,
    color: "#DB3714",
    bg: "#FFF0EC",
    description: "Recargas telefónicas y paquetes de datos para todas las compañías",
  },
  "servicios-entretenimiento": {
    icon: Gamepad2,
    color: "#8B1A4A",
    bg: "#FCEEF5",
    description: "Tarjetas de regalo, PINs y suscripciones de entretenimiento",
  },
  "servicios-escuela-y-gobierno": {
    icon: GraduationCap,
    color: "#A07800",
    bg: "#FFF8E0",
    description: "Pagos de colegiaturas y trámites institucionales",
  },
  "servicios-otros-servicios": {
    icon: MoreHorizontal,
    color: "#4A5068",
    bg: "#F0F2F8",
    description: "Pagos de catálogos, casetas y otros servicios adicionales",
  },
};

// Brand logo URLs from mikiosko.mx
const serviceLogos: Record<string, string> = {
  cfe: "https://mikiosko.mx/wp-content/uploads/2025/02/CFE-luz.png",
  telmex: "https://mikiosko.mx/wp-content/uploads/2025/02/telmex.webp",
  mega: "https://mikiosko.mx/wp-content/uploads/2025/02/mega.png",
  izzi: "https://mikiosko.mx/wp-content/uploads/2025/02/izzi.png",
  wizz: "https://mikiosko.mx/wp-content/uploads/2025/02/wizz.png",
  totalplay: "https://mikiosko.mx/wp-content/uploads/2025/02/totalplay.png",
  sky: "https://mikiosko.mx/wp-content/uploads/2025/02/sky.png",
  dish: "https://mikiosko.mx/wp-content/uploads/2025/02/dish.png",
  "star-tv": "https://mikiosko.mx/wp-content/uploads/2025/02/star-tv.png",
  santander: "https://mikiosko.mx/wp-content/uploads/2025/11/logo_santander_v2.png",
  bbva: "https://mikiosko.mx/wp-content/uploads/2025/02/BBVA_400x400.png",
  "retiros-multibancos": "https://mikiosko.mx/wp-content/uploads/2025/02/RETIROS-MULTIBANCOS.png",
  "compartamos-banco": "https://mikiosko.mx/wp-content/uploads/2025/02/COMPARTAMOS-BANCO.png",
  "amazon-pago": "https://mikiosko.mx/wp-content/uploads/2025/02/amazon.png",
  dapp: "https://mikiosko.mx/wp-content/uploads/2025/02/dapp.png",
  klar: "https://mikiosko.mx/wp-content/uploads/2025/02/klar.png",
  elektra: "https://mikiosko.mx/wp-content/uploads/2025/02/elektra.png",
  "mercado-pago": "https://mikiosko.mx/wp-content/uploads/2025/02/mercado-pago.png",
  bradescard: "https://mikiosko.mx/wp-content/uploads/2025/02/bradescard.png",
  passport: "https://mikiosko.mx/wp-content/uploads/2025/05/passport.jpg",
  "todito-cash": "https://mikiosko.mx/wp-content/uploads/2025/02/todito-cash.png",
  telcel: "https://mikiosko.mx/wp-content/uploads/2025/02/TELCEL.png",
  att: "https://mikiosko.mx/wp-content/uploads/2025/02/ATT.png",
  unefon: "https://mikiosko.mx/wp-content/uploads/2025/02/unefon.png",
  movistar: "https://mikiosko.mx/wp-content/uploads/2025/02/movistar.png",
  "virgin-mobile": "https://mikiosko.mx/wp-content/uploads/2025/02/virgin-mobile.png",
  bait: "https://mikiosko.mx/wp-content/uploads/2025/02/bait.png",
  "diri-movil": "https://mikiosko.mx/wp-content/uploads/2025/02/diri.png",
  pillofon: "https://mikiosko.mx/wp-content/uploads/2025/02/pillowfon.png",
  freedompop: "https://mikiosko.mx/wp-content/uploads/2025/02/freedomPop.png",
  google: "https://mikiosko.mx/wp-content/uploads/2025/02/google.png",
  netflix: "https://mikiosko.mx/wp-content/uploads/2025/02/netflix.png",
  spotify: "https://mikiosko.mx/wp-content/uploads/2025/02/spotify.png",
  "amazon-entretenimiento": "https://mikiosko.mx/wp-content/uploads/2025/02/amazon-1.png",
  xbox: "https://mikiosko.mx/wp-content/uploads/2025/02/xbox.png",
  nintendo: "https://mikiosko.mx/wp-content/uploads/2025/02/Nintendo.png",
  visa: "https://mikiosko.mx/wp-content/uploads/2025/02/visa.png",
  playstation: "https://mikiosko.mx/wp-content/uploads/2025/02/playstation.png",
  itunes: "https://mikiosko.mx/wp-content/uploads/2025/02/itunes.png",
  garena: "https://mikiosko.mx/wp-content/uploads/2025/02/GARENA-280x280-1.webp",
  "vix-premium": "https://mikiosko.mx/wp-content/uploads/2025/02/vix.png",
  roblox: "https://mikiosko.mx/wp-content/uploads/2025/05/Roblox.jpg",
  "uber-eats": "https://mikiosko.mx/wp-content/uploads/2025/05/Uber-Eats.jpg",
  "paramount-plus": "https://mikiosko.mx/wp-content/uploads/2025/05/PARAMOUNT.jpg",
  cinepolis: "https://mikiosko.mx/wp-content/uploads/2025/05/Cinepolis.jpg",
  itc: "https://mikiosko.mx/wp-content/uploads/2025/02/instituto-tec-cguzman.png",
  "universidad-de-colima": "https://mikiosko.mx/wp-content/uploads/2025/02/universidad-colima.png",
  pabs: "https://mikiosko.mx/wp-content/uploads/2025/02/pabs.png",
  betterware: "https://mikiosko.mx/wp-content/uploads/2025/02/BETTERWARE.png",
  televia: "https://mikiosko.mx/wp-content/uploads/2025/02/televia.png",
  ilusion: "https://mikiosko.mx/wp-content/uploads/2025/02/ILUSION.png",
  lbel: "https://mikiosko.mx/wp-content/uploads/2025/02/L-label.png",
  andrea: "https://mikiosko.mx/wp-content/uploads/2025/02/andrea.png",
  tupperware: "https://mikiosko.mx/wp-content/uploads/2025/02/tupperware.png",
  zermat: "https://mikiosko.mx/wp-content/uploads/2025/02/Zermat.png",
  "price-shoes": "https://mikiosko.mx/wp-content/uploads/2025/02/price-shoes.png",
  just: "https://mikiosko.mx/wp-content/uploads/2025/02/just.png",
  fuller: "https://mikiosko.mx/wp-content/uploads/2025/02/fuller.png",
  "yves-rocher": "https://mikiosko.mx/wp-content/uploads/2025/02/yves-rocher.png",
};

export function Servicios() {
  const { category } = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState<string | null>(category ?? null);
  const [searchText, setSearchText] = useState("");
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll pills state
  const pillsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = useCallback(() => {
    const el = pillsRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = pillsRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    const ro = new ResizeObserver(updateScrollButtons);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      ro.disconnect();
    };
  }, [updateScrollButtons]);

  const scrollPills = useCallback((direction: "left" | "right") => {
    const el = pillsRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
      setTimeout(() => {
        sectionRefs.current[category]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [category]);

  const categorias = serviciosData.categorias;

  const filteredCategorias = searchText
    ? categorias
        .map((cat) => ({
          ...cat,
          servicios: cat.servicios.filter(
            (s) =>
              s.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
              s.descripcion.toLowerCase().includes(searchText.toLowerCase())
          ),
        }))
        .filter((cat) => cat.servicios.length > 0)
    : categorias;

  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    sectionRefs.current[catId]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const totalServices = categorias.reduce((acc, cat) => acc + cat.servicios.length, 0);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div className="w-full py-8 md:py-12" style={{ backgroundColor: "#EBF6FD" }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#1A1D2E",
              margin: 0,
            }}
          >
            Servicios
          </h1>
          <p style={{ fontSize: "18px", color: "#4A5068", margin: "8px 0 0" }}>
            Mas de {totalServices} servicios disponibles en todas nuestras sucursales
          </p>

          {/* Search */}
          <div className="relative mt-6 max-w-lg">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
              style={{ color: "#8890AA" }}
            />
            <input
              type="text"
              placeholder="Buscar servicio, marca o empresa..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl outline-none"
              style={{
                border: "1.5px solid #C8E8F7",
                fontSize: "15px",
                backgroundColor: "#FFFFFF",
              }}
            />
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div
        className="w-full sticky top-16 z-20"
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E2E7F2",
          boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 relative">
          {canScrollLeft && (
            <button
              onClick={() => scrollPills("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full cursor-pointer transition-all duration-200"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1.5px solid #E2E7F2",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              }}
              aria-label="Desplazar izquierda"
            >
              <ChevronLeft className="w-4 h-4" style={{ color: "#4A5068" }} />
            </button>
          )}

          {canScrollLeft && (
            <div
              className="hidden md:block absolute left-8 top-0 bottom-0 w-8 z-[5] pointer-events-none"
              style={{ background: "linear-gradient(to right, #FFFFFF, transparent)" }}
            />
          )}

          <div
            ref={pillsRef}
            className="flex gap-2 py-3 overflow-x-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              paddingLeft: canScrollLeft ? "28px" : "0",
              paddingRight: canScrollRight ? "28px" : "0",
            }}
          >
            <button
              onClick={() => {
                setActiveCategory(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full cursor-pointer whitespace-nowrap transition-all duration-200"
              style={{
                backgroundColor: !activeCategory ? "#1387C7" : "#FFFFFF",
                color: !activeCategory ? "#FFFFFF" : "#4A5068",
                border: !activeCategory ? "1.5px solid #1387C7" : "1.5px solid #E2E7F2",
                fontSize: "13px",
                fontWeight: !activeCategory ? 700 : 500,
              }}
            >
              Todos
            </button>
            {categorias.map((cat) => {
              const meta = categoryMeta[cat.id];
              const isCatActive = activeCategory === cat.id;
              const Icon = meta?.icon ?? MoreHorizontal;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full cursor-pointer whitespace-nowrap transition-all duration-200"
                  style={{
                    backgroundColor: isCatActive ? meta?.color ?? "#1387C7" : "#FFFFFF",
                    color: isCatActive ? "#FFFFFF" : "#4A5068",
                    border: isCatActive
                      ? `1.5px solid ${meta?.color ?? "#1387C7"}`
                      : "1.5px solid #E2E7F2",
                    fontSize: "13px",
                    fontWeight: isCatActive ? 700 : 500,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.nombre}
                </button>
              );
            })}
          </div>

          {canScrollRight && (
            <div
              className="hidden md:block absolute right-8 top-0 bottom-0 w-8 z-[5] pointer-events-none"
              style={{ background: "linear-gradient(to left, #FFFFFF, transparent)" }}
            />
          )}

          {canScrollRight && (
            <button
              onClick={() => scrollPills("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full cursor-pointer transition-all duration-200"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1.5px solid #E2E7F2",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              }}
              aria-label="Desplazar derecha"
            >
              <ChevronRightIcon className="w-4 h-4" style={{ color: "#4A5068" }} />
            </button>
          )}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        div[style*="scrollbarWidth"]::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Services sections */}
      <section className="w-full py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-14">
          {filteredCategorias.map((cat) => {
            const meta = categoryMeta[cat.id];
            const Icon = meta?.icon ?? MoreHorizontal;

            return (
              <div
                key={cat.id}
                ref={(el) => {
                  sectionRefs.current[cat.id] = el;
                }}
                className="scroll-mt-32"
              >
                {/* Category header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: meta?.bg ?? "#F0F2F8",
                      color: meta?.color ?? "#4A5068",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2
                      style={{
                        fontSize: "clamp(22px, 3vw, 28px)",
                        fontWeight: 700,
                        color: "#1A1D2E",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {cat.nombre}
                    </h2>
                    <p style={{ fontSize: "15px", color: "#4A5068", margin: 0 }}>
                      {meta?.description ?? ""}{" "}
                      <span style={{ color: "#8890AA" }}>
                        · {cat.servicios.length} servicio{cat.servicios.length !== 1 ? "s" : ""}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.servicios.map((svc) => {
                    const logoUrl = serviceLogos[svc.id];
                    const isExpanded = expandedService === svc.id;
                    return (
                      <div
                        key={svc.id}
                        className="flex flex-col rounded-xl transition-all duration-200 hover:-translate-y-[1px] cursor-pointer"
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: isExpanded
                            ? `1.5px solid ${meta?.color ?? "#1387C7"}`
                            : "1.5px solid #E2E7F2",
                          boxShadow: isExpanded
                            ? `0 4px 16px ${meta?.color ?? "#1387C7"}20`
                            : "0 1px 4px rgba(0,0,0,0.04)",
                        }}
                        onClick={() =>
                          setExpandedService(isExpanded ? null : svc.id)
                        }
                      >
                        <div className="flex items-center gap-3 p-4">
                          <div
                            className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 overflow-hidden relative"
                            style={{
                              backgroundColor: "#FFFFFF",
                              border: "1px solid #E2E7F2",
                            }}
                          >
                            <ServiceLogo
                              src={logoUrl}
                              alt={svc.nombre}
                              fallbackColor={meta?.color ?? "#4A5068"}
                              fallbackBg={meta?.bg ?? "#F0F2F8"}
                            />
                          </div>
                          <span
                            className="flex-1"
                            style={{
                              fontSize: "15px",
                              fontWeight: 600,
                              color: "#1A1D2E",
                            }}
                          >
                            {svc.nombre}
                          </span>
                          <ChevronRightIcon
                            className="w-4 h-4 shrink-0 transition-transform duration-200"
                            style={{
                              color: "#BEC4D2",
                              transform: isExpanded ? "rotate(90deg)" : "rotate(0)",
                            }}
                          />
                        </div>

                        {/* Expanded details */}
                        {isExpanded && (
                          <div
                            className="px-4 pb-4 pt-0"
                            style={{ borderTop: "1px solid #E2E7F2" }}
                          >
                            <div
                              className="flex items-start gap-2 mt-3 p-3 rounded-lg"
                              style={{ backgroundColor: "#F7F9FF" }}
                            >
                              <Info
                                className="w-4 h-4 shrink-0 mt-0.5"
                                style={{ color: meta?.color ?? "#8890AA" }}
                              />
                              <p
                                style={{
                                  fontSize: "13px",
                                  color: "#4A5068",
                                  margin: 0,
                                  lineHeight: 1.6,
                                }}
                              >
                                {svc.descripcion}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* No results */}
          {filteredCategorias.length === 0 && (
            <div className="flex flex-col items-center gap-4 py-16">
              <Search className="w-12 h-12" style={{ color: "#C8E8F7" }} />
              <p style={{ fontSize: "18px", color: "#8890AA", textAlign: "center" }}>
                No se encontraron servicios para &ldquo;{searchText}&rdquo;
              </p>
              <button
                onClick={() => setSearchText("")}
                className="px-5 py-2.5 rounded-xl cursor-pointer"
                style={{
                  backgroundColor: "#EBF6FD",
                  border: "1.5px solid #C8E8F7",
                  color: "#1387C7",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                Limpiar busqueda
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <div
        className="w-full py-10"
        style={{
          background: "linear-gradient(135deg, #045098 0%, #1387C7 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-4">
          <h3
            style={{
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            No encuentras el servicio que buscas?
          </h3>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", margin: 0 }}>
            Visita tu sucursal mas cercana y pregunta por nuestro catalogo completo de servicios disponibles.
          </p>
        </div>
      </div>
    </div>
  );
}