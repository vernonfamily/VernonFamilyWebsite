"use client";

import GridBg from "./grid-bg";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: "100vh" }}
    >
      <GridBg animate />

      <div style={{ position: "absolute", inset: 0, zIndex: 1, display: "flex", flexDirection: "column", pointerEvents: "none" }}>
        {/* Top right - Our Solutions */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "2.5rem 2.5rem 0" }}>
          <a
            href="#solutions"
            className="pointer-events-auto font-[family-name:var(--font-inter)] hover:opacity-70 transition-opacity duration-300"
            style={{ fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500, color: "#111111", textDecoration: "none" }}
          >
            Our Solutions
          </a>
        </div>

        {/* Center - Vernon Family */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h1
            className="font-[family-name:var(--font-playfair)]"
            style={{ fontSize: "clamp(4rem, 10vw, 8rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.02em", textAlign: "center", color: "#111111" }}
          >
            Vernon
            <br />
            Family
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="hero-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "0 2.5rem 2.5rem" }}>
          <p
            className="font-[family-name:var(--font-inter)]"
            style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 300, color: "#111111" }}
          >
            Practical AI. Implemented.
          </p>

          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <a
              href="#book"
              className="pointer-events-auto font-[family-name:var(--font-inter)] hover:opacity-80 transition-opacity duration-300"
              style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, color: "white", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "0.75rem 1.75rem", borderRadius: "999px" }}
            >
              Book a Free Call
            </a>
            <a href="https://www.instagram.com/thepettyk1ng/" target="_blank" rel="noopener noreferrer" className="pointer-events-auto hover:opacity-70 transition-opacity duration-300" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#111111">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/vernon-sibiya-16bb3925b/" target="_blank" rel="noopener noreferrer" className="pointer-events-auto hover:opacity-70 transition-opacity duration-300" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#111111">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
