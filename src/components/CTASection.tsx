"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

export function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-[36px] border border-[#E5E7EB] bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.06)] lg:flex-row lg:items-center lg:justify-between lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F97316]">Volunteer with us</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">Share your time, your warmth, and your hope.</h2>
          <p className="mt-4 text-lg leading-8 text-[#6B7280]">Whether you can teach, mentor, or simply listen, your presence can change a child’s future.</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <Link href="/volunteer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#F59E0B] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(249,115,22,0.3)] transition hover:scale-[1.02]">
            Become a Volunteer <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FDE9D8] px-6 py-3.5 text-sm font-semibold text-[#111827] transition hover:border-[#F97316] hover:text-[#F97316]">
            <Users className="h-4 w-4" /> Meet our team
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
