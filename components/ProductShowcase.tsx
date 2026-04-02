"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    name: "Zenith X Pro",
    tagline: "Flagship Experience",
    price: "$399",
    originalPrice: "$499",
    color: "Obsidian Black",
    features: ["50mm Titanium Drivers", "ANC + Transparency", "40h Battery", "Spatial Audio"],
    badge: "Best Seller",
    image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-001.jpg",
  },
  {
    name: "Zenith X Sport",
    tagline: "Built for Motion",
    price: "$299",
    originalPrice: "$349",
    color: "Stealth Gray",
    features: ["40mm Graphene Drivers", "IP55 Water Resistant", "30h Battery", "Low Latency"],
    badge: "New",
    image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-060.jpg",
  },
  {
    name: "Zenith X Studio",
    tagline: "Professional Grade",
    price: "$549",
    originalPrice: "$649",
    color: "Midnight Silver",
    features: ["50mm Beryllium Drivers", "Flat Response EQ", "60h Battery", "Hi-Res Audio"],
    badge: "Pro",
    image: "/ezgif-16184cd03497a2b4-jpg/ezgif-frame-120.jpg",
  },
];

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative overflow-hidden px-6 py-32 lg:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            The Collection
          </p>
          <h2 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find Your Sound
          </h2>
        </motion.div>

        {/* Product cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className="glass-card group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:bg-white/6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
                  {product.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#1a1a1a]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                  {product.color}
                </p>
                <h3 className="mt-1 text-xl font-bold tracking-tight text-white/90">
                  {product.name}
                </h3>
                <p className="mt-0.5 text-sm font-light text-white/50">
                  {product.tagline}
                </p>

                {/* Features list */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.features.map((feat) => (
                    <span
                      key={feat}
                      className="rounded-full border border-white/8 px-2.5 py-1 text-[10px] font-light text-white/50"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="mt-auto flex items-end justify-between pt-6">
                  <div>
                    <span className="text-2xl font-bold tracking-tight text-white/90">
                      {product.price}
                    </span>
                    <span className="ml-2 text-sm text-white/30 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button className="rounded-full bg-white/10 px-5 py-2.5 text-xs font-medium tracking-wide text-white transition-all duration-300 hover:bg-white/20 hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_50%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
