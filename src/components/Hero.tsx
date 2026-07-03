"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Heart, PlayCircle, Sparkles, Star } from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

const volunteerAvatars = [
  { initials: "AM", className: "bg-[#F97316] text-white" },
  { initials: "RK", className: "bg-[#F59E0B] text-white" },
  { initials: "LS", className: "bg-[#FBBF24] text-[#7C2D12]" },
  { initials: "JP", className: "bg-white text-[#C2410C]" },
];

const heroSlides = [
  {
    src: "/hero/hero img-11.png",
    alt: "A smiling child learning with confidence",
  },
  {
    src: "/hero/hero img-2.png",
    alt: "A BrightPath student enjoying a learning moment",
  },
  {
    src: "/hero/hero img-3.png",
    alt: "Children growing through education and care",
  },
];

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    setPointer({ x, y });
  };

  const handleMouseLeave = () => setPointer({ x: 0, y: 0 });

  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-5rem)] overflow-hidden bg-[#FFFDF8] px-4 py-10 text-[#1E293B] sm:px-6 lg:min-h-[calc(100svh-4.5rem)] lg:px-8 lg:py-8"
      style={{ fontFamily: "var(--font-fredoka)" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <Image src="/hero/herobg.jpg" alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,248,0.88)_0%,rgba(255,253,248,0.72)_42%,rgba(255,253,248,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.75),transparent_28%),radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.20),transparent_24%),linear-gradient(180deg,rgba(255,253,248,0.24)_0%,rgba(255,253,248,0.84)_100%)]" />
      </div>

      <AnimatedDoodle type="star" className="left-[7%] top-[18%] h-10 w-10 text-[#F59E0B]/45" offset={{ x: pointer.x * 6, y: pointer.y * 4 }} />
      <AnimatedDoodle type="rocket" className="left-[43%] top-[13%] hidden h-16 w-16 -rotate-12 text-[#F97316]/25 md:block" offset={{ x: pointer.x * 8, y: pointer.y * 5 }} delay={0.1} />
      <AnimatedDoodle type="cloud" className="right-[8%] top-[12%] h-14 w-14 text-[#FBBF24]/35" offset={{ x: pointer.x * 5, y: pointer.y * 3 }} delay={0.2} />
      <AnimatedDoodle type="pencil" className="bottom-[14%] left-[45%] hidden h-14 w-14 rotate-12 text-[#EA580C]/35 lg:block" offset={{ x: pointer.x * 7, y: pointer.y * 3 }} delay={0.25} />
      <AnimatedDoodle type="rainbow" className="bottom-[9%] right-[10%] h-16 w-16 text-white/80" offset={{ x: pointer.x * 4, y: pointer.y * 2 }} delay={0.35} />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 pb-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-20 flex max-w-2xl flex-col justify-center"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm font-semibold text-[#9A3412] shadow-[0_14px_40px_rgba(249,115,22,0.12)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#F97316]" />
            BrightPath Learning Center
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[0.98] text-[#1E293B] sm:text-6xl lg:text-7xl xl:text-[5rem]">
            Every child deserves a{" "}
            <span className="inline-block -rotate-1 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] bg-clip-text text-[1.12em] text-transparent" style={{ fontFamily: "var(--font-caveat)" }}>
              brighter
            </span>{" "}
            path to learning.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#475569] sm:text-lg">
            We create joyful classrooms, caring mentorship, and access to essential learning resources so children can grow with confidence, curiosity, and hope.
          </p>

          <div className="mt-6 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#F97316] to-[#FBBF24] shadow-[0_8px_24px_rgba(249,115,22,0.28)]" />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#volunteer"
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#F59E0B] px-7 text-sm font-bold text-white shadow-[0_18px_45px_rgba(249,115,22,0.34)] transition duration-300 hover:shadow-[0_22px_55px_rgba(249,115,22,0.42)]"
              >
                <Heart className="h-4 w-4 fill-white text-white" />
                Support a Child
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#stories"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#F97316]/15 bg-white/80 px-7 text-sm font-bold text-[#9A3412] shadow-[0_14px_36px_rgba(249,115,22,0.11)] backdrop-blur-xl transition duration-300 hover:border-[#F59E0B]/50 hover:bg-white"
              >
                <PlayCircle className="h-5 w-5 text-[#F97316]" />
                Watch Our Story
              </Link>
            </motion.div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {volunteerAvatars.map((avatar) => (
                <div
                  key={avatar.initials}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFFDF8] text-[11px] font-bold shadow-sm ${avatar.className}`}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-sm font-semibold text-[#334155]">Trusted by 300+ volunteers.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="relative z-10 flex min-h-[430px] items-center justify-center lg:min-h-[590px]"
        >
          <div className="absolute h-[84%] w-[84%] rounded-full bg-[#F97316]/14 blur-3xl" aria-hidden />
          <div className="absolute h-[68%] w-[68%] translate-x-8 translate-y-8 rounded-full bg-[#FBBF24]/22 blur-3xl" aria-hidden />
          <AnimatedDoodle type="spark" className="right-[9%] top-[13%] h-12 w-12 text-[#FBBF24]/70" offset={{ x: pointer.x * 7, y: pointer.y * 4 }} delay={0.1} />
          <AnimatedDoodle type="star" className="left-[8%] top-[27%] h-12 w-12 text-white/85" offset={{ x: pointer.x * 6, y: pointer.y * 4 }} delay={0.18} />
          <AnimatedDoodle type="pencil" className="bottom-[17%] left-[17%] h-16 w-16 -rotate-12 text-[#F97316]/55" offset={{ x: pointer.x * 8, y: pointer.y * 5 }} delay={0.24} />
          <AnimatedDoodle type="cloud" className="bottom-[20%] right-[5%] h-14 w-14 text-white/80" offset={{ x: pointer.x * 5, y: pointer.y * 3 }} delay={0.3} />
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="relative w-full max-w-[640px]"
          >
            <div className="relative aspect-[1.08/1] w-full [mask-image:radial-gradient(ellipse_at_center,#000_58%,rgba(0,0,0,0.9)_75%,transparent_100%)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroSlides[activeSlide].src}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroSlides[activeSlide].src}
                    alt={heroSlides[activeSlide].alt}
                    fill
                    priority={activeSlide === 0}
                    className="object-contain opacity-95 mix-blend-multiply drop-shadow-[0_24px_40px_rgba(154,52,18,0.14)]"
                    sizes="(max-width: 1024px) 92vw, 640px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-white/70 px-3 py-2 shadow-[0_12px_30px_rgba(154,52,18,0.12)] backdrop-blur-xl">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show hero image ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === index ? "w-7 bg-[#F97316]" : "w-2.5 bg-[#F59E0B]/35 hover:bg-[#F59E0B]/60"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-30 text-[#FFFDFB]">
        <svg className="block h-16 w-full sm:h-20 lg:h-24" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0 54L60 48C120 42 240 30 360 40C480 50 600 82 720 86C840 90 960 66 1080 50C1200 34 1320 26 1380 22L1440 18V120H0V54Z" fill="currentColor" />
          <path d="M0 78L80 72C160 66 320 54 480 64C640 74 800 106 960 98C1120 90 1280 42 1360 18L1440 -6V120H0V78Z" fill="currentColor" fillOpacity="0.55" />
        </svg>
      </div>
    </section>
  );
}
