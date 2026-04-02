"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M18.364 5.636a9 9 0 0 1 0 12.728M15.536 8.464a5 5 0 0 1 0 7.072" strokeLinecap="round" />
        <circle cx="8" cy="12" r="2" />
        <path d="M8 14v6" strokeLinecap="round" />
      </svg>
    ),
    title: "Active Noise Cancellation",
    description:
      "Adaptive ANC with 6 microphones eliminates up to 98% of ambient noise, letting you focus on pure audio.",
    stat: "98%",
    statLabel: "Noise reduction",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <rect x="6" y="7" width="12" height="10" rx="2" />
        <path d="M9 17v2M15 17v2M9 7V5M15 7V5" strokeLinecap="round" />
        <path d="M10 11h1M13 11h1" strokeLinecap="round" />
      </svg>
    ),
    title: "40-Hour Battery",
    description:
      "Industry-leading battery life with fast charging — 5 minutes gives you 3 hours of playback.",
    stat: "40h",
    statLabel: "Battery life",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
    title: "Spatial Audio",
    description:
      "360° immersive sound with dynamic head tracking places you at the center of every performance.",
    stat: "360°",
    statLabel: "Immersive sound",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Titanium Drivers",
    description:
      "50mm titanium-coated diaphragms deliver exceptional clarity from deep 4Hz bass to crystal 40kHz highs.",
    stat: "50mm",
    statLabel: "Driver diameter",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative overflow-hidden px-6 py-32 lg:px-8"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Why Zenith X
          </p>
          <h2 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Engineered for
            <br />
            <span className="text-white/60">Perfection</span>
          </h2>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass-card group relative rounded-2xl p-6 transition-all duration-500 hover:bg-white/6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Stat badge */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                  {feature.icon}
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold tracking-tight text-white/80">
                    {feature.stat}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30">
                    {feature.statLabel}
                  </p>
                </div>
              </div>

              <h3 className="mb-2 text-base font-semibold tracking-tight text-white/90">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed font-light text-white/50">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
