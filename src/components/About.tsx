"use client";

import { motion } from "framer-motion";
import { Smiley, Star } from "./Doodles";
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
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 48 }}
        >
          <Star size={28} />
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#1B2A4A", textAlign: "center" }}>
            about me
          </h2>
          <Smiley size={32} />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p style={{ color: "rgba(27,42,74,0.7)", lineHeight: 1.8, fontSize: 18, marginBottom: 16 }}>
            i&apos;m a{" "}
            <span style={{ fontWeight: 700, color: "#1B2A4A" }}>developer, designer, and builder</span>{" "}
            who loves making things for the internet! i care deeply about the
            sweet spot between{" "}
            <span style={{ fontWeight: 700, color: "#FF6B9D" }}>beautiful design</span> and{" "}
            <span style={{ fontWeight: 700, color: "#1B2A4A" }}>solid engineering</span> ☺
          </p>
          <p style={{ color: "rgba(27,42,74,0.6)", lineHeight: 1.8, marginBottom: 16 }}>
            currently a student exploring the full spectrum of tech — from
            crafting pixel-perfect interfaces to building scalable backends.
            the best products come from obsessing over both the details and the
            architecture!
          </p>
          <p style={{ color: "rgba(27,42,74,0.6)", lineHeight: 1.8 }}>
            when i&apos;m not coding, you&apos;ll find me designing in figma,
            exploring new frameworks, or working on side projects that probably
            should have stayed as ideas ☻
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
              transition={{ delay: groupIdx * 0.1 }}
              style={{
                padding: 24,
                borderRadius: 16,
                border: `2px solid ${group.border}`,
                background: group.color + "40",
                boxShadow: `3px 3px 0 ${group.border}`,
              }}
            >
              <h3 style={{ fontSize: 11, fontWeight: 700, color: "#1B2A4A", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                {group.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "6px 14px",
                      borderRadius: 9999,
                      background: "white",
                      color: "rgba(27,42,74,0.8)",
                      border: "1px solid rgba(27,42,74,0.1)",
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
