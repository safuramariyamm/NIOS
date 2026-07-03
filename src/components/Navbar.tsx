"use client";

import Link from "next/link";
import { Menu, Sparkles, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/siteContent";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "border-[#FDE9D8] bg-white/90 shadow-[0_10px_30px_rgba(154,52,18,0.08)]" : "border-white/60 bg-white/70 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="#" className="group flex items-center gap-3 text-[#111827]">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-[#EA580C] via-[#F97316] to-[#FBBF24] text-white shadow-[0_16px_40px_rgba(249,115,22,0.32)]"
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
            <Link key={item.href} href={item.href} className="relative transition hover:text-[#F97316] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-[#F97316] after:to-[#FBBF24] after:transition-all after:duration-300 hover:after:w-full">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link href="#volunteer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#F59E0B] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(249,115,22,0.32)]">
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
            <Link href="#volunteer" onClick={() => setOpen(false)} className="rounded-full bg-gradient-to-r from-[#EA580C] to-[#F59E0B] px-4 py-3 text-center font-semibold text-white">
              Donate Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}