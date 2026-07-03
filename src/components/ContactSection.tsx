"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, MapPin, MessageCircleHeart, Phone } from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";
import { contactChannels } from "@/data/siteContent";

const iconMap = { Mail, Phone, MapPin, Clock } as const;

export function ContactSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-40 opacity-30" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-4"
        >
          {contactChannels.map((channel, index) => {
            const Icon = iconMap[channel.icon as keyof typeof iconMap];
            const content = (
              <div className="flex items-center gap-4 rounded-[24px] border border-[#FDE9D8] bg-white p-5 shadow-[0_20px_60px_rgba(154,52,18,0.06)] transition hover:shadow-[0_20px_60px_rgba(249,115,22,0.14)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#FBBF24] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F97316]">{channel.label}</p>
                  <p className="mt-1 text-sm font-semibold text-[#111827]">{channel.value}</p>
                </div>
              </div>
            );
            return (
              <motion.div
                key={channel.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
              >
                {channel.href ? (
                  <a href={channel.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="relative overflow-hidden rounded-[36px] border border-[#FDE9D8] bg-white p-6 shadow-[0_30px_90px_rgba(154,52,18,0.08)] sm:p-10"
        >
          <AnimatedDoodle type="spark" className="right-6 top-6 text-[#FBBF24]/60" delay={0.2} />
          <AnimatedDoodle type="dots" className="left-6 bottom-6 text-[#F97316]/40" delay={0.4} />

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#FBBF24] text-white shadow-[0_16px_40px_rgba(249,115,22,0.3)]">
              <MessageCircleHeart className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#111827] sm:text-3xl">Send us a message</h2>
              <p className="text-sm text-[#6B7280]">We typically reply within one business day.</p>
            </div>
          </div>

          <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
            <div className="sm:col-span-1">
              <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold text-[#334155]">Full name</label>
              <input id="c-name" type="text" placeholder="Your name" className="w-full rounded-2xl border border-[#FDE9D8] bg-[#FFFDFB] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="c-email" className="mb-1.5 block text-sm font-semibold text-[#334155]">Email address</label>
              <input id="c-email" type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-[#FDE9D8] bg-[#FFFDFB] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="c-subject" className="mb-1.5 block text-sm font-semibold text-[#334155]">Subject</label>
              <select id="c-subject" className="w-full rounded-2xl border border-[#FDE9D8] bg-[#FFFDFB] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20">
                <option>General inquiry</option>
                <option>Volunteering</option>
                <option>Donations & partnerships</option>
                <option>Media & press</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="c-message" className="mb-1.5 block text-sm font-semibold text-[#334155]">Message</label>
              <textarea id="c-message" rows={5} placeholder="How can we help?" className="w-full rounded-2xl border border-[#FDE9D8] bg-[#FFFDFB] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20" />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#F59E0B] px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(249,115,22,0.32)] transition duration-300 hover:shadow-[0_22px_55px_rgba(249,115,22,0.42)]"
              >
                Send message <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
