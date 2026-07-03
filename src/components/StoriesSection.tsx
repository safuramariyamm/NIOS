"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { StoryCard } from "@/components/StoryCard";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";
import { stories } from "@/data/siteContent";

export function StoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-card]")?.clientWidth ?? 340;
    el.scrollBy({ left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24, behavior: "smooth" });
  };

  return (
    <section id="stories" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8" style={{ fontFamily: "var(--font-fredoka)" }}>
      {/* Floating doodles, matching the playful style elsewhere on the site */}
      <AnimatedDoodle type="star" className="left-[5%] top-[8%] h-9 w-9 text-[#FBBF24]/50" />
      <AnimatedDoodle type="cloud" className="right-[6%] top-[6%] h-12 w-12 text-[#F97316]/20" delay={0.15} />
      <AnimatedDoodle type="spark" className="right-[10%] bottom-[8%] h-10 w-10 text-[#F97316]/35" delay={0.3} />
      <AnimatedDoodle type="rainbow" className="left-[4%] bottom-[10%] h-14 w-14 text-[#FBBF24]/40" delay={0.4} />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-1.5 text-sm font-bold text-[#EA580C]">
              <Sparkles className="h-4 w-4" />
              Stories of change
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#1E293B] sm:text-4xl">
              When belief meets support,{" "}
              <span
                className="inline-block -rotate-1 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                children begin to rise!
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-[#6B7280]">
              Real stories from young learners whose lives are being reshaped through care, encouragement, and opportunity.
            </p>
          </div>

          {/* Playful carousel controls */}
          <div className="flex shrink-0 gap-3 sm:pb-1">
            <motion.button
              whileHover={{ scale: 1.1, rotate: -6 }}
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => scrollByAmount("left")}
              aria-label="Scroll left"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FDE9D8] bg-white text-[#EA580C] shadow-[0_10px_24px_rgba(154,52,18,0.1)] transition hover:bg-orange-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 6 }}
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => scrollByAmount("right")}
              aria-label="Scroll right"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#FDE9D8] bg-gradient-to-r from-[#F97316] to-[#FBBF24] text-white shadow-[0_10px_24px_rgba(249,115,22,0.3)] transition"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Horizontal scrolling row of storybook-style cards */}
        <div
          ref={scrollRef}
          className="mt-10 flex snap-x snap-mandatory gap-8 overflow-x-auto px-2 pb-6 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              data-card
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="w-[85%] shrink-0 snap-start sm:w-[60%] md:w-[46%] lg:w-[32%]"
            >
              <StoryCard {...story} />
            </motion.div>
          ))}
        </div>

        {/* Fun scroll hint dots */}
        <div className="mt-2 flex justify-center gap-2">
          {stories.map((story, index) => (
            <span key={story.title} className={`h-2 w-2 rounded-full ${index === 0 ? "bg-[#F97316]" : "bg-[#FBBF24]/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}