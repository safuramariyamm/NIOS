"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

export function Newsletter() {
  return (
    <section id="newsletter" className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} className="relative mx-auto flex max-w-7xl flex-col overflow-hidden rounded-[36px] border border-[#FDE9D8] bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] px-6 py-14 text-white shadow-[0_30px_90px_rgba(249,115,22,0.24)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <AnimatedDoodle type="plane" className="left-6 top-6 text-white" delay={0.3} />
        <AnimatedDoodle type="spark" className="bottom-6 right-6 text-white" delay={1.1} />
        <div className="max-w-2xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <HeartHandshake className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">Stay close to their stories and our next chapter.</h2>
          <p className="mt-4 text-lg text-white/80">Join our community for updates, volunteer opportunities, and ways to make a lasting difference.</p>
        </div>
        <div className="mt-8 w-full max-w-lg lg:mt-0">
          <label htmlFor="email" className="sr-only">Email address</label>
          <div className="flex flex-col gap-3 rounded-[24px] border border-white/30 bg-white/20 p-3 backdrop-blur sm:flex-row">
            <input id="email" type="email" placeholder="Enter your email" className="flex-1 rounded-[18px] border border-white/20 bg-white px-4 py-3 text-sm text-[#111827] outline-none placeholder:text-[#6B7280]" />
            <button className="inline-flex items-center justify-center gap-2 rounded-[18px] bg-white px-5 py-3 text-sm font-semibold text-[#EA580C] transition hover:scale-[1.02]">
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
