"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const wishlistItems = [
  { id: 1, name: "Zenith X Sport", price: "₹8,999", image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-120.jpg" },
  { id: 2, name: "Zenith X Pro", price: "₹14,999", image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-100.jpg" },
];

export default function WishlistPage() {
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
            Your <span className="gradient-text">Wishlist</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {wishlistItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-4"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-[#121212]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-4">
                <h2 className="text-lg font-medium text-white/90">{item.name}</h2>
                <p className="text-xl font-bold text-white/70">{item.price}</p>
                
                <div className="mt-4 grid grid-cols-1 gap-2">
                  <button className="w-full rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 active:scale-95">
                    Move to Cart
                  </button>
                  <button className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/40 transition-colors hover:bg-white/10 hover:text-white/80 active:scale-95">
                    Remove
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
