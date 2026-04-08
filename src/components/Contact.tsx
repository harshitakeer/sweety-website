"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import SubtleBg from "./SubtleBg";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/harshita",
    icon: (
      <svg style={{ width: 18, height: 18 }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/harshita",
    icon: (
      <svg style={{ width: 18, height: 18 }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/harshita",
    icon: (
      <svg style={{ width: 18, height: 18 }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "112px 24px", position: "relative", overflow: "hidden" }}
    >
      <SubtleBg />
      <div style={{ width: "100%", maxWidth: 860, textAlign: "center", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 24 }}
        >
          <p style={{ fontSize: 14, fontWeight: 600, color: "#FF6B9D", marginBottom: 8, fontFamily: "var(--font-jetbrains), monospace" }}>03 — contact</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1B2A4A", fontFamily: "var(--font-space), system-ui, sans-serif", letterSpacing: "-0.02em" }}>
            let&apos;s work together
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ color: "rgba(27,42,74,0.55)", fontSize: 17, maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}
        >
          i&apos;m always open to new opportunities, collaborations, and interesting conversations. feel free to reach out!
        </motion.p>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ marginBottom: 40, display: "flex", justifyContent: "center" }}
        >
          <MagneticButton>
            <a
              href="mailto:hello@harshita.dev"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                borderRadius: 9999,
                background: "#FF6B9D",
                color: "white",
                fontWeight: 600,
                fontSize: 16,
                border: "none",
                textDecoration: "none",
                transition: "all 0.2s",
                boxShadow: "0 2px 16px rgba(255,107,157,0.25)",
              }}
            >
              say hello →
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}
        >
          {socials.map((social, i) => (
            <MagneticButton key={social.name}>
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  borderRadius: 10,
                  fontWeight: 500,
                  fontSize: 14,
                  color: "rgba(27,42,74,0.6)",
                  border: "1.5px solid rgba(27,42,74,0.08)",
                  background: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                {social.icon}
                {social.name}
              </motion.a>
            </MagneticButton>
          ))}
        </motion.div>

        {/* Footer */}
        <div style={{ marginTop: 80, fontSize: 13, fontWeight: 500, color: "rgba(27,42,74,0.25)" }}>
          designed & built by harshita
        </div>
      </div>
    </section>
  );
}
