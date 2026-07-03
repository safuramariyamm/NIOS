"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";

type DoodleType = "plane" | "pencil" | "star" | "spark" | "cloud" | "rainbow" | "book" | "abc" | "dots" | "heart" | "balloon" | "smile" | "flower" | "sun" | "rocket";

const doodleMap: Record<DoodleType, ReactElement> = {
  plane: (
  <svg viewBox="0 0 80 80" className="h-full w-full fill-none" stroke="currentColor">
    <g transform="rotate(-22 29 29)">
      <path d="M23 11 44 20 29 23 25 38 20 28 8 24Z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M29 23 25 38" strokeWidth="2" strokeLinecap="round" />
    </g>
    <path
      d="M23 36c2 2 -2 4 0 6c3 3 6 1 4 4c-2 3 2 5 5 6c3 1 1 4 4 6c2 1 4-2 3-4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2.5 3.5"
    />
  </svg>
),
  rocket: (
    <svg viewBox="0 0 96 96" className="h-full w-full fill-none" stroke="currentColor">
      <path
        d="M52 15c13 2 23 12 25 25-8 2-17 8-25 16L40 44c8-8 14-17 16-25Z"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M40 44 24 49l17 6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 56 47 72l-6-17" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="59" cy="34" r="5" strokeWidth="3" />
      <path d="M34 60c-7 1-13 6-16 15 9-3 14-9 15-16" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 67c-4 2-7 5-9 10" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 72c-2 4-5 7-10 9" strokeWidth="2" strokeLinecap="round" />
      <path d="M73 18l5-5M79 28h7M67 12v-7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
pencil: (
  <svg viewBox="0 0 80 80" className="h-full w-full fill-none" stroke="currentColor">
    {/* Pencil body */}
    <path d="M52 12 L68 28 L34 62 L18 66 L22 50 Z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    {/* Tip separation line (wood-to-graphite) */}
    <path d="M46 18 L62 34" strokeWidth="2" strokeLinecap="round" />
    {/* Eraser end cap line */}
    <path d="M22 50 L34 62" strokeWidth="2" strokeLinecap="round" />
  </svg>
),
  star: (
    <svg viewBox="0 0 80 80" className="h-full w-full fill-none" stroke="currentColor">
      <path d="M40 16 48 34 68 36 52 50 56 70 40 60 24 70 28 50 12 36 32 34Z" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 80 80" className="h-full w-full fill-none stroke-current">
      <path d="M40 14v16M40 50v16M14 40h16M50 40h16M25 25l11 11M44 44l11 11M25 55l11-11M44 36l11-11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 80 80" className="h-full w-full fill-none stroke-current">
      <path d="M24 30c0-7 6-12 14-12s14 5 14 12c0 10-14 16-14 24C26 46 24 40 24 30Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  balloon: (
    <svg viewBox="0 0 80 80" className="h-full w-full fill-none stroke-current">
      <ellipse cx="40" cy="28" rx="16" ry="22" strokeWidth="2" />
      <path d="M40 50v16" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 64c2 2 6 2 8 0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  smile: (
    <svg viewBox="0 0 80 80" className="h-full w-full fill-none stroke-current">
      <circle cx="40" cy="40" r="18" strokeWidth="2" />
      <path d="M30 34h4" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 34h4" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 48c4 4 12 4 16 0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  flower: (
    <svg viewBox="0 0 80 80" className="h-full w-full fill-none stroke-current">
      <circle cx="40" cy="40" r="6" strokeWidth="2" />
      <path d="M40 16c8 0 8 10 0 14-8-4-8-14 0-14Z" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 64c8 0 8-10 0-14-8 4-8 14 0 14Z" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 40c0-8 10-8 14 0-4 8-14 8-14 0Z" strokeWidth="2" strokeLinecap="round" />
      <path d="M64 40c0-8-10-8-14 0 4 8 14 8 14 0Z" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 80 80" className="h-full w-full fill-none stroke-current">
      <path d="M22 46a14 14 0 0 1 0-28 18 18 0 0 1 34 6 14 14 0 0 1 0 28H22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
rainbow: (
  <svg viewBox="0 0 100 60" className="h-full w-full fill-none" stroke="currentColor">
    <path d="M10 52a40 40 0 0 1 80 0" strokeWidth="2" strokeLinecap="round" />
    <path d="M22 52a28 28 0 0 1 56 0" strokeWidth="2" strokeLinecap="round" />
    <path d="M34 52a16 16 0 0 1 32 0" strokeWidth="2" strokeLinecap="round" />
  </svg>
),
  book: (
    <svg viewBox="0 0 80 80" className="h-full w-full fill-none stroke-current">
      <path d="M22 20h32a10 10 0 0 1 10 10v28a10 10 0 0 1-10 10H22a10 10 0 0 1-10-10V30a10 10 0 0 1 10-10Z" strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 30h32" strokeWidth="2" />
      <path d="M28 42h20" strokeWidth="2" />
    </svg>
  ),
  abc: (
    <svg viewBox="0 0 80 80" className="h-full w-full fill-none stroke-current">
      <path d="M18 58V32h8" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 42h8" strokeWidth="2" />
      <path d="M36 58V32h6a6 6 0 0 1 0 12h-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 58V32h-8l-4 10 4 6h8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  dots: (
    <svg viewBox="0 0 80 80" className="h-full w-full fill-current" stroke="currentColor">
      <circle cx="20" cy="20" r="2" />
      <circle cx="40" cy="32" r="2" />
      <circle cx="60" cy="16" r="2" />
      <circle cx="28" cy="52" r="2" />
      <circle cx="52" cy="60" r="2" />
      <circle cx="36" cy="68" r="2" />
    </svg>
  ),
  sun: (
  <svg viewBox="0 0 80 80" className="h-full w-full fill-none" stroke="currentColor">
    <circle cx="40" cy="40" r="14" strokeWidth="2" />
    <path d="M40 12v4" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 64v4" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 40h4" strokeWidth="2" strokeLinecap="round" />
    <path d="M64 40h4" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 20l3 3" strokeWidth="2" strokeLinecap="round" />
    <path d="M57 57l3 3" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 60l3-3" strokeWidth="2" strokeLinecap="round" />
    <path d="M57 23l3-3" strokeWidth="2" strokeLinecap="round" />
    <path d="M29 16l2 4" strokeWidth="2" strokeLinecap="round" />
    <path d="M49 60l2 4" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 29l4 2" strokeWidth="2" strokeLinecap="round" />
    <path d="M60 49l4 2" strokeWidth="2" strokeLinecap="round" />
  </svg>
),
};

type AnimatedDoodleProps = {
  type: DoodleType;
  className?: string;
  offset?: { x: number; y: number };
  delay?: number;
};

export function AnimatedDoodle({ type, className = "", offset = { x: 0, y: 0 }, delay = 0 }: AnimatedDoodleProps) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 0.9, scale: 1 }}
      viewport={{ once: true }}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 140, damping: 24, delay }}
      className={`pointer-events-none absolute z-10 opacity-90 ${className}`}
    >
      {doodleMap[type]}
    </motion.div>
  );
}
