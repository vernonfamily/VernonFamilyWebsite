"use client";

import { motion } from "framer-motion";
import GridBg from "./grid-bg";

export default function Vsl() {
  return (
    <section className="relative bg-[#0a0a0a] text-white" style={{ padding: "6rem 2rem 3rem" }}>
      <GridBg dark animate />
      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "6rem", position: "relative", zIndex: 1 }}
        >
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
            Welcome to Vernon Family
          </p>
          <h2 className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1.1 }}>
            See How We Work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          style={{ position: "relative", zIndex: 9999 }}
        >
          <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
            <video
              controls
              playsInline
              preload="metadata"
              style={{ width: "100%", display: "block" }}
            >
              <source src="/VSL%20Vernon%20Family.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ textAlign: "center", marginTop: "3rem", position: "relative", zIndex: 1 }}
        >
          <a
            href="#book"
            className="font-[family-name:var(--font-inter)] hover:opacity-80 transition-opacity duration-300"
            style={{ display: "inline-block", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, color: "#0a0a0a", textDecoration: "none", backgroundColor: "white", padding: "0.875rem 2.25rem", borderRadius: "999px" }}
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
