"use client";

import { useEffect, useRef } from "react";

interface CodeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
}

const CODE_SYMBOLS = [
  "</>", "{ }", "=>", "( )", "[ ]", "&&",
  "const", "let", "fn", "async", "return",
  "//", "===", "::", "->", "import",
  "null", ".tsx", "def", "git",
];

const COLORS = ["#FF6B9D", "#1B2A4A", "#a78bfa", "#38bdf8"];

function createParticles(width: number, height: number): CodeParticle[] {
  const particles: CodeParticle[] = [];
  const count = Math.min(20, Math.floor(width / 55));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      text: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
      size: Math.random() * 4 + 9,
      opacity: Math.random() * 0.06 + 0.02,
      rotation: (Math.random() - 0.5) * 0.2,
      rotationSpeed: (Math.random() - 0.5) * 0.001,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });
  }
  return particles;
}

export default function SubtleBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<CodeParticle[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const parent = canvas.parentElement;

    const resize = () => {
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      canvas.width = w;
      canvas.height = h;
      particlesRef.current = createParticles(w, h);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(parent);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.x < -60) p.x = canvas.width + 60;
        if (p.x > canvas.width + 60) p.x = -60;
        if (p.y < -30) p.y = canvas.height + 30;
        if (p.y > canvas.height + 30) p.y = -30;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.font = `${p.size}px "JetBrains Mono", "SF Mono", "Fira Code", monospace`;
        ctx.fillStyle = p.color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.text, 0, 0);
        ctx.restore();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }} />
  );
}
