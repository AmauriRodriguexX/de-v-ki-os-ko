import React from "react";
import { Link } from "react-router";
import { quickAccessItems } from "../../data/quickAccess";

export function QuickAccessSection() {
  return (
    <section className="w-full py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {quickAccessItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex flex-col items-center gap-2 no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-95"
              style={{
                backgroundColor: item.color,
                borderRadius: "16px",
                padding: "20px 16px",
              }}
            >
              <span style={{ fontSize: "32px", lineHeight: 1 }}>
                {item.icon}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#1A1D2E",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
