import React, { useState, useEffect, useCallback, useRef } from "react";
import { MapPin, ChevronRight, ChevronLeft, Beer, IceCream, Zap, Wine, Cookie } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../atoms/Button";
import { LocationPermissionModal } from "../molecules/LocationPermissionModal";
import coronaImg from "figma:asset/7508da2467d33e80cba845bc3594aca9e7ea7799.png";
import botanasImg from "figma:asset/979d75ae6d036252e5c81b57835bfc68a039883a.png";
import hidratacionImg from "figma:asset/f1ee4434c4f32c0ed3bbdd7d17011e232f7fd506.png";
import heladosImg from "figma:asset/3184b0a3d8971a80a9d8b91ea315bc4f44a6fe73.png";
import vinosImg from "figma:asset/5b9982ab82efe4c428a7b3a5327ead52a26923d9.png";

interface HeroSlide {
  id: string;
  day: string;
  headline: string;
  subheadline: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  bgGradient: string;
  accentColor: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  icon: React.ReactNode;
}

const slides: HeroSlide[] = [
  {
    id: "miercoles",
    day: "Miércoles",
    headline: "Miércoles Cervecero",
    subheadline: "Los mejores precios en cervezas. 12 pack desde $189. Solo hoy en tu Kiosko más cercano.",
    badge: "Solo hoy",
    badgeBg: "#FCD700",
    badgeColor: "#1A1D2E",
    bgGradient: "linear-gradient(135deg, #045098 0%, #1387C7 50%, #C8E8F7 100%)",
    accentColor: "#FCD700",
    image: coronaImg,
    ctaLabel: "Ver cervezas",
    ctaHref: "/promociones",
    icon: <Beer className="w-5 h-5" />,
  },
  {
    id: "botanas",
    day: "Jueves",
    headline: "Jueves de Botanas",
    subheadline: "Combos irresistibles en tus snacks favoritos. Doritos + bebida desde $45.",
    badge: "Combo",
    badgeBg: "#FF0200",
    badgeColor: "#FFFFFF",
    bgGradient: "linear-gradient(135deg, #DB3714 0%, #FF0200 50%, #FFD5D5 100%)",
    accentColor: "#FCD700",
    image: botanasImg,
    ctaLabel: "Ver botanas",
    ctaHref: "/promociones",
    icon: <Cookie className="w-5 h-5" />,
  },
  {
    id: "hidratacion",
    day: "Viernes",
    headline: "Viernes de Hidratación",
    subheadline: "Bebidas y energéticos al 2x1. Electrolit, Gatorade y más al mejor precio.",
    badge: "2x1",
    badgeBg: "#51A639",
    badgeColor: "#FFFFFF",
    bgGradient: "linear-gradient(135deg, #2D6B1B 0%, #51A639 50%, #D4EDCA 100%)",
    accentColor: "#FCD700",
    image: hidratacionImg,
    ctaLabel: "Ver bebidas",
    ctaHref: "/promociones",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "helados",
    day: "Sábado",
    headline: "Sábado Heladero",
    subheadline: "Paletas y helados desde $25. Magnum, Holanda y más para refrescarte este fin de semana.",
    badge: "Nuevo",
    badgeBg: "#D4EDCA",
    badgeColor: "#2D6B1B",
    bgGradient: "linear-gradient(135deg, #1387C7 0%, #C8E8F7 50%, #EBF6FD 100%)",
    accentColor: "#FF0200",
    image: heladosImg,
    ctaLabel: "Ver helados",
    ctaHref: "/promociones",
    icon: <IceCream className="w-5 h-5" />,
  },
  {
    id: "vinos",
    day: "Domingo",
    headline: "Domingo de Vinos",
    subheadline: "Selección especial de vinos y licores con hasta 25% de descuento para tu reunión familiar.",
    badge: "-25%",
    badgeBg: "#FFF3B8",
    badgeColor: "#A07800",
    bgGradient: "linear-gradient(135deg, #3D0C3C 0%, #6B1849 50%, #FFD5D5 100%)",
    accentColor: "#FCD700",
    image: vinosImg,
    ctaLabel: "Ver vinos",
    ctaHref: "/promociones",
    icon: <Wine className="w-5 h-5" />,
  },
];

// Get today's slide based on day of week, default to first
function getTodaySlideIndex(): number {
  const dayMap: Record<number, number> = {
    0: 4, // Domingo → vinos
    1: 0, // Lunes → cervecero (fallback)
    2: 0, // Martes → cervecero (fallback)
    3: 0, // Miércoles → cervecero
    4: 1, // Jueves → botanas
    5: 2, // Viernes → hidratación
    6: 3, // Sábado → helados
  };
  return dayMap[new Date().getDay()] ?? 0;
}

export function HeroSection() {
  const [current, setCurrent] = useState(getTodaySlideIndex());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const isFirstSlide = useRef(true);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Auto-advance: 5s for today's slide (first), then 8s for the rest
  useEffect(() => {
    const delay = isFirstSlide.current ? 5000 : 8000;
    const timer = setTimeout(() => {
      isFirstSlide.current = false;
      next();
    }, delay);
    return () => clearTimeout(timer);
  }, [next]);

  const slide = slides[current];

  const handleGeolocate = () => {
    setLocationModalOpen(true);
  };

  const handleLocationGranted = (lat: number, lng: number) => {
    console.log("Ubicación obtenida:", lat, lng);
    // Could navigate to /sucursales with location params
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{ background: slide.bgGradient }}
      />

      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={slide.image}
          alt=""
          className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20 md:opacity-30 transition-opacity duration-700"
          style={{ maskImage: "linear-gradient(to right, transparent, black 40%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-20 md:py-16 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 min-h-[520px]">
        {/* Left: Content */}
        <div
          className="flex-1 flex flex-col gap-6 text-left z-10 transition-all duration-500"
          style={{ opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? "translateY(12px)" : "translateY(0)" }}
        >
          <div className="flex flex-col gap-4">
            {/* Day badge + Promo badge */}
            <div className="flex items-center gap-2 justify-start">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {slide.icon}
                {slide.day}
              </span>
              <span
                className="inline-flex items-center px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: slide.badgeBg,
                  color: slide.badgeColor,
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase" as const,
                }}
              >
                {slide.badge}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                margin: 0,
                textShadow: "0 2px 16px rgba(0,0,0,0.15)",
              }}
            >
              {slide.headline}
            </h1>

            <p
              className="max-w-lg"
              style={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.9)",
                margin: 0,
              }}
            >
              {slide.subheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-start">
            <Button
              variant="encuentralo"
              icon={<MapPin className="w-5 h-5" />}
              onClick={handleGeolocate}
              style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.2)" }}
            >
              Encontrar mi Kiosko
            </Button>
            <Link to={slide.ctaHref} className="no-underline">
              <Button
                variant="ghost"
                icon={<ChevronRight className="w-5 h-5" />}
                style={{
                  borderColor: "rgba(255,255,255,0.5)",
                  color: "#FFFFFF",
                }}
              >
                {slide.ctaLabel}
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Promo visual card */}
        <div
          className="flex-1 flex items-center justify-center z-10 max-w-md transition-all duration-500"
          style={{ opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? "scale(0.95)" : "scale(1)" }}
        >
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              aspectRatio: "4/5",
              maxHeight: "440px",
            }}
          >
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)" }}
            />
            {/* Badge on image */}
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: slide.badgeBg,
                  color: slide.badgeColor,
                  fontSize: "13px",
                  fontWeight: 800,
                }}
              >
                {slide.badge}
              </span>
            </div>
            {/* Bottom text */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  margin: "0 0 4px",
                  textShadow: "0 1px 8px rgba(0,0,0,0.3)",
                }}
              >
                {slide.headline}
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", margin: 0 }}>
                Disponible hoy en tu sucursal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className="transition-all duration-300 cursor-pointer rounded-full"
                style={{
                  width: i === current ? "32px" : "10px",
                  height: "10px",
                  backgroundColor: i === current ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                  border: "none",
                }}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Day indicators bar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 pt-4">
          <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer transition-all duration-200 whitespace-nowrap"
                style={{
                  backgroundColor: i === current ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                  border: i === current ? "1px solid rgba(255,255,255,0.4)" : "1px solid transparent",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: i === current ? 700 : 500,
                }}
              >
                {s.icon}
                <span className="hidden sm:inline">{s.day}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <LocationPermissionModal
        open={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
        onLocationGranted={handleLocationGranted}
      />
    </section>
  );
}