"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

type StoryCardProps = {
  title: string;
  description: string;
  image: string;
  category?: string;
  tag?: string;
  featured?: boolean;
};

const tiltVariants = [-2, 2, -1.5, 1.5];

export function StoryCard({ title, description, image, category, tag, featured = false }: StoryCardProps) {
  const tilt = tiltVariants[title.length % tiltVariants.length];
  const label = category ?? tag;

  return (
    <motion.article
      initial={{ rotate: tilt }}
      whileHover={{ y: -8, scale: 1.02, rotate: 0 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`relative h-full overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-[0_18px_50px_rgba(154,52,18,0.12)] ${featured ? "md:col-span-2" : ""}`}
    >
      {/* Sticker-style tag */}
      <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F97316] to-[#FBBF24] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_rgba(249,115,22,0.35)]">
        <Sparkles className="h-3 w-3" />
        {label}
      </div>

      <div className={`relative overflow-hidden ${featured ? "h-80 md:h-[420px]" : "h-56"}`}>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="h-full w-full">
          <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold leading-snug text-[#1E293B]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#6B7280]">{description}</p>
        <Link
          href="/stories"
          className="group mt-4 inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-[#EA580C] transition hover:bg-orange-100"
        >
          Read Story
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
