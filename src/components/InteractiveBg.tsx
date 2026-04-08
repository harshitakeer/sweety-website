"use client";

import { useEffect, useRef, useCallback } from "react";

interface Shape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: "circle" | "star" | "heart" | "ring" | "dot";
  color: string;
  opacity: number;
}

const COLORS = [
  "#FF6B9D",  // pink
  "#FFD4E3",  // pink light
  "#1B2A4A",  // navy
  "#E0D4F7",  // lavender
  "#FFE566",  // yellow
  "#C8F7DC",  // mint
  "#38bdf8",  // blue
];

function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
    const method = i === 0 ? "moveTo" : "lineTo";
    ctx[method](cx + r * Math.cos(angle), cy + r * Math.sin(angle));
  }
  ctx.closePath();
  ctx.fill();
}

function drawHeart(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) {
  const s = size * 0.5;
  ctx.beginPath();
  ctx.moveTo(cx, cy + s * 0.3);
  ctx.bezierCurveTo(cx - s, cy - s * 0.5, cx - s * 0.5, cy - s, cx, cy - s * 0.4);
  ctx.bezierCurveTo(cx + s * 0.5, cy - s, cx + s, cy - s * 0.5, cx, cy + s * 0.3);
  ctx.fill();
}

export default function InteractiveBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const shapesRef = useRef<Shape[]>([]);
  const animRef = useRef<number>(0);

  const initShapes = useCallback(() => {
    const shapes: Shape[] = [];
    const count = Math.min(45, Math.floor(window.innerWidth / 35));
    const types: Shape["type"][] = ["circle", "star", "heart", "ring", "dot"];

    for (let i = 0; i < count; i++) {
      shapes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 14 + 6,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: types[Math.floor(Math.random() * types.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.25 + 0.08,
      });
    }
    shapesRef.current = shapes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (shapesRef.current.length === 0) initShapes();
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const shapes = shapesRef.current;
      const mouse = mouseRef.current;

      shapes.forEach((s) => {
        // Mouse interaction — gentle push away
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          const force = (180 - dist) / 180;
          s.vx -= (dx / dist) * force * 0.08;
          s.vy -= (dy / dist) * force * 0.08;
        }

        // Update
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotationSpeed;
        s.vx *= 0.995;
        s.vy *= 0.995;

        // Wrap edges
        if (s.x < -20) s.x = canvas.width + 20;
        if (s.x > canvas.width + 20) s.x = -20;
        if (s.y < -20) s.y = canvas.height + 20;
        if (s.y > canvas.height + 20) s.y = -20;

        // Draw
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = s.color;
        ctx.strokeStyle = s.color;

        switch (s.type) {
          case "circle":
            ctx.beginPath();
            ctx.arc(0, 0, s.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case "ring":
            ctx.beginPath();
            ctx.arc(0, 0, s.size, 0, Math.PI * 2);
            ctx.lineWidth = 2;
            ctx.stroke();
            break;
          case "dot":
            ctx.beginPath();
            ctx.arc(0, 0, s.size * 0.4, 0, Math.PI * 2);
            ctx.fill();
            break;
          case "star":
            drawStar(ctx, 0, 0, s.size);
            break;
          case "heart":
            drawHeart(ctx, 0, 0, s.size);
            break;
        }

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
  }, [initShapes]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
