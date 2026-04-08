"use client";

import { motion } from "framer-motion";
import SubtleBg from "./SubtleBg";

const links = [
  { name: "github", url: "https://github.com/harshita" },
  { name: "linkedin", url: "https://linkedin.com/in/harshita" },
  { name: "twitter", url: "https://twitter.com/harshita" },
  { name: "email", url: "mailto:hello@harshita.dev" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ width: "100%", display: "flex", justifyContent: "center", padding: "80px 32px 120px", position: "relative", overflow: "hidden" }}
    >
      <SubtleBg />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: 720, width: "100%", position: "relative", zIndex: 1 }}
      >
        <h2 style={{ fontSize: 13, fontWeight: 600, color: "#FF6B9D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24, fontFamily: "var(--font-jetbrains), monospace" }}>
          Contact
        </h2>

        <p style={{ fontSize: 17, color: "rgba(27,42,74,0.5)", lineHeight: 1.8, marginBottom: 32, maxWidth: 480 }}>
          always open to new opportunities, collaborations, and interesting conversations.
        </p>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#1B2A4A",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {link.name} ↗
            </a>
          ))}
        </div>

        <div style={{ marginTop: 80, fontSize: 13, color: "rgba(27,42,74,0.25)" }}>
          designed & built by harshita
        </div>
      </motion.div>
    </section>
  );
}
