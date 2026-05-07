'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface LiquidTextProps {
  text: string;
  fontSize?: number;
  className?: string;
  color?: string;
  fontWeight?: string | number;
}

export function LiquidText({
  text,
  fontSize = 120,
  className,
  color = '#ffffff',
  fontWeight = 900,
}: LiquidTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const animRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetIntensity = useRef(0);
  const currentIntensity = useRef(0);
  const timeRef = useRef(0);
  const filterId = useRef(`liquid-${Math.random().toString(36).slice(2, 9)}`);

  // Measure container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const turb = turbRef.current;
    if (!turb) return;

    // Smooth interpolation toward target
    currentIntensity.current += (targetIntensity.current - currentIntensity.current) * 0.08;
    timeRef.current += 0.015;

    const baseFreqX = 0.015 + currentIntensity.current * 0.025;
    const baseFreqY = 0.01 + currentIntensity.current * 0.015;

    // Add subtle oscillation when hovered
    const oscX = isHovered ? Math.sin(timeRef.current * 3) * 0.003 : 0;
    const oscY = isHovered ? Math.cos(timeRef.current * 2.5) * 0.002 : 0;

    turb.setAttribute('baseFrequency', `${baseFreqX + oscX} ${baseFreqY + oscY}`);

    animRef.current = requestAnimationFrame(animate);
  }, [isHovered]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [animate]);

  // Update target on hover
  useEffect(() => {
    targetIntensity.current = isHovered ? 1 : 0;
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className={cn('relative flex items-center justify-center overflow-hidden', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {dimensions.width > 0 && (
        <svg
          ref={svgRef}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          width={dimensions.width}
          height={dimensions.height}
          className="absolute inset-0"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <filter id={filterId.current} x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                ref={turbRef}
                type="fractalNoise"
                baseFrequency="0.015 0.01"
                numOctaves={3}
                seed={2}
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={isHovered ? 35 : 0}
                xChannelSelector="R"
                yChannelSelector="G"
              >
                <animate
                  attributeName="scale"
                  values={isHovered ? '0;35;25;35' : '35;0'}
                  dur={isHovered ? '0.8s' : '0.4s'}
                  fill="freeze"
                  keyTimes={isHovered ? '0;0.4;0.7;1' : '0;1'}
                />
              </feDisplacementMap>
            </filter>
          </defs>

          <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fill={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            fontFamily="inherit"
            filter={`url(#${filterId.current})`}
            style={{
              transition: 'opacity 0.3s ease',
            }}
          >
            {text}
          </text>
        </svg>
      )}
    </div>
  );
}

export default LiquidText;
