"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialFlipButton from "@/components/ui/social-flip-button";
import CreepyButton from "@/components/ui/creepy-button";
import ElectricBorder from "@/components/ui/ElectricBorder";
import { motion } from "framer-motion";

export default function Contact() {
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
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-white/50">
            Have questions? Our support team is here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form */}
          <ElectricBorder color="rgba(255,255,255,0.35)" speed={0.8} chaos={0.06} borderRadius={24}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-white/40">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border border-white/10 bg-[#121212] p-4 text-white outline-none transition-all duration-300 focus:border-white/20 focus:ring-1 focus:ring-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-white/40">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-xl border border-white/10 bg-[#121212] p-4 text-white outline-none transition-all duration-300 focus:border-white/20 focus:ring-1 focus:ring-white/20"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-white/40">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#121212] p-4 text-white outline-none transition-all duration-300 focus:border-white/20 focus:ring-1 focus:ring-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-white/40">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your audio needs..."
                  className="w-full rounded-xl border border-white/10 bg-[#121212] p-4 text-white outline-none transition-all duration-300 focus:border-white/20 focus:ring-1 focus:ring-white/20"
                />
              </div>

              <CreepyButton className="w-full rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95">
                Send Message
              </CreepyButton>
            </form>
          </motion.div>
          </ElectricBorder>

          <ElectricBorder color="rgba(255,255,255,0.35)" speed={0.8} chaos={0.06} borderRadius={24}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="space-y-12">
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">Our Address</h3>
                  <p className="text-xl font-bold text-white/90">
                    Zenith X Audio HQ
                    <br />
                    123 Sound Wave Plaza
                    <br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
                
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">Email</h3>
                  <p className="text-xl font-bold text-white/90 underline">support@zenithx.audio</p>
                </div>

                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">Support Hours</h3>
                  <p className="text-xl font-bold text-white/90">Mon – Fri, 9:00AM – 6:00PM IST</p>
                </div>

                {/* Social Flip Buttons */}
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">Connect With Us</h3>
                  <SocialFlipButton />
                </div>
              </div>
              
              {/* Subtle glow decorative element */}
              <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          </ElectricBorder>
        </div>
      </div>

      <Footer />
    </main>
  );
}
