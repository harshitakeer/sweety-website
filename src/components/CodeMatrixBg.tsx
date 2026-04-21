"use client";

import { useEffect, useRef } from "react";

const CODE_LINES = [
  { text: "const app = createApp(config);", colors: ["#e06c75", null, null, null, "#98c379"] },
  { text: "import React from 'react';", colors: ["#c678dd", null, "#c678dd", "#98c379"] },
  { text: "export default function Home() {", colors: ["#c678dd", "#c678dd", "#61afef", null] },
  { text: "  const [state, setState] = useState(0);", colors: [null, "#e06c75", null, null, null, "#61afef"] },
  { text: "  return <div className='main'>;", colors: [null, "#c678dd", "#e06c75", null] },
  { text: "async function fetchData(url) {", colors: ["#c678dd", "#61afef", null] },
  { text: "  const res = await fetch(url);", colors: [null, "#e06c75", null, null, "#c678dd", "#61afef"] },
  { text: "  return res.json();", colors: [null, "#c678dd"] },
  { text: "def train_model(data, epochs=10):", colors: ["#c678dd", "#61afef"] },
  { text: "    model.fit(data, epochs=epochs)", colors: [null, null] },
  { text: "git commit -m 'ship it'", colors: [null, null, null, "#98c379"] },
  { text: "npm install && npm run dev", colors: ["#e06c75", null, null, null, null, null] },
  { text: "SELECT * FROM users WHERE active = true;", colors: ["#c678dd", null, "#c678dd", null, "#c678dd", null, null, "#d19a66"] },
  { text: "docker build -t app:latest .", colors: [null, null, null, "#98c379"] },
  { text: "func main() { http.ListenAndServe() }", colors: ["#c678dd", "#61afef"] },
  { text: "  useEffect(() => { fetchData(); }, []);", colors: [null, "#61afef"] },
  { text: "  while (low <= high) { mid = (low+high)/2;", colors: [null, "#c678dd"] },
  { text: "console.log('hello world');", colors: [null, "#98c379"] },
  { text: "interface Props { children: ReactNode }", colors: ["#c678dd", null] },
  { text: "kubectl apply -f deployment.yaml", colors: [null, null, null, "#98c379"] },
  { text: "  const dp = new Array(n).fill(Infinity);", colors: [null, "#e06c75", null, "#c678dd", null, null, "#d19a66"] },
  { text: "type User = { name: string; id: number };", colors: ["#c678dd", null, null, null, null, "#61afef", null, "#61afef"] },
  { text: "ssh deploy@server 'pm2 restart all'", colors: [null, null, "#98c379"] },
  { text: "from fastapi import FastAPI, HTTPException", colors: ["#c678dd", null, "#c678dd"] },
  { text: "@app.route('/api/v1/users', methods=['GET'])", colors: ["#d19a66", "#98c379", null, "#98c379"] },
  { text: "pub fn solve(grid: &mut Vec<Vec<i32>>) {", colors: ["#c678dd", "#c678dd", "#61afef"] },
  { text: "CREATE TABLE projects (id SERIAL PRIMARY);", colors: ["#c678dd", "#c678dd", null] },
  { text: "  background: linear-gradient(135deg, ...);", colors: [null, null, "#98c379"] },
  { text: "return model.evaluate(test)", colors: ["#c678dd", null] },
  { text: "class Node { constructor(val) { } }", colors: ["#c678dd", null] },
];

interface FloatingLine {
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  size: number;
  coloredText: string;
  baseColor: string;
  highlightColor: string;
}

export default function CodeMatrixBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);
  const linesRef = useRef<FloatingLine[]>([]);
  const binaryRef = useRef<{ char: string; x: number; y: number }[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const charW = 9;
    const rowH = 16;
    const glowRadius = 200;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );

      // Build binary grid
      const binary: { char: string; x: number; y: number }[] = [];
      const cols = Math.ceil(canvas.width / charW);
      const rows = Math.ceil(canvas.height / rowH);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          binary.push({
            char: Math.random() < 0.5 ? "0" : "1",
            x: c * charW,
            y: r * rowH,
          });
        }
      }
      binaryRef.current = binary;

      // Build floating code lines
      const lines: FloatingLine[] = [];
      const count = Math.floor(canvas.height / 22);
      const highlightColors = ["#FF6B9D", "#a78bfa", "#38bdf8", "#34d399"];

      for (let i = 0; i < count; i++) {
        const src = CODE_LINES[Math.floor(Math.random() * CODE_LINES.length)];
        lines.push({
          text: src.text,
          coloredText: src.text,
          x: Math.random() * canvas.width * 1.2 - canvas.width * 0.1,
          y: i * 22 + Math.random() * 8,
          speed: 0.06 + Math.random() * 0.12,
          opacity: 0.1 + Math.random() * 0.05,
          size: 12 + Math.random() * 2,
          baseColor: "rgba(27, 42, 74, 0.1)",
          highlightColor: highlightColors[Math.floor(Math.random() * highlightColors.length)],
        });
      }
      linesRef.current = lines;
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };

    init();
    window.addEventListener("resize", init);
    window.addEventListener("mousemove", handleMouse);

    const draw = () => {
      timeRef.current++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollY = window.scrollY;
      const viewTop = scrollY - 20;
      const viewBottom = scrollY + window.innerHeight + 20;
      const mouse = mouseRef.current;

      // === LAYER 1: Static binary grid with cursor glow ===
      ctx.font = '11px "JetBrains Mono", "SF Mono", "Fira Code", monospace';
      ctx.textBaseline = "top";

      binaryRef.current.forEach((b) => {
        if (b.y < viewTop || b.y > viewBottom) return;

        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < glowRadius) {
          const t = 1 - dist / glowRadius;
          const intensity = t * t;

          if (dist < 60 && timeRef.current % 3 === 0 && Math.random() < 0.1) {
            b.char = b.char === "0" ? "1" : "0";
          }

          const r = Math.round(255 * intensity + 27 * (1 - intensity));
          const g = Math.round(107 * intensity + 42 * (1 - intensity));
          const bl = Math.round(157 * intensity + 74 * (1 - intensity));
          const alpha = 0.05 + intensity * 0.35;
          ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${alpha})`;
        } else {
          ctx.fillStyle = "rgba(27, 42, 74, 0.07)";
        }

        ctx.fillText(b.char, b.x, b.y);
      });

      // === LAYER 2: Floating code lines with syntax color ===
      linesRef.current.forEach((line) => {
        if (line.y < viewTop || line.y > viewBottom) return;

        line.x += line.speed;
        if (line.x > canvas.width + 100) {
          line.x = -400;
          const src = CODE_LINES[Math.floor(Math.random() * CODE_LINES.length)];
          line.text = src.text;
        }

        // Mouse proximity — push away
        const dy = line.y - mouse.y;
        const absDy = Math.abs(dy);
        let yOffset = 0;
        let alpha = line.opacity;

        if (absDy < 100) {
          const t = 1 - absDy / 100;
          yOffset = (dy > 0 ? 1 : -1) * t * 8;
          alpha = line.opacity + t * 0.06;
        }

        ctx.font = `${line.size}px "JetBrains Mono", "SF Mono", "Fira Code", monospace`;
        ctx.fillStyle = `rgba(27, 42, 74, ${alpha})`;
        ctx.fillText(line.text, line.x, line.y + yOffset);
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const resizeObserver = new ResizeObserver(init);
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouse);
      resizeObserver.disconnect();
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
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
