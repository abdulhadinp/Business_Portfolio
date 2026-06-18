"use client";

import { ArrowRight } from "lucide-react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import ScrollReveal from "../ui/ScrollReveal";

export default function CodeByHadi() {
  const platforms = [
    {
      name: "YouTube",
      handle: "@CodeByHadi",
      icon: FaYoutube,
      color: "#FF0000",
      link: "https://youtube.com/@CodeByHadi"
    },
    {
      name: "Instagram",
      handle: "@CodeByHadi",
      icon: FaInstagram,
      color: "#E1306C",
      link: "https://instagram.com/CodeByHadi"
    },
    {
      name: "Facebook",
      handle: "@CodeByHadi",
      icon: FaFacebook,
      color: "#1877F2",
      link: "https://facebook.com/CodeByHadi"
    }
  ];

  return (
    <section className="relative bg-[var(--accent-light)] section-padding overflow-hidden">
      {/* Subtle edge gradients */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--violet-light)] to-transparent opacity-50" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[var(--violet-light)] to-transparent opacity-50" />

      <div className="container-main relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="w-full lg:w-[45%]">
            <ScrollReveal>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold font-bricolage leading-[1.2] text-[var(--text-primary)] mb-6">
                I Also Teach What I Build
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-[var(--text-secondary)] leading-[1.7]">
                CodeByHadi is my tech education brand where I break down complex engineering topics into practical, clear content. From Python and machine learning to full-stack development and Android apps, I create tutorials for developers across Nepal and India. Find me at @CodeByHadi.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column Links */}
          <div className="w-full lg:w-[55%] flex flex-col sm:flex-row gap-4">
            {platforms.map((platform, i) => (
              <ScrollReveal key={platform.name} variant="scaleIn" delay={0.1 * i} className="flex-1">
                <a 
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl p-6 border border-[var(--border)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <platform.icon color={platform.color} size={32} className="mb-4" />
                  <div className="font-semibold text-[var(--text-primary)] mb-1">{platform.name}</div>
                  <div className="text-sm text-[var(--text-secondary)] mb-4">{platform.handle}</div>
                  <div className="flex justify-end">
                    <ArrowRight size={20} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
