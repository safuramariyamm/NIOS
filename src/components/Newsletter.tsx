"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

export function Newsletter() {
  return (
    <section id="newsletter" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-48 opacity-30"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="relative mx-auto flex max-w-7xl flex-col overflow-hidden rounded-[36px] border border-[#FDE9D8] bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFF7ED] px-6 py-14 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12"
      >

        <div className="max-w-2xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#F97316]">
            <HeartHandshake className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-[#111827] sm:text-4xl">
            Stay close to their stories and our next chapter.
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Join our community for updates, volunteer opportunities, and ways to make a lasting difference.
          </p>
        </div>

        <div className="mt-8 w-full max-w-lg lg:mt-0">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 rounded-[24px] border border-[#E5E7EB] bg-white p-3 shadow-sm sm:flex-row">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-[18px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none placeholder:text-[#6B7280] focus:border-[#F97316]"
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-[18px] bg-[#F97316] px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#EA580C]">
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-xs text-[#6B7280]">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </motion.div>
    </section>
  );
}