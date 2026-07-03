"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpenCheck, Compass, HeartHandshake, ShieldCheck, Sparkles, Star } from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

const pillars = [
  {
    icon: BookOpenCheck,
    title: "Personalized learning",
    description: "Hands-on support tailored to each child's pace and goals.",
    bg: "bg-orange-50",
    text: "text-[#F97316]",
  },
  {
    icon: ShieldCheck,
    title: "Safe accompaniment",
    description: "Protection and wellbeing services built into every visit.",
    bg: "bg-amber-50",
    text: "text-[#D97706]",
  },
  {
    icon: HeartHandshake,
    title: "Community care",
    description: "Families and volunteers become trusted partners in the journey.",
    bg: "bg-orange-50",
    text: "text-[#EA580C]",
  },
  {
    icon: Compass,
    title: "Future-focused guidance",
    description: "Mentorship that helps children imagine and prepare for tomorrow.",
    bg: "bg-amber-50",
    text: "text-[#F59E0B]",
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#FFFBF5] px-4 py-20 sm:px-6 lg:px-8"
      style={{ fontFamily: "var(--font-fredoka)" }}
    >
      {/* Floating doodles in the background, matching the Hero's style */}
      <AnimatedDoodle type="star" className="left-[4%] top-[6%] h-8 w-8 text-[#FBBF24]/50" />
      <AnimatedDoodle type="cloud" className="right-[6%] top-[8%] h-12 w-12 text-[#F97316]/25" delay={0.15} />
      <AnimatedDoodle type="rainbow" className="right-[4%] bottom-[6%] h-14 w-14 text-[#FBBF24]/60" delay={0.35} />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Portrait image with a slight tilt and floating stat badge */}
        <motion.div
          initial={{ opacity: 0, x: -16, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ rotate: 0, scale: 1.01 }}
          className="relative mx-auto w-full max-w-sm flex-1"
        >
          <div aria-hidden className="absolute -inset-3 -z-10 rounded-[40px] bg-gradient-to-br from-[#F97316]/25 to-[#FBBF24]/25 blur-2xl" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border-4 border-white shadow-[0_30px_70px_rgba(154,52,18,0.14)]">
            <Image
              src="/choose/care.jpg"
              alt="A BrightPath volunteer supporting children"
              fill
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
            className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-full border-2 border-white bg-gradient-to-r from-[#F97316] to-[#FBBF24] px-4 py-2.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.4)]"
          >
            <Star className="h-4 w-4 fill-white" />
            5,000+ happy kids
          </motion.div>
        </motion.div>

        {/* Copy + pillar grid */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="relative flex-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-1.5 text-sm font-bold text-[#EA580C]">
            <Sparkles className="h-4 w-4" />
            Why choose us
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#1E293B] sm:text-4xl">
            Because every child deserves more than survival —{" "}
            <span
              className="inline-block -rotate-1 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              they deserve possibility!
            </span>
          </h2>

          {/* Doodles tucked around the pillar grid */}
          <AnimatedDoodle type="spark" className="right-[6%] top-2 h-9 w-9 text-[#F97316]/40" delay={0.2} />
          <AnimatedDoodle type="pencil" className="-left-6 top-1/2 hidden h-11 w-11 -rotate-12 text-[#EA580C]/35 lg:block" delay={0.3} />
          <AnimatedDoodle type="star" className="-right-4 bottom-6 hidden h-8 w-8 text-[#FBBF24]/55 sm:block" delay={0.4} />

          {/* Extra doodles layered behind the cards themselves */}
          <div aria-hidden className="pointer-events-none absolute inset-0 top-8 -z-10">
            <AnimatedDoodle type="cloud" className="left-[8%] top-[6%] h-16 w-16 text-[#FBBF24]/20" delay={0.15} />
            <AnimatedDoodle type="star" className="right-[18%] top-[2%] h-10 w-10 text-[#F97316]/25" delay={0.25} />
            <AnimatedDoodle type="spark" className="left-[40%] top-[38%] h-8 w-8 text-[#FBBF24]/30" delay={0.35} />
            <AnimatedDoodle type="rainbow" className="right-[6%] top-[40%] h-14 w-14 text-[#F97316]/20" delay={0.45} />
            <AnimatedDoodle type="pencil" className="left-[12%] bottom-[4%] h-12 w-12 rotate-12 text-[#EA580C]/25" delay={0.5} />
            <AnimatedDoodle type="cloud" className="right-[22%] bottom-[2%] h-11 w-11 text-[#FBBF24]/25" delay={0.55} />
            {/* Doodle near the Safe accompaniment card (top-right of the grid) */}
            <AnimatedDoodle type="star" className="right-[2%] top-[14%] h-9 w-9 text-[#D97706]/30" delay={0.28} />
          </div>

          <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-[24px] border border-[#FDE9D8] bg-white p-5 shadow-sm transition-shadow hover:shadow-[0_16px_40px_rgba(249,115,22,0.14)]"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${pillar.bg} ${pillar.text}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#1E293B]">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#6B7280]">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}