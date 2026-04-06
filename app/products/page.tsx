"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Zenith X Pro", price: "₹14,999", image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-100.jpg" },
  { id: 2, name: "Zenith X Sport", price: "₹8,999", image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-120.jpg" },
  { id: 3, name: "Zenith X Studio", price: "₹24,999", image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-140.jpg" },
  { id: 4, name: "Zenith X Mini", price: "₹4,999", image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-160.jpg" },
  { id: 5, name: "Zenith X Wireless", price: "₹12,499", image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-180.jpg" },
  { id: 6, name: "Zenith X ANC", price: "₹19,999", image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-200.jpg" },
  { id: 7, name: "Zenith X Gaming", price: "₹10,999", image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-080.jpg" },
  { id: 8, name: "Zenith X Classic", price: "₹7,499", image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-060.jpg" },
];

export default function ProductsPage() {
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our <span className="gradient-text">Collection</span>
          </h1>
          <p className="mt-4 text-lg text-white/50">
            Premium audio gear engineered for perfection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/8 hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-[#121212]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="mt-4">
                <h2 className="text-lg font-medium text-white/90">{product.name}</h2>
                <p className="text-xl font-bold text-white/70">{product.price}</p>
                
                <button className="mt-4 w-full rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
