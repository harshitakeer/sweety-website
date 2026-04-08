"use client";

import { useEffect, useRef, useCallback } from "react";

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
  "</>", "{ }", "=>", "( )", "[ ]", "&&", "||",
  "const", "let", "fn", "async", "await", "return",
  "//", "/*", "*/", "===", "!=", "::", "->",
  "import", "export", "null", "true", "0x",
  "<div>", "</a>", "npm", "git", "ssh",
  "useState", "props", "jsx", ".tsx", ".py",
  "def", "class", "self", "init", "main()",
];

const COLORS = ["#FF6B9D", "#1B2A4A", "#a78bfa", "#38bdf8"];

export default function InteractiveBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<CodeParticle[]>([]);
  const animRef = useRef<number>(0);

  const initParticles = useCallback(() => {
    const particles: CodeParticle[] = [];
    const count = Math.min(40, Math.floor(window.innerWidth / 40));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        text: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
        size: Math.random() * 5 + 10,
        opacity: Math.random() * 0.08 + 0.03,
        rotation: (Math.random() - 0.5) * 0.3,
        rotationSpeed: (Math.random() - 0.5) * 0.002,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (particlesRef.current.length === 0) initParticles();
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          const force = (180 - dist) / 180;
          p.vx -= (dx / dist) * force * 0.05;
          p.vy -= (dy / dist) * force * 0.05;
          // Brighten near cursor
          p.opacity = Math.min(0.2, p.opacity + force * 0.01);
        } else {
          // Fade back
          p.opacity += (0.05 - p.opacity) * 0.01;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.vx *= 0.997;
        p.vy *= 0.997;

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
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [initParticles]);

  return (
    <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />
  );
}
