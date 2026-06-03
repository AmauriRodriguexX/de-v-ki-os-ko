import React, { useState } from "react";

interface ServiceLogoProps {
  src?: string;
  alt: string;
  fallbackColor: string;
  fallbackBg: string;
}

export function ServiceLogo({ src, alt, fallbackColor, fallbackBg }: ServiceLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const initials = alt
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  if (!src || imgFailed) {
    return (
      <div
        className="w-full h-full flex items-center justify-center rounded-lg"
        style={{
          backgroundColor: fallbackBg,
          color: fallbackColor,
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.02em",
        }}
      >
        {initials || "?"}
      </div>
    );
  }

  return (
    <>
      {!imgLoaded && (
        <div
          className="w-full h-full flex items-center justify-center rounded-lg absolute inset-0"
          style={{
            backgroundColor: fallbackBg,
            color: fallbackColor,
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          {initials}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className="w-9 h-9 object-contain"
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgFailed(true)}
        style={{ opacity: imgLoaded ? 1 : 0 }}
      />
    </>
  );
}
