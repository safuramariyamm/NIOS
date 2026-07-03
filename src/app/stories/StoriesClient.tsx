"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Heart,
  Quote,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";
import { stories, testimonials } from "@/data/siteContent";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

function WaveDivider({ fill }: { fill: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 leading-[0]">
      <svg viewBox="0 0 1440 110" className="h-[58px] w-full sm:h-[92px]" preserveAspectRatio="none">
        <path
          fill={fill}
          d="M0,40L80,48C160,56,320,72,480,66.7C640,61,800,35,960,37.3C1120,40,1280,72,1360,88L1440,104L1440,110L0,110Z"
        />
      </svg>
    </div>
  );
}

function Blob({ className, color, opacity = 0.12 }: { className: string; color: string; opacity?: number }) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" className={`pointer-events-none absolute ${className}`} style={{ opacity }}>
      <path
        fill={color}
        d="M43.8,-58.8C57.5,-50.3,69.8,-38.5,74.5,-23.9C79.2,-9.3,76.4,8,69.4,22.6C62.5,37.1,51.4,48.8,38,58.5C24.6,68.2,8.9,75.8,-6.4,74.7C-21.7,73.6,-36.6,63.8,-49.6,51.7C-62.6,39.5,-73.7,25,-75.1,9.5C-76.4,-6,-67.9,-22.6,-56.7,-35.3C-45.5,-48,-31.5,-56.7,-16.4,-62.8C-1.3,-68.9,15,-67.4,43.8,-58.8Z"
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

function StoriesHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1800&q=85"
          alt="Children reading together in a bright learning space"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#3B1F12]/78 via-[#7C2D12]/48 to-[#3B1F12]/68" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_20%,rgba(253,186,36,0.28),transparent_40%),radial-gradient(circle_at_14%_76%,rgba(45,212,191,0.16),transparent_38%)]" />

      <FloatingShape className="right-[8%] top-[24%] hidden h-6 w-6 lg:block" shape="square" color="bg-[#FDBA24]/70" />
      <FloatingShape className="left-[7%] bottom-[28%] hidden h-5 w-5 lg:block" color="bg-[#2DD4BF]/60" duration={7} />
      <AnimatedDoodle type="star" className="left-[9%] top-[18%] h-12 w-12 text-[#FDBA24]" />
      <AnimatedDoodle type="book" className="right-[18%] top-[18%] hidden h-14 w-14 text-white/55 md:block" delay={0.15} />
      <AnimatedDoodle type="balloon" className="right-[10%] bottom-[18%] hidden h-16 w-16 text-[#FB923C] sm:block" delay={0.25} />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto w-full max-w-7xl"
      >
        <div className="max-w-3xl" style={{ fontFamily: "var(--font-fredoka)" }}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/15 px-6 py-2.5 text-sm font-bold backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#FDBA24]" />
            Stories of Change
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Small Moments.
            <span className="block text-[#FDBA24]">Lifelong Courage.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Real stories from classrooms, community centers, meal circles, and the patient mentors who help children feel seen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#stories"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#EA580C] shadow-lg transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
            >
              Read the stories
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <Link
              href="/volunteer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#FDBA24] px-8 py-3.5 text-sm font-bold text-[#7C2D12] shadow-lg transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
            >
              <Heart className="h-4 w-4 fill-[#FB7185] text-[#FB7185]" />
              Join the story
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-white/85"
      >
        Scroll
        <span className="flex h-11 w-7 items-start justify-center rounded-full border border-white/70 p-1">
          <ArrowDown className="h-4 w-4 animate-float-y text-[#FDBA24]" />
        </span>
      </motion.div>
      <WaveDivider fill="#FFFEFB" />
    </section>
  );
}

function FeaturedStory() {
  const featured = stories[0];

  return (
    <section className="relative overflow-hidden bg-[#FFFEFB] px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(253,186,36,0.14),transparent_34%),radial-gradient(circle_at_88%_24%,rgba(45,212,191,0.11),transparent_28%)]" />
      <Blob className="-left-24 top-10 h-72 w-72" color="#FDBA24" opacity={0.11} />
      <Blob className="-right-24 bottom-0 h-80 w-80" color="#2DD4BF" opacity={0.08} />
      <AnimatedDoodle type="abc" className="right-[8%] top-[14%] hidden h-14 w-14 text-[#F97316]/25 md:block" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeInUp}>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.24em] text-[#F97316] shadow-[0_14px_35px_rgba(124,45,18,0.08)]">
            <Star className="h-4 w-4 fill-[#FDBA24] text-[#FDBA24]" />
            Featured Story
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            {featured.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#9A3412]/78">{featured.description}</p>
          <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-3">
            {[
              { value: "6", label: "stories" },
              { value: "4", label: "program paths" },
              { value: "1", label: "shared mission" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-[#FED7AA] bg-white/86 p-5 shadow-[0_18px_50px_rgba(124,45,18,0.08)]">
                <p className="text-3xl font-black text-[#F97316]" style={{ fontFamily: "var(--font-fredoka)" }}>
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-[#7C2D12]/55">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-6 top-8 h-36 w-36 rounded-[32px] bg-[#FDBA24]/35" />
          <div className="absolute -right-5 bottom-12 h-28 w-28 rounded-full bg-[#2DD4BF]/25 blur-xl" />
          <div className="relative rounded-[38px] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(124,45,18,0.12)]">
            <div className="overflow-hidden rounded-[30px]">
              <Image
                src={featured.image}
                alt={featured.title}
                width={1000}
                height={780}
                className="aspect-[1.05] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 left-8 rounded-[24px] bg-[#FDBA24] px-5 py-4 text-[#7C2D12] shadow-[0_18px_42px_rgba(253,186,36,0.24)]">
              <p className="text-sm font-black uppercase tracking-[0.2em]">Hope grows here</p>
              <p className="mt-1 text-2xl font-black" style={{ fontFamily: "var(--font-fredoka)" }}>
                {featured.category}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StoryCollection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="stories" ref={ref} className="relative overflow-hidden bg-[#FFF7ED] px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(253,186,36,0.16),transparent_28%),radial-gradient(circle_at_74%_86%,rgba(251,113,133,0.08),transparent_30%)]" />
      <Blob className="-right-24 top-10 h-80 w-80" color="#FDBA24" opacity={0.1} />
      <AnimatedDoodle type="cloud" className="left-[7%] top-[10%] hidden h-16 w-16 text-[#38BDF8]/25 md:block" />
      <AnimatedDoodle type="pencil" className="right-[8%] bottom-[8%] hidden h-14 w-14 -rotate-12 text-[#F97316]/25 md:block" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-[#F97316] shadow-[0_14px_35px_rgba(124,45,18,0.08)]">
            <BookOpen className="h-4 w-4 text-[#FDBA24]" />
            Story Library
          </p>
          <h2 className="mt-4 text-4xl font-bold text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            Every journey turns the page in its own way.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#9A3412]/75">
            Browse moments of learning, safety, nourishment, creativity, and confidence from across BrightPath.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {stories.map((story, index) => (
            <motion.article
              key={story.title}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`group relative overflow-hidden rounded-[32px] border border-white bg-white shadow-[0_24px_70px_rgba(124,45,18,0.10)] ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "h-80" : "h-64"}`}>
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F12]/72 via-[#3B1F12]/16 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#F97316] shadow-lg backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-[#FDBA24]" />
                  {story.category}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold leading-snug text-[#3B1F12]" style={{ fontFamily: "var(--font-fredoka)" }}>
                  {story.title}
                </h3>
                <p className="mt-3 leading-7 text-[#7C2D12]/75">{story.description}</p>
                <Link
                  href="/donate"
                  className="group/link mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFF7ED] px-5 py-2.5 text-sm font-bold text-[#EA580C] transition hover:bg-[#FED7AA]"
                >
                  Help write the next one
                  <ArrowRight className="h-4 w-4 transition group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CommunityQuote() {
  const quote = testimonials[0];

  return (
    <section className="relative isolate overflow-hidden px-4 py-28 text-white sm:px-6 lg:px-8">
      <Image
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=85"
        alt="Children learning together outdoors"
        fill
        className="absolute inset-0 -z-20 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#3B1F12]/82 via-[#7C2D12]/52 to-[#3B1F12]/78" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_32%_30%,rgba(253,186,36,0.18),transparent_44%),radial-gradient(circle_at_74%_64%,rgba(45,212,191,0.13),transparent_40%)]" />
      <AnimatedDoodle type="heart" className="left-[8%] bottom-[14%] hidden h-14 w-14 text-white/28 md:block" />
      <FloatingShape className="right-[10%] top-[20%] hidden h-6 w-6 lg:block" shape="square" color="bg-[#FDBA24]/45" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-4xl text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#FDBA24] text-[#7C2D12] shadow-[0_18px_42px_rgba(253,186,36,0.24)]">
          <Quote className="h-7 w-7" />
        </div>
        <p className="mt-8 text-3xl font-bold leading-tight sm:text-4xl" style={{ fontFamily: "var(--font-fredoka)" }}>
          "{quote.quote}"
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Image src={quote.image} alt={quote.author} width={56} height={56} className="h-14 w-14 rounded-full object-cover ring-4 ring-white/30" />
          <div className="text-left">
            <p className="font-bold">{quote.author}</p>
            <p className="text-sm text-white/75">{quote.role}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StoryPath() {
  const steps = [
    { icon: BookOpen, title: "Learn", text: "Books, tutoring, and patient teachers make the first brave step feel possible." },
    { icon: Heart, title: "Feel Safe", text: "Children return when the room feels protective, steady, and kind." },
    { icon: Users, title: "Belong", text: "Families, mentors, and classmates become the circle that keeps hope moving." },
    { icon: Star, title: "Dream", text: "Confidence turns into goals, leadership, and a future children can name." },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFFEFB] px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(253,186,36,0.16),transparent_28%)]" />
      <Blob className="-left-20 top-8 h-72 w-72" color="#2DD4BF" opacity={0.08} />
      <Blob className="-right-24 bottom-0 h-80 w-80" color="#FDBA24" opacity={0.1} />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
          className="max-w-3xl"
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#F97316]">What changes a story</p>
          <h2 className="mt-4 text-4xl font-bold text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            The pattern behind every brighter chapter.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="mt-12 grid gap-5 md:grid-cols-4"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colors = ["from-[#38BDF8] to-[#0EA5E9]", "from-[#FB7185] to-[#FB923C]", "from-[#2DD4BF] to-[#14B8A6]", "from-[#FDBA24] to-[#F97316]"];

            return (
              <motion.article
                key={step.title}
                variants={fadeInUp}
                className="relative overflow-hidden rounded-[28px] border border-[#FED7AA] bg-white p-7 shadow-[0_24px_70px_rgba(124,45,18,0.08)]"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br ${colors[index]} text-white shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.24em] text-[#F97316]">Step {index + 1}</p>
                <h3 className="mt-2 text-2xl font-bold text-[#3B1F12]" style={{ fontFamily: "var(--font-fredoka)" }}>
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-[#7C2D12]/72">{step.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#FFF7ED] px-4 py-24 sm:px-6 lg:px-8">
      <AnimatedDoodle type="rocket" className="right-[9%] top-[18%] hidden h-16 w-16 text-[#FB7185]/70 md:block" />
      <AnimatedDoodle type="rainbow" className="left-[8%] bottom-[14%] hidden h-20 w-24 text-[#2DD4BF]/50 md:block" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[#F97316]">Together</p>
        <h2 className="mt-4 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
          The next story can begin with one generous choice.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#9A3412]/75">
          Support education, safety, meals, and mentorship for children waiting for their next brave chapter.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/donate"
            className="group inline-flex items-center gap-2 rounded-full bg-[#FDBA24] px-8 py-3.5 text-sm font-bold text-[#7C2D12] shadow-lg transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
          >
            <Heart className="h-4 w-4 fill-[#7C2D12] text-[#7C2D12]" />
            Donate Now
          </Link>
          <Link
            href="/volunteer"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#EA580C] shadow-lg transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
          >
            Become a Volunteer
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function StoriesClient() {
  return (
    <>
      <StoriesHero />
      <FeaturedStory />
      <StoryCollection />
      <CommunityQuote />
      <StoryPath />
      <FinalCTA />
    </>
  );
}
