"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { spotlightPos } from "../lib/spotlight-state";

interface Props {
  src: string;
  alt: string;
  objectPosition?: string;
}

export default function RevealImage({ src, alt, objectPosition }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const [mounted, setMounted] = useState(false);
  const R = 130;

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;

    const tick = () => {
      const container = containerRef.current;
      const overlay = overlayRef.current;
      if (container && overlay) {
        const rect = container.getBoundingClientRect();

        // Position the fixed overlay to exactly match the image
        overlay.style.top = rect.top + "px";
        overlay.style.left = rect.left + "px";
        overlay.style.width = rect.width + "px";
        overlay.style.height = rect.height + "px";

        if (spotlightPos.active) {
          const localX = spotlightPos.x - rect.left;
          const localY = spotlightPos.y - rect.top;

          // Only show if spotlight overlaps the image area
          const overlaps =
            localX > -R && localX < rect.width + R &&
            localY > -R && localY < rect.height + R;

          if (overlaps) {
            overlay.style.clipPath = `circle(${R}px at ${localX}px ${localY}px)`;
            overlay.style.visibility = "visible";
          } else {
            overlay.style.visibility = "hidden";
          }
        } else {
          overlay.style.visibility = "hidden";
        }
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [mounted]);

  return (
    <>
      {/* Grayscale base */}
      <div ref={containerRef} style={{ position: "absolute", inset: 0 }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ filter: "grayscale(100%) contrast(1.1)", objectPosition }}
        />
      </div>

      {/* Color reveal overlay - rendered via portal to sit above the difference-blend canvas */}
      {mounted && createPortal(
        <div
          ref={overlayRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            zIndex: 9999,
            pointerEvents: "none",
            overflow: "hidden",
            borderRadius: "12px",
            visibility: "hidden",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            style={{ objectPosition }}
          />
        </div>,
        document.body
      )}
    </>
  );
}
