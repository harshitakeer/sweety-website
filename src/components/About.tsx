"use client";

import { motion } from "framer-motion";
import SubtleBg from "./SubtleBg";

const skills = [
  "TypeScript", "Python", "Swift", "React", "Next.js",
  "Tailwind", "Node.js", "Firebase", "PostgreSQL",
  "Figma", "Framer Motion", "Git", "Docker", "Vercel",
];

export default function About() {
  return (
    <section
      id="about"
      style={{ width: "100%", display: "flex", justifyContent: "center", padding: "80px 32px", position: "relative", overflow: "hidden" }}
    >
      <SubtleBg />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: 720, width: "100%", position: "relative", zIndex: 1 }}
      >
        <h2 style={{ fontSize: 13, fontWeight: 600, color: "#FF6B9D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24, fontFamily: "var(--font-jetbrains), monospace" }}>
          About
        </h2>

        <p style={{ fontSize: 17, color: "rgba(27,42,74,0.6)", lineHeight: 1.9, marginBottom: 16 }}>
          i&apos;m a <strong style={{ color: "#1B2A4A", fontWeight: 600 }}>developer, designer, and builder</strong> passionate
          about creating products at the intersection of thoughtful design and robust engineering.
        </p>
        <p style={{ fontSize: 17, color: "rgba(27,42,74,0.5)", lineHeight: 1.9, marginBottom: 32 }}>
          currently a student exploring the full spectrum of tech — from pixel-perfect interfaces to
          scalable backends. when i&apos;m not coding, i&apos;m designing in figma or shipping side projects.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                fontSize: 13,
                padding: "5px 14px",
                borderRadius: 6,
                background: "rgba(27,42,74,0.04)",
                color: "rgba(27,42,74,0.5)",
                fontFamily: "var(--font-jetbrains), monospace",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
