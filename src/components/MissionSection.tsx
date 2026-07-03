"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

export function MissionSection() {
  return (
    <section id="mission" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-x-0 top-6 h-40 opacity-40" />
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[40px] border border-[#FDE9D8] bg-white p-6 shadow-[0_30px_90px_rgba(154,52,18,0.07)] lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="relative overflow-hidden rounded-[32px]">
          <div aria-hidden className="absolute -inset-2 -z-10 rounded-[40px] bg-gradient-to-br from-[#F97316]/25 to-[#FBBF24]/25 blur-2xl" />
          <Image src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1100&q=80" alt="A caring educator guiding children through a lesson" width={1000} height={1200} className="h-full min-h-[380px] w-full rounded-[32px] object-cover" />
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-[#7C2D12]/25 via-transparent to-transparent" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F97316]">Our mission</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">We turn care into opportunity with every lesson and every meal.</h2>
          <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#F97316] to-[#FBBF24]" />
          <p className="mt-6 text-lg leading-8 text-[#6B7280]">BrightPath Learning Center partners with communities to provide free education, nutrition, and a protective environment where children can discover their potential without fear.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/programs" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#F59E0B] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(249,115,22,0.3)] transition hover:shadow-[0_20px_50px_rgba(249,115,22,0.38)]">
              Explore our programs <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FDE9D8] bg-[#FFF7ED] px-5 py-3 text-sm font-medium text-[#9A3412]">
              <HeartHandshake className="h-4 w-4 text-[#F97316]" /> Trusted by families
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
