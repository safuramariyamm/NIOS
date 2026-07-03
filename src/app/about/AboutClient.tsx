"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import {
  ArrowDown,
  BookOpen,
  GraduationCap,
  Globe2,
  HandHeart,
  Heart,
  Laptop,
  Leaf,
  Rocket,
  School,
  Sparkles,
  Sprout,
  Star,
  Trophy,
  Utensils,
  Users,
  Quote,
  ChevronRight,
} from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";
import { Counter } from "@/components/Counter";

const FaSeedling = Sprout;
const FaHeartSolid = Heart;
const FaGlobeAmericas = Globe2;
const FaTrophy = Trophy;
const FaLaptopCode = Laptop;
const FaStar = Star;
const FaRocket = Rocket;
const FaBookOpen = BookOpen;
const FaUtensils = Utensils;
const FaLeaf = Leaf;
const FaHandsHelping = HandHeart;

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const storySteps = [
  {
    label: "Learn",
    icon: FaBookOpen,
    title: "Learn",
    text: "Children discover reading, numbers, stories, and confidence through joyful lessons.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    color: "from-[#38BDF8] to-[#0EA5E9]",
    bgColor: "from-[#ECFEFF] to-white",
  },
  {
    label: "Feel Safe",
    icon: FaHeartSolid,
    title: "Feel Safe",
    text: "Every child is welcomed into a protective space with patient adults and gentle care.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=85",
    color: "from-[#FB7185] to-[#FB923C]",
    bgColor: "from-[#FFF1F2] to-white",
  },
  {
    label: "Be Nourished",
    icon: FaUtensils,
    title: "Be Nourished",
    text: "Warm meals and wellness support help children focus, play, and return tomorrow.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85",
    color: "from-[#FDBA24] to-[#F97316]",
    bgColor: "from-[#FEFCE8] to-white",
  },
  {
    label: "Grow",
    icon: FaLeaf,
    title: "Grow",
    text: "Creative activities, mentoring, and community support help children build courage.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85",
    color: "from-[#2DD4BF] to-[#14B8A6]",
    bgColor: "from-[#F0FDFA] to-white",
  },
  {
    label: "Dream",
    icon: FaGlobeAmericas,
    title: "Dream",
    text: "Children begin to imagine futures that once felt too far away.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
    color: "from-[#FB923C] to-[#F97316]",
    bgColor: "from-[#FFF7ED] to-white",
  },
];

const impacts = [
  { value: 5000, label: "Children Supported", icon: Heart, color: "from-rose-500 to-pink-500" },
  { value: 120, label: "Schools Connected", icon: School, color: "from-amber-500 to-orange-500" },
  { value: 300, label: "Volunteers", icon: Users, color: "from-teal-500 to-cyan-500" },
  { value: 40, label: "Communities", icon: HandHeart, color: "from-violet-500 to-purple-500" },
];

const team = [
  {
    role: "Executive Director",
    name: "Ananya Sharma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    delay: 0,
    icon: FaStar,
  },
  {
    role: "Program Director",
    name: "Rohan Mehta",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    delay: 0.1,
    icon: FaRocket,
  },
  {
    role: "Education Lead",
    name: "Meera Iyer",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80",
    delay: 0.2,
    icon: FaBookOpen,
  },
  {
    role: "Volunteer Team",
    name: "Our Superheroes",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=500&q=80",
    delay: 0.3,
    icon: FaHandsHelping,
  },
];

const timeline = [
  { year: "2018", title: "A Dream Begins", text: "One small room, 15 children, and a big vision took root.", icon: FaSeedling },
  { year: "2020", title: "Growing Stronger", text: "Reading circles, meals, and art therapy became daily magic.", icon: FaHeartSolid },
  { year: "2022", title: "Reaching Further", text: "Community partners helped us bring learning to more families.", icon: FaGlobeAmericas },
  { year: "2024", title: "A Milestone", text: "5,000+ children received education, nutrition, and care.", icon: FaTrophy },
  { year: "2026", title: "Digital Dreams", text: "Playful technology opened new doors for curious minds.", icon: FaLaptopCode },
];

/* ------------------------------------------------------------------ */
/*  Motion variants                                                    */
/* ------------------------------------------------------------------ */

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* ------------------------------------------------------------------ */
/*  Decorative primitives — waves, blobs, floating shapes, doodles     */
/* ------------------------------------------------------------------ */

/** A wave that sits at the bottom edge of a section, painted in the
 *  color of whatever comes next, so sections melt into each other
 *  instead of a hard line. */
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

/** Soft organic blob, used as ambient background color instead of a
 *  flat gradient wash. */
function Blob({ className, color, opacity = 0.16 }: { className: string; color: string; opacity?: number }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity }}
    >
      <path
        fill={color}
        d="M45.3,-59.4C58.5,-49.9,68.6,-34.6,72.7,-17.8C76.8,-1,74.9,17.3,66.4,31.9C57.9,46.5,42.8,57.4,26.2,64.6C9.6,71.8,-8.5,75.3,-24.9,70.6C-41.3,65.9,-56,53,-64.5,37.2C-73,21.4,-75.3,2.7,-71.2,-14.2C-67.1,-31.1,-56.6,-46.2,-42.6,-55.6C-28.6,-65,-14.3,-68.7,1.6,-71.1C17.5,-73.5,35,-68.9,45.3,-59.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/** Gently bobbing square or circle, for playful geometric confetti
 *  around section headers. */
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

/* ------------------------------------------------------------------ */
/*  Sticky, page-level donate bar                                      */
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
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1800&q=85"
          alt="Children smiling together"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Lighter, more layered wash instead of a flat orange sheet */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#3B1F12]/75 via-[#7C2D12]/45 to-[#3B1F12]/60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(253,186,36,0.28),transparent_42%),radial-gradient(circle_at_14%_82%,rgba(45,212,191,0.14),transparent_38%)]" />

      {/* Ambient geometry */}
      <FloatingShape className="right-[6%] top-[26%] h-6 w-6 hidden lg:block" shape="square" color="bg-[#FDBA24]/70" />
      <FloatingShape className="right-[22%] top-[62%] h-4 w-4 hidden md:block" shape="circle" color="bg-white/50" duration={5} />
      <FloatingShape className="left-[6%] bottom-[30%] h-5 w-5 hidden lg:block" shape="circle" color="bg-[#2DD4BF]/60" duration={7} />

      <Balloon className="right-[9%] top-[18%] hidden animate-float-y lg:block" color="bg-[#FB923C]" />
      <Balloon className="right-[18%] bottom-[18%] hidden animate-float-y-slow md:block" color="bg-[#FDBA24]" />
      <AnimatedDoodle type="star" className="left-[8%] top-[18%] h-11 w-11 text-[#FDBA24]" />
      <AnimatedDoodle type="balloon" className="left-[16%] bottom-[18%] hidden h-16 w-16 text-[#FB7185] sm:block" delay={0.2} />
      <AnimatedDoodle type="abc" className="right-[32%] top-[16%] hidden h-16 w-16 text-white/60 md:block" delay={0.1} />
      <AnimatedDoodle type="book" className="left-[32%] bottom-[12%] hidden h-12 w-12 text-white/40 md:block" delay={0.3} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
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
            About BrightPath
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Every Child Deserves
            <span className="block text-[#FDBA24]">a Chance to Dream</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl"
          >
            Building brighter futures through education, care, protection, and opportunity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/volunteer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#EA580C] shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:scale-105"
            >
              Join the story <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/donate"
              className="group inline-flex items-center gap-2 rounded-full bg-[#FDBA24] px-8 py-3.5 text-sm font-bold text-[#7C2D12] shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:scale-105"
            >
              <Heart className="h-4 w-4 fill-[#FB7185] text-[#FB7185]" />
              Donate now
            </Link>
          </motion.div>

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
                <span className="text-xl font-bold text-[#FDBA24]">5000+</span> children supported
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
        Scroll
        <span className="flex h-11 w-7 items-start justify-center rounded-full border border-white/70 p-1">
          <ArrowDown className="h-4 w-4 animate-float-y text-[#FDBA24]" />
        </span>
      </motion.div>

      <WaveDivider fill="#FFFFFF" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Story intro                                                        */
/* ------------------------------------------------------------------ */

function StoryIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#FFFEFB] px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(253,186,36,0.15),transparent_32%),radial-gradient(circle_at_88%_24%,rgba(45,212,191,0.12),transparent_28%),radial-gradient(circle_at_72%_82%,rgba(251,113,133,0.08),transparent_30%)]" />
      <Blob className="-left-24 top-4 h-72 w-72" color="#FDBA24" opacity={0.12} />
      <Blob className="-right-20 top-1/3 h-80 w-80" color="#2DD4BF" opacity={0.09} />
      <Blob className="left-[48%] bottom-0 h-56 w-56" color="#FB7185" opacity={0.055} />
      <FloatingShape className="left-[7%] top-[18%] h-5 w-5 hidden lg:block" shape="square" color="bg-[#2DD4BF]/40" />
      <FloatingShape className="right-[12%] bottom-[18%] h-6 w-6 hidden lg:block" shape="circle" color="bg-[#FDBA24]/60" duration={5} />
      <AnimatedDoodle type="cloud" className="right-[10%] top-[16%] hidden h-16 w-16 text-[#38BDF8]/25 md:block" />
      <AnimatedDoodle type="book" className="left-[7%] bottom-[12%] hidden h-16 w-16 text-[#F97316]/20 md:block" />
      <AnimatedDoodle type="star" className="right-[32%] bottom-[10%] hidden h-10 w-10 text-[#FDBA24]/45 md:block" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -left-6 top-8 h-36 w-36 rounded-[32px] bg-[#FDBA24]/35" />
          <div className="absolute -right-5 bottom-12 h-28 w-28 rounded-full bg-[#2DD4BF]/25 blur-xl" />
          <div className="absolute right-8 top-0 z-20 hidden rotate-6 rounded-[24px] border border-white bg-white/90 px-5 py-4 shadow-[0_18px_45px_rgba(124,45,18,0.12)] backdrop-blur md:block">
            <p className="text-3xl font-black text-[#F97316]" style={{ fontFamily: "var(--font-fredoka)" }}>2018</p>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7C2D12]/60">first classroom</p>
          </div>

          <div className="relative rounded-[38px] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(124,45,18,0.12)]">
            <div className="absolute -bottom-5 left-8 z-20 rounded-[24px] bg-[#FDBA24] px-5 py-4 text-[#7C2D12] shadow-[0_18px_42px_rgba(253,186,36,0.24)]">
              <p className="text-sm font-black uppercase tracking-[0.2em]">Now</p>
              <p className="mt-1 text-2xl font-black" style={{ fontFamily: "var(--font-fredoka)" }}>5,000+ smiles</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-[30px]">
                <Image
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1100&q=85"
                  alt="Teacher helping children learn"
                  width={900}
                  height={760}
                  className="aspect-[0.95] h-full w-full object-cover transition duration-700 hover:scale-105 sm:aspect-auto"
                />
              </div>
              <div className="grid gap-3">
                <div className="overflow-hidden rounded-[26px]">
                  <Image
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=85"
                    alt="Children studying in a classroom"
                    width={520}
                    height={360}
                    className="h-full min-h-[170px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="rounded-[26px] bg-gradient-to-br from-[#FFF7ED] to-[#FEFCE8] p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F97316] text-white shadow-lg">
                      <Heart className="h-5 w-5 fill-white" />
                    </span>
                    <div>
                      <p className="text-lg font-black text-[#7C2D12]" style={{ fontFamily: "var(--font-fredoka)" }}>Care first</p>
                      <p className="text-sm leading-6 text-[#9A3412]/75">Safe spaces, warm meals, joyful lessons.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 max-w-3xl lg:order-2"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-[#F97316] shadow-[0_14px_35px_rgba(124,45,18,0.08)]">
            <Quote className="h-4 w-4" />
            About Us
          </div>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            Our journey began with one simple belief.
          </h2>
          <div className="mt-6 rounded-[32px] border border-[#FED7AA] bg-white/80 p-6 shadow-[0_22px_60px_rgba(124,45,18,0.08)] backdrop-blur">
            <p className="text-2xl leading-10 text-[#9A3412]" style={{ fontFamily: "var(--font-caveat)" }}>
              Every child deserves love, education, and hope.
            </p>
          </div>
          <p className="mt-6 text-lg leading-9 text-[#7C2D12]/80">
            Today, we work with communities to create safe spaces where children can learn, grow, and dream without
            limits. Each classroom is filled with stories, meals, play, and patient support from people who believe in
            children first.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Love", "#FB7185"],
              ["Education", "#F97316"],
              ["Hope", "#2DD4BF"],
            ].map(([label, color]) => (
              <div key={label} className="rounded-[24px] border border-white bg-white p-4 shadow-[0_16px_38px_rgba(124,45,18,0.07)]">
                <span className="block h-2 w-10 rounded-full" style={{ backgroundColor: color }} />
                <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-[#7C2D12]">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-1 w-12 rounded-full bg-[#FDBA24]" />
            <span className="text-sm font-semibold text-[#7C2D12]/60">Since 2018</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Mission / Vision / Values — pinned scroll story                    */
/* ------------------------------------------------------------------ */

function PinnedScrollStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <section ref={containerRef} className="relative bg-[#3B2416]">
      {/* Sticky progress rail — a real, functioning scroll indicator */}
      <div className="pointer-events-none absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
        <div className="relative h-56 w-1.5 overflow-hidden rounded-full bg-white/15">
          <motion.div style={{ scaleY: scrollYProgress }} className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-[#FDBA24]" />
        </div>
      </div>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85"
          alt="Children in a classroom"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B1F12]/80 via-[#7C2D12]/50 to-[#3B1F12]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(253,186,36,0.18),transparent_38%),radial-gradient(circle_at_16%_76%,rgba(45,212,191,0.12),transparent_38%)]" />
        <AnimatedDoodle type="balloon" className="right-[10%] bottom-[14%] hidden h-14 w-14 text-white/25 lg:block" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#FDBA24]">Scroll story</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            As you scroll, the heart of BrightPath comes into focus.
          </h2>
        </div>
      </div>

      <div className="relative z-10 -mt-[100vh]">
        {storySteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.article
              key={step.title}
              className="flex min-h-screen items-center px-4 py-24 sm:px-6 lg:px-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className={`mx-auto flex w-full max-w-7xl ${index % 2 ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xl rounded-[30px] border border-white/60 bg-gradient-to-br ${step.bgColor} p-8 shadow-2xl backdrop-blur-md sm:p-10`}>
                  <div className="flex items-center gap-4">
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="rounded-full bg-[#FDBA24] px-4 py-2 text-sm font-black text-[#7C2D12]">
                      {step.label}
                    </span>
                  </div>
                  <h3 className="mt-6 text-3xl font-bold text-[#7C2D12] sm:text-4xl" style={{ fontFamily: "var(--font-fredoka)" }}>
                    {step.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-[#9A3412]">{step.text}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <WaveDivider fill="#FFFFFF" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Impact                                                             */
/* ------------------------------------------------------------------ */

function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statPositions = [
    "lg:translate-y-6",
    "lg:-translate-y-4",
    "lg:translate-y-10",
    "lg:-translate-y-8",
  ];

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
            Our impact
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            Small acts of care, counted in brighter futures.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#7C2D12]/70">
            Every number represents a life touched, a dream nurtured, and a future transformed.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-5 top-10 h-32 w-32 rounded-[32px] bg-[#FDBA24]/35" />
            <div className="absolute -right-5 bottom-10 h-28 w-28 rounded-full bg-[#2DD4BF]/25 blur-xl" />
            <div className="relative overflow-hidden rounded-[42px] border border-white bg-white p-3 shadow-[0_34px_90px_rgba(124,45,18,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85"
                alt="Children smiling during a BrightPath activity"
                width={1000}
                height={900}
                className="aspect-[1.05] w-full rounded-[34px] object-cover"
              />
              <div className="absolute inset-3 rounded-[34px] bg-gradient-to-t from-[#3B1F12]/68 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-[30px] border border-white/35 bg-white/18 p-6 text-white shadow-2xl backdrop-blur-md">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#FDBA24]">Real children, real change</p>
                <p className="mt-3 text-3xl font-bold leading-tight" style={{ fontFamily: "var(--font-fredoka)" }}>
                  From classrooms to communities, every promise becomes visible.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid gap-5 sm:grid-cols-2"
          >
            {impacts.map((item, index) => {
              const Icon = item.icon;
              const accents = ["#FB7185", "#FDBA24", "#2DD4BF", "#38BDF8"];

              return (
              <motion.div
                key={item.label}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.025 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className={`group relative overflow-hidden rounded-[32px] border border-white bg-white p-6 shadow-[0_22px_60px_rgba(124,45,18,0.09)] ring-1 ring-[#FED7AA]/60 ${statPositions[index]}`}
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10" style={{ backgroundColor: accents[index] }} />
                <div className="absolute bottom-5 right-5 h-10 w-10 rotate-12 rounded-xl bg-[#FFF7ED]" />
                <div className="relative flex items-start justify-between gap-4">
                  <motion.div
                    className={`flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br ${item.color} text-white shadow-lg`}
                    animate={isInView ? { y: [0, -6, 0] } : { y: 0 }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.4, delay: index * 0.18 }}
                  >
                    <Icon className="h-7 w-7 transition-transform group-hover:scale-110" />
                  </motion.div>
                  <span className="rounded-full bg-[#FFF7ED] px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-[#F97316]">
                    Impact
                  </span>
                </div>
                <div className="relative mt-6 [&_*]:!bg-transparent [&_*]:!p-0 [&_*]:!text-left [&_*]:!shadow-none [&_p:first-child]:!text-5xl [&_p:first-child]:!font-black [&_p:first-child]:!leading-none [&_p:first-child]:!text-[#3B1F12] [&_p:last-child]:!mt-3 [&_p:last-child]:!text-sm [&_p:last-child]:!font-black [&_p:last-child]:!uppercase [&_p:last-child]:!tracking-[0.2em] [&_p:last-child]:!text-[#9A3412]">
                  <Counter value={item.value} label={item.label} />
                </div>
                <div className="relative mt-6 flex items-center gap-2">
                  <span className="h-2 w-12 rounded-full" style={{ backgroundColor: accents[index] }} />
                  <span className="h-2 w-2 rounded-full bg-[#FDBA24]" />
                  <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
                </div>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Team                                                                */
/* ------------------------------------------------------------------ */

// function TeamSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section ref={ref} className="relative overflow-hidden bg-[#FFF7ED] px-4 py-28 sm:px-6 lg:px-8">
//       <Blob className="-right-24 -top-10 h-72 w-72" color="#FDBA24" opacity={0.1} />
//       <AnimatedDoodle type="abc" className="left-[6%] bottom-[8%] hidden h-14 w-14 text-[#F97316]/20 md:block" />
//       <FloatingShape className="right-[8%] top-[16%] h-5 w-5 hidden lg:block" shape="square" color="bg-[#7C2D12]/10" />

//       <div className="relative mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl"
//         >
//           <p className="text-sm font-black uppercase tracking-[0.3em] text-[#F97316]">Meet our team</p>
//           <h2 className="mt-4 text-4xl font-bold text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
//             The people cheering children forward.
//           </h2>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={containerVariants}
//           className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
//         >
//           {team.map((person) => {
//             const RoleIcon = person.icon;

//             return (
//               <motion.article
//                 key={person.role}
//                 variants={fadeInUp}
//                 transition={{ duration: 0.6, delay: person.delay }}
//                 className="group rounded-[30px] border border-[#FED7AA] bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-3 hover:shadow-2xl"
//               >
//                 <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-[#FDBA24] shadow-lg">
//                   <Image
//                     src={person.image}
//                     alt={person.name}
//                     width={260}
//                     height={260}
//                     className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#7C2D12]/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
//                 </div>
//                 <div className="mx-auto -mt-6 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#FDBA24] text-[#7C2D12] shadow-md">
//                   <RoleIcon className="h-4 w-4" />
//                 </div>
//                 <p className="mt-3 text-sm font-black uppercase tracking-[0.22em] text-[#F97316]">{person.role}</p>
//                 <h3 className="mt-2 text-xl font-bold text-[#7C2D12]" style={{ fontFamily: "var(--font-fredoka)" }}>
//                   {person.name}
//                 </h3>
//               </motion.article>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/*  Timeline                                                            */
/* ------------------------------------------------------------------ */

function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const cardThemes = [
    {
      bg: "from-[#FFF7ED] to-white",
      accent: "bg-[#FB923C]",
      icon: "from-[#FB923C] to-[#F97316]",
      ring: "shadow-[0_0_0_8px_rgba(251,146,60,0.16)]",
    },
    {
      bg: "from-[#ECFEFF] to-white",
      accent: "bg-[#38BDF8]",
      icon: "from-[#38BDF8] to-[#0EA5E9]",
      ring: "shadow-[0_0_0_8px_rgba(56,189,248,0.14)]",
    },
    {
      bg: "from-[#F0FDF4] to-white",
      accent: "bg-[#2DD4BF]",
      icon: "from-[#2DD4BF] to-[#14B8A6]",
      ring: "shadow-[0_0_0_8px_rgba(45,212,191,0.14)]",
    },
    {
      bg: "from-[#FEFCE8] to-white",
      accent: "bg-[#FDBA24]",
      icon: "from-[#FDBA24] to-[#F97316]",
      ring: "shadow-[0_0_0_8px_rgba(253,186,36,0.18)]",
    },
    {
      bg: "from-[#FFF1F2] to-white",
      accent: "bg-[#FB7185]",
      icon: "from-[#FB7185] to-[#FB923C]",
      ring: "shadow-[0_0_0_8px_rgba(251,113,133,0.12)]",
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#FFFEFB] px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(253,186,36,0.16),transparent_28%),radial-gradient(circle_at_76%_88%,rgba(45,212,191,0.12),transparent_30%)]" />
      <Blob className="-left-20 top-8 h-72 w-72" color="#2DD4BF" opacity={0.09} />
      <Blob className="-right-24 bottom-0 h-80 w-80" color="#FDBA24" opacity={0.11} />
      <Blob className="left-[44%] top-[44%] h-52 w-52" color="#FB7185" opacity={0.055} />
      <AnimatedDoodle type="cloud" className="left-[7%] top-[12%] hidden h-16 w-16 text-[#38BDF8]/25 md:block" />
      <AnimatedDoodle type="star" className="right-[8%] top-[10%] hidden h-12 w-12 text-[#FDBA24]/40 md:block" />
      <AnimatedDoodle type="pencil" className="left-[6%] bottom-[8%] hidden h-14 w-14 -rotate-12 text-[#F97316]/25 md:block" />
      <AnimatedDoodle type="spark" className="right-[12%] bottom-[16%] hidden h-12 w-12 text-[#FB7185]/20 lg:block" />
      <motion.div
        aria-hidden
        className="absolute right-[18%] top-[26%] hidden h-12 w-12 rotate-45 rounded-[10px] bg-[#FDBA24]/45 shadow-[0_16px_30px_rgba(253,186,36,0.16)] md:block"
        animate={{ y: [0, -16, 0], rotate: [45, 55, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="absolute left-1/2 top-full h-14 w-px -translate-x-1/2 bg-[#F97316]/35" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-[#F97316] shadow-[0_14px_35px_rgba(124,45,18,0.08)]">
            <Sparkles className="h-4 w-4 text-[#FDBA24]" />
            Roadmap
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            Our storybook path of bright little milestones.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#9A3412]/75">
            A playful journey from one small room to a growing movement for children.
          </p>
        </motion.div>

        <div className="relative mt-16 min-h-[980px] md:min-h-[1120px] lg:min-h-[1040px]">
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 1200 1040"
            preserveAspectRatio="none"
          >
            <path
              d="M130 88 C 420 48 775 148 1030 284 C 1140 342 1125 475 985 528 C 760 613 470 500 245 604 C 88 676 116 832 318 884 C 555 945 785 858 1054 946"
              fill="none"
              stroke="#FED7AA"
              strokeWidth="34"
              strokeLinecap="round"
            />
            <path
              d="M130 88 C 420 48 775 148 1030 284 C 1140 342 1125 475 985 528 C 760 613 470 500 245 604 C 88 676 116 832 318 884 C 555 945 785 858 1054 946"
              fill="none"
              stroke="#F97316"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="16 18"
            />
            <path
              d="M130 88 C 420 48 775 148 1030 284 C 1140 342 1125 475 985 528 C 760 613 470 500 245 604 C 88 676 116 832 318 884 C 555 945 785 858 1054 946"
              fill="none"
              stroke="#FDBA24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="2 28"
            />
            {[
              [130, 88],
              [1030, 284],
              [985, 528],
              [245, 604],
              [1054, 946],
            ].map(([cx, cy]) => (
              <g key={`${cx}-${cy}`}>
                <circle cx={cx} cy={cy} r="22" fill="#FFFFFF" stroke="#FDBA24" strokeWidth="7" />
                <circle cx={cx} cy={cy} r="8" fill="#F97316" />
              </g>
            ))}
            {[
              [300, 128],
              [868, 204],
              [1070, 430],
              [575, 578],
              [178, 746],
              [720, 900],
            ].map(([x, y]) => (
              <path key={`${x}-${y}`} d={`M${x} ${y - 12} L${x + 4} ${y - 3} L${x + 14} ${y} L${x + 4} ${y + 4} L${x} ${y + 14} L${x - 4} ${y + 4} L${x - 14} ${y} L${x - 4} ${y - 3}Z`} fill="#FDBA24" opacity="0.75" />
            ))}
          </svg>

          <svg
            aria-hidden
            className="pointer-events-none absolute left-4 top-0 h-full w-12 md:hidden"
            viewBox="0 0 48 920"
            preserveAspectRatio="none"
          >
            <path
              d="M24 20 C 8 112 42 170 24 260 C 8 352 42 420 24 520 C 8 650 42 742 24 900"
              fill="none"
              stroke="#FED7AA"
              strokeWidth="24"
              strokeLinecap="round"
            />
            <path
              d="M24 20 C 8 112 42 170 24 260 C 8 352 42 420 24 520 C 8 650 42 742 24 900"
              fill="none"
              stroke="#F97316"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="10 14"
            />
          </svg>

          <div className="relative z-10 space-y-8 md:space-y-0">
            {timeline.map((item, index) => {
              const YearIcon = item.icon;
              const theme = cardThemes[index % cardThemes.length];
              const desktopPositions = [
                "md:absolute md:left-[4%] md:top-[0px]",
                "md:absolute md:right-[3%] md:top-[160px]",
                "md:absolute md:left-[50%] md:-translate-x-1/2 md:top-[390px]",
                "md:absolute md:left-[4%] md:top-[615px]",
                "md:absolute md:right-[4%] md:top-[810px]",
              ];
              const markerPositions = [
                "md:left-[9.5%] md:top-[70px]",
                "md:right-[9%] md:top-[235px]",
                "md:left-1/2 md:top-[462px]",
                "md:left-[11%] md:top-[690px]",
                "md:right-[8%] md:top-[882px]",
              ];
              const fromX = index % 2 ? 72 : -72;

              return (
                <motion.div
                  key={item.year}
                  className={`relative min-h-[208px] pl-16 md:min-h-0 md:pl-0 ${desktopPositions[index]}`}
                  initial={{ opacity: 0, x: fromX, y: 24 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: fromX, y: 24 }}
                  transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
                >
                  <motion.div
                    aria-hidden
                    className={`absolute left-1 top-9 z-20 flex h-11 w-11 items-center justify-center rounded-full border-[6px] border-white bg-gradient-to-br ${theme.icon} text-white shadow-xl ${theme.ring} md:fixed md:hidden`}
                  >
                    <YearIcon className="h-4 w-4" />
                  </motion.div>
                  <motion.article
                    whileHover={{ y: -8, scale: 1.025 }}
                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                    className={`group relative w-full overflow-hidden rounded-[32px] border border-white bg-gradient-to-br ${theme.bg} p-7 shadow-[0_24px_70px_rgba(124,45,18,0.10)] ring-1 ring-[#FED7AA]/60 backdrop-blur md:w-[390px] lg:w-[430px]`}
                  >
                    <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${theme.accent} opacity-10`} />
                    <div className="absolute bottom-5 right-6 h-10 w-10 rotate-12 rounded-xl bg-white/70" />
                    <div className="flex items-start justify-between gap-5">
                      <motion.div
                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br ${theme.icon} text-white shadow-lg`}
                        animate={isInView ? { y: [0, -5, 0] } : { y: 0 }}
                        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.4, delay: index * 0.18 }}
                      >
                        <YearIcon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                      </motion.div>
                      <div className="rounded-full border border-[#FED7AA] bg-white px-4 py-2 text-sm font-black text-[#F97316] shadow-sm">
                        {item.year}
                      </div>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-[#3B1F12]" style={{ fontFamily: "var(--font-fredoka)" }}>
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[#7C2D12]/78">{item.text}</p>
                    <div className="mt-6 flex items-center gap-2">
                      <span className={`h-2 w-10 rounded-full ${theme.accent}`} />
                      <span className="h-2 w-2 rounded-full bg-[#FDBA24]" />
                      <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
                    </div>
                  </motion.article>
                  <motion.div
                    aria-hidden
                    className={`absolute z-20 hidden h-14 w-14 items-center justify-center rounded-full border-[7px] border-white bg-gradient-to-br ${theme.icon} text-white shadow-2xl ${theme.ring} md:flex ${markerPositions[index]}`}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: index * 0.12 + 0.25 }}
                  >
                    <YearIcon className="h-5 w-5" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Final CTA                                                          */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative isolate overflow-hidden px-4 py-28 text-white sm:px-6 lg:px-8">
      <Image
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=85"
        alt="Children learning and smiling"
        fill
        className="absolute inset-0 -z-20 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#3B1F12]/80 via-[#7C2D12]/50 to-[#3B1F12]/78" />
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
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#FDBA24]">Together</p>
          <h2 className="mt-5 text-5xl font-bold leading-tight sm:text-6xl">
            We Can Build <span className="text-[#FDBA24]">A Better Tomorrow</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Your support can turn a classroom into a place of safety, meals, stories, and future dreams.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/volunteer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#EA580C] shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:scale-105"
            >
              Become a Volunteer <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/donate"
              className="group inline-flex items-center gap-2 rounded-full bg-[#FDBA24] px-8 py-3.5 text-sm font-bold text-[#7C2D12] shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:scale-105"
            >
              <Heart className="h-4 w-4 fill-[#FB7185] text-[#FB7185]" />
              Donate Now
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

function Balloon({ className, color }: { className: string; color: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      <div className={`h-16 w-12 rounded-[999px_999px_820px_820px] ${color} shadow-[0_18px_35px_rgba(124,45,18,0.12)]`} />
      <div className="mx-auto h-3 w-3 -translate-y-1 rotate-45 bg-[#FDBA24]" />
      <div className="mx-auto h-20 w-px bg-[#FDBA24]" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StoryIntro />
      <PinnedScrollStory />
      <ImpactSection />
      {/* <TeamSection /> */}
      <TimelineSection />
      <FinalCTA />
      <StickyDonateBar />
    </>
  );
}
