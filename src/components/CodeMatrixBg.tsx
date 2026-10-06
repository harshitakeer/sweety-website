"use client";

import { useEffect, useRef } from "react";

export default function CodeMatrixBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);
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

      // Page-space box around the text content; the glow is dimmer inside it
      // so the text stays readable, fading back to full strength just outside
      let text: { left: number; top: number; right: number; bottom: number } | null = null;
      const main = document.querySelector("main");
      if (main) {
        for (const child of Array.from(main.children)) {
          const r = child.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) continue;
          const box = { left: r.left, top: r.top + scrollY, right: r.right, bottom: r.bottom + scrollY };
          text = text
            ? {
                left: Math.min(text.left, box.left),
                top: Math.min(text.top, box.top),
                right: Math.max(text.right, box.right),
                bottom: Math.max(text.bottom, box.bottom),
              }
            : box;
        }
      }

      // Static binary grid with cursor glow
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

          // Fade from the gray base toward navy near the cursor; color shifts
          // faster (t) than opacity (t²) so the whole glow reads as blue
          const r = Math.round(28 * t + 17 * (1 - t));
          const g = Math.round(58 * t + 17 * (1 - t));
          const bl = Math.round(150 * t + 17 * (1 - t));
          let glowStrength = 0.55;
          if (text) {
            const ox = Math.max(text.left - b.x, 0, b.x - text.right);
            const oy = Math.max(text.top - b.y, 0, b.y - text.bottom);
            const outside = Math.min(Math.hypot(ox, oy) / 40, 1);
            glowStrength = 0.2 + 0.35 * outside;
          }
          const alpha = 0.1 + intensity * glowStrength;
          ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${alpha})`;
        } else {
          ctx.fillStyle = "rgba(17, 17, 17, 0.08)";
        }

        ctx.fillText(b.char, b.x, b.y);
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
