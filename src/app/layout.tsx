import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulhadi.com.np"),
  title: "Abdul Hadi | Full-Stack Developer, Android Engineer, AI Specialist in Kathmandu",
  description: "Abdul Hadi is a software engineer and founder of Zyvora Technologies in Kathmandu, Nepal. He builds full-stack web applications, Android apps, AI integrations, and SaaS platforms for businesses across Nepal and South Asia.",
  keywords: [
    "software developer Nepal",
    "full stack developer Kathmandu",
    "Android developer Nepal",
    "AI integration Nepal",
    "SaaS development Nepal",
    "web developer Kathmandu",
    "hire developer Nepal",
    "Zyvora Technologies",
    "Abdul Hadi developer",
    "Next.js developer Nepal",
    "Python developer Nepal"
  ],
  openGraph: {
    title: "Abdul Hadi | Software Engineer and Founder, Zyvora Technologies",
    description: "I build production-grade web apps, Android apps, and AI systems for businesses in Nepal and beyond.",
    url: "https://www.abdulhadi.com.np",
    type: "website",
    images: [{ url: "/assets/profile.jpg", width: 800, height: 800 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Hadi | Software Engineer and Founder",
    description: "Founder of Zyvora Technologies. Building AI-first digital products from Kathmandu, Nepal."
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.abdulhadi.com.np",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-inter antialiased selection:bg-[var(--accent-glow)] selection:text-[var(--accent)]">
        {children}
      </body>
    </html>
  );
}
