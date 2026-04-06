"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

const options = {
  Speakers: [
    { name: "Zenith X Mini", price: 4999 },
    { name: "Zenith X Tower", price: 12999 },
    { name: "Zenith X Surround", price: 24999 },
  ],
  Amplifiers: [
    { name: "Standard Amp Gen 2", price: 8999 },
    { name: "Pro Amp MKII", price: 15999 },
    { name: "Hi-Fi Tube Amp", price: 34999 },
  ],
  Headphones: [
    { name: "Zenith X Sport", price: 8999 },
    { name: "Zenith X Pro", price: 14999 },
    { name: "Zenith X Elite", price: 29999 },
  ],
};

export default function BuildAudio() {
  const [selections, setSelections] = useState({
    Speakers: "",
    Amplifiers: "",
    Headphones: "",
  });

  const calculateTotal = () => {
    let total = 0;
    Object.entries(selections).forEach(([category, name]) => {
      if (name) {
        const item = options[category as keyof typeof options].find((o) => o.name === name);
        if (item) total += item.price;
      }
    });
    return total;
  };

  const handleSelect = (category: string, value: string) => {
    setSelections((prev) => ({ ...prev, [category]: value }));
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
            Build Your <span className="gradient-text">Audio Setup</span>
          </h1>
          <p className="mt-4 text-lg text-white/50">
            Customize your dream sound system component by component.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Customizer */}
          <div className="space-y-8">
            {Object.entries(options).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/5 bg-white/5 p-6"
              >
                <label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-white/40">
                  Select {category}
                </label>
                <select
                  className="w-full rounded-xl border border-white/10 bg-[#121212] p-4 text-white outline-none transition-focus focus:border-white/20 focus:ring-1 focus:ring-white/20"
                  onChange={(e) => handleSelect(category, e.target.value)}
                  value={selections[category as keyof typeof selections]}
                >
                  <option value="">None Selected</option>
                  {items.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} - ₹{item.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </motion.div>
            ))}
          </div>

          {/* Configuration Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl"
          >
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white/90">Your Configuration</h2>
              <ul className="space-y-4">
                {Object.entries(selections).map(([category, name]) => (
                  <li key={category} className="flex justify-between border-b border-white/5 pb-4">
                    <span className="text-sm font-light text-white/40">{category}</span>
                    <span className="text-sm font-medium text-white/90">{name || "Not Selected"}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <div className="flex justify-between border-t border-white/10 pt-8 text-3xl font-bold text-white">
                <span>Total</span>
                <span>₹{calculateTotal().toLocaleString()}</span>
              </div>
              <button className="mt-8 w-full rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] active:scale-95 disabled:opacity-50 disabled:grayscale"
                disabled={calculateTotal() === 0}
              >
                Complete Build
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
