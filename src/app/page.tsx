"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const CodeMatrixBg = dynamic(() => import("@/components/CodeMatrixBg"), { ssr: false });

const experience = [
  { name: "dharma", role: "co-founder", desc: "building something i genuinely believe in", link: "https://github.com/vikranthkeerthipati/dharma" },
  { name: "uw husky satellite lab", role: "software engineer", desc: "writing the code that helps satellites see stars", link: "https://huskysat.org/" },
  { name: "california business technology", role: "security engineer", desc: "california's first cybersecurity youth apprentice", link: "https://cbt.io/" },
  { name: "cisco", role: "extern", desc: "built an autonomous wheelchair prototype at their ai hackathon", link: "https://www.cisco.com" },
];

const projects = [
  { name: "gpt transformer", desc: "wanted to understand how LLMs actually work, so i built one from scratch", link: "https://github.com/harshitakeer/gpt_transformer", github: "https://github.com/harshitakeer/gpt_transformer" },
  { name: "fitcheck", desc: "virtual try-on app — diffusion models + 50 user interviews to get it right", link: "https://github.com/vikranthkeerthipati/fitsai", github: "https://github.com/vikranthkeerthipati/fitsai" },
  { name: "bump", desc: "making it easier to stay connected with the people around you", link: "https://github.com/harshitakeer/bumpd", github: "https://github.com/harshitakeer/bumpd" },
  { name: "findar", desc: "lost your keys? lidar + yolo to track every object in your space", link: "https://github.com/harshitakeer/findar", github: "https://github.com/harshitakeer/findar" },
  { name: "nenu apparel", desc: "started a clothing brand, shipped 6 drops, got 50+ pre-orders", link: "https://nenuprelaunch.vercel.app/" },
];

const links = [
  { name: "github", url: "https://github.com/harshitakeer" },
  { name: "linkedin", url: "https://linkedin.com/in/harshita-keerthipati" },
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
      style={{ marginBottom: 56 }}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1B2A4A", marginBottom: 16 }}>
      {children}
    </h2>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  if (!href) {
    return <span style={{ color: "#1B2A4A", fontWeight: 500 }}>{children}</span>;
  }
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      style={{ color: "#1B2A4A", textDecoration: "underline", textUnderlineOffset: 3, textDecorationColor: "rgba(27,42,74,0.2)" }}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <CodeMatrixBg />

      <main style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto", padding: "80px 32px 120px" }}>
        {/* Header */}
        <Section>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: 28, fontWeight: 700, color: "#1B2A4A", marginBottom: 4 }}
          >
            harshita&#8202;◡̈
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ fontSize: 15, color: "rgba(27,42,74,0.65)" }}
          >
            bay area, ca | seattle, wa
          </motion.p>
        </Section>

        {/* Today */}
        <Section delay={0.1}>
          <Label>today</Label>
          <p style={{ fontSize: 15, color: "rgba(27,42,74,0.88)", lineHeight: 1.8 }}>
            studying cs at the <strong style={{ color: "#1B2A4A", fontWeight: 600 }}>university of washington</strong>.
            i care a lot about building things that actually help people — right now that looks like <Link href="https://github.com/vikranthkeerthipati/dharma">dharma</Link>,
            an ios app bringing spirituality into the modern world. i get excited about ml, systems, and
            anything where i can go from idea to shipped product.
          </p>
        </Section>

        {/* Experience */}
        <Section delay={0.12}>
          <Label>experience</Label>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {experience.map((e) => (
              <div key={e.name} style={{ fontSize: 15, color: "rgba(27,42,74,0.88)", lineHeight: 1.8 }}>
                <Link href={e.link}>{e.name}</Link>
                <span>, {e.role}</span>
                <span style={{ color: "rgba(27,42,74,0.55)" }}> — {e.desc}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section delay={0.15}>
          <Label>projects</Label>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {projects.map((p) => (
              <div key={p.name} style={{ fontSize: 15, color: "rgba(27,42,74,0.88)", lineHeight: 1.8 }}>
                <Link href={p.link}>{p.name}</Link>
                <span style={{ color: "rgba(27,42,74,0.55)" }}> — {p.desc}</span>
                {p.github && (
                  <>
                    {" "}
                    <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(27,42,74,0.3)", textDecoration: "none", fontSize: 13 }}>
                      [src]
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Stack */}
        <Section delay={0.18}>
          <Label>things i work with</Label>
          <p style={{ fontSize: 15, color: "rgba(27,42,74,0.88)", lineHeight: 1.8 }}>
            python, java, c++, swift, typescript, javascript, sql, r,
            react, node.js, fastapi, django, flask, pytorch, tensorflow,
            scikit-learn, pandas, numpy, aws, docker, linux, git, xcode,
            postgresql, mysql, supabase, openai api, tailwind css, figma.
          </p>
        </Section>

        {/* Links */}
        <Section delay={0.2}>
          <Label>links</Label>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {links.map((l) => (
              <div key={l.name} style={{ fontSize: 15 }}>
                <Link href={l.url}>{l.name}</Link>
              </div>
            ))}
          </div>
        </Section>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontSize: 14, fontWeight: 600, color: "rgba(27,42,74,0.4)", marginTop: 40 }}
        >
          built by harshita ✦
        </motion.p>
      </main>
    </div>
  );
}
