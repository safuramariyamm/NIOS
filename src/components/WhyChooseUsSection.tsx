"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpenCheck, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

const pillars = [
  { icon: BookOpenCheck, title: "Personalized learning", description: "Hands-on support tailored to each child’s pace and goals.", bg: "bg-orange-50", text: "text-[#F97316]" },
  { icon: ShieldCheck, title: "Safe accompaniment", description: "Protection and wellbeing services built into every visit.", bg: "bg-blue-50", text: "text-[#2563EB]" },
  { icon: HeartHandshake, title: "Community care", description: "Families and volunteers become trusted partners in the journey.", bg: "bg-pink-50", text: "text-[#EC4899]" },
  { icon: Compass, title: "Future-focused guidance", description: "Mentorship that helps children imagine and prepare for tomorrow.", bg: "bg-purple-50", text: "text-[#8B5CF6]" },
];

export function WhyChooseUsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[40px] border border-[#E5E7EB] bg-[#FFFDFB] p-6 shadow-[0_30px_90px_rgba(15,23,42,0.06)] lg:flex-row lg:p-10">
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="relative flex-1 overflow-hidden rounded-[32px]">
          <AnimatedDoodle type="spark" className="left-4 top-4 text-[#F97316]" delay={0.3} />
          <AnimatedDoodle type="book" className="bottom-6 right-4 text-[#2563EB]" delay={0.8} />
          <Image src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1100&q=80" alt="Volunteers and community members supporting children" width={1000} height={1200} className="h-full min-h-[380px] w-full rounded-[32px] object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F97316]">Why choose us</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">Because every child deserves more than survival — they deserve possibility.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${pillar.bg} ${pillar.text}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#111827]">{pillar.title}</h3>
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