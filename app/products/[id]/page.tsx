"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl bg-[#121212]/50 p-8 shadow-2xl shadow-black/80 ring-1 ring-white/10"
          >
            <div className="flex h-[400px] items-center justify-center sm:h-[500px]">
                <motion.img
                  src="/ezgif-16184cd03497a2b4-jpg/ezgif-frame-100.jpg"
                  alt="Product"
                  className="h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 inline-flex w-fit items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/50 ring-1 ring-white/10">
              New Arrival
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Zenith X <span className="gradient-text">Elite</span>
            </h1>
            
            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-bold text-white/90">₹14,999</span>
              <span className="text-sm font-light text-white/40 line-through">₹19,999</span>
              <span className="rounded-md bg-green-500/10 px-2 py-0.5 text-xs font-bold text-green-400 ring-1 ring-green-500/20">
                SAVE 25%
              </span>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-white/60">
              Experience the absolute pinnacle of audio engineering. The Zenith X Elite features custom-tuned 50mm titanium drivers, ultra-low latency wireless connectivity, and an industry-leading 60-hour battery life.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 border-y border-white/5 py-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-white/40">Driver Size</p>
                <p className="mt-1 text-white/90 font-medium">50mm Titanium</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-white/40">Battery</p>
                <p className="mt-1 text-white/90 font-medium">60 Hours + Qi Charging</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-white/40">Noise Cancelling</p>
                <p className="mt-1 text-white/90 font-medium">Adaptive ANC Gen 4</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-white/40">Connectivity</p>
                <p className="mt-1 text-white/90 font-medium">Bluetooth 5.3 + 2.4GHz</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="flex-1 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95">
                Add to Cart
              </button>
              <button className="flex-1 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95">
                Add to Wishlist
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
