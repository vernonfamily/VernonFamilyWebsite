"use client";

import { motion } from "framer-motion";
import GridBg from "./grid-bg";
import RevealImage from "./reveal-image";

const clients = [
  {
    name: "Dr. Buleni",
    role: "Smilez Dental Surgery",
    image: "/dr-buleni.jpg",
    objectPosition: "center",
    quote:
      "Vernon's team transformed how our practice operates. The AI systems they implemented saved us hours of admin work every single day.",
    results: ["40% less admin time", "Streamlined patient flow", "Automated follow-ups"],
  },
  {
    name: "Grassroots Finance",
    role: "Accounting Firm",
    image: "/GrassRoots%20Finance%20Logo.jpeg",
    objectPosition: "center",
    quote:
      "Because of Vernon Family, we were able to scale more efficiently, onboard new clients faster, and consistently deliver high-quality service at speed.",
    results: ["Scaled efficiently", "Faster client onboarding", "High-quality service"],
  },
];

export default function Proof() {
  return (
    <section className="relative bg-white text-[#0a0a0a]" style={{ padding: "8rem 2rem" }}>
      <GridBg animate />
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ marginBottom: "5rem" }}
        >
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "1rem" }}>
            Proof
          </p>
          <h2 className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 600, lineHeight: 1.1 }}>
            Real Results,
            <br />
            Real Businesses
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="proof-item"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "4rem",
                alignItems: "center",
              }}
            >
              <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "12px", overflow: "hidden" }}>
                  <RevealImage
                    src={client.image}
                    alt={client.name}
                    objectPosition={client.objectPosition}
                  />
                </div>
              </div>

              <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
                <blockquote className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", lineHeight: 1.6, color: "#0a0a0a", marginBottom: "2rem" }}>
                  &ldquo;{client.quote}&rdquo;
                </blockquote>

                <div style={{ marginBottom: "2rem" }}>
                  <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                    {client.name}
                  </p>
                  <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.4)", marginTop: "0.25rem" }}>
                    {client.role}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {client.results.map((result) => (
                    <span
                      key={result}
                      className="badge-invert font-[family-name:var(--font-inter)]"
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        padding: "0.5rem 1rem",
                        border: "1px solid rgba(0,0,0,0.1)",
                        borderRadius: "999px",
                        color: "rgba(0,0,0,0.5)",
                        cursor: "pointer",
                      }}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ textAlign: "center", marginTop: "4rem" }}
        >
          <a
            href="#book"
            className="font-[family-name:var(--font-inter)] hover:opacity-80 transition-opacity duration-300"
            style={{ display: "inline-block", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500, color: "white", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "0.875rem 2.25rem", borderRadius: "999px" }}
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
