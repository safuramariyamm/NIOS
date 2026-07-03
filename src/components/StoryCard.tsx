"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type StoryCardProps = {
  title: string;
  description: string;
  image: string;
  tag: string;
  featured?: boolean;
};

export function StoryCard({ title, description, image, tag, featured = false }: StoryCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)] ${featured ? "md:col-span-2" : ""}`}
    >
      <div className={`relative overflow-hidden ${featured ? "h-80 md:h-[420px]" : "h-64"}`}>
        <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} className="h-full w-full">
          <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </motion.div>
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#F97316] shadow-sm backdrop-blur">{tag}</div>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="mt-3 text-2xl font-semibold text-[#111827]">{title}</h3>
        <p className="mt-3 text-base leading-7 text-[#6B7280]">{description}</p>
        <Link href="#newsletter" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#EA580C] transition hover:text-[#C2410C]">
          Read Story <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}