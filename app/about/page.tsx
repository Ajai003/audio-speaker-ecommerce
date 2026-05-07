"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ElectricBorder from "@/components/ui/ElectricBorder";
import MagnetLines from "@/components/ui/MagnetLines";
import { LiquidText } from "@/components/ui/liquid-text";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8">
        {/* Hero Section with MagnetLines background */}
        <div className="relative">
          {/* MagnetLines behind the hero text */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-20">
            <MagnetLines
              rows={12}
              columns={16}
              containerSize="100%"
              lineColor="rgba(255,255,255,0.6)"
              lineWidth="0.5vmin"
              lineHeight="3vmin"
              baseAngle={0}
              style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-4xl"
          >
            {/* Liquid Text heading */}
            <LiquidText
              text="Our Story"
              fontSize={90}
              className="h-[140px] w-full lg:h-[180px]"
              color="#ffffff"
              fontWeight={800}
            />
            <p className="mt-4 text-xl leading-relaxed text-white/70">
              Founded in 2024, Zenith X was born from a simple mission: to create the world's most immersive audio experiences. We believe that sound is not just heard, but felt – a symphony of frequencies that can transport you to another world.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Philosophy card with MagnetLines background */}
          <ElectricBorder color="rgba(255,255,255,0.35)" speed={0.8} chaos={0.06} borderRadius={24}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              {/* MagnetLines behind the philosophy card */}
              <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.08]">
                <MagnetLines
                  rows={8}
                  columns={10}
                  containerSize="100%"
                  lineColor="rgba(255,255,255,0.8)"
                  lineWidth="0.4vmin"
                  lineHeight="2.5vmin"
                  baseAngle={-15}
                  style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
                />
              </div>

              <div className="relative z-10">
                {/* Liquid Text heading */}
                <LiquidText
                  text="The Zenith X Philosophy"
                  fontSize={36}
                  className="mb-4 h-[70px] w-full"
                  color="rgba(255,255,255,0.9)"
                  fontWeight={700}
                />
                <p className="text-lg leading-relaxed text-white/60">
                  We don't follow trends. We set them. Every Zenith X product is the result of thousands of hours of acoustic research, combined with the world's finest materials. From titanium drivers to sustainable vegan leather, we never compromise on quality.
                </p>
                
                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                  <div>
                    <LiquidText
                      text="240+"
                      fontSize={42}
                      className="h-[60px] w-full"
                      color="rgba(255,255,255,0.9)"
                      fontWeight={800}
                    />
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-white/40">Patents Pending</p>
                  </div>
                  <div>
                    <LiquidText
                      text="10k"
                      fontSize={42}
                      className="h-[60px] w-full"
                      color="rgba(255,255,255,0.9)"
                      fontWeight={800}
                    />
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-white/40">Happy Customers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </ElectricBorder>

          <ElectricBorder color="rgba(255,255,255,0.35)" speed={0.8} chaos={0.06} borderRadius={24}>
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
          </ElectricBorder>
        </div>
        
        {/* Mission statement with MagnetLines background */}
        <div className="relative mt-20">
          {/* MagnetLines behind the mission statement */}
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-15">
            <MagnetLines
              rows={10}
              columns={20}
              containerSize="100%"
              lineColor="rgba(255,255,255,0.5)"
              lineWidth="0.4vmin"
              lineHeight="3.5vmin"
              baseAngle={0}
              style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-12 text-center"
          >
            {/* Liquid Text heading */}
            <LiquidText
              text="Our Mission"
              fontSize={42}
              className="mx-auto mb-6 h-[70px] w-full max-w-xl"
              color="rgba(255,255,255,0.9)"
              fontWeight={700}
            />
            <p className="mx-auto max-w-4xl text-2xl font-light italic leading-relaxed text-white/50">
              "To engineer audio equipment that disappears, leaving only the music between the listener and the artist."
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
