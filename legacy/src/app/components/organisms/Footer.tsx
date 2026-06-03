import React, { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, Facebook, Instagram, Youtube } from "lucide-react";
import { WhatsAppNewsletterWidget } from "../molecules/WhatsAppNewsletterWidget";

/* TikTok icon (not available in lucide-react) */
function TikTokIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.86.12V9.01a6.27 6.27 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.77 1.52V6.84a4.84 4.84 0 0 1-1.01-.15Z" />
    </svg>
  );
}

const columns = [
  {
    title: "Más información",
    links: [
      { label: "Quienes somos", href: "/" },
      { label: "Productos Destacados", href: "/" },
      { label: "Bolsa de trabajo", href: "/" },
      { label: "Administra una tienda", href: "/" },
      { label: "Facturación", href: "/facturacion" },
      { label: "Comunicados", href: "/" },
      { label: "Proveedores", href: "/" },
      { label: "Bienes raíces", href: "/" },
    ],
  },
  {
    title: "Promos",
    links: [
      { label: "Miércoles Cervecero", href: "/promociones/miercoles-cervecero" },
      { label: "Sábado al Carbón", href: "/promociones/sabado-al-carbon" },
      { label: "Kanasta del Hogar", href: "/promociones/kanasta-del-hogar" },
      { label: "Fiesta", href: "/promociones/fiesta" },
      { label: "Hidratación", href: "/promociones/hidratacion" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Servicios del hogar", href: "/servicios/servicios-del-hogar" },
      { label: "Financieros", href: "/servicios/servicios-financieros" },
      { label: "Medios de pago", href: "/servicios/servicios-medios-de-pago" },
      { label: "Tiempo Aire y datos", href: "/servicios/servicios-tiempo-aire-y-datos" },
      { label: "Entretenimiento", href: "/servicios/servicios-entretenimiento" },
      { label: "Escuela y Gobierno", href: "/servicios/servicios-escuela-y-gobierno" },
      { label: "Otros Servicios", href: "/servicios/servicios-otros-servicios" },
    ],
  },
];

const contactInfo = {
  title: "Contacto",
  phones: [
    { label: "800 290 50 50", href: "tel:8002905050" },
    { label: "(312) 313 44 00", href: "tel:3123134400" },
  ],
  emails: [
    {
      question: "¿Tienes un terreno o local comercial que quieras ofrecer?",
      email: "Terrenos@mikiosko.mx",
    },
    {
      question: "¿Quieres ser proveedor de Kiosko?",
      email: "Proveedores@mikiosko.mx",
    },
    {
      question: "Cuéntanos tu experiencia de compra",
      email: "Experiencia@mikiosko.mx",
    },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/TiendasKiosko", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/tiendaskiosko/", label: "Instagram" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@tiendaskiosko", label: "TikTok" },
  { icon: Youtube, href: "https://www.youtube.com/@TiendasKiosko", label: "YouTube" },
];

export function Footer() {
  const [openCol, setOpenCol] = useState<string | null>(null);

  return (
    <footer style={{ backgroundColor: "#1A1D2E" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              {/* Desktop */}
              <div className="hidden md:flex flex-col gap-4">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontStyle: "italic",
                  }}
                >
                  {col.title}
                </span>
                <div className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="no-underline transition-opacity hover:opacity-80"
                      style={{ fontSize: "14px", color: "#FFFFFF" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Mobile accordion */}
              <div className="md:hidden">
                <button
                  onClick={() =>
                    setOpenCol(openCol === col.title ? null : col.title)
                  }
                  className="w-full flex items-center justify-between py-3 cursor-pointer"
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      fontStyle: "italic",
                    }}
                  >
                    {col.title}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 transition-transform"
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      transform:
                        openCol === col.title
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </button>
                {openCol === col.title && (
                  <div className="flex flex-col gap-2 py-3 pl-2">
                    {col.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="no-underline"
                        style={{ fontSize: "14px", color: "#FFFFFF" }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Contacto column */}
          <div>
            {/* Desktop */}
            <div className="hidden md:flex flex-col gap-4">
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontStyle: "italic",
                }}
              >
                {contactInfo.title}
              </span>
              <div className="flex flex-col gap-1">
                {contactInfo.phones.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    className="no-underline transition-opacity hover:opacity-80"
                    style={{ fontSize: "14px", color: "#FFFFFF" }}
                  >
                    {p.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-4 mt-1">
                {contactInfo.emails.map((item) => (
                  <div key={item.email} className="flex flex-col gap-0.5">
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                      }}
                    >
                      {item.question}
                    </span>
                    <a
                      href={`mailto:${item.email}`}
                      className="no-underline transition-opacity hover:opacity-80"
                      style={{ fontSize: "14px", color: "#FFFFFF" }}
                    >
                      {item.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* Mobile accordion */}
            <div className="md:hidden">
              <button
                onClick={() =>
                  setOpenCol(
                    openCol === contactInfo.title ? null : contactInfo.title
                  )
                }
                className="w-full flex items-center justify-between py-3 cursor-pointer"
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontStyle: "italic",
                  }}
                >
                  {contactInfo.title}
                </span>
                <ChevronDown
                  className="w-5 h-5 transition-transform"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    transform:
                      openCol === contactInfo.title
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>
              {openCol === contactInfo.title && (
                <div className="flex flex-col gap-3 py-3 pl-2">
                  {contactInfo.phones.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      className="no-underline"
                      style={{ fontSize: "14px", color: "#FFFFFF" }}
                    >
                      {p.label}
                    </a>
                  ))}
                  {contactInfo.emails.map((item) => (
                    <div key={item.email} className="flex flex-col gap-0.5">
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "#FFFFFF",
                        }}
                      >
                        {item.question}
                      </span>
                      <a
                        href={`mailto:${item.email}`}
                        className="no-underline"
                        style={{ fontSize: "14px", color: "#FFFFFF" }}
                      >
                        {item.email}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* WhatsApp Newsletter */}
        <div className="mt-10">
          <WhatsAppNewsletterWidget />
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span style={{ fontSize: "12px", color: "#FFFFFF", letterSpacing: "0.04em" }}>
              &copy; 2024 KIOSKO TODOS LOS DERECHOS RESERVADOS
            </span>
            <a
              href="#"
              className="no-underline transition-opacity hover:opacity-80"
              style={{ fontSize: "12px", color: "#FFFFFF", letterSpacing: "0.04em" }}
            >
              AVISO DE PRIVACIDAD
            </a>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
                aria-label={s.label}
              >
                <s.icon className="w-5 h-5" style={{ color: "#FFFFFF" }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}