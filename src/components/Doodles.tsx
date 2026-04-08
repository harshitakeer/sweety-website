"use client";

import { motion } from "framer-motion";

export function Smiley({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`sticker ${className}`}
      whileHover={{ scale: 1.2, rotate: 10 }}
    >
      <circle cx="50" cy="50" r="45" fill="#FFE566" stroke="#1B2A4A" strokeWidth="3" />
      <circle cx="35" cy="40" r="5" fill="#1B2A4A" />
      <circle cx="65" cy="40" r="5" fill="#1B2A4A" />
      <path d="M 30 60 Q 50 80 70 60" fill="none" stroke="#1B2A4A" strokeWidth="3" strokeLinecap="round" />
    </motion.svg>
  );
}

export function WinkFace({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`sticker ${className}`}
      whileHover={{ scale: 1.2, rotate: -10 }}
    >
      <circle cx="50" cy="50" r="45" fill="#FFD4E3" stroke="#1B2A4A" strokeWidth="3" />
      <circle cx="35" cy="40" r="5" fill="#1B2A4A" />
      <path d="M 58 40 L 72 40" stroke="#1B2A4A" strokeWidth="3" strokeLinecap="round" />
      <path d="M 30 60 Q 50 78 70 60" fill="none" stroke="#1B2A4A" strokeWidth="3" strokeLinecap="round" />
    </motion.svg>
  );
}

export function Heart({ className = "", size = 30 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`sticker ${className}`}
      whileHover={{ scale: 1.3 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <path
        d="M50 85 C25 65 5 50 5 30 C5 15 20 5 35 5 C42 5 48 10 50 15 C52 10 58 5 65 5 C80 5 95 15 95 30 C95 50 75 65 50 85Z"
        fill="#FF6B9D"
        stroke="#1B2A4A"
        strokeWidth="2"
      />
    </motion.svg>
  );
}

export function Star({ className = "", size = 30 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`sticker ${className}`}
      whileHover={{ scale: 1.2, rotate: 20 }}
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <path
        d="M50 5 L61 38 L95 38 L68 60 L79 95 L50 73 L21 95 L32 60 L5 38 L39 38Z"
        fill="#FFE566"
        stroke="#1B2A4A"
        strokeWidth="2"
      />
    </motion.svg>
  );
}

export function StickFigure({ className = "", size = 80 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      className={`sticker ${className}`}
      whileHover={{ scale: 1.1 }}
    >
      {/* head */}
      <circle cx="50" cy="20" r="15" fill="#FFD4E3" stroke="#1B2A4A" strokeWidth="2.5" />
      {/* eyes */}
      <circle cx="44" cy="18" r="2.5" fill="#1B2A4A" />
      <circle cx="56" cy="18" r="2.5" fill="#1B2A4A" />
      {/* smile */}
      <path d="M 42 25 Q 50 32 58 25" fill="none" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" />
      {/* body */}
      <line x1="50" y1="35" x2="50" y2="70" stroke="#1B2A4A" strokeWidth="2.5" strokeLinecap="round" />
      {/* arms */}
      <motion.line
        x1="50" y1="48" x2="25" y2="38"
        stroke="#1B2A4A" strokeWidth="2.5" strokeLinecap="round"
        animate={{ x2: [25, 22, 25], y2: [38, 32, 38] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.line
        x1="50" y1="48" x2="75" y2="38"
        stroke="#1B2A4A" strokeWidth="2.5" strokeLinecap="round"
        animate={{ x2: [75, 78, 75], y2: [38, 32, 38] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      {/* legs */}
      <line x1="50" y1="70" x2="30" y2="100" stroke="#1B2A4A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="70" x2="70" y2="100" stroke="#1B2A4A" strokeWidth="2.5" strokeLinecap="round" />
    </motion.svg>
  );
}

export function StickFigureLaptop({ className = "", size = 100 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={`sticker ${className}`}
      whileHover={{ scale: 1.1 }}
    >
      {/* head */}
      <circle cx="40" cy="18" r="14" fill="#FFE566" stroke="#1B2A4A" strokeWidth="2.5" />
      <circle cx="35" cy="16" r="2" fill="#1B2A4A" />
      <circle cx="45" cy="16" r="2" fill="#1B2A4A" />
      <path d="M 34 23 Q 40 28 46 23" fill="none" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" />
      {/* body sitting */}
      <line x1="40" y1="32" x2="40" y2="60" stroke="#1B2A4A" strokeWidth="2.5" strokeLinecap="round" />
      {/* arms reaching to laptop */}
      <path d="M 40 45 Q 55 42 65 50" fill="none" stroke="#1B2A4A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 40 45 Q 55 48 65 50" fill="none" stroke="#1B2A4A" strokeWidth="2.5" strokeLinecap="round" />
      {/* legs */}
      <path d="M 40 60 L 30 80 L 20 80" stroke="#1B2A4A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 40 60 L 55 80 L 65 80" stroke="#1B2A4A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* laptop */}
      <rect x="55" y="42" width="30" height="20" rx="2" fill="#E8ECF4" stroke="#1B2A4A" strokeWidth="2" />
      <rect x="50" y="62" width="40" height="3" rx="1" fill="#1B2A4A" />
      {/* screen content */}
      <motion.text
        x="64"
        y="55"
        textAnchor="middle"
        fontSize="8"
        fill="#FF6B9D"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        &lt;/&gt;
      </motion.text>
    </motion.svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ✦
    </motion.span>
  );
}

export function FloatingDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle dashed circles in corners */}
      <svg className="absolute top-[12%] right-[10%] opacity-[0.07]" width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="35" fill="none" stroke="#FF6B9D" strokeWidth="2" strokeDasharray="8 6" />
      </svg>
      <svg className="absolute bottom-[15%] left-[8%] opacity-[0.07]" width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="25" fill="none" stroke="#1B2A4A" strokeWidth="2" strokeDasharray="6 8" />
      </svg>
    </div>
  );
}
