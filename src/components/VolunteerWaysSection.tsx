"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Megaphone, CalendarHeart } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const ways = [
  {
    icon: GraduationCap,
    title: "Teach & tutor",
    description: "Lead a weekly reading circle, help with homework, or run a skills workshop in your area of expertise.",
    color: "from-[#EA580C] to-[#FB923C]",
  },
  {
    icon: Users,
    title: "Mentor a child",
    description: "Offer steady, one-on-one encouragement to a student over a full school year and watch them bloom.",
    color: "from-[#D97706] to-[#F59E0B]",
  },
  {
    icon: Megaphone,
    title: "Fundraise & advocate",
    description: "Rally your workplace, campus, or neighborhood to fund scholarships and learning materials.",
    color: "from-[#F59E0B] to-[#FBBF24]",
  },
  {
    icon: CalendarHeart,
    title: "Organize events",
    description: "Help plan art days, sports meets, and community celebrations that bring joy into every center.",
    color: "from-[#EA580C] to-[#FBBF24]",
  },
];

export function VolunteerWaysSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div aria-hidden className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#F97316]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Ways to volunteer"
          title="There's a place for your time, skill, and heart here"
          description="Whatever your schedule looks like, there's a meaningful way to get involved — from an hour a week to a full season."
          align="center"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.article
                key={way.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 20, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-[28px] border border-[#FDE9D8] bg-white p-7 shadow-[0_20px_60px_rgba(154,52,18,0.06)]"
              >
                <div aria-hidden className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${way.color} opacity-10 transition-transform duration-500 group-hover:scale-125`} />
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${way.color} text-white shadow-[0_14px_30px_rgba(249,115,22,0.28)]`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#111827]">{way.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">{way.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}