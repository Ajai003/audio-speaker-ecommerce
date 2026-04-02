"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 240;
const IMAGE_DIR = "/ezgif-16184cd03497a2b4-jpg";

function getFramePath(index: number): string {
  const num = String(index + 1).padStart(3, "0");
  return `${IMAGE_DIR}/ezgif-frame-${num}.jpg`;
}

export default function HeadphoneScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload all images
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
          // Draw first frame immediately
          drawFrame(0);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
          drawFrame(0);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[index];
    if (!canvas || !ctx || !img || !img.complete) return;

    // Set canvas internal dimensions to match image
    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  }, []);

  // Listen to scroll and draw frames
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.min(Math.max(Math.round(latest), 0), TOTAL_FRAMES - 1);
    if (index !== currentFrameRef.current) {
      currentFrameRef.current = index;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => drawFrame(index));
    }
  });

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (isLoaded) drawFrame(currentFrameRef.current);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, drawFrame]);

  const loadProgress = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  // Text overlay configs
  const textSections = [
    {
      title: "Zenith X.",
      subtitle: "Pure Sound.",
      description: "Experience audio perfection engineered for those who demand the absolute best.",
      scrollRange: [0, 0.2] as [number, number],
      alignment: "center" as const,
    },
    {
      title: "Precision",
      subtitle: "Engineering.",
      description: "Every component machined to sub-micron tolerances for flawless acoustic reproduction.",
      scrollRange: [0.22, 0.42] as [number, number],
      alignment: "left" as const,
    },
    {
      title: "Titanium",
      subtitle: "Drivers.",
      description: "50mm titanium-coated diaphragms deliver frequency response from 4Hz to 40kHz.",
      scrollRange: [0.45, 0.65] as [number, number],
      alignment: "right" as const,
    },
    {
      title: "Hear",
      subtitle: "Everything.",
      description: "Immerse yourself in spatial audio that puts you inside the music.",
      scrollRange: [0.7, 0.92] as [number, number],
      alignment: "center" as const,
      isCTA: true,
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[500vh]" id="hero">
      {/* Sticky canvas container */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Loading overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#1a1a1a]">
            <div className="relative mb-8">
              {/* Outer ring */}
              <svg className="animate-spin-slow h-24 w-24" viewBox="0 0 100 100">
                <circle
                  cx="50" cy="50" r="42"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="2"
                />
                <circle
                  cx="50" cy="50" r="42"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${loadProgress * 2.64} ${264 - loadProgress * 2.64}`}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-light tracking-widest text-white/60">
                {loadProgress}%
              </span>
            </div>
            <p className="animate-pulse-glow text-xs font-light uppercase tracking-[0.3em] text-white/40">
              Loading Experience
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="h-full w-full object-contain"
          style={{
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
        />

        {/* Text overlays */}
        {isLoaded &&
          textSections.map((section, i) => (
            <TextOverlay
              key={i}
              section={section}
              scrollYProgress={scrollYProgress}
            />
          ))}
      </div>
    </section>
  );
}

// Separated text overlay component for clean animation
function TextOverlay({
  section,
  scrollYProgress,
}: {
  section: {
    title: string;
    subtitle: string;
    description: string;
    scrollRange: [number, number];
    alignment: "left" | "center" | "right";
    isCTA?: boolean;
  };
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const [start, end] = section.scrollRange;
  const mid = (start + end) / 2;
  const fadeInEnd = start + (mid - start) * 0.4;
  const fadeOutStart = mid + (end - mid) * 0.6;

  const opacity = useTransform(
    scrollYProgress,
    [start, fadeInEnd, fadeOutStart, end],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, fadeInEnd, fadeOutStart, end],
    [60, 0, 0, -60]
  );

  const alignmentClasses = {
    left: "items-start text-left left-[6%] sm:left-[8%] md:left-[10%]",
    center: "items-center text-center left-1/2 -translate-x-1/2",
    right: "items-end text-right right-[6%] sm:right-[8%] md:right-[10%]",
  };

  return (
    <motion.div
      className={`pointer-events-none absolute top-1/2 z-20 flex -translate-y-1/2 flex-col gap-4 px-6 ${alignmentClasses[section.alignment]}`}
      style={{ opacity, y }}
    >
      <h2 className="text-4xl font-bold tracking-tight text-white/90 sm:text-5xl md:text-7xl lg:text-8xl">
        <span className="gradient-text">{section.title}</span>
        <br />
        <span className="text-white/70">{section.subtitle}</span>
      </h2>
      <p className="max-w-md text-sm font-light leading-relaxed text-white/50 sm:text-base md:text-lg">
        {section.description}
      </p>
      {section.isCTA && (
        <div className="pointer-events-auto mt-4 flex flex-col items-center gap-3 sm:flex-row">
          <button className="group relative overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            <span className="relative z-10">Shop Now — $399</span>
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
          <button className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium tracking-wide text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white">
            Learn More
          </button>
        </div>
      )}
    </motion.div>
  );
}
