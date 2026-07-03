"use client";

import { motion } from "framer-motion";
import { PieChart, ShieldCheck } from "lucide-react";
import { donationBreakdown } from "@/data/siteContent";

const barColors = [
  "from-[#EA580C] to-[#FB923C]",
  "from-[#F59E0B] to-[#FBBF24]",
  "from-[#D97706] to-[#F59E0B]",
  "from-[#7C2D12] to-[#EA580C]",
];

export function DonationBreakdown() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[40px] border border-[#FDE9D8] bg-white p-6 shadow-[0_30px_90px_rgba(154,52,18,0.07)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col justify-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#FBBF24] text-white shadow-[0_16px_40px_rgba(249,115,22,0.3)]">
            <PieChart className="h-7 w-7" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#F97316]">Where it goes</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">Full transparency, every single rupee.</h2>
          <p className="mt-5 text-base leading-8 text-[#6B7280]">
            We publish an audited breakdown every quarter so you always know how your generosity turns into
            classrooms, meals, and safety for children.
          </p>
          <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#FDE9D8] bg-[#FFF7ED] px-4 py-2.5 text-sm font-medium text-[#9A3412]">
            <ShieldCheck className="h-4 w-4 text-[#F97316]" /> Independently audited annually
          </div>
        </motion.div>

        <div className="flex flex-col justify-center gap-5">
          {donationBreakdown.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-[#111827]">{item.label}</span>
                <span className="font-semibold text-[#F97316]">{item.percent}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-[#FFF1E0]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percent}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${barColors[index % barColors.length]}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
