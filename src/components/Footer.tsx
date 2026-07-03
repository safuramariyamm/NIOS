import Link from "next/link";
import { BadgeCheck, MessageCircle, Send, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 rounded-[40px] bg-gradient-to-r from-[#7C2D12] via-[#EA580C] to-[#F59E0B] px-6 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Bright Path Foundation</p>
          <h2 className="mt-3 text-3xl font-semibold">Every child deserves a chance to learn, dream, and belong.</h2>
          <p className="mt-4 text-base leading-7 text-white/80">We create joyful learning spaces and essential support for children who need hope most.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/programs" className="hover:text-white">Programs</Link></li>
              <li><Link href="/stories" className="hover:text-white">Stories</Link></li>
              <li><Link href="/volunteer" className="hover:text-white">Volunteer</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Programs</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>Education</li>
              <li>Nutrition</li>
              <li>Protection</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>hello@brightpath.org</li>
              <li>+91 98765 43210</li>
              <li>Delhi, India</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/30 pt-6 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Bright Path Foundation. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Community" className="rounded-full border border-white/30 p-2 hover:bg-white/20"><BadgeCheck className="h-4 w-4" /></a>
          <a href="#" aria-label="Support" className="rounded-full border border-white/30 p-2 hover:bg-white/20"><MessageCircle className="h-4 w-4" /></a>
          <a href="#" aria-label="Updates" className="rounded-full border border-white/30 p-2 hover:bg-white/20"><Send className="h-4 w-4" /></a>
          <a href="#" aria-label="Hope" className="rounded-full border border-white/30 p-2 hover:bg-white/20"><Sparkles className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}