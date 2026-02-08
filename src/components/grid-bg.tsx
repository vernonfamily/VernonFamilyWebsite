"use client";

import { useEffect, useRef } from "react";

export default function GridBg({ dark = false, animate = false }: { dark?: boolean; animate?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offsetRef = useRef(0);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
    };

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const spacing = 70 * dpr;
      const color = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";

      if (animate) {
        offsetRef.current += 1.5;
        if (offsetRef.current >= spacing) offsetRef.current = 0;
      }

      const oy = (animate ? offsetRef.current * dpr : 0) % spacing;

      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < w; x += spacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = -spacing + oy; y < h + spacing; y += spacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      if (animate) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (animate) {
      frameRef.current = requestAnimationFrame(draw);
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (animate) cancelAnimationFrame(frameRef.current);
    };
  }, [dark, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
