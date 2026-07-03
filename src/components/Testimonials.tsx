"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { testimonials } from "@/data/siteContent";

const accents = [
  { bg: "bg-orange-50", text: "text-[#F97316]" },
  { bg: "bg-blue-50", text: "text-[#2563EB]" },
  { bg: "bg-pink-50", text: "text-[#EC4899]" },
];

export function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Testimonials" title="The warmth of our community is felt everywhere" description="Families, students, and volunteers share what our programs mean to them." align="center" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => {
            const accent = accents[index % accents.length];
            return (
            <motion.article
              key={item.author}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-[28px] border border-[#E5E7EB] bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-xl"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${accent.bg} ${accent.text}`}>
                <Quote className="h-5 w-5" />
              </div>
              <p className="mt-6 text-lg leading-8 text-[#111827]">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-[#111827]">{item.author}</p>
                <p className="text-sm text-[#6B7280]">{item.role}</p>
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}