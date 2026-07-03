"use client";

import { motion } from "framer-motion";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionTitle } from "@/components/SectionTitle";
import { programs } from "@/data/siteContent";

export function ProgramsSection() {
  return (
    <section id="programs" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#FBBF24]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#F97316]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="What we do" title="Support that nurtures a child’s whole future" description="We create a full circle of care so each child can learn, heal, and grow with confidence." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => (
            <motion.div key={program.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.08 }}>
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
