"use client";

import { motion } from "framer-motion";
import SubtleBg from "./SubtleBg";

const skills = [
  { category: "languages", items: ["TypeScript", "Python", "Swift", "Java", "C++"], color: "#FFD4E3", border: "#FF6B9D" },
  { category: "frontend", items: ["React", "Next.js", "Tailwind", "Framer Motion"], color: "#E8ECF4", border: "#1B2A4A" },
  { category: "backend", items: ["Node.js", "Firebase", "PostgreSQL", "REST APIs"], color: "#C8F7DC", border: "#34D399" },
  { category: "tools", items: ["Figma", "Git", "Vercel", "Docker"], color: "#E0D4F7", border: "#A78BFA" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "112px 24px", position: "relative", overflow: "hidden" }}
    >
      <SubtleBg />
      <div style={{ width: "100%", maxWidth: 860, position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48 }}
        >
          <p style={{ fontSize: 14, fontWeight: 600, color: "#FF6B9D", marginBottom: 8, fontFamily: "var(--font-jetbrains), monospace", textAlign: "center" }}>01 — about</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1B2A4A", textAlign: "center", fontFamily: "var(--font-space), system-ui, sans-serif", letterSpacing: "-0.02em" }}>
            a bit about me
          </h2>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 56, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}
        >
          <p style={{ color: "rgba(27,42,74,0.7)", lineHeight: 1.8, fontSize: 17, marginBottom: 16 }}>
            i&apos;m a <strong style={{ color: "#1B2A4A" }}>developer, designer, and builder</strong> passionate
            about creating products that sit at the intersection of{" "}
            <strong style={{ color: "#FF6B9D" }}>thoughtful design</strong> and{" "}
            <strong style={{ color: "#1B2A4A" }}>robust engineering</strong>.
          </p>
          <p style={{ color: "rgba(27,42,74,0.55)", lineHeight: 1.8, marginBottom: 16 }}>
            currently a student exploring the full spectrum of tech — from
            pixel-perfect interfaces to scalable backends. i believe the best
            products come from sweating both the details and the architecture.
          </p>
          <p style={{ color: "rgba(27,42,74,0.55)", lineHeight: 1.8 }}>
            when i&apos;m not coding, you&apos;ll find me designing in figma,
            exploring new frameworks, or shipping side projects.
          </p>
        </motion.div>

        {/* Skills */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.08 }}
              style={{
                padding: 24,
                borderRadius: 16,
                border: `1.5px solid ${group.border}30`,
                background: group.color + "25",
              }}
            >
              <h3 style={{ fontSize: 11, fontWeight: 700, color: "rgba(27,42,74,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, fontFamily: "var(--font-jetbrains), monospace" }}>
                {group.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      padding: "6px 14px",
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.7)",
                      color: "rgba(27,42,74,0.7)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
