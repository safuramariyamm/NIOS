"use client";

import { motion } from "framer-motion";
import { trustBadges } from "@/data/siteContent";

export function TrustStrip() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto -mt-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-[28px] border border-[#FDE9D8] bg-white/80 px-6 py-6 shadow-[0_20px_60px_rgba(154,52,18,0.07)] backdrop-blur-xl sm:justify-between"
        >
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="flex items-center gap-2.5 text-sm font-semibold text-[#7C2D12]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#FFF1E0] to-[#FDE9D8] text-[#F97316]">
                  <Icon className="h-4 w-4" />
                </span>
                {badge.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
