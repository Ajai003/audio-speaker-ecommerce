'use client'

import React, { useRef, useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CreepyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export const CreepyButton = ({ children, className, ...props }: CreepyButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setHoverPos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoverPos({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: isHovered ? hoverPos.x * 0.15 : 0,
        y: isHovered ? hoverPos.y * 0.15 : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15, mass: 0.5 }}
      className={cn("creepy-btn group relative", className)}
      {...props}
    >
      {/* Magnetic glow that follows cursor */}
      <motion.span
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        animate={{
          background: isHovered
            ? `radial-gradient(circle at ${50 + (hoverPos.x / (buttonRef.current?.offsetWidth || 1)) * 100}% ${50 + (hoverPos.y / (buttonRef.current?.offsetHeight || 1)) * 100}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
            : "none",
        }}
        transition={{ duration: 0 }}
      />

      {/* Button content with magnetic text movement */}
      <motion.span
        className="relative z-10 flex items-center justify-center gap-2"
        animate={{
          x: isHovered ? hoverPos.x * 0.08 : 0,
          y: isHovered ? hoverPos.y * 0.08 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 20, mass: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default CreepyButton;
