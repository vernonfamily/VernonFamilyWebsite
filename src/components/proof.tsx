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
    name: "Dr. Phetla",
    role: "Dr. Boitumelo Wellness",
    image: "/dr-phetla.jpg",
    objectPosition: "top",
    quote:
      "Working with Vernon Family was a turning point. They understood our practice inside out and built systems that actually work for us.",
    results: ["Reduced no-shows", "Faster billing cycles", "Happier team"],
  },
];

export default function Proof() {
  return (
    <section className="relative bg-white text-[#0a0a0a] py-16 px-5 md:py-32 md:px-8">
      <GridBg animate />
      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 md:mb-20"
        >
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "1rem" }}>
            Proof
          </p>
          <h2 className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 600, lineHeight: 1.1 }}>
            Real Results,
            <br />
            Real Businesses
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-24">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              <div style={{ order: 1 }} className={i % 2 === 1 ? "md:order-2" : "md:order-1"}>
                <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "12px", overflow: "hidden" }}>
                  <RevealImage
                    src={client.image}
                    alt={client.name}
                    objectPosition={client.objectPosition}
                  />
                </div>
              </div>

              <div style={{ order: 2 }} className={i % 2 === 1 ? "md:order-1" : "md:order-2"}>
                <blockquote className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", lineHeight: 1.6, color: "#0a0a0a", marginBottom: "2rem" }}>
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

                <div className="flex flex-wrap gap-3">
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
      </div>
    </section>
  );
}
