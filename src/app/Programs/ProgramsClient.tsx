"use client";

import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  HeartPulse,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Quote,
  ChevronRight,
  Heart,
} from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { Counter } from "@/components/Counter";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const programs = [
  {
    title: "Education",
    kicker: "Learn",
    description: "Reading circles, numeracy games, homework support, and mentors who make learning feel joyful.",
    icon: BookOpenCheck,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    color: "from-[#38BDF8] to-[#0EA5E9]",
    bg: "from-[#ECFEFF] to-white",
    stats: "120+ students",
  },
  {
    title: "Health & Nutrition",
    kicker: "Be nourished",
    description: "Warm meals, wellness checks, and care routines that help children focus, play, and grow.",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85",
    color: "from-[#FDBA24] to-[#F97316]",
    bg: "from-[#FEFCE8] to-white",
    stats: "2,000+ meals served",
  },
  {
    title: "Child Protection",
    kicker: "Feel safe",
    description: "Safe spaces, trusted adults, counselling, and family support built around each child.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=85",
    color: "from-[#FB7185] to-[#FB923C]",
    bg: "from-[#FFF1F2] to-white",
    stats: "400+ children protected",
  },
  {
    title: "Creative Life Skills",
    kicker: "Dream",
    description: "Art, storytelling, confidence-building, teamwork, and playful tools for future-ready children.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85",
    color: "from-[#2DD4BF] to-[#14B8A6]",
    bg: "from-[#F0FDFA] to-white",
    stats: "80+ workshops held",
  },
];

const journey = [
  { title: "Enroll", text: "Families meet our team and share what each child needs most.", icon: Star },
  { title: "Care Plan", text: "We build a simple plan across learning, meals, safety, and confidence.", icon: HeartPulse },
  { title: "Daily Support", text: "Children join classes, meals, creative play, and mentor check-ins.", icon: Sparkles },
  { title: "Grow Forward", text: "Progress is celebrated with families, teachers, and community partners.", icon: ArrowRight },
];

const impactStats = [
  { value: 5000, label: "Children Reached", icon: Star, color: "from-sky-500 to-blue-500" },
  { value: 120, label: "Schools Connected", icon: BookOpenCheck, color: "from-amber-500 to-orange-500" },
  { value: 300, label: "Active Volunteers", icon: HeartPulse, color: "from-emerald-500 to-teal-500" },
  { value: 40, label: "Communities Served", icon: ShieldCheck, color: "from-rose-500 to-pink-500" },
];

/* ------------------------------------------------------------------ */
/*  Motion variants                                                    */
/* ------------------------------------------------------------------ */

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* ------------------------------------------------------------------ */
/*  Decorative primitives                                              */
/* ------------------------------------------------------------------ */

function Blob({ className, color, opacity = 0.16 }: { className: string; color: string; opacity?: number }) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" className={`pointer-events-none absolute ${className}`} style={{ opacity }}>
      <path
        fill={color}
        d="M45.3,-59.4C58.5,-49.9,68.6,-34.6,72.7,-17.8C76.8,-1,74.9,17.3,66.4,31.9C57.9,46.5,42.8,57.4,26.2,64.6C9.6,71.8,-8.5,75.3,-24.9,70.6C-41.3,65.9,-56,53,-64.5,37.2C-73,21.4,-75.3,2.7,-71.2,-14.2C-67.1,-31.1,-56.6,-46.2,-42.6,-55.6C-28.6,-65,-14.3,-68.7,1.6,-71.1C17.5,-73.5,35,-68.9,45.3,-59.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

function FloatingShape({
  className,
  shape = "circle",
  color,
  duration = 6,
}: {
  className: string;
  shape?: "circle" | "square";
  color: string;
  duration?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute ${shape === "circle" ? "rounded-full" : "rounded-xl"} ${color} ${className}`}
      animate={{ y: [0, -14, 0], rotate: shape === "square" ? [8, -6, 8] : 0 }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function WaveDivider({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 leading-[0] ${flip ? "rotate-180" : ""}`}
    >
      <svg viewBox="0 0 1440 110" className="h-[52px] w-full sm:h-[90px]" preserveAspectRatio="none">
        <path
          fill={fill}
          d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,110L0,110Z"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function ProgramsHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=85"
          alt="Children learning together"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#3B1F12]/80 via-[#7C2D12]/48 to-[#3B1F12]/70" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_18%,rgba(253,186,36,0.28),transparent_42%),radial-gradient(circle_at_14%_82%,rgba(45,212,191,0.14),transparent_38%)]" />

      <FloatingShape className="right-[6%] top-[26%] h-6 w-6 hidden lg:block" shape="square" color="bg-[#FDBA24]/70" />
      <FloatingShape className="right-[22%] top-[62%] h-4 w-4 hidden md:block" shape="circle" color="bg-white/50" duration={5} />
      <FloatingShape className="left-[6%] bottom-[30%] h-5 w-5 hidden lg:block" shape="circle" color="bg-[#2DD4BF]/60" duration={7} />

      <AnimatedDoodle type="star" className="left-[8%] top-[18%] h-11 w-11 text-[#FDBA24]" />
      <AnimatedDoodle type="book" className="right-[15%] top-[20%] hidden h-14 w-14 text-white/45 md:block" />
      <AnimatedDoodle type="balloon" className="left-[16%] bottom-[18%] hidden h-16 w-16 text-[#FB7185] sm:block" delay={0.2} />
      <AnimatedDoodle type="abc" className="right-[32%] top-[16%] hidden h-16 w-16 text-white/60 md:block" delay={0.1} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto w-full max-w-7xl"
      >
        <div className="max-w-3xl" style={{ fontFamily: "var(--font-fredoka)" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/15 px-6 py-2.5 text-sm font-bold backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-[#FDBA24]" />
            Our Programs
          </motion.div>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Full-circle care for
            <span className="block text-[#FDBA24]">every child&apos;s tomorrow.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            From lessons and meals to safety and creative confidence, our programs surround children with the support they need to thrive.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/donate" className="group inline-flex items-center gap-2 rounded-full bg-[#FDBA24] px-8 py-3.5 text-sm font-bold text-[#7C2D12] shadow-lg transition-all hover:-translate-y-1 hover:scale-105">
              Support a program <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/volunteer" className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#EA580C] shadow-lg transition-all hover:-translate-y-1 hover:scale-105">
              Volunteer with us
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-[#FDBA24] to-[#EA580C]" />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-white/90">
                <span className="text-xl font-bold text-[#FDBA24]">5000+</span> children reached
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-white/85"
      >
        Explore
        <span className="flex h-11 w-7 items-start justify-center rounded-full border border-white/70 p-1">
          <ArrowDown className="h-4 w-4 animate-float-y text-[#FDBA24]" />
        </span>
      </motion.div>

      <WaveDivider fill="#FFFFFF" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Program Cards                                                      */
/* ------------------------------------------------------------------ */

function ProgramCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#FFFEFB] px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(253,186,36,0.16),transparent_30%),radial-gradient(circle_at_88%_24%,rgba(45,212,191,0.12),transparent_28%),radial-gradient(circle_at_72%_82%,rgba(251,113,133,0.08),transparent_30%)]" />
      <Blob className="-left-24 top-4 h-72 w-72" color="#FDBA24" opacity={0.12} />
      <Blob className="-right-20 bottom-0 h-80 w-80" color="#2DD4BF" opacity={0.1} />
      <Blob className="left-[48%] bottom-0 h-56 w-56" color="#FB7185" opacity={0.055} />
      <FloatingShape className="left-[7%] top-[18%] h-5 w-5 hidden lg:block" shape="square" color="bg-[#2DD4BF]/40" />
      <FloatingShape className="right-[12%] bottom-[18%] h-6 w-6 hidden lg:block" shape="circle" color="bg-[#FDBA24]/60" duration={5} />
      <AnimatedDoodle type="cloud" className="right-[10%] top-[12%] hidden h-16 w-16 text-[#38BDF8]/25 md:block" />
      <AnimatedDoodle type="pencil" className="left-[7%] bottom-[12%] hidden h-16 w-16 text-[#F97316]/20 md:block" />
      <AnimatedDoodle type="star" className="right-[32%] bottom-[10%] hidden h-10 w-10 text-[#FDBA24]/45 md:block" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-[#F97316] shadow-[0_14px_35px_rgba(124,45,18,0.08)]">
            <Sparkles className="h-4 w-4 text-[#FDBA24]" />
            What we do
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            Four playful pillars of care. 🌟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#7C2D12]/70">
            Each program is designed to feel child-sized, warm, practical, and easy for families to trust.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.015 }}
                className={`group relative overflow-hidden rounded-[32px] border border-white bg-gradient-to-br ${program.bg} p-3 shadow-[0_24px_70px_rgba(124,45,18,0.10)] ring-1 ring-[#FED7AA]/60`}
              >
                <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[260px] overflow-hidden rounded-[26px]">
                    <Image src={program.image} alt={program.title} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(min-width: 768px) 45vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F12]/62 via-transparent to-transparent" />
                    <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#F97316] backdrop-blur">
                      {program.kicker}
                    </span>
                    <span className="absolute top-5 right-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#7C2D12]/70 backdrop-blur">
                      {program.stats}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-5">
                    <motion.div
                      animate={isInView ? { y: [0, -5, 0] } : { y: 0 }}
                      transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.4, delay: index * 0.15 }}
                      className={`flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br ${program.color} text-white shadow-lg`}
                    >
                      <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                    </motion.div>
                    <h3 className="mt-6 text-3xl font-bold text-[#3B1F12]" style={{ fontFamily: "var(--font-fredoka)" }}>
                      {program.title}
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-[#7C2D12]/80">{program.description}</p>
                    <div className="mt-6 flex items-center gap-2">
                      <span className={`h-2 w-12 rounded-full bg-gradient-to-r ${program.color}`} />
                      <span className="h-2 w-2 rounded-full bg-[#FDBA24]" />
                      <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Impact Section (matching About page style)                         */
/* ------------------------------------------------------------------ */

function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#FFFEFB] px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(253,186,36,0.16),transparent_30%),radial-gradient(circle_at_86%_14%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_80%_86%,rgba(45,212,191,0.13),transparent_30%)]" />
      <Blob className="-left-24 bottom-0 h-96 w-96" color="#FDBA24" opacity={0.12} />
      <Blob className="-right-28 top-10 h-96 w-96" color="#2DD4BF" opacity={0.1} />
      <Blob className="left-[42%] top-[20%] h-60 w-60" color="#FB7185" opacity={0.055} />
      <FloatingShape className="right-[10%] top-[10%] h-6 w-6 hidden lg:block" shape="circle" color="bg-[#FB7185]/40" duration={5} />
      <FloatingShape className="left-[9%] bottom-[18%] h-7 w-7 hidden lg:block" shape="square" color="bg-[#FDBA24]/55" duration={7} />
      <AnimatedDoodle type="star" className="right-[7%] bottom-[12%] hidden h-12 w-12 text-[#FDBA24]/45 md:block" />
      <AnimatedDoodle type="cloud" className="left-[7%] top-[12%] hidden h-16 w-16 text-[#38BDF8]/25 lg:block" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-[#F97316] shadow-[0_14px_35px_rgba(124,45,18,0.08)]">
            <Sparkles className="h-4 w-4 text-[#FDBA24]" />
            Our Reach
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            Every number tells a story of impact. 💫
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#7C2D12]/70">
            From classrooms to communities, every statistic represents a life touched and a future brightened.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impactStats.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.025 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className={`group relative overflow-hidden rounded-[32px] border border-white bg-white p-6 shadow-[0_22px_60px_rgba(124,45,18,0.09)] ring-1 ring-[#FED7AA]/60`}
              >
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 bg-gradient-to-br ${item.color}`} />
                <div className="relative">
                  <motion.div
                    animate={isInView ? { y: [0, -6, 0] } : { y: 0 }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.4 }}
                    className={`flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                  <div className="mt-4 [&_*]:!bg-transparent [&_*]:!p-0 [&_*]:!text-left [&_*]:!shadow-none [&_p:first-child]:!text-4xl [&_p:first-child]:!font-black [&_p:first-child]:!leading-none [&_p:first-child]:!text-[#3B1F12] [&_p:last-child]:!mt-3 [&_p:last-child]:!text-sm [&_p:last-child]:!font-black [&_p:last-child]:!uppercase [&_p:last-child]:!tracking-[0.2em] [&_p:last-child]:!text-[#9A3412]">
                    <Counter value={item.value} label={item.label} />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className={`h-2 w-12 rounded-full bg-gradient-to-br ${item.color}`} />
                    <span className="h-2 w-2 rounded-full bg-[#FDBA24]" />
                    <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Care Path (matching About page pinned scroll style)                */
/* ------------------------------------------------------------------ */

function CarePath() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const pathThemes = [
    { color: "from-[#38BDF8] to-[#0EA5E9]", bg: "from-[#ECFEFF] to-white", border: "border-sky-200" },
    { color: "from-[#FDBA24] to-[#F97316]", bg: "from-[#FEFCE8] to-white", border: "border-amber-200" },
    { color: "from-[#2DD4BF] to-[#14B8A6]", bg: "from-[#F0FDFA] to-white", border: "border-teal-200" },
    { color: "from-[#FB7185] to-[#FB923C]", bg: "from-[#FFF1F2] to-white", border: "border-rose-200" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#FFF7ED] px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(253,186,36,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.08),transparent_40%)]" />
      <Blob className="-right-24 top-10 h-96 w-96" color="#FDBA24" opacity={0.12} />
      <Blob className="-left-24 bottom-0 h-80 w-80" color="#2DD4BF" opacity={0.09} />
      <AnimatedDoodle type="cloud" className="left-[7%] top-[12%] hidden h-16 w-16 text-[#38BDF8]/25 md:block" />
      <AnimatedDoodle type="star" className="right-[8%] top-[15%] hidden h-12 w-12 text-[#FDBA24]/40 md:block" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-[#F97316] shadow-[0_14px_35px_rgba(124,45,18,0.08)]">
            <Quote className="h-4 w-4" />
            How it works
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            A caring path from first hello to confident next step. 🌈
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#7C2D12]/70">
            Programs work best when they connect. We guide children through a simple journey that keeps families close and support consistent.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <svg aria-hidden className="absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 700 420" preserveAspectRatio="none">
            <path d="M70 90 C 230 10 410 150 600 90 C 690 60 650 260 520 260 C 350 260 250 360 90 310" fill="none" stroke="#FED7AA" strokeWidth="28" strokeLinecap="round" />
            <path d="M70 90 C 230 10 410 150 600 90 C 690 60 650 260 520 260 C 350 260 250 360 90 310" fill="none" stroke="#F97316" strokeWidth="4" strokeDasharray="12 16" strokeLinecap="round" />
          </svg>

          <div className="relative grid gap-6 sm:grid-cols-2">
            {journey.map((step, index) => {
              const Icon = step.icon;
              const theme = pathThemes[index];

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  className={`group rounded-[32px] border-2 ${theme.border} bg-gradient-to-br ${theme.bg} p-6 shadow-[0_22px_60px_rgba(124,45,18,0.09)] ring-1 ring-[#FED7AA]/40 transition-all hover:shadow-2xl`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <motion.div
                      animate={isInView ? { y: [0, -5, 0] } : { y: 0 }}
                      transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.4, delay: index * 0.15 }}
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.color} text-white shadow-lg`}
                    >
                      <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </motion.div>
                    <span className="text-sm font-black uppercase tracking-[0.18em] text-[#7C2D12]/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-[#3B1F12]" style={{ fontFamily: "var(--font-fredoka)" }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#7C2D12]/75">{step.text}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${theme.color}`} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FDBA24]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF]" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Final CTA (matching About page)                                   */
/* ------------------------------------------------------------------ */

function ProgramsCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative isolate overflow-hidden px-4 py-28 text-white sm:px-6 lg:px-8">
      <Image src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1800&q=85" alt="Children smiling" fill className="absolute inset-0 -z-20 object-cover" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#3B1F12]/82 via-[#7C2D12]/55 to-[#3B1F12]/78" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(253,186,36,0.16),transparent_45%),radial-gradient(circle_at_74%_64%,rgba(45,212,191,0.12),transparent_40%)]" />
      <AnimatedDoodle type="balloon" className="left-[8%] bottom-[14%] hidden h-14 w-14 text-white/20 md:block" />
      <FloatingShape className="right-[10%] top-[20%] h-6 w-6 hidden lg:block" shape="square" color="bg-[#FDBA24]/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
        <div className="max-w-3xl" style={{ fontFamily: "var(--font-fredoka)" }}>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#FDBA24]">Be part of the circle</p>
          <h2 className="mt-5 text-5xl font-bold leading-tight sm:text-6xl">
            Help one program <span className="text-[#FDBA24]">reach one more child.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Your time or donation can become a lesson, a meal, a safe conversation, or a brave first dream.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/donate" className="group inline-flex items-center gap-2 rounded-full bg-[#FDBA24] px-8 py-3.5 text-sm font-bold text-[#7C2D12] shadow-lg transition-all hover:-translate-y-1 hover:scale-105">
              Donate Now <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#EA580C] shadow-lg transition-all hover:-translate-y-1 hover:scale-105">
              Talk to us
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-[#FDBA24] to-[#EA580C]" />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-white/90">
                <span className="text-xl font-bold text-[#FDBA24]">5000+</span> children reached
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sticky Donate Bar (matching About page)                           */
/* ------------------------------------------------------------------ */

function StickyDonateBar() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.07, 0.96, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.07], [30, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-6 right-5 z-50 hidden sm:block"
    >
      <Link
        href="/donate"
        className="group inline-flex items-center gap-2 rounded-full bg-[#FDBA24] px-6 py-3.5 text-sm font-bold text-[#7C2D12] shadow-2xl ring-4 ring-white/50 transition-all hover:-translate-y-1 hover:scale-105"
      >
        <Heart className="h-4 w-4 fill-[#7C2D12] text-[#7C2D12]" />
        Donate Now
        <ChevronRight className="h-4 w-4 -mr-1 opacity-0 transition group-hover:mr-0 group-hover:opacity-100" />
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ProgramsClient() {
  return (
    <>
      <ProgramsHero />
      <ProgramCards />
      <ImpactSection />
      <CarePath />
      <ProgramsCTA />
      <StickyDonateBar />
    </>
  );
}