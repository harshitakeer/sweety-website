"use client";

import { motion } from "framer-motion";
import InteractiveBg from "./InteractiveBg";

export default function Hero() {
  return (
    <section
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 32px 80px", position: "relative" }}
    >
      <InteractiveBg />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: "relative", zIndex: 10, maxWidth: 720, width: "100%" }}
      >
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, color: "#1B2A4A", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
          harshita
          <motion.span
            style={{ display: "inline-block", marginLeft: 6, color: "#FF6B9D", fontSize: "0.5em" }}
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            ✦
          </motion.span>
        </h1>

        <p style={{ fontSize: 18, color: "rgba(27,42,74,0.55)", lineHeight: 1.8, maxWidth: 520, marginBottom: 16 }}>
          developer, designer, builder, student.
        </p>

        <p style={{ fontSize: 17, color: "rgba(27,42,74,0.45)", lineHeight: 1.8, maxWidth: 520, marginBottom: 40 }}>
          i love building things that matter and helping people along the way.
          currently obsessed with crafting beautiful interfaces &amp; shipping side projects.
        </p>

        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a href="#projects" style={{ fontSize: 15, fontWeight: 600, color: "#FF6B9D", textDecoration: "none" }}>
            projects ↓
          </a>
          <a href="mailto:hello@harshita.dev" style={{ fontSize: 15, fontWeight: 600, color: "#1B2A4A", textDecoration: "none" }}>
            say hello →
          </a>
          <a href="/resume.pdf" style={{ fontSize: 15, color: "rgba(27,42,74,0.4)", textDecoration: "none" }}>
            resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
