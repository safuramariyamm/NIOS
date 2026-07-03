"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#FFFDF8] px-4 pb-20 pt-14 text-[#1E293B] sm:px-6 lg:px-8 lg:pb-24 lg:pt-16"
      style={{ fontFamily: "var(--font-fredoka)" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src={image} alt="" fill priority className="object-cover object-center" sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,248,0.94)_0%,rgba(255,253,248,0.82)_55%,rgba(255,253,248,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.6),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(251,191,36,0.22),transparent_26%)]" />
      </div>

      <AnimatedDoodle type="star" className="left-[8%] top-[20%] h-9 w-9 text-[#F59E0B]/45" />
      <AnimatedDoodle type="cloud" className="right-[10%] top-[16%] h-12 w-12 text-[#FBBF24]/35" delay={0.15} />
      <AnimatedDoodle type="spark" className="left-[16%] bottom-[18%] hidden h-10 w-10 text-[#F97316]/35 md:block" delay={0.25} />
      <AnimatedDoodle type="pencil" className="right-[14%] bottom-[14%] hidden h-12 w-12 -rotate-12 text-[#EA580C]/30 md:block" delay={0.3} />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold text-[#9A3412] shadow-[0_14px_40px_rgba(249,115,22,0.12)] backdrop-blur-xl">
          <Sparkles className="h-4 w-4 text-[#F97316]" />
          {eyebrow}
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-[#1E293B] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-[#475569] sm:text-lg">{description}</p>
        <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#F97316] to-[#FBBF24] shadow-[0_8px_24px_rgba(249,115,22,0.28)]" />
      </motion.div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-30 text-[#FFFDFB]">
        <svg className="block h-14 w-full sm:h-16 lg:h-20" viewBox="0 0 1440 110" fill="none" preserveAspectRatio="none">
          <path d="M0 58L60 52C160 46 320 34 480 44C640 54 800 86 960 82C1120 78 1280 38 1360 18L1440 -2V110H0V58Z" fill="currentColor" />
        </svg>
      </div>
      <p className="sr-only">{imageAlt}</p>
    </section>
  );
}   