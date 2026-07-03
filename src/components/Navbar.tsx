"use client";

import Link from "next/link";
import { Menu, Sparkles, Heart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/siteContent";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="#" className="group flex items-center gap-3 text-[#111827]">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-[#F97316] via-[#EC4899] to-[#2563EB] text-white shadow-[0_16px_40px_rgba(236,72,153,0.3)]"
          >
            <Sparkles className="h-6 w-6" />
          </motion.div>
          <div>
            <p className="text-base font-bold" style={{ fontFamily: "var(--font-fredoka)" }}>BrightPath</p>
            <p className="text-xs uppercase tracking-[0.35em] text-[#6B7280]">Learning Center</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#111827] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="relative transition hover:text-[#F97316] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#F97316] after:to-[#EC4899] after:transition-all after:duration-300 hover:after:w-full">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link href="#volunteer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#EC4899] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(236,72,153,0.3)]">
              <Heart className="h-4 w-4 fill-white" /> Donate Now
            </Link>
          </motion.div>
        </div>
        <button aria-label="Open menu" className="rounded-full border border-[#E5E7EB] p-2 md:hidden" onClick={() => setOpen((value) => !value)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open ? (
        <div className="border-t border-[#E5E7EB] bg-[#FFFDFB] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-[#111827]">
                {item.label}
              </Link>
            ))}
            <Link href="#volunteer" onClick={() => setOpen(false)} className="rounded-full bg-gradient-to-r from-[#F97316] to-[#2563EB] px-4 py-3 text-center font-semibold text-white">
              Donate Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}