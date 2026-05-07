"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CreepyButton from "@/components/ui/creepy-button";
import ElectricBorder from "@/components/ui/ElectricBorder";
import { motion } from "framer-motion";

const cartItems = [
  { id: 1, name: "Zenith X Pro", price: "₹14,999", image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-100.jpg" },
];

export default function CartPage() {
  const total = 14999;

  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Your <span className="gradient-text">Cart</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Items Section */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <ElectricBorder
                  key={item.id}
                  color="rgba(255,255,255,0.35)"
                  speed={0.8}
                  chaos={0.06}
                  borderRadius={16}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-white/5 p-6 sm:flex-row sm:items-center"
                  >
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#121212]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white/90">{item.name}</h3>
                      <p className="text-sm font-light text-white/40">Premium Grey Edition</p>
                    </div>

                    <div className="flex items-center justify-between sm:block sm:text-right">
                      <p className="text-xl font-bold text-white/90">{item.price}</p>
                      <CreepyButton className="mt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-red-400/80 transition-colors hover:text-red-400">
                        Remove
                      </CreepyButton>
                    </div>
                  </motion.div>
                </ElectricBorder>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <ElectricBorder
            color="rgba(255,255,255,0.35)"
            speed={0.8}
            chaos={0.06}
            borderRadius={24}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-fit rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl"
            >
              <h2 className="text-xl font-bold text-white/90">Order Summary</h2>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-sm font-light text-white/60">
                  <span>Subtotal</span>
                  <span className="text-white/90">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-light text-white/60">
                  <span>Shipping</span>
                  <span className="text-green-400">FREE</span>
                </div>
                <div className="mt-6 flex justify-between border-t border-white/10 pt-6 text-xl font-bold text-white">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <CreepyButton className="mt-8 w-full rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95">
                Checkout Now
              </CreepyButton>
            </motion.div>
          </ElectricBorder>
        </div>
      </div>

      <Footer />
    </main>
  );
}
