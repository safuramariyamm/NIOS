"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

export function VolunteerForm() {
  return (
    <section id="apply" className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[40px] border border-[#FDE9D8] bg-white p-6 shadow-[0_30px_90px_rgba(154,52,18,0.08)] sm:p-10"
      >
        <AnimatedDoodle type="star" className="right-6 top-6 text-[#FBBF24]/60" delay={0.2} />
        <AnimatedDoodle type="heart" className="left-6 bottom-6 text-[#F97316]/50" delay={0.4} />

        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#FBBF24] text-white shadow-[0_16px_40px_rgba(249,115,22,0.3)]">
            <HeartHandshake className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">Ready to say yes?</h2>
          <p className="mt-3 text-base leading-7 text-[#6B7280]">
            Tell us a little about yourself and we&apos;ll match you with a program that fits your time and talents.
          </p>
        </div>

        <form className="mx-auto mt-8 grid max-w-xl gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
          <div className="sm:col-span-1">
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-[#334155]">Full name</label>
            <input id="name" type="text" placeholder="Your name" className="w-full rounded-2xl border border-[#FDE9D8] bg-[#FFFDFB] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20" />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="v-email" className="mb-1.5 block text-sm font-semibold text-[#334155]">Email address</label>
            <input id="v-email" type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-[#FDE9D8] bg-[#FFFDFB] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="interest" className="mb-1.5 block text-sm font-semibold text-[#334155]">I&apos;m interested in</label>
            <select id="interest" className="w-full rounded-2xl border border-[#FDE9D8] bg-[#FFFDFB] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20">
              <option>Teaching & tutoring</option>
              <option>Mentoring a child</option>
              <option>Fundraising & advocacy</option>
              <option>Organizing events</option>
              <option>Something else</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[#334155]">A little about you</label>
            <textarea id="message" rows={4} placeholder="Share your availability, skills, or what draws you to BrightPath" className="w-full rounded-2xl border border-[#FDE9D8] bg-[#FFFDFB] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20" />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#F59E0B] px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(249,115,22,0.32)] transition duration-300 hover:shadow-[0_22px_55px_rgba(249,115,22,0.42)]"
            >
              Submit application <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}