"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

export function MissionSection() {
  return (
    <section id="mission" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[40px] border border-[#E5E7EB] bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.06)] lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="relative overflow-hidden rounded-[32px]">
          <AnimatedDoodle type="book" className="left-4 top-4 text-[#F97316]" delay={0.3} />
          <AnimatedDoodle type="pencil" className="bottom-6 right-4 text-[#2563EB]" delay={0.8} />
          <Image src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1100&q=80" alt="A caring educator guiding children through a lesson" width={1000} height={1200} className="h-full min-h-[380px] w-full rounded-[32px] object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F97316]">Our mission</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">We turn care into opportunity with every lesson and every meal.</h2>
          <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#F97316] to-[#2563EB]" />
          <p className="mt-6 text-lg leading-8 text-[#6B7280]">Bright Path Foundation partners with communities to provide free education, nutrition, and a protective environment where children can discover their potential without fear.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#programs" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg">
              Explore our programs <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#FFFDFB] px-5 py-3 text-sm font-medium text-[#111827]">
              <HeartHandshake className="h-4 w-4 text-[#2563EB]" /> Trusted by families
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
