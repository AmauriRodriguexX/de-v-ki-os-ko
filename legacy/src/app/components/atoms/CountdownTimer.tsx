import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

/**
 * CountdownTimer — Countdown to 23:59 on the current Wednesday.
 * Only visible on Wednesdays.
 */
export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState("");
  const [isWednesday, setIsWednesday] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      // Wednesday = 3
      if (now.getDay() !== 3) {
        setIsWednesday(false);
        return;
      }
      setIsWednesday(true);
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft("00:00:00");
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!isWednesday) return null;

  return (
    <div
      className="inline-flex items-center gap-2"
      style={{
        backgroundColor: "#045098",
        color: "#FCD700",
        fontWeight: 800,
        borderRadius: "8px",
        padding: "6px 14px",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "20px",
        letterSpacing: "0.04em",
      }}
    >
      <Clock className="w-4 h-4" style={{ color: "#FCD700" }} />
      <span style={{ fontSize: "13px", fontWeight: 600 }}>Termina en:</span>
      <span>{timeLeft}</span>
    </div>
  );
}
