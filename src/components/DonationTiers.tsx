"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, HandCoins, Repeat } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";
import { donationTiers } from "@/data/siteContent";

export function DonationTiers() {
  const [selected, setSelected] = useState(1);
  const [monthly, setMonthly] = useState(false);

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#FBBF24]/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#F97316]/10 blur-3xl" />
      <AnimatedDoodle type="heart" className="left-[6%] top-[6%] hidden h-10 w-10 text-[#F97316]/30 lg:block" />
      <AnimatedDoodle type="star" className="right-[8%] top-[10%] hidden h-9 w-9 text-[#FBBF24]/40 lg:block" delay={0.2} />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Choose your impact"
          title="Every rupee has a job to do"
          description="Pick an amount below, or enter your own — you'll see exactly what it makes possible before you give."
          align="center"
        />

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-[#FDE9D8] bg-white p-1.5 shadow-[0_10px_30px_rgba(154,52,18,0.06)]">
            <button
              type="button"
              onClick={() => setMonthly(false)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${!monthly ? "bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white shadow-[0_10px_24px_rgba(249,115,22,0.28)]" : "text-[#6B7280]"}`}
            >
              Give once
            </button>
            <button
              type="button"
              onClick={() => setMonthly(true)}
              className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition ${monthly ? "bg-gradient-to-r from-[#EA580C] to-[#F59E0B] text-white shadow-[0_10px_24px_rgba(249,115,22,0.28)]" : "text-[#6B7280]"}`}
            >
              <Repeat className="h-3.5 w-3.5" /> Give monthly
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {donationTiers.map((tier, index) => {
            const isSelected = selected === index;
            return (
              <motion.button
                type="button"
                key={tier.amount}
                onClick={() => setSelected(index)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 20, delay: index * 0.06 }}
                className={`group relative overflow-hidden rounded-[28px] border p-7 text-left shadow-[0_20px_60px_rgba(154,52,18,0.06)] transition-colors ${
                  isSelected ? "border-[#F97316] bg-gradient-to-br from-[#FFF1E0] to-white" : "border-[#FDE9D8] bg-white"
                }`}
              >
                {tier.highlighted ? (
                  <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-[#EA580C] to-[#FBBF24] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Popular
                  </span>
                ) : null}
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isSelected ? "bg-gradient-to-br from-[#EA580C] to-[#FBBF24] text-white" : "bg-orange-50 text-[#F97316]"}`}>
                  {isSelected ? <Check className="h-6 w-6" /> : <HandCoins className="h-6 w-6" />}
                </div>
                <p className="mt-5 text-3xl font-bold text-[#111827]">
                  {tier.amount}
                  {monthly ? <span className="text-base font-semibold text-[#6B7280]">/mo</span> : null}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">{tier.impact}</p>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 rounded-[28px] border border-[#FDE9D8] bg-white p-6 text-center shadow-[0_20px_60px_rgba(154,52,18,0.06)] sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <p className="text-sm font-semibold text-[#111827]">
              You&apos;re giving {donationTiers[selected].amount}
              {monthly ? " every month" : ""}
            </p>
            <p className="mt-1 text-xs text-[#6B7280]">Secure checkout powered by trusted payment partners.</p>
          </div>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#F59E0B] px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(249,115,22,0.32)] transition hover:shadow-[0_22px_55px_rgba(249,115,22,0.42)] sm:w-auto"
          >
            Donate now <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
