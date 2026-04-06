"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-7xl">
            Our <span className="gradient-text">Story</span>
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-white/70">
            Founded in 2024, Zenith X was born from a simple mission: to create the world's most immersive audio experiences. We believe that sound is not just heard, but felt – a symphony of frequencies that can transport you to another world.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h2 className="mb-6 text-3xl font-bold text-white/90">The Zenith X Philosophy</h2>
            <p className="text-lg leading-relaxed text-white/60">
              We don't follow trends. We set them. Every Zenith X product is the result of thousands of hours of acoustic research, combined with the world's finest materials. From titanium drivers to sustainable vegan leather, we never compromise on quality.
            </p>
            
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
              <div>
                <p className="text-4xl font-bold tracking-tight text-white/90">240+</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-white/40">Patents Pending</p>
              </div>
              <div>
                <p className="text-4xl font-bold tracking-tight text-white/90">10k</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-white/40">Happy Customers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="group relative overflow-hidden rounded-3xl bg-[#121212]/50 p-8 shadow-2xl shadow-black/80 ring-1 ring-white/10"
          >
            <div className="flex h-[300px] items-center justify-center lg:h-[400px]">
              <motion.img
                src="/ezgif-16184cd03497a2b4-jpg/ezgif-frame-200.jpg"
                alt="Product Design"
                className="h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Subtle glow decorative element */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
          </motion.div>
        </div>
        
        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-12 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white/90">Our Mission</h2>
          <p className="mx-auto max-w-4xl text-2xl font-light italic leading-relaxed text-white/50">
            "To engineer audio equipment that disappears, leaving only the music between the listener and the artist."
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
