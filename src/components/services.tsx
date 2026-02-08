"use client";

import { motion } from "framer-motion";
import GridBg from "./grid-bg";

const services = [
  {
    number: "01",
    title: "AI Systems Implementation",
    description:
      "We design and deploy AI-powered systems tailored to your practice. From patient communication to appointment management, we handle the full build.",
  },
  {
    number: "02",
    title: "Workflow Automation",
    description:
      "We eliminate repetitive admin tasks that drain your team's time. Automated reminders, follow-ups, billing workflows, and more.",
  },
  {
    number: "03",
    title: "Practice Intelligence",
    description:
      "We turn your practice data into clear, actionable insights. Know exactly where time and revenue are being lost, and how to fix it.",
  },
  {
    number: "04",
    title: "Team Training & Support",
    description:
      "We don't just build systems and leave. Your team gets hands-on training and ongoing support so everything runs smoothly.",
  },
];

export default function Services() {
  return (
    <section id="solutions" className="relative bg-[#0a0a0a] text-white py-16 px-5 md:py-32 md:px-8">
      <GridBg dark animate />
      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
            What We Do
          </p>
          <h2 className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 600, lineHeight: 1.1 }}>
            Our Solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="card-invert"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                padding: "clamp(1.5rem, 4vw, 3rem)",
                backgroundColor: "rgba(255,255,255,0.02)",
                cursor: "pointer",
              }}
            >
              <span className="card-number font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", display: "block", marginBottom: "1.5rem" }}>
                {service.number}
              </span>
              <h3 className="card-title font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)", fontWeight: 500, marginBottom: "1rem", lineHeight: 1.2, color: "white" }}>
                {service.title}
              </h3>
              <p className="card-desc font-[family-name:var(--font-inter)]" style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
