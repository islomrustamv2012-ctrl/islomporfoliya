import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device or reduced motion
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if target is clickable
      const target = e.target;
      const isClickable = Boolean(
        target.closest("a, button, input, textarea, select, [role='button'], canvas")
      );
      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Central Cyber Point */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-cyber-cyan shadow-glow-cyan"
        style={{
          width: isPointer ? 8 : 6,
          height: isPointer ? 8 : 6,
          transform: `translate(${pos.x - (isPointer ? 4 : 3)}px, ${pos.y - (isPointer ? 4 : 3)}px)`,
          transition: "width 0.15s, height 0.15s",
        }}
      />

      {/* Outer Tracking Gimbal Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-cyber-cyan/40"
        style={{
          width: isPointer ? 38 : 26,
          height: isPointer ? 38 : 26,
          transform: `translate(${pos.x - (isPointer ? 19 : 13)}px, ${pos.y - (isPointer ? 19 : 13)}px)`,
          transition: "transform 0.08s ease-out, width 0.2s, height 0.2s, border-color 0.2s",
          backgroundColor: isPointer ? "rgba(0, 229, 255, 0.06)" : "transparent",
        }}
      />
    </>
  );
}
