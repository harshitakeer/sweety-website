"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Smiley from "@/components/Smiley";
import WavingHand from "@/components/WavingHand";

const CodeMatrixBg = dynamic(() => import("@/components/CodeMatrixBg"), { ssr: false });

const links = [
  { name: "linkedin", url: "https://linkedin.com/in/harshita-keerthipati" },
  { name: "github", url: "https://github.com/harshitakeer" },
  { name: "twitter", url: "https://twitter.com/harshita" },
  { name: "email", url: "mailto:hkeer@uw.edu" },
];

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ marginBottom: 36 }}
    >
      {children}
    </motion.div>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  if (!href) {
    return <span style={{ color: "#122A64", fontWeight: 500 }}>{children}</span>;
  }
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      style={{ color: "#122A64", textDecoration: "underline", textUnderlineOffset: 3, textDecorationColor: "rgba(18,42,100,0.3)" }}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <CodeMatrixBg />

      <main style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto", padding: "80px 32px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Header */}
        <Section>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-serif), Georgia, serif", fontSize: 56, fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.01em", color: "#122A64" }}
          >
            <Smiley size={44} />
            hi, i&apos;m harshita!
          </motion.h1>
        </Section>

        <Section delay={0.1}>
          <p style={{ fontSize: 18, color: "#122A64", lineHeight: 1.65, marginBottom: 16 }}>
            i&apos;m a second year cs student at the <strong style={{ color: "#122A64", fontWeight: 500 }}>university of washington</strong>.
            i like building things that help people, and i&apos;m into applied ml research.
          </p>
          <p style={{ fontSize: 18, color: "#122A64", lineHeight: 1.65 }}>
            this winter, i&apos;ll be an intern engineer at <strong style={{ color: "#122A64", fontWeight: 500 }}>shopify</strong>,
            and this summer i&apos;ll be a software engineering intern at <strong style={{ color: "#122A64", fontWeight: 500 }}>salesforce</strong>.
          </p>
        </Section>

        <Section delay={0.15}>
          <p style={{ fontSize: 18, color: "#122A64", lineHeight: 1.65, marginBottom: 8 }}>
            say hi <WavingHand size={20} />
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 18px", fontSize: 18, lineHeight: 1.65 }}>
            {links.map((l) => (
              <Link key={l.name} href={l.url}>{l.name}</Link>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
