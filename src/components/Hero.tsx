"use client";

import { motion } from "framer-motion";
import { Smiley, StickFigureLaptop, Sparkle } from "./Doodles";
import MagneticButton from "./MagneticButton";
import InteractiveBg from "./InteractiveBg";

export default function Hero() {
  return (
    <section
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", position: "relative" }}
    >
      {/* Interactive floating shapes */}
      <InteractiveBg />

      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: 80, left: 40, width: 256, height: 256, background: "rgba(255,212,227,0.4)", borderRadius: "50%", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", bottom: 80, right: 40, width: 288, height: 288, background: "rgba(224,212,247,0.3)", borderRadius: "50%", filter: "blur(60px)" }} />
      <div style={{ position: "absolute", top: 160, right: 80, width: 192, height: 192, background: "rgba(255,229,102,0.2)", borderRadius: "50%", filter: "blur(60px)" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 860, width: "100%", textAlign: "center" }}>
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display"
          style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", fontWeight: 700, color: "#1B2A4A", marginBottom: 16, lineHeight: 1 }}
        >
          hi, i&apos;m
          <br />
          <span style={{ position: "relative", display: "inline-block" }}>
            <span className="doodle-underline">harshita</span>
            <motion.span
              style={{ position: "absolute", top: -16, right: -32 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Smiley size={32} />
            </motion.span>
          </span>
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 32 }}
        >
          {["developer", "designer", "builder", "student"].map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              style={{
                padding: "10px 22px",
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: 14,
                border: "2px solid",
                background: ["#FFD4E3", "#E8ECF4", "#C8F7DC", "#E0D4F7"][i],
                borderColor: ["#FF6B9D", "#1B2A4A", "#34D399", "#A78BFA"][i],
                color: "#1B2A4A",
              }}
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ fontSize: 18, color: "rgba(27,42,74,0.6)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}
        >
          i love building things that matter and helping people along the way{" "}
          <span className="sticker" style={{ display: "inline-block" }}>☺</span>
        </motion.p>

        {/* Stick figure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}
        >
          <StickFigureLaptop size={140} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}
        >
          <MagneticButton>
            <a
              href="#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                borderRadius: 9999,
                background: "#1B2A4A",
                color: "#FFF8F0",
                fontWeight: 700,
                fontSize: 15,
                border: "2px solid #1B2A4A",
                boxShadow: "3px 3px 0 #FF6B9D",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              see my work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                borderRadius: 9999,
                background: "#FFF0F5",
                color: "#FF6B9D",
                fontWeight: 700,
                fontSize: 15,
                border: "2px solid #FF6B9D",
                boxShadow: "3px 3px 0 #1B2A4A",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              say hi ☺
            </a>
          </MagneticButton>
        </motion.div>
      </div>

    </section>
  );
}
