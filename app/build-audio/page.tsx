"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CreepyButton from "@/components/ui/creepy-button";
import ElectricBorder from "@/components/ui/ElectricBorder";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categoryIcons: Record<string, React.ReactNode> = {
  Speakers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <rect x="4" y="2" width="16" height="20" rx="3" />
      <circle cx="12" cy="14" r="4" />
      <circle cx="12" cy="6" r="2" />
    </svg>
  ),
  Amplifiers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="16" cy="12" r="2" />
      <path d="M12 9v6" strokeLinecap="round" />
    </svg>
  ),
  Headphones: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </svg>
  ),
};

const tierLabels = ["Essential", "Professional", "Flagship"];
const tierColors = [
  { bg: "from-white/5 to-white/[0.02]", ring: "ring-white/10", accent: "text-white/60" },
  { bg: "from-blue-500/10 to-blue-500/[0.02]", ring: "ring-blue-400/20", accent: "text-blue-400" },
  { bg: "from-amber-500/10 to-amber-400/[0.02]", ring: "ring-amber-400/20", accent: "text-amber-400" },
];

const options = {
  Speakers: [
    { name: "Zenith X Mini", price: 4999, desc: "Compact clarity for intimate spaces", features: ["20W Output", "Bluetooth 5.3"] },
    { name: "Zenith X Tower", price: 12999, desc: "Floor-standing acoustic powerhouse", features: ["80W Output", "Hi-Res Audio"] },
    { name: "Zenith X Surround", price: 24999, desc: "Immersive 7.1 spatial sound system", features: ["200W Output", "Dolby Atmos"] },
  ],
  Amplifiers: [
    { name: "Standard Amp Gen 2", price: 8999, desc: "Reliable everyday amplification", features: ["50W/ch", "Class D"] },
    { name: "Pro Amp MKII", price: 15999, desc: "Studio-grade signal processing", features: ["120W/ch", "Class AB"] },
    { name: "Hi-Fi Tube Amp", price: 34999, desc: "Warm vintage tube saturation", features: ["40W/ch", "Class A Tube"] },
  ],
  Headphones: [
    { name: "Zenith X Sport", price: 8999, desc: "Sweat-proof active lifestyle audio", features: ["IPX5", "24h Battery"] },
    { name: "Zenith X Pro", price: 14999, desc: "Studio monitoring precision", features: ["ANC", "40h Battery"] },
    { name: "Zenith X Elite", price: 29999, desc: "Flagship audiophile reference", features: ["Planar Driver", "LDAC"] },
  ],
};

type CategoryKey = keyof typeof options;

export default function BuildAudio() {
  const [selections, setSelections] = useState<Record<CategoryKey, string>>({
    Speakers: "",
    Amplifiers: "",
    Headphones: "",
  });
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("Speakers");

  const calculateTotal = () => {
    let total = 0;
    Object.entries(selections).forEach(([category, name]) => {
      if (name) {
        const item = options[category as CategoryKey].find((o) => o.name === name);
        if (item) total += item.price;
      }
    });
    return total;
  };

  const handleSelect = (category: CategoryKey, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [category]: prev[category] === value ? "" : value,
    }));
  };

  const selectedCount = Object.values(selections).filter(Boolean).length;

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
            Build Your <span className="gradient-text">Audio Setup</span>
          </h1>
          <p className="mt-4 text-lg text-white/50">
            Customize your dream sound system component by component.
          </p>

          {/* Progress indicator */}
          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3">
            {(Object.keys(options) as CategoryKey[]).map((cat, i) => {
              const isSelected = !!selections[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="group flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                      isSelected
                        ? "border-white bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        : isActive
                        ? "border-white/40 bg-white/10 text-white"
                        : "border-white/10 bg-white/5 text-white/30"
                    }`}
                  >
                    {isSelected ? (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-xs font-bold">{i + 1}</span>
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300 ${
                      isActive ? "text-white/80" : "text-white/30"
                    }`}
                  >
                    {cat}
                  </span>
                  {/* Connector line */}
                  {i < 2 && (
                    <div className="absolute hidden" /> // Placeholder for layout
                  )}
                </button>
              );
            })}
          </div>

          {/* Curved SVG separator */}
          <div className="relative mt-12">
            <svg viewBox="0 0 1200 80" fill="none" className="w-full" preserveAspectRatio="none">
              <path
                d="M0 80 Q300 0 600 40 Q900 80 1200 20 L1200 80 L0 80Z"
                fill="url(#curveGrad)"
                opacity="0.5"
              />
              <path
                d="M0 80 Q300 0 600 40 Q900 80 1200 20"
                stroke="url(#curveStroke)"
                strokeWidth="1"
                fill="none"
              />
              <defs>
                <linearGradient id="curveGrad" x1="0" y1="0" x2="1200" y2="0">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.02)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                </linearGradient>
                <linearGradient id="curveStroke" x1="0" y1="0" x2="1200" y2="0">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="30%" stopColor="rgba(255,255,255,0.15)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.25)" />
                  <stop offset="70%" stopColor="rgba(255,255,255,0.15)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Customizer — 3 columns */}
          <div className="lg:col-span-3">
            {/* Category tabs */}
            <div className="mb-8 flex gap-2 rounded-2xl border border-white/5 bg-white/2 p-1.5">
              {(Object.keys(options) as CategoryKey[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-white/10 text-white shadow-lg shadow-white/5"
                      : "text-white/40 hover:text-white/60"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {categoryIcons[cat]}
                    {cat}
                    {selections[cat] && (
                      <span className="flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* Option cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {options[activeCategory].map((item, i) => {
                  const isSelected = selections[activeCategory] === item.name;
                  const tier = tierLabels[i];
                  const colors = tierColors[i];

                  return (
                    <ElectricBorder
                      key={item.name}
                      color={isSelected ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.15)"}
                      speed={isSelected ? 1.2 : 0.5}
                      chaos={isSelected ? 0.08 : 0.04}
                      borderRadius={20}
                    >
                      <motion.button
                        onClick={() => handleSelect(activeCategory, item.name)}
                        className={`group relative w-full overflow-hidden rounded-[20px] border p-5 text-left transition-all duration-500 ${
                          isSelected
                            ? `border-white/20 bg-linear-to-br ${colors.bg} shadow-xl shadow-white/5 ring-1 ${colors.ring}`
                            : "border-white/5 bg-white/3 hover:border-white/10 hover:bg-white/6"
                        }`}
                        whileTap={{ scale: 0.985 }}
                      >
                        <div className="flex items-start gap-5">
                          {/* Selection indicator */}
                          <div
                            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                              isSelected
                                ? "border-white bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                : "border-white/15 bg-transparent group-hover:border-white/30"
                            }`}
                          >
                            <motion.svg
                              className="h-3.5 w-3.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                              initial={false}
                              animate={{ scale: isSelected ? 1 : 0, opacity: isSelected ? 1 : 0 }}
                              transition={{ type: "spring", stiffness: 500, damping: 25 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </motion.svg>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3">
                              <h3
                                className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                                  isSelected ? "text-white" : "text-white/80"
                                }`}
                              >
                                {item.name}
                              </h3>
                              <span
                                className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                                  isSelected
                                    ? `${colors.accent} bg-white/10`
                                    : "bg-white/5 text-white/30"
                                }`}
                              >
                                {tier}
                              </span>
                            </div>
                            <p className="mt-1 text-sm font-light text-white/40">{item.desc}</p>

                            {/* Feature pills */}
                            <div className="mt-3 flex flex-wrap gap-2">
                              {item.features.map((feat) => (
                                <span
                                  key={feat}
                                  className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-all duration-300 ${
                                    isSelected
                                      ? "border-white/15 bg-white/5 text-white/70"
                                      : "border-white/5 text-white/25"
                                  }`}
                                >
                                  {feat}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Price */}
                          <div className="shrink-0 text-right">
                            <p
                              className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                                isSelected ? "text-white" : "text-white/60"
                              }`}
                            >
                              ₹{item.price.toLocaleString()}
                            </p>
                            <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/25">
                              one-time
                            </p>
                          </div>
                        </div>

                        {/* Selected glow overlay */}
                        {isSelected && (
                          <motion.div
                            className="pointer-events-none absolute inset-0 rounded-[20px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="absolute inset-0 rounded-[20px] bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06)_0%,transparent_50%)]" />
                          </motion.div>
                        )}
                      </motion.button>
                    </ElectricBorder>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Decorative curved connector between categories */}
            <div className="relative my-8">
              <svg viewBox="0 0 800 50" fill="none" className="w-full opacity-40" preserveAspectRatio="none">
                <path
                  d="M0 25 C200 5, 300 45, 400 25 S600 5, 800 25"
                  stroke="url(#connectorGrad)"
                  strokeWidth="0.5"
                  strokeDasharray="6 4"
                />
                <defs>
                  <linearGradient id="connectorGrad" x1="0" y1="0" x2="800" y2="0">
                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Configuration Summary — 2 columns */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <ElectricBorder color="rgba(255,255,255,0.35)" speed={0.8} chaos={0.06} borderRadius={24}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl"
                >
                  {/* Header with curved SVG */}
                  <div className="relative bg-linear-to-b from-white/6 to-transparent px-8 pt-8 pb-6">
                    <h2 className="text-xl font-bold text-white/90">Your Configuration</h2>
                    <p className="mt-1 text-xs text-white/30">
                      {selectedCount}/3 components selected
                    </p>

                    {/* Progress bar */}
                    <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-linear-to-r from-white/40 to-white/80"
                        initial={{ width: 0 }}
                        animate={{ width: `${(selectedCount / 3) * 100}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </div>

                    {/* Curved separator */}
                    <svg
                      viewBox="0 0 400 20"
                      fill="none"
                      className="absolute -bottom-3 left-0 w-full"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 0 Q100 20 200 10 Q300 0 400 15 L400 20 L0 20Z"
                        fill="#1a1a1a"
                        opacity="0.5"
                      />
                      <path
                        d="M0 0 Q100 20 200 10 Q300 0 400 15"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>

                  {/* Items list */}
                  <div className="px-8 py-6">
                    <ul className="space-y-5">
                      {(Object.entries(selections) as [CategoryKey, string][]).map(([category, name]) => {
                        const selectedItem = name
                          ? options[category].find((o) => o.name === name)
                          : null;

                        return (
                          <motion.li
                            key={category}
                            layout
                            className="group"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${
                                  selectedItem
                                    ? "bg-white/10 text-white"
                                    : "bg-white/5 text-white/20"
                                }`}
                              >
                                {categoryIcons[category]}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
                                  {category}
                                </p>
                                <AnimatePresence mode="wait">
                                  <motion.p
                                    key={name || "empty"}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className={`text-sm font-medium ${
                                      selectedItem ? "text-white/90" : "text-white/20 italic"
                                    }`}
                                  >
                                    {selectedItem ? selectedItem.name : "Not selected"}
                                  </motion.p>
                                </AnimatePresence>
                              </div>
                              <AnimatePresence>
                                {selectedItem && (
                                  <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="text-sm font-bold text-white/70"
                                  >
                                    ₹{selectedItem.price.toLocaleString()}
                                  </motion.span>
                                )}
                              </AnimatePresence>
                            </div>

                            {/* Separator curve */}
                            <svg viewBox="0 0 300 8" fill="none" className="mt-4 w-full opacity-30">
                              <path
                                d="M0 4 Q75 0 150 4 Q225 8 300 4"
                                stroke="rgba(255,255,255,0.3)"
                                strokeWidth="0.5"
                              />
                            </svg>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Total + CTA */}
                  <div className="relative border-t border-white/5 px-8 py-6">
                    {/* Top curve */}
                    <svg
                      viewBox="0 0 400 12"
                      fill="none"
                      className="absolute -top-3 left-0 w-full"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 12 Q200 0 400 12"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="0.5"
                      />
                    </svg>

                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
                          Total Price
                        </p>
                        <motion.p
                          key={calculateTotal()}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-3xl font-bold text-white"
                        >
                          ₹{calculateTotal().toLocaleString()}
                        </motion.p>
                      </div>
                      {calculateTotal() > 0 && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-green-400/70"
                        >
                          Free shipping
                        </motion.p>
                      )}
                    </div>

                    <CreepyButton
                      className="mt-6 w-full rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:grayscale"
                      disabled={calculateTotal() === 0}
                    >
                      {selectedCount === 3 ? "Complete Build →" : `Select ${3 - selectedCount} more`}
                    </CreepyButton>
                  </div>
                </motion.div>
              </ElectricBorder>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
