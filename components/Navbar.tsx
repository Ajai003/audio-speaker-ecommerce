"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/5 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors duration-300 group-hover:bg-white/15">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-white"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 19V6l12-3v13" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="19" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Zenith<span className="text-white/50"> X</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-light tracking-wide text-white/60 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-white/40 transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <button className="text-sm font-light tracking-wide text-white/60 transition-colors duration-300 hover:text-white">
              Sign In
            </button>
            <button className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-white/20">
              Shop Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-6 bg-white/80 transition-all duration-300 ${
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-white/80 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-white/80 transition-all duration-300 ${
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#1a1a1a]/98 backdrop-blur-2xl md:hidden"
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="text-2xl font-light tracking-wide text-white/80 transition-colors hover:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.button
          className="mt-4 rounded-full bg-white/10 px-8 py-3 text-sm font-medium tracking-wide text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          onClick={() => setMobileOpen(false)}
        >
          Shop Now
        </motion.button>
      </motion.div>
    </>
  );
}
