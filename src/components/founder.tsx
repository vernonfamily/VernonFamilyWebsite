"use client";

import { motion } from "framer-motion";
import GridBg from "./grid-bg";
import RevealImage from "./reveal-image";

export default function Founder() {
  return (
    <section className="relative bg-white text-[#0a0a0a]" style={{ padding: "8rem 2rem" }}>
      <GridBg animate />
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ marginBottom: "4rem" }}
        >
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "1rem" }}>
            Meet Our Founder
          </p>
        </motion.div>

        <div className="founder-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "12px", overflow: "hidden" }}>
              <RevealImage
                src="/vernon.JPG"
                alt="Vernon Sibiya"
                objectPosition="center top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <h2 className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: "1rem" }}>
              Vernon Sibiya
            </h2>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "2.5rem" }}>
              Founder &amp; Director
            </p>

            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(0,0,0,0.55)", marginBottom: "1.5rem" }}>
              I&apos;m Vernon, founder and director of Vernon Family (Pty) Ltd. I&apos;m 25
              and based in Pretoria. Honestly, I just love figuring out how the right
              tech can actually make a difference in how businesses run day-to-day.
            </p>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(0,0,0,0.55)" }}>
              I spend most of my time working on AI automation and custom software,
              especially for healthcare businesses. For me, it&apos;s not really about the
              tech itself&mdash;it&apos;s about understanding what&apos;s actually slowing people
              down or causing headaches, and then building something that fixes it. I&apos;m
              not interested in solutions that look good on paper but don&apos;t work in the
              real world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
