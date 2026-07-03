"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ProgramCardProps = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color?: string;
  bg?: string;
  text?: string;
};

export function ProgramCard({
  title,
  description,
  image,
  icon: Icon,
  color = "from-[#F97316] to-[#FBBF24]",
  bg = "bg-orange-50",
  text = "text-[#F97316]",
}: ProgramCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="group relative h-96 overflow-hidden rounded-[28px] border border-[#FDE9D8] bg-white shadow-[0_20px_70px_rgba(154,52,18,0.06)]"
    >
      {/* Program Image — fills the whole card by default */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
        {/* Title stays readable over the photo until hover */}
        <div className="absolute inset-x-0 bottom-0 p-6 transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-xl font-bold text-white drop-shadow-sm">{title}</h3>
        </div>
      </div>

      {/* Info overlay — hidden until hover, then slides up + fades in */}
      <div className="absolute inset-0 flex translate-y-4 flex-col justify-center bg-white p-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <div
          aria-hidden
          className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${color} opacity-10 transition-transform duration-500 group-hover:scale-125`}
        />

        <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${bg} ${text}`}>
          <Icon className="h-7 w-7" />
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-[#111827]">{title}</h3>

        <p className="mt-3 text-base leading-7 text-[#6B7280]">{description}</p>

        <div className={`mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r ${color}`} />
      </div>
    </motion.article>
  );
}