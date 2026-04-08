"use client";

import { useEffect, useRef } from "react";

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
  "#FF6B9D",
  "#FFD4E3",
  "#1B2A4A",
  "#E0D4F7",
  "#FFE566",
  "#C8F7DC",
  "#38bdf8",
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

function createShapes(width: number, height: number): Shape[] {
  const shapes: Shape[] = [];
  const count = Math.min(30, Math.floor(width / 40));
  const types: Shape["type"][] = ["circle", "star", "heart", "ring", "dot"];

  for (let i = 0; i < count; i++) {
    shapes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 12 + 5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      type: types[Math.floor(Math.random() * types.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: Math.random() * 0.2 + 0.1,
    });
  }
  return shapes;
}

export default function SubtleBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);
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
      shapesRef.current = createShapes(w, h);
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(parent);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapesRef.current.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotationSpeed;

        if (s.x < -20) s.x = canvas.width + 20;
        if (s.x > canvas.width + 20) s.x = -20;
        if (s.y < -20) s.y = canvas.height + 20;
        if (s.y > canvas.height + 20) s.y = -20;

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
            ctx.lineWidth = 1.5;
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
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
