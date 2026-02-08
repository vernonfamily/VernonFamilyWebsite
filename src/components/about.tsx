"use client";

import { motion } from "framer-motion";
import GridBg from "./grid-bg";

export default function About() {
  return (
    <section className="relative bg-[#0a0a0a] text-white" style={{ padding: "8rem 2rem" }}>
      <GridBg dark animate />
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
            Our Approach
          </p>
          <h2 className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 600, lineHeight: 1.1 }}>
            We Build on
            <br />
            Practice, Not
            <br />
            Theory
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          style={{ paddingTop: "0.5rem" }}
        >
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem" }}>
            Every system we build comes from real implementation experience.
            We know what breaks, what scales, and what your team will actually
            use.
          </p>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.55)", marginBottom: "3rem" }}>
            We don&apos;t sell hype. We visit your company, understand your
            workflows, and build AI systems that fit how you actually operate.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="stat-invert" style={{ cursor: "pointer" }}>
              <p className="stat-number font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(2.5rem, 4vw, 3.25rem)", fontWeight: 600, color: "white" }}>
                40<span className="stat-percent" style={{ color: "rgba(255,255,255,0.3)" }}>%</span>
              </p>
              <p className="stat-label font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "0.5rem" }}>
                Average admin time saved
              </p>
            </div>
            <div className="stat-invert" style={{ cursor: "pointer" }}>
              <p className="stat-number font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(2.5rem, 4vw, 3.25rem)", fontWeight: 600, color: "white" }}>
                100<span className="stat-percent" style={{ color: "rgba(255,255,255,0.3)" }}>%</span>
              </p>
              <p className="stat-label font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: "0.5rem" }}>
                Hands-on implementation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
