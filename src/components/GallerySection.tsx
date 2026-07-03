"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";
import { galleryImages } from "@/data/siteContent";

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF8EF] via-[#FFFBF5] to-[#FFFDF8] px-4 py-20 sm:px-6 lg:px-8"
      style={{ fontFamily: "var(--font-fredoka)" }}
    >
      {/* Soft glow blobs for depth */}
      <div aria-hidden className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#FBBF24]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#F97316]/10 blur-3xl" />

      {/* Floating doodles, consistent with the rest of the site */}
      <AnimatedDoodle type="star" className="left-[5%] top-[10%] h-8 w-8 text-[#FBBF24]/50" />
      <AnimatedDoodle type="cloud" className="right-[6%] top-[8%] h-12 w-12 text-[#F97316]/20" delay={0.15} />
      <AnimatedDoodle type="spark" className="right-[8%] bottom-[10%] h-9 w-9 text-[#F97316]/35" delay={0.3} />

      <div className="relative mx-auto max-w-7xl">
        {/* Title with wavy underline */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-[#1E293B] sm:text-5xl">Gallery</h2>
          <svg width="80" height="16" viewBox="0 0 80 16" fill="none" className="mt-2 text-[#F97316]">
            <path
              d="M2 8C8 2 14 2 20 8C26 14 32 14 38 8C44 2 50 2 56 8C62 14 68 14 74 8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#6B7280]">
            A glimpse into the caring spaces where children feel welcomed, inspired, and safe to grow.
          </p>
        </div>

        {/* Photo row */}
        <div
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl border-4 border-white shadow-[0_18px_45px_rgba(154,52,18,0.14)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />

              {/* Shared traveling highlight border */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="gallery-hover-highlight"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="pointer-events-none absolute inset-0 z-10 rounded-3xl border-4 border-[#F97316] shadow-[0_0_0_4px_rgba(249,115,22,0.25)]"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}