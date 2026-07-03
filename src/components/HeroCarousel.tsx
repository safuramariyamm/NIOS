"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=80",
    alt: "Students smiling in a colorful classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?auto=format&fit=crop&w=1400&q=80",
    alt: "Group of children sitting at desks in a classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1668620589356-56ba14193005?auto=format&fit=crop&w=1400&q=80",
    alt: "Young girl reading a stack of books at her desk",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80",
    alt: "Teacher standing in front of a group of children",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-[36px] bg-slate-100 sm:h-[420px] md:h-[480px] lg:h-[520px]">
      <AnimatePresence mode="sync">
        <motion.img
          key={slides[index].src}
          src={slides[index].src}
          alt={slides[index].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}