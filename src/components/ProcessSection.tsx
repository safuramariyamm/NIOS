"use client";

import { motion } from "framer-motion";
import { ClipboardList, BookOpenCheck, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Enroll & settle in",
    description: "Families meet our local coordinators, and each child is welcomed with a personalized learning plan.",
  },
  {
    icon: BookOpenCheck,
    step: "02",
    title: "Learn & grow daily",
    description: "Joyful classrooms, nutritious meals, and mentorship become part of a child's everyday rhythm.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Thrive & lead",
    description: "Children graduate our programs ready to lead — many return as tutors and mentors themselves.",
  },
];

export function ProcessSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="How it works"
          title="Three simple steps, one lasting transformation"
          description="Our programs are designed to be predictable and stress-free for families, while flexible enough to meet each child where they are."
          align="center"
        />
        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div aria-hidden className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-[#FBBF24]/60 to-transparent md:block" />
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#EA580C] via-[#F97316] to-[#FBBF24] text-white shadow-[0_18px_40px_rgba(249,115,22,0.32)]">
                  <Icon className="h-7 w-7" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#EA580C] shadow-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#111827]">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[#6B7280]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}