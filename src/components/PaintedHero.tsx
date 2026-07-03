"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

export function PaintedHero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-[#FFFDFB] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.16),_transparent_22%)]" aria-hidden />
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F97316]/10 blur-3xl opacity-90" aria-hidden />
      <div className="absolute right-10 bottom-12 h-60 w-60 rounded-full bg-[#2563EB]/10 blur-3xl opacity-90" aria-hidden />

      <div className="mx-auto relative grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full bg-[#FFF1E6] px-4 py-2 text-sm font-semibold text-[#F97316] shadow-sm shadow-[#F97316]/10">
            <span>Education. Care. Opportunity.</span>
          </div>
          <h1 id="hero-title" className="mt-8 max-w-xl text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
            A better <span className="text-[#F97316]">tomorrow</span> for every child.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B7280] sm:text-xl">
            We work for the education, health, nutrition and protection of underprivileged children and help them grow with confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#volunteer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.18)] transition hover:scale-[1.02]">
              Support a Child
            </Link>
            <Link href="#stories" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3.5 text-sm font-semibold text-[#111827] shadow-sm transition hover:bg-[#F9FAFB]">
              Watch Our Story
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "20,000+", label: "Children Educated" },
              { value: "350+", label: "Learning Centers" },
              { value: "25+", label: "Cities Reached" },
              { value: "120+", label: "Dedicated Volunteers" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-white bg-white/90 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <p className="text-2xl font-semibold text-[#111827] sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#6B7280]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative flex items-center justify-center">
          <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-[#F97316]/20 blur-3xl opacity-90" aria-hidden />
          <div className="absolute -right-10 bottom-8 h-48 w-48 rounded-full bg-[#2563EB]/20 blur-3xl opacity-90" aria-hidden />

          <AnimatedDoodle type="plane" className="left-4 top-4 text-[#F97316]" delay={0.2} />
          <AnimatedDoodle type="pencil" className="right-8 top-14 text-[#2563EB]" delay={0.8} />
          <AnimatedDoodle type="star" className="left-10 bottom-12 text-[#F97316]" delay={1.1} />
          <AnimatedDoodle type="cloud" className="-right-10 bottom-8 text-[#2563EB]" delay={1.5} />
          <AnimatedDoodle type="rainbow" className="-left-8 top-28 text-[#2563EB]" delay={0.5} />
          <AnimatedDoodle type="abc" className="right-16 top-6 text-[#F97316]" delay={1.4} />
          <AnimatedDoodle type="dots" className="right-4 bottom-28 text-[#F97316]" delay={1.9} />
          <AnimatedDoodle type="book" className="left-16 bottom-6 text-[#2563EB]" delay={0.7} />

          <svg width="0" height="0" aria-hidden="true">
            <defs>
              <clipPath id="brushClip" clipPathUnits="objectBoundingBox">
                <path d="M0.08,0.14 C0.24,0.04 0.39,0.08 0.53,0.14 C0.68,0.22 0.82,0.1 0.92,0.2 C1.02,0.3 0.96,0.44 0.92,0.56 C0.88,0.68 0.73,0.76 0.6,0.78 C0.47,0.8 0.34,0.78 0.22,0.78 C0.12,0.78 0.02,0.72 0.02,0.6 C0.02,0.48 0.08,0.34 0.08,0.14 Z" />
              </clipPath>
            </defs>
          </svg>

          <motion.div whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 170, damping: 20 }} className="relative overflow-visible rounded-[44px] shadow-[0_40px_120px_rgba(15,23,42,0.16)]">
            <div className="absolute -inset-4 rounded-[44px] bg-gradient-to-br from-[#F97316]/30 via-transparent to-[#2563EB]/30 blur-3xl opacity-80" aria-hidden />
            <div className="relative rounded-[44px] bg-white p-1 shadow-[0_40px_120px_rgba(15,23,42,0.14)]">
              <div className="brush-mask relative overflow-hidden rounded-[36px] bg-slate-100">
                <div
                  className="h-[420px] w-full bg-cover bg-center transition-transform duration-500 ease-out sm:h-[520px] md:h-[600px] lg:h-[660px]"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=80')",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
