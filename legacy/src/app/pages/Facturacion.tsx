import React from "react";
import { FileText } from "lucide-react";
import { Button } from "../components/atoms/Button";

export function Facturacion() {
  return (
    <div className="flex flex-col items-center py-16 md:py-24 px-4">
      <div className="max-w-lg w-full flex flex-col items-center text-center gap-6">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: "#EBF6FD" }}
        >
          <FileText className="w-10 h-10" style={{ color: "#1387C7" }} />
        </div>

        <div className="flex flex-col gap-2">
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#1A1D2E",
              margin: 0,
            }}
          >
            Facturación electrónica
          </h1>
          <p style={{ fontSize: "16px", color: "#4A5068", margin: 0 }}>
            Genera tu factura de compras realizadas en cualquier tienda Kiosko
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1.5 text-left">
            <label style={{ fontSize: "14px", fontWeight: 600, color: "#1A1D2E" }}>RFC</label>
            <input
              type="text"
              placeholder="Ingresa tu RFC"
              className="w-full px-4 py-3.5 rounded-xl outline-none transition-all"
              style={{ border: "1.5px solid #E2E7F2", fontSize: "16px" }}
            />
          </div>
          <div className="flex flex-col gap-1.5 text-left">
            <label style={{ fontSize: "14px", fontWeight: 600, color: "#1A1D2E" }}>Número de ticket</label>
            <input
              type="text"
              placeholder="Ej. 0001-2345-6789"
              className="w-full px-4 py-3.5 rounded-xl outline-none transition-all"
              style={{ border: "1.5px solid #E2E7F2", fontSize: "16px" }}
            />
          </div>
          <div className="flex flex-col gap-1.5 text-left">
            <label style={{ fontSize: "14px", fontWeight: 600, color: "#1A1D2E" }}>Correo electrónico</label>
            <input
              type="email"
              placeholder="tu@correo.com"
              className="w-full px-4 py-3.5 rounded-xl outline-none transition-all"
              style={{ border: "1.5px solid #E2E7F2", fontSize: "16px" }}
            />
          </div>
          <Button variant="primary" size="sm" className="w-full mt-2">
            Generar factura
          </Button>
        </div>
      </div>
    </div>
  );
}