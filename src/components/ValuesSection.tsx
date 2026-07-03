"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Users2, Lightbulb } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

const values = [
  {
    icon: HeartHandshake,
    title: "Compassion first",
    description: "We meet every child and family with warmth, patience, and zero judgment.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity always",
    description: "Every rupee, every hour, and every promise is treated with full accountability.",
  },
  {
    icon: Users2,
    title: "Community-led",
    description: "Local families and volunteers shape our programs, not the other way around.",
  },
  {
    icon: Lightbulb,
    title: "Joyful learning",
    description: "Curiosity grows fastest in classrooms filled with play, art, and encouragement.",
  },
];

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#F97316]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-16 bottom-4 h-72 w-72 rounded-full bg-[#FBBF24]/12 blur-3xl" />
      <AnimatedDoodle type="heart" className="left-[6%] top-[8%] hidden h-10 w-10 text-[#F97316]/25 lg:block" />
      <AnimatedDoodle type="flower" className="right-[8%] bottom-[10%] hidden h-12 w-12 text-[#FBBF24]/30 lg:block" delay={0.2} />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="What guides us"
          title="The values every BrightPath decision is built on"
          description="These aren't posters on a wall — they shape how we hire, teach, fundraise, and show up for children every single day."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="rounded-[28px] border border-[#FDE9D8] bg-white p-7 text-center shadow-[0_20px_60px_rgba(154,52,18,0.06)] transition-shadow hover:shadow-[0_20px_60px_rgba(249,115,22,0.14)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFF1E0] to-[#FDE9D8] text-[#F97316]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#111827]">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}