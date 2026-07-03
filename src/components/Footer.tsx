import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Utensils,
} from "lucide-react";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/Programs" },
  { label: "Stories", href: "/stories" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

const programs = [
  { label: "Education", icon: BookOpen },
  { label: "Nutrition", icon: Utensils },
  { label: "Protection", icon: ShieldCheck },
  { label: "Life Skills", icon: Sparkles },
];

const socials = [
  { label: "Community", icon: BadgeCheck, href: "#" },
  { label: "Support", icon: MessageCircle, href: "#" },
  { label: "Updates", icon: Send, href: "#" },
  { label: "Hope", icon: Sparkles, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-[#FFFEFB] pb-4 pt-6">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-32 opacity-30" />

      <div className="relative w-full overflow-hidden border-t border-[#FDE9D8] bg-gradient-to-br from-[#FFF7ED] via-[#FFFBF5] to-[#FFF7ED]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(249,115,22,0.08),transparent_45%),radial-gradient(circle_at_90%_85%,rgba(253,186,36,0.10),transparent_40%)]"
        />

        {/* Main: Brand + links + contact, all in one row */}
        <div className="relative grid gap-8 px-6 py-8 sm:px-10 sm:py-9 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] lg:px-16 lg:py-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#F97316] text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-[#EA580C]">
                  BrightPath
                </span>
                <span
                  className="block text-base font-bold leading-none text-[#111827]"
                  style={{ fontFamily: "var(--font-fredoka)" }}
                >
                  Learning Center
                </span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[#6B7280]">
              Every child deserves a chance to learn, dream, and belong.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Link
                href="/donate"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F97316] px-4 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#EA580C] hover:shadow-lg"
              >
                <Heart className="h-3.5 w-3.5 fill-white" />
                Donate
              </Link>
              <Link
                href="/volunteer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-[#F97316]/30 px-4 py-2 text-xs font-bold text-[#EA580C] transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                Volunteer
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.22em] text-[#EA580C]">
              Explore
            </h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#374151] transition hover:text-[#EA580C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.22em] text-[#EA580C]">
              Programs
            </h3>
            <ul className="mt-3 space-y-2">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <li
                    key={program.label}
                    className="flex items-center gap-2 text-sm font-medium text-[#374151]"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#F97316]" />
                    {program.label}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.22em] text-[#EA580C]">
              Contact
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm font-medium text-[#374151]">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#F97316]" />
                hello@brightpath.org
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#F97316]" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#F97316]" />
                Delhi, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-[#FDE9D8] px-6 py-4 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-3 text-xs text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 BrightPath Learning Center. All rights reserved.</p>
            <div className="flex items-center gap-2.5">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-[#FDE9D8] bg-white text-[#EA580C] transition hover:-translate-y-0.5 hover:border-[#F97316] hover:bg-orange-50"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}