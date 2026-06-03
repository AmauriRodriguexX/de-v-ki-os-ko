import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Star,
  Flame,
  TrendingUp,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { YayaPointsBadge } from "../molecules/YayaPointsBadge";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  oldPrice?: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  badgeIcon: React.ReactNode;
  category: string;
  image: string;
  yayaPoints?: number;
}

const products: Product[] = [
  {
    id: "1",
    name: "Cerveza Artesanal IPA",
    brand: "Craft Selection",
    price: "$89",
    oldPrice: "$119",
    badge: "Nuevo",
    badgeBg: "#1387C7",
    badgeColor: "#FFFFFF",
    badgeIcon: <Sparkles className="w-3 h-3" />,
    category: "Cervezas",
    image:
      "https://images.unsplash.com/photo-1761281254116-82a6bded6c30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwY3JhZnQlMjBiZWVyJTIwY2FucyUyMHN0b3JlfGVufDF8fHx8MTc3MzI5NjExNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    yayaPoints: 18,
  },
  {
    id: "2",
    name: "Energizante Voltio 473ml",
    brand: "Voltio",
    price: "$35",
    badge: "Popular",
    badgeBg: "#FF0200",
    badgeColor: "#FFFFFF",
    badgeIcon: <Flame className="w-3 h-3" />,
    category: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1766172435627-440d05dbbdf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGNhbiUyMG5lb258ZW58MXx8fHwxNzczMjk2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    yayaPoints: 7,
  },
  {
    id: "3",
    name: "Doritos Flamin' Hot 180g",
    brand: "Sabritas",
    price: "$45",
    oldPrice: "$55",
    badge: "Destacado",
    badgeBg: "#FCD700",
    badgeColor: "#1A1D2E",
    badgeIcon: <Star className="w-3 h-3" />,
    category: "Botanas",
    image:
      "https://images.unsplash.com/photo-1641693148759-843d17ceac24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBjaGlwcyUyMHNuYWNrJTIwYmFnfGVufDF8fHx8MTc3MzI2MTAzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    yayaPoints: 9,
  },
  {
    id: "4",
    name: "Cold Brew Vainilla 355ml",
    brand: "Café Kiosko",
    price: "$49",
    badge: "Nuevo",
    badgeBg: "#1387C7",
    badgeColor: "#FFFFFF",
    badgeIcon: <Sparkles className="w-3 h-3" />,
    category: "Café",
    image:
      "https://images.unsplash.com/photo-1761670835862-1ece89ae3d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwZHJpbmslMjBib3R0bGV8ZW58MXx8fHwxNzczMjk2MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    yayaPoints: 10,
  },
  {
    id: "5",
    name: "Chocolate Premium 70% Cacao",
    brand: "Selectos",
    price: "$65",
    badge: "Trending",
    badgeBg: "#51A639",
    badgeColor: "#FFFFFF",
    badgeIcon: <TrendingUp className="w-3 h-3" />,
    category: "Dulces",
    image:
      "https://images.unsplash.com/photo-1750085037110-d38f296e9613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBiYXIlMjBjYW5keSUyMHdyYXBwZXJ8ZW58MXx8fHwxNzczMjk2MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    yayaPoints: 13,
  },
  {
    id: "6",
    name: "Agua Mineral Limón 355ml",
    brand: "Topo Chico",
    price: "$22",
    oldPrice: "$28",
    badge: "Destacado",
    badgeBg: "#FCD700",
    badgeColor: "#1A1D2E",
    badgeIcon: <Star className="w-3 h-3" />,
    category: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1650412034038-c44b0ac9af0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFya2xpbmclMjB3YXRlciUyMGNhbiUyMGxpbWV8ZW58MXx8fHwxNzczMjk2MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    yayaPoints: 5,
  },
  {
    id: "7",
    name: "Paleta Helada Mango Chile",
    brand: "Kiosko Fresh",
    price: "$29",
    badge: "Nuevo",
    badgeBg: "#1387C7",
    badgeColor: "#FFFFFF",
    badgeIcon: <Sparkles className="w-3 h-3" />,
    category: "Helados",
    image:
      "https://images.unsplash.com/photo-1710915125520-2bb01788996a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMHBvcHNpY2xlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzczMjg5Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    yayaPoints: 6,
  },
  {
    id: "8",
    name: "Barra Proteína Choco-Coco",
    brand: "FitSnack",
    price: "$39",
    badge: "Popular",
    badgeBg: "#FF0200",
    badgeColor: "#FFFFFF",
    badgeIcon: <Flame className="w-3 h-3" />,
    category: "Saludable",
    image:
      "https://images.unsplash.com/photo-1678875525705-1952dd9dd430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwYmFyJTIwZml0bmVzcyUyMHNuYWNrfGVufDF8fHx8MTc3MzI5NjExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    yayaPoints: 8,
  },
];

const GAP = 20;

function usePerPage() {
  const [perPage, setPerPage] = useState(4);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setPerPage(1);
      else if (w < 1024) setPerPage(2);
      else setPerPage(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return perPage;
}

export function FeaturedProducts() {
  const perPage = usePerPage();
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / perPage);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Pixel-based offset for smooth translateX
  const [containerW, setContainerW] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) setContainerW(viewportRef.current.clientWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Reset page on breakpoint change
  useEffect(() => {
    setPage(0);
  }, [perPage]);

  const goTo = useCallback(
    (p: number) => {
      if (p < 0 || p >= totalPages) return;
      setPage(p);
    },
    [totalPages]
  );

  // Card width in px
  const cardW =
    containerW > 0 ? (containerW - (perPage - 1) * GAP) / perPage : 0;

  // Shift per page in px = full viewport + 1 gap
  const shiftPerPage = containerW + GAP;

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragDelta, setDragDelta] = useState(0);
  const dragStartX = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    setDragDelta(0);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragDelta(e.clientX - dragStartX.current);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = containerW * 0.15;
    if (dragDelta < -threshold && page < totalPages - 1) {
      setPage((p) => p + 1);
    } else if (dragDelta > threshold && page > 0) {
      setPage((p) => p - 1);
    }
    setDragDelta(0);
  };

  // Final translateX
  const baseX = -(page * shiftPerPage);
  const tx = baseX + (isDragging ? dragDelta : 0);

  return (
    <section
      className="w-full py-12 md:py-16 overflow-hidden"
      style={{ backgroundColor: "#F7F9FF" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" style={{ color: "#1387C7" }} />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#1387C7",
                }}
              >
                Lo más nuevo
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "#1A1D2E",
                margin: 0,
              }}
            >
              Productos destacados
            </h2>
            <p style={{ fontSize: "16px", color: "#4A5068", margin: 0 }}>
              Descubre lo nuevo que llegó a tu Kiosko
            </p>
          </div>

          {/* Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all"
              style={{
                backgroundColor: page > 0 ? "#FFFFFF" : "#EEF0F6",
                border: "1px solid #E2E5EE",
                opacity: page > 0 ? 1 : 0.4,
              }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: "#1A1D2E" }} />
            </button>
            <button
              onClick={() => goTo(page + 1)}
              disabled={page >= totalPages - 1}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all"
              style={{
                backgroundColor:
                  page < totalPages - 1 ? "#FFFFFF" : "#EEF0F6",
                border: "1px solid #E2E5EE",
                opacity: page < totalPages - 1 ? 1 : 0.4,
              }}
            >
              <ChevronRight
                className="w-5 h-5"
                style={{ color: "#1A1D2E" }}
              />
            </button>
          </div>
        </div>

        {/* Slider viewport */}
        <div
          ref={viewportRef}
          className="overflow-hidden"
          style={{ touchAction: "pan-y" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${tx}px)`,
              transition: isDragging
                ? "none"
                : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="group"
                style={{
                  width: `${cardW}px`,
                  flexShrink: 0,
                }}
              >
                {/* Image */}
                <div
                  className="relative rounded-2xl overflow-hidden mb-3"
                  style={{
                    aspectRatio: "3/4",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: product.badgeBg,
                        color: product.badgeColor,
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {product.badgeIcon}
                      {product.badge}
                    </span>
                  </div>

                  {/* Category pill */}
                  <div className="absolute bottom-3 left-3">
                    <span
                      className="px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(8px)",
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#4A5068",
                      }}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* YAYA points overlay */}
                  {product.yayaPoints && product.yayaPoints > 0 && (
                    <div className="absolute top-3 right-3">
                      <YayaPointsBadge points={product.yayaPoints} compact />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1 px-1">
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#8890AA",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {product.brand}
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#1A1D2E",
                      lineHeight: 1.3,
                    }}
                  >
                    {product.name}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span
                      style={{
                        fontSize: "21px",
                        fontWeight: 800,
                        color: "#1387C7",
                      }}
                    >
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#8890AA",
                          textDecoration: "line-through",
                        }}
                      >
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  width: page === i ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: page === i ? "#1387C7" : "#D1D5E0",
                  border: "none",
                }}
                aria-label={`Ir a página ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}