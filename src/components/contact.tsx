"use client";

import { motion } from "framer-motion";
import GridBg from "./grid-bg";

export default function Contact() {
  return (
    <section className="relative bg-white text-[#0a0a0a] py-16 px-5 md:py-32 md:px-8">
      <GridBg animate />
      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "1rem" }}>
              Get Started
            </p>
            <h2 className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: "2rem" }}>
              Let&apos;s Talk About
              <br />
              Your Company
            </h2>
            <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(0,0,0,0.5)", maxWidth: "480px" }}>
              Book a free discovery call. We&apos;ll look at your current workflows,
              identify where AI can make the biggest impact, and map out a
              practical plan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            {/* Email */}
            <a
              href="mailto:vernon@vernonfamily.solutions"
              className="flex items-center justify-between py-6 no-underline text-inherit"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
            >
              <div>
                <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "0.5rem" }}>
                  Email
                </p>
                <p className="font-[family-name:var(--font-inter)] text-sm md:text-base" style={{ fontWeight: 500 }}>
                  vernon@vernonfamily.solutions
                </p>
              </div>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="rgba(0,0,0,0.25)" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href="tel:+27814846068"
              className="flex items-center justify-between py-6 no-underline text-inherit"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
            >
              <div>
                <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)", marginBottom: "0.5rem" }}>
                  Phone
                </p>
                <p className="font-[family-name:var(--font-inter)] text-sm md:text-base" style={{ fontWeight: 500 }}>
                  +27 81 484 6068
                </p>
              </div>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="rgba(0,0,0,0.25)" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Social icons */}
            <div className="flex gap-6 pt-6">
              <a
                href="https://www.linkedin.com/in/vernon-sibiya-16bb3925b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-12 h-12 rounded-full no-underline"
                style={{ border: "1px solid rgba(0,0,0,0.1)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a0a0a">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/thepettyk1ng/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-12 h-12 rounded-full no-underline"
                style={{ border: "1px solid rgba(0,0,0,0.1)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a0a0a">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 md:mt-32 pt-8 flex flex-col gap-4 md:flex-row md:justify-between md:items-center"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
        >
          <p className="font-[family-name:var(--font-playfair)]" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
            Vernon Family
          </p>
          <p className="font-[family-name:var(--font-inter)]" style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.35)" }}>
            &copy; {new Date().getFullYear()} Vernon Family (Pty) Ltd. Pretoria, South Africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
