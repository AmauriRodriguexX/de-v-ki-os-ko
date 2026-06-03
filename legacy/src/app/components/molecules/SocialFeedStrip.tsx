import React, { useState, useRef, useEffect } from "react";
import { Instagram, Facebook, ExternalLink, Heart, MessageCircle, Share2, Play, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

function TikTokIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.86.12V9.01a6.27 6.27 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.77 1.52V6.84a4.84 4.84 0 0 1-1.01-.15Z" />
    </svg>
  );
}

interface SocialPost {
  id: string;
  network: "instagram" | "facebook" | "tiktok";
  type: "image" | "video" | "reel";
  image: string;
  caption: string;
  date: string;
  url: string;
  likes: number;
  comments: number;
  shares?: number;
  views?: number;
}

const mockPosts: SocialPost[] = [
  // Instagram posts
  {
    id: "ig-1",
    network: "instagram",
    type: "image",
    image: "https://images.unsplash.com/photo-1769485016826-a7d5bfe50119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZW5pZW5jZSUyMHN0b3JlJTIwaW50ZXJpb3IlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzM0MTQ2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Tu Kiosko favorito ahora luce increible. Ven a conocer el nuevo look de tu sucursal 🎉✨",
    date: "Hace 2 dias",
    url: "https://www.instagram.com/tiendaskiosko/",
    likes: 1243,
    comments: 87,
  },
  {
    id: "ig-2",
    network: "instagram",
    type: "reel",
    image: "https://images.unsplash.com/photo-1752962638825-468316c39ee4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMGdlbGF0byUyMGNvbG9yZnVsJTIwc2Nvb3BzfGVufDF8fHx8MTc3Mzc3MTkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Sabado Heladero 🍦 2x1 en helados todo el dia. ¿Cual es tu sabor favorito?",
    date: "Hace 4 dias",
    url: "https://www.instagram.com/tiendaskiosko/",
    likes: 2891,
    comments: 214,
    views: 45200,
  },
  {
    id: "ig-3",
    network: "instagram",
    type: "image",
    image: "https://images.unsplash.com/photo-1583124688253-60c350bc90d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGFydCUyMG1vcm5pbmclMjBjYWZlfGVufDF8fHx8MTc3Mzc3MTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Empieza tu mañana con el mejor cafe ☕ Solo $29 el combo cafe + pan dulce",
    date: "Hace 1 semana",
    url: "https://www.instagram.com/tiendaskiosko/",
    likes: 956,
    comments: 43,
  },
  // Facebook posts
  {
    id: "fb-1",
    network: "facebook",
    type: "image",
    image: "https://images.unsplash.com/photo-1772012936964-83cb4d6f4781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwYmVlciUyMGJvdHRsZXMlMjBpY2UlMjBzdW1tZXJ8ZW58MXx8fHwxNzczNzcxOTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Miercoles Cervecero 🍺 2x1 en cervezas seleccionadas. ¡Solo en tu Kiosko!",
    date: "Hace 3 dias",
    url: "https://www.facebook.com/TiendasKiosko",
    likes: 3412,
    comments: 198,
    shares: 456,
  },
  {
    id: "fb-2",
    network: "facebook",
    type: "image",
    image: "https://images.unsplash.com/photo-1758272133542-b3107b947fc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwY2VsZWJyYXRpbmclMjBwYXJ0eSUyMHNuYWNrcyUyMGRyaW5rc3xlbnwxfHx8fDE3NzM3NzE5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "¡Arma tu party pack! 🎊 Botanas + bebidas con descuento especial este fin de semana",
    date: "Hace 5 dias",
    url: "https://www.facebook.com/TiendasKiosko",
    likes: 1876,
    comments: 132,
    shares: 289,
  },
  {
    id: "fb-3",
    network: "facebook",
    type: "image",
    image: "https://images.unsplash.com/photo-1763888537845-8fcf31cb0570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwYm90dGxlcyUyMHJlZCUyMHNlbGVjdGlvbiUyMHN0b3JlfGVufDF8fHx8MTc3Mzc3MTkzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Domingo de Vinos 🍷 Hasta 30% en vinos seleccionados. Para disfrutar en familia",
    date: "Hace 1 semana",
    url: "https://www.facebook.com/TiendasKiosko",
    likes: 2104,
    comments: 156,
    shares: 312,
  },
  // TikTok posts
  {
    id: "tt-1",
    network: "tiktok",
    type: "video",
    image: "https://images.unsplash.com/photo-1708861619016-25ed5586687b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZW5pZW5jZSUyMHN0b3JlJTIwc25hY2tzJTIwY29sb3JmdWwlMjBkaXNwbGF5fGVufDF8fHx8MTc3Mzc3MTkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "POV: Entras a Kiosko solo por un chicle 🤣 #KioskoMoments #RelatableContent",
    date: "Hace 1 dia",
    url: "https://www.tiktok.com/@tiendaskiosko",
    likes: 15420,
    comments: 843,
    views: 234000,
  },
  {
    id: "tt-2",
    network: "tiktok",
    type: "video",
    image: "https://images.unsplash.com/photo-1694101493190-acc6c4418ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlwcyUyMHBvdGF0byUyMHNuYWNrJTIwYmFnJTIwcGFydHl8ZW58MXx8fHwxNzczNzcxOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Jueves de Botanas 🔥 ¿Cuantas te llevas? #JuevesDeBotanas #Kiosko",
    date: "Hace 3 dias",
    url: "https://www.tiktok.com/@tiendaskiosko",
    likes: 8932,
    comments: 412,
    views: 156000,
  },
  {
    id: "tt-3",
    network: "tiktok",
    type: "video",
    image: "https://images.unsplash.com/photo-1757800734076-5f94a34ec30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmlua3MlMjBzcG9ydHMlMjBoeWRyYXRpb24lMjBib3R0bGVzfGVufDF8fHx8MTc3Mzc3MTkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Viernes de Hidratacion 💧 Las mejores bebidas para tu workout #FitLife #Kiosko",
    date: "Hace 6 dias",
    url: "https://www.tiktok.com/@tiendaskiosko",
    likes: 6210,
    comments: 287,
    views: 98500,
  },
];

const networkMeta: Record<
  string,
  { icon: any; color: string; label: string; handle: string; url: string; bgGradient: string }
> = {
  instagram: {
    icon: Instagram,
    color: "#E1306C",
    label: "Instagram",
    handle: "@tiendaskiosko",
    url: "https://www.instagram.com/tiendaskiosko/",
    bgGradient: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  },
  facebook: {
    icon: Facebook,
    color: "#1877F2",
    label: "Facebook",
    handle: "Tiendas Kiosko",
    url: "https://www.facebook.com/TiendasKiosko",
    bgGradient: "linear-gradient(180deg, #1877F2, #0C5DC7)",
  },
  tiktok: {
    icon: TikTokIcon,
    color: "#000000",
    label: "TikTok",
    handle: "@tiendaskiosko",
    url: "https://www.tiktok.com/@tiendaskiosko",
    bgGradient: "linear-gradient(180deg, #000000, #1a1a2e)",
  },
};

const networks = ["todos", "instagram", "facebook", "tiktok"] as const;
type NetworkFilter = (typeof networks)[number];

function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

export function SocialFeedStrip() {
  const [activeFilter, setActiveFilter] = useState<NetworkFilter>("todos");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filtered = activeFilter === "todos"
    ? mockPosts
    : mockPosts.filter((p) => p.network === activeFilter);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    // Reset scroll position when filter changes
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
    // Small delay to let DOM update before recalculating scroll buttons
    const t = setTimeout(updateScrollButtons, 50);
    return () => clearTimeout(t);
  }, [activeFilter]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  // Use grid for filtered views (3 items), scroll for "todos" (9 items)
  const useGrid = activeFilter !== "todos";

  return (
    <section className="w-full py-12 md:py-16" style={{ backgroundColor: "#F7F9FF" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#1387C7",
                }}
              >
                Redes Sociales
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "#1A1D2E",
                margin: 0,
              }}
            >
              Últimas publicaciones
            </h2>
            <p style={{ fontSize: "18px", color: "#4A5068", margin: 0 }}>
              Entérate de lo que pasa en Kiosko
            </p>
          </div>

          {/* Filter tabs */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-1 self-start md:self-auto"
          >
            {networks.map((n) => {
              const isActive = activeFilter === n;
              const meta = n !== "todos" ? networkMeta[n] : null;
              const Icon = meta?.icon;
              return (
                <button
                  key={n}
                  onClick={() => setActiveFilter(n)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full cursor-pointer whitespace-nowrap transition-all duration-200 border-0"
                  style={{
                    backgroundColor: isActive ? (meta ? meta.color : "#1387C7") : "#FFFFFF",
                    border: isActive ? "none" : "1.5px solid #E2E7F2",
                    color: isActive ? "#FFFFFF" : "#4A5068",
                    fontSize: "14px",
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" style={{ color: isActive ? "#FFFFFF" : "#8890AA" }} />}
                  {n === "todos" ? "Todos" : meta!.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          {/* Scroll arrows — only for scroll mode on desktop */}
          {!useGrid && canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center cursor-pointer border-0 transition-all hover:scale-110"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: "#1A1D2E" }} />
            </button>
          )}
          {!useGrid && canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center cursor-pointer border-0 transition-all hover:scale-110"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: "#1A1D2E" }} />
            </button>
          )}

          {/* Network header when filtered */}
          {useGrid && activeFilter !== "todos" && (
            <div className="flex items-center gap-3 mb-5">
              {(() => {
                const meta = networkMeta[activeFilter];
                const Icon = meta.icon;
                return (
                  <>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: meta.bgGradient }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#FFFFFF" }} />
                    </div>
                    <div className="flex flex-col">
                      <span style={{ fontSize: "16px", fontWeight: 700, color: "#1A1D2E" }}>
                        {meta.label}
                      </span>
                      <span style={{ fontSize: "13px", color: "#8890AA" }}>
                        {meta.handle} · {filtered.length} publicaciones
                      </span>
                    </div>
                    <a
                      href={meta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline ml-auto px-4 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        backgroundColor: meta.color,
                        color: "#FFFFFF",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      Seguir
                    </a>
                  </>
                );
              })()}
            </div>
          )}

          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className={
              useGrid
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                : "flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory"
            }
            style={useGrid ? {} : { scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filtered.map((post) => {
              const meta = networkMeta[post.network];
              const Icon = meta.icon;
              return (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group no-underline flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    useGrid ? "" : "snap-start shrink-0"
                  }`}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)",
                    ...(useGrid ? {} : { width: "min(100%, 320px)", minWidth: "280px" }),
                  }}
                >
                  {/* Image */}
                  <div className="relative h-[220px] overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />
                    {/* Network badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{
                          background: meta.bgGradient,
                          color: "#FFFFFF",
                          fontSize: "11px",
                          fontWeight: 700,
                        }}
                      >
                        <Icon className="w-3 h-3" style={{ color: "#FFFFFF" }} />
                        {meta.label}
                      </span>
                    </div>
                    {/* Video/Reel indicator */}
                    {(post.type === "video" || post.type === "reel") && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
                        >
                          <Play className="w-5 h-5 ml-0.5" style={{ color: "#FFFFFF", fill: "#FFFFFF" }} />
                        </div>
                      </div>
                    )}
                    {/* Views badge for videos */}
                    {post.views && (
                      <div className="absolute bottom-3 right-3">
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md"
                          style={{
                            backgroundColor: "rgba(0,0,0,0.6)",
                            color: "#FFFFFF",
                            fontSize: "11px",
                            fontWeight: 600,
                          }}
                        >
                          <Eye className="w-3 h-3" />
                          {formatNumber(post.views)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 p-4">
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#1A1D2E",
                        lineHeight: 1.5,
                        margin: 0,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.caption}
                    </p>

                    {/* Engagement metrics */}
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1" style={{ fontSize: "12px", color: "#8890AA", fontWeight: 500 }}>
                        <Heart className="w-3.5 h-3.5" style={{ color: "#E1306C" }} />
                        {formatNumber(post.likes)}
                      </span>
                      <span className="inline-flex items-center gap-1" style={{ fontSize: "12px", color: "#8890AA", fontWeight: 500 }}>
                        <MessageCircle className="w-3.5 h-3.5" />
                        {formatNumber(post.comments)}
                      </span>
                      {post.shares && (
                        <span className="inline-flex items-center gap-1" style={{ fontSize: "12px", color: "#8890AA", fontWeight: 500 }}>
                          <Share2 className="w-3.5 h-3.5" />
                          {formatNumber(post.shares)}
                        </span>
                      )}
                    </div>

                    {/* Date + external link */}
                    <div className="flex items-center justify-between">
                      <span style={{ fontSize: "12px", color: "#8890AA", fontWeight: 500 }}>
                        {post.date}
                      </span>
                      <ExternalLink
                        className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: "#8890AA" }}
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Social accounts bar */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 p-4 rounded-2xl"
          style={{ backgroundColor: "#FFFFFF", border: "1.5px solid #E2E7F2" }}
        >
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#1A1D2E", whiteSpace: "nowrap" }}>
            Siguenos en:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {(["instagram", "facebook", "tiktok"] as const).map((n) => {
              const meta = networkMeta[n];
              const Icon = meta.icon;
              return (
                <a
                  key={n}
                  href={meta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline inline-flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "#EEF2FB",
                    border: "1.5px solid #E2E7F2",
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: meta.color }} />
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#1A1D2E" }}>
                    {meta.handle}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}