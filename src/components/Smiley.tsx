"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const COLOR = "#122A64";

// Line-drawn smiley whose eyes follow the cursor and blink every few seconds
export default function Smiley({ size = 48 }: { size?: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const [look, setLook] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy) || 1;
      const reach = Math.min(dist / 150, 1) * 3;
      setLook({ x: (dx / dist) * reach, y: (dy / dist) * reach });
    };
    window.addEventListener("mousemove", handleMouse);

    let timeout: ReturnType<typeof setTimeout>;
    const scheduleBlink = () => {
      timeout = setTimeout(() => {
        setBlink(true);
        setTimeout(() => setBlink(false), 140);
        scheduleBlink();
      }, 2500 + Math.random() * 2500);
    };
    scheduleBlink();

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      clearTimeout(timeout);
    };
  }, []);

  const eyeRy = blink ? 0.4 : 3;

  return (
    <motion.svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      animate={{ rotate: [0, -6, 6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.15, rotate: 12 }}
      style={{ flexShrink: 0, cursor: "default" }}
    >
      <circle cx="24" cy="24" r="21" stroke={COLOR} strokeWidth="2" />
      <ellipse cx={17 + look.x} cy={19 + look.y} rx="2.5" ry={eyeRy} fill={COLOR} />
      <ellipse cx={31 + look.x} cy={19 + look.y} rx="2.5" ry={eyeRy} fill={COLOR} />
      <path
        d={`M ${15 + look.x * 0.5} ${29 + look.y * 0.3} Q 24 ${37 + look.y * 0.3} ${33 + look.x * 0.5} ${29 + look.y * 0.3}`}
        stroke={COLOR}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
