"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";
import {
  ArrowDown,
  GraduationCap,
  HandHeart,
  Heart,
  School,
  Sparkles,
  Users,
  Quote,
  ChevronRight,
  Star,
  ArrowRight,
} from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";
import { Counter } from "@/components/Counter";
import {
  FaSeedling,
  FaHeart as FaHeartSolid,
  FaGlobeAmericas,
  FaTrophy,
  FaLaptopCode,
  FaStar,
  FaRocket,
  FaBookOpen,
  FaUtensils,
  FaLeaf,
  FaHandsHelping,
} from "react-icons/fa";

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

const aboutAvatars = [
  { initials: "EK", className: "bg-[#F97316] text-white" },
  { initials: "MT", className: "bg-[#F59E0B] text-white" },
  { initials: "RJ", className: "bg-[#FBBF24] text-[#7C2D12]" },
  { initials: "NV", className: "bg-white text-[#C2410C]" },
];

const heroImage = "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1800&q=85";

/* ------------------------------------------------------------------ */
/*  Motion variants                                                    */
/* ------------------------------------------------------------------ */

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* ------------------------------------------------------------------ */
/*  Decorative primitives — waves, blobs, floating shapes, doodles     */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Sticky donate bar                                                  */
/* ------------------------------------------------------------------ */

function StickyDonateBar() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.07, 0.96, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.07], [30, 0]);

  return (
    <motion.div style={{ opacity, y }} className="fixed bottom-6 right-5 z-50 hidden sm:block">
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
/*  Hero — Updated to match Programs page style                       */
/* ------------------------------------------------------------------ */

function AboutHero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

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
        <Image src={heroImage} alt="" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,248,0.92)_0%,rgba(255,253,248,0.8)_42%,rgba(255,253,248,0.6)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.8),transparent_28%),radial-gradient(circle_at_78%_22%,rgba(251,191,36,0.22),transparent_24%),linear-gradient(180deg,rgba(255,253,248,0.3)_0%,rgba(255,253,248,0.88)_100%)]" />
      </div>

      <AnimatedDoodle type="star" className="left-[7%] top-[18%] h-10 w-10 text-[#F59E0B]/45" offset={{ x: pointer.x * 6, y: pointer.y * 4 }} />
      <AnimatedDoodle type="book" className="left-[43%] top-[13%] hidden h-16 w-16 -rotate-12 text-[#F97316]/25 md:block" offset={{ x: pointer.x * 8, y: pointer.y * 5 }} delay={0.1} />
      <AnimatedDoodle type="cloud" className="right-[8%] top-[12%] h-14 w-14 text-[#FBBF24]/35" offset={{ x: pointer.x * 5, y: pointer.y * 3 }} delay={0.2} />
      <AnimatedDoodle type="pencil" className="bottom-[14%] left-[45%] hidden h-14 w-14 rotate-12 text-[#EA580C]/35 lg:block" offset={{ x: pointer.x * 7, y: pointer.y * 3 }} delay={0.25} />
      <AnimatedDoodle type="balloon" className="bottom-[9%] right-[10%] h-16 w-16 text-white/80" offset={{ x: pointer.x * 4, y: pointer.y * 2 }} delay={0.35} />

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[5] hidden h-full w-full md:block"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M860 150C900 210 940 260 920 320C895 395 800 430 760 500C715 578 700 660 660 720C610 795 480 820 400 800"
          stroke="#F97316"
          strokeWidth="2"
          strokeDasharray="7 8"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 pb-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-20 flex max-w-2xl flex-col justify-center"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm font-semibold text-[#9A3412] shadow-[0_14px_40px_rgba(249,115,22,0.12)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#F97316]" />
            About BrightPath
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[0.98] text-[#1E293B] sm:text-6xl lg:text-7xl xl:text-[5rem]">
            Every Child Deserves{" "}
            <span className="inline-block -rotate-1 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] bg-clip-text text-[1.12em] text-transparent" style={{ fontFamily: "var(--font-caveat)" }}>
              a Chance
            </span>{" "}
            to Dream
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#475569] sm:text-lg">
            Building brighter futures through education, care, protection, and opportunity.
          </p>

          <div className="mt-6 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#F97316] to-[#FBBF24] shadow-[0_8px_24px_rgba(249,115,22,0.28)]" />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/volunteer"
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#F59E0B] px-7 text-sm font-bold text-white shadow-[0_18px_45px_rgba(249,115,22,0.34)] transition duration-300 hover:shadow-[0_22px_55px_rgba(249,115,22,0.42)]"
              >
                <Heart className="h-4 w-4 fill-white text-white" />
                Join the Story
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/donate"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#F97316]/15 bg-white/80 px-7 text-sm font-bold text-[#9A3412] shadow-[0_14px_36px_rgba(249,115,22,0.11)] backdrop-blur-xl transition duration-300 hover:border-[#F59E0B]/50 hover:bg-white"
              >
                <Heart className="h-5 w-5 text-[#F97316]" />
                Donate Now
              </Link>
            </motion.div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {aboutAvatars.map((avatar) => (
                <div
                  key={avatar.initials}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFFDF8] text-[11px] font-bold shadow-sm ${avatar.className}`}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            {/* <div className="flex items-center gap-2">
              <div className="flex" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-sm font-semibold text-[#334155]">5,000+ children supported.</p>
            </div> */}
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
          <AnimatedDoodle type="pencil" className="bottom-[22%] left-[10%] h-16 w-16 -rotate-12 text-[#F97316]/55" offset={{ x: pointer.x * 8, y: pointer.y * 5 }} delay={0.24} />
          <AnimatedDoodle type="cloud" className="bottom-[26%] right-[3%] h-14 w-14 text-white/80" offset={{ x: pointer.x * 5, y: pointer.y * 3 }} delay={0.3} />
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="relative w-full max-w-[560px]"
          >
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[50%] bg-[conic-gradient(from_140deg,rgba(249,115,22,0.35),rgba(251,191,36,0.3),rgba(255,255,255,0),rgba(249,115,22,0.35))] opacity-70 blur-2xl"
            />
            {/* <div className="relative aspect-[1/1.05] w-full [mask-image:radial-gradient(ellipse_58%_58%_at_50%_42%,#000_60%,rgba(0,0,0,0.55)_78%,transparent_100%)]">
              <Image
                src={heroImage}
                alt="Children smiling together"
                fill
                priority
                className="object-cover object-[center_20%] drop-shadow-[0_30px_50px_rgba(154,52,18,0.18)]"
                sizes="(max-width: 1024px) 92vw, 560px"
              />
            </div> */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -3 }}
              className="absolute -left-2 bottom-8 z-20 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-[0_18px_40px_rgba(154,52,18,0.16)] backdrop-blur-xl sm:-left-6 sm:bottom-10"
            >
              {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F97316] to-[#FBBF24] text-white shadow-inner">
                <Heart className="h-5 w-5 fill-white" />
              </div> */}
              {/* <div>
                <p className="text-sm font-bold leading-none text-[#1E293B]">5,000+ children</p>
                <p className="mt-1 text-xs text-[#64748B]">supported across programs</p>
              </div> */}
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="absolute -right-3 top-6 z-20 rounded-2xl border border-white/70 bg-white/85 px-4 py-2.5 shadow-[0_18px_40px_rgba(154,52,18,0.14)] backdrop-blur-xl sm:-right-6"
            >
              <p className="flex items-center gap-1 text-sm font-bold text-[#9A3412]">
                <Sparkles className="h-4 w-4 text-[#F97316]" /> Since 2018
              </p>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-30 text-[#FFFDFB]">
        <svg className="block h-20 w-full sm:h-24 lg:h-28" viewBox="0 0 1440 140" fill="none" preserveAspectRatio="none">
          <path d="M0 66L60 60C120 54 240 42 360 52C480 62 600 94 720 96C840 98 960 72 1080 58C1200 44 1320 34 1380 30L1440 26V140H0V66Z" fill="currentColor" fillOpacity="0.5" />
          <path d="M0 92L60 84C160 78 320 66 480 76C640 86 800 118 960 110C1120 102 1280 54 1360 30L1440 6V140H0V92Z" fill="currentColor" />
          <g className="text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.55">
            <circle cx="140" cy="40" r="4" fill="currentColor" stroke="none" />
            <circle cx="1300" cy="34" r="4" fill="currentColor" stroke="none" />
            <path d="M690 24 700 34 690 44" />
            <path d="M980 46 L992 46 M986 40 L986 52" />
          </g>
          <g className="text-[#FBBF24]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6">
            <path d="M330 30l4 8 8 1-6 6 1 8-7-4-7 4 1-8-6-6 8-1z" fill="currentColor" stroke="none" />
            <path d="M1100 22l4 8 8 1-6 6 1 8-7-4-7 4 1-8-6-6 8-1z" fill="currentColor" stroke="none" />
          </g>
        </svg>
      </div>
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
/*  Pinned Scroll Story                                                */
/* ------------------------------------------------------------------ */

function PinnedScrollStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <section ref={containerRef} className="relative bg-[#3B2416]">
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

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-4 py-28 sm:px-6 lg:px-8">
      <div aria-hidden className="absolute left-10 top-10 h-28 w-28 rounded-full bg-[#FDBA24]/10" />
      <div aria-hidden className="absolute right-10 bottom-10 h-24 w-24 rotate-12 rounded-[22px] bg-[#2DD4BF]/8" />
      <Blob className="-left-20 bottom-0 h-80 w-80" color="#A78BFA" opacity={0.07} />
      <FloatingShape className="right-[10%] top-[10%] h-6 w-6 hidden lg:block" shape="circle" color="bg-[#FB7185]/40" duration={5} />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#F97316]">Our impact</p>
          <h2 className="mt-4 text-4xl font-bold text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            Tiny wins become big futures.
          </h2>
          <p className="mt-4 text-lg text-[#7C2D12]/70">
            Every number represents a life touched, a dream nurtured, and a future transformed.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impacts.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5 }}
                className={`group rounded-[30px] bg-gradient-to-br ${item.color} p-[2px] shadow-lg hover:shadow-2xl transition-shadow`}
              >
                <div className="rounded-[28px] bg-white p-6 text-center transition-colors">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="mt-3 [&_*]:!text-[#7C2D12] [&_p]:!text-[#7C2D12]/60 [&_span]:!font-bold">
                    <Counter value={item.value} label={item.label} />
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
/*  Timeline                                                           */
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
/*  Balloon                                                           */
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
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutClient() {
  return (
    <>
      <AboutHero />
      <StoryIntro />
      <PinnedScrollStory />
      <ImpactSection />
      <TimelineSection />
      <FinalCTA />
      <StickyDonateBar />
    </>
  );
}