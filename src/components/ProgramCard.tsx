"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ProgramCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ProgramCard({ title, description, icon: Icon }: ProgramCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="group rounded-[28px] border border-[#E5E7EB] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)]"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[#F97316]">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-[#111827]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#6B7280]">{description}</p>
      <div className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#F97316] to-[#2563EB]" />
    </motion.article>
  );
}
