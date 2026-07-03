"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/Counter";
import { impactCounters } from "@/data/siteContent";

export function ImpactSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} className="relative mx-auto overflow-hidden rounded-[40px] bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] p-8 shadow-[0_30px_90px_rgba(249,115,22,0.28)] sm:p-10 lg:p-14">
        <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-pulse-soft" />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-pulse-soft" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Our impact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Small acts of care, multiplied into lifelong change.</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {impactCounters.map((counter) => (
              <Counter key={counter.label} value={counter.value} label={counter.label} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}