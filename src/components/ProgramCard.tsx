"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ProgramCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  bg?: string;
  text?: string;
};

export function ProgramCard({ title, description, icon: Icon, color = "from-[#F97316] to-[#FBBF24]", bg = "bg-orange-50", text = "text-[#F97316]" }: ProgramCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="group relative overflow-hidden rounded-[28px] border border-[#FDE9D8] bg-white p-8 shadow-[0_20px_70px_rgba(154,52,18,0.06)]"
    >
      <div aria-hidden className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${color} opacity-10 transition-transform duration-500 group-hover:scale-125`} />
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bg} ${text}`}>
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-[#111827]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#6B7280]">{description}</p>
      <div className={`mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r ${color}`} />
    </motion.article>
  );
}
