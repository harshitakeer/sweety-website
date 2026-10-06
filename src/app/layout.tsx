import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Satoshi from Fontshare (not on Google Fonts), self-hosted
const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
  ],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "harshita",
  description: "developer, designer, builder.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='50' text-anchor='middle' dominant-baseline='central' font-size='72' font-weight='500' font-family='Helvetica, Arial, sans-serif' fill='%23FFFFFF'>hk</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${instrumentSerif.variable} ${jetbrains.variable} antialiased`}>
      <body style={{ minHeight: "100vh", background: "#FFFFFF", fontFamily: "var(--font-satoshi), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
