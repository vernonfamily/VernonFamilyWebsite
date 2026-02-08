"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { spotlightPos } from "../lib/spotlight-state";

interface Echo {
  x: number;
  y: number;
  opacity: number;
  radius: number;
}

export default function SpotlightOverlay() {
  const [isTouch, setIsTouch] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -300, y: -300 });
  const smooth = useRef({ x: -300, y: -300 });
  const prev = useRef({ x: -300, y: -300 });
  const velocity = useRef(0);
  const echoes = useRef<Echo[]>([]);
  const inside = useRef(false);
  const frame = useRef(0);

  const R = 130;
  const LERP = 0.1;

  const tick = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) { frame.current = requestAnimationFrame(tick); return; }
    const ctx = canvas.getContext("2d");
    if (!ctx) { frame.current = requestAnimationFrame(tick); return; }

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width;
    const h = canvas.height;

    // Smooth interpolation
    smooth.current.x += (mouse.current.x - smooth.current.x) * LERP;
    smooth.current.y += (mouse.current.y - smooth.current.y) * LERP;

    // Velocity for echo trails
    const dx = smooth.current.x - prev.current.x;
    const dy = smooth.current.y - prev.current.y;
    velocity.current = Math.sqrt(dx * dx + dy * dy);
    prev.current = { x: smooth.current.x, y: smooth.current.y };

    // Share position with RevealImage components
    spotlightPos.x = smooth.current.x;
    spotlightPos.y = smooth.current.y;
    spotlightPos.active = inside.current;

    // Spawn echoes on fast movement
    if (velocity.current > 6 && inside.current) {
      echoes.current.push({
        x: smooth.current.x,
        y: smooth.current.y,
        opacity: 0.35,
        radius: R * 0.8,
      });
      if (echoes.current.length > 15) echoes.current.shift();
    }
    echoes.current = echoes.current
      .map((e) => ({ ...e, opacity: e.opacity - 0.012 }))
      .filter((e) => e.opacity > 0);

    ctx.clearRect(0, 0, w, h);

    if (inside.current) {
      const sx = smooth.current.x * dpr;
      const sy = smooth.current.y * dpr;
      const sr = R * dpr;

      // Echo trails (partial inversion)
      for (const echo of echoes.current) {
        ctx.beginPath();
        ctx.arc(echo.x * dpr, echo.y * dpr, echo.radius * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${echo.opacity})`;
        ctx.fill();
      }

      // Main spotlight circle (full inversion)
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    }

    // Cursor dot
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${smooth.current.x - 5}px, ${smooth.current.y - 5}px)`;
      cursorRef.current.style.opacity = inside.current ? "1" : "0";
    }

    frame.current = requestAnimationFrame(tick);
  }, []);

  // Detect touch-only devices
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsTouch(!mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(!e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => { inside.current = true; };
    const onLeave = () => {
      inside.current = false;
      mouse.current = { x: -300, y: -300 };
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);

    frame.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame.current);
    };
  }, [tick, isTouch]);

  if (isTouch) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9998,
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          mixBlendMode: "difference",
          pointerEvents: "none",
          zIndex: 10000,
          opacity: 0,
          willChange: "transform",
        }}
      />
    </>
  );
}
