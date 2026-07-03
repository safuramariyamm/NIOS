"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
  Sparkles,
  ChevronRight,
  MessageCircle,
  Users,
  HandHeart,
  Star,
  Quote,
  Send,
  CheckCircle,
  Calendar,
  Globe,
  Coffee,
  Smile,
} from "lucide-react";
import { AnimatedDoodle } from "@/components/AnimatedDoodle";

export const metadata: Metadata = {
  title: "Contact | BrightPath Learning Center",
  description: "Get in touch with BrightPath Learning Center for questions about donating, volunteering, or our programs.",
};

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const contactMethods = [
  {
    title: "Email Us",
    description: "We respond within 24 hours",
    icon: Mail,
    value: "hello@brightpath.org",
    link: "mailto:hello@brightpath.org",
    color: "from-[#38BDF8] to-[#0EA5E9]",
    bg: "from-[#ECFEFF] to-white",
  },
  {
    title: "Call Us",
    description: "Mon-Fri, 9am - 6pm",
    icon: Phone,
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
    color: "from-[#FDBA24] to-[#F97316]",
    bg: "from-[#FEFCE8] to-white",
  },
  {
    title: "Visit Us",
    description: "Come say hello!",
    icon: MapPin,
    value: "123 BrightPath Lane, Hope City",
    link: "#",
    color: "from-[#FB7185] to-[#FB923C]",
    bg: "from-[#FFF1F2] to-white",
  },
  {
    title: "Office Hours",
    description: "We're here for you",
    icon: Clock,
    value: "Mon-Fri: 9AM - 6PM",
    link: "#",
    color: "from-[#2DD4BF] to-[#14B8A6]",
    bg: "from-[#F0FDFA] to-white",
  },
];

const faqs = [
  {
    question: "How can I donate to BrightPath?",
    answer: "You can donate online through our secure donation page, or contact us directly for other giving options like monthly giving, corporate matching, or planned giving.",
  },
  {
    question: "How do I become a volunteer?",
    answer: "Visit our Volunteers page to see current opportunities and fill out our volunteer application form. We'll contact you within 48 hours to discuss your interests and availability.",
  },
  {
    question: "What programs do you offer?",
    answer: "We offer four main programs: Education (tutoring and learning support), Health & Nutrition (meals and wellness), Child Protection (safe spaces and counseling), and Creative Life Skills (art, music, and confidence-building).",
  },
  {
    question: "How can my school or organization partner with you?",
    answer: "We'd love to collaborate! Please reach out through our contact form or email us directly at partnerships@brightpath.org to discuss potential partnerships.",
  },
  {
    question: "Where does the funding go?",
    answer: "Over 85% of donations go directly to our programs and services. We're committed to transparency and share annual reports with our donors and community.",
  },
  {
    question: "Can I visit your center?",
    answer: "Yes! We welcome visitors during our office hours. Please schedule a visit in advance so we can ensure someone is available to show you around.",
  },
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

function ContactHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85"
          alt="A teacher warmly guiding a student through a lesson"
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
            Get In Touch
          </motion.div>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            We'd love to
            <span className="block text-[#FDBA24]">hear from you.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Questions about donating, volunteering, or partnering with us? Send a message and our team will get back to you within a day.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[#FDBA24] px-8 py-3.5 text-sm font-bold text-[#7C2D12] shadow-lg transition-all hover:-translate-y-1 hover:scale-105">
              Send a Message <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="#faq" className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#EA580C] shadow-lg transition-all hover:-translate-y-1 hover:scale-105">
              <MessageCircle className="h-4 w-4" />
              View FAQs
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
                <span className="text-xl font-bold text-[#FDBA24]">24h</span> average response time
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
        Connect
        <span className="flex h-11 w-7 items-start justify-center rounded-full border border-white/70 p-1">
          <ArrowDown className="h-4 w-4 animate-float-y text-[#FDBA24]" />
        </span>
      </motion.div>

      <WaveDivider fill="#FFFFFF" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact Methods Section                                            */
/* ------------------------------------------------------------------ */

function ContactMethods() {
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
      <AnimatedDoodle type="star" className="left-[7%] bottom-[12%] hidden h-12 w-12 text-[#FDBA24]/45 md:block" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-[#F97316] shadow-[0_14px_35px_rgba(124,45,18,0.08)]">
            <Sparkles className="h-4 w-4 text-[#FDBA24]" />
            Connect With Us
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            We're here to help. 💬
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#7C2D12]/70">
            Choose the best way to reach us — we'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.a
                key={method.title}
                href={method.link}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.025 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className={`group relative overflow-hidden rounded-[32px] border border-white bg-gradient-to-br ${method.bg} p-6 shadow-[0_22px_60px_rgba(124,45,18,0.09)] ring-1 ring-[#FED7AA]/60 transition-all hover:shadow-2xl`}
              >
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-10 bg-gradient-to-br ${method.color}`} />
                <div className="relative">
                  <motion.div
                    animate={isInView ? { y: [0, -6, 0] } : { y: 0 }}
                    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2.4, delay: index * 0.15 }}
                    className={`flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br ${method.color} text-white shadow-lg`}
                  >
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                  <h3 className="mt-4 text-xl font-bold text-[#3B1F12]" style={{ fontFamily: "var(--font-fredoka)" }}>
                    {method.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#7C2D12]/60">{method.description}</p>
                  <p className="mt-3 font-semibold text-[#7C2D12]">{method.value}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className={`h-2 w-12 rounded-full bg-gradient-to-r ${method.color}`} />
                    <span className="h-2 w-2 rounded-full bg-[#FDBA24]" />
                    <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact Form Section                                              */
/* ------------------------------------------------------------------ */

function ContactFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate sending
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden bg-[#FFF7ED] px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(253,186,36,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.08),transparent_40%)]" />
      <Blob className="-right-24 top-10 h-96 w-96" color="#FDBA24" opacity={0.12} />
      <Blob className="-left-24 bottom-0 h-80 w-80" color="#2DD4BF" opacity={0.09} />
      <AnimatedDoodle type="cloud" className="left-[7%] top-[12%] hidden h-16 w-16 text-[#38BDF8]/25 md:block" />
      <AnimatedDoodle type="book" className="right-[8%] bottom-[15%] hidden h-14 w-14 text-[#F97316]/25 md:block" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-[#F97316] shadow-[0_14px_35px_rgba(124,45,18,0.08)]">
            <MessageCircle className="h-4 w-4" />
            Send a Message
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            Let's start a conversation. ✨
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#7C2D12]/70">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 rounded-[32px] border border-[#FED7AA] bg-white p-8 shadow-[0_22px_60px_rgba(124,45,18,0.09)] ring-1 ring-[#FED7AA]/60"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-black uppercase tracking-[0.18em] text-[#7C2D12]">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  className="mt-2 w-full rounded-[24px] border border-[#FED7AA] bg-[#FFF7ED] px-4 py-3 text-[#7C2D12] placeholder-[#7C2D12]/40 focus:border-[#FDBA24] focus:outline-none focus:ring-2 focus:ring-[#FDBA24]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-black uppercase tracking-[0.18em] text-[#7C2D12]">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-2 w-full rounded-[24px] border border-[#FED7AA] bg-[#FFF7ED] px-4 py-3 text-[#7C2D12] placeholder-[#7C2D12]/40 focus:border-[#FDBA24] focus:outline-none focus:ring-2 focus:ring-[#FDBA24]/20"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-black uppercase tracking-[0.18em] text-[#7C2D12]">Subject</label>
              <select className="mt-2 w-full rounded-[24px] border border-[#FED7AA] bg-[#FFF7ED] px-4 py-3 text-[#7C2D12] focus:border-[#FDBA24] focus:outline-none focus:ring-2 focus:ring-[#FDBA24]/20">
                <option value="">Select a subject</option>
                <option value="donation">Donation Inquiry</option>
                <option value="volunteer">Volunteer Opportunity</option>
                <option value="program">Program Information</option>
                <option value="partnership">Partnership Request</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-black uppercase tracking-[0.18em] text-[#7C2D12]">Message</label>
              <textarea
                placeholder="Tell us how we can help..."
                rows={5}
                required
                className="mt-2 w-full rounded-[24px] border border-[#FED7AA] bg-[#FFF7ED] px-4 py-3 text-[#7C2D12] placeholder-[#7C2D12]/40 focus:border-[#FDBA24] focus:outline-none focus:ring-2 focus:ring-[#FDBA24]/20"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={formStatus !== "idle"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FDBA24] to-[#F97316] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {formStatus === "idle" && (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
              {formStatus === "sending" && (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              )}
              {formStatus === "sent" && (
                <>
                  <CheckCircle className="h-5 w-5" />
                  Message Sent!
                </>
              )}
            </motion.button>
            {formStatus === "sent" && (
              <p className="text-center text-sm font-semibold text-emerald-600 animate-in fade-in">
                ✓ Thank you! We'll respond within 24 hours.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Section                                                       */
/* ------------------------------------------------------------------ */

function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="faq" className="relative overflow-hidden bg-white px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(253,186,36,0.08),transparent_30%),radial-gradient(circle_at_86%_14%,rgba(56,189,248,0.06),transparent_28%)]" />
      <Blob className="-right-24 top-10 h-96 w-96" color="#FDBA24" opacity={0.08} />
      <Blob className="-left-24 bottom-0 h-80 w-80" color="#2DD4BF" opacity={0.06} />
      <AnimatedDoodle type="star" className="left-[7%] top-[12%] hidden h-12 w-12 text-[#FDBA24]/30 md:block" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF7ED] px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-[#F97316]">
            <Quote className="h-4 w-4" />
            FAQs
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            Frequently Asked Questions ❓
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#7C2D12]/70">
            Find quick answers to the most common questions about BrightPath.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-12 space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                variants={scaleIn}
                className="rounded-[24px] border border-[#FED7AA] bg-[#FFFEFB] overflow-hidden shadow-[0_12px_40px_rgba(124,45,18,0.06)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#FFF7ED]"
                >
                  <span className="text-lg font-bold text-[#7C2D12]" style={{ fontFamily: "var(--font-fredoka)" }}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 shrink-0 text-[#F97316]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-[#7C2D12]/75 leading-relaxed border-t border-[#FED7AA]">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Map / Location Section                                            */
/* ------------------------------------------------------------------ */

function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#FFF7ED] px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(253,186,36,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.08),transparent_40%)]" />
      <Blob className="-right-24 top-10 h-96 w-96" color="#FDBA24" opacity={0.12} />
      <AnimatedDoodle type="cloud" className="left-[7%] top-[12%] hidden h-16 w-16 text-[#38BDF8]/25 md:block" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-[#F97316] shadow-[0_14px_35px_rgba(124,45,18,0.08)]">
            <MapPin className="h-4 w-4" />
            Find Us
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            Come visit us. 🌍
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#7C2D12]/70">
            We'd love to welcome you to our center and show you our work firsthand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-[32px] border border-[#FED7AA] shadow-[0_22px_60px_rgba(124,45,18,0.09)]"
        >
          <div className="relative h-[400px] w-full bg-[#FFF7ED]">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"
              alt="BrightPath Center location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F12]/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[24px] bg-white/90 p-6 backdrop-blur shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FDBA24] text-[#7C2D12] shadow-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-[#7C2D12]" style={{ fontFamily: "var(--font-fredoka)" }}>
                    123 BrightPath Lane
                  </p>
                  <p className="text-sm text-[#7C2D12]/60">Hope City, HC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Newsletter Section                                                */
/* ------------------------------------------------------------------ */

function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(253,186,36,0.08),transparent_30%),radial-gradient(circle_at_86%_14%,rgba(56,189,248,0.06),transparent_28%)]" />
      <Blob className="-right-24 top-10 h-96 w-96" color="#FDBA24" opacity={0.08} />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7ED] px-5 py-2 text-sm font-black uppercase tracking-[0.28em] text-[#F97316]">
            <Sparkles className="h-4 w-4 text-[#FDBA24]" />
            Stay Connected
          </div>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#7C2D12] sm:text-5xl" style={{ fontFamily: "var(--font-fredoka)" }}>
            Join our community. 💌
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#7C2D12]/70">
            Get updates on our programs, events, and impact stories delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="mt-8 flex max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 rounded-full border border-[#FED7AA] bg-[#FFF7ED] px-6 py-3 text-[#7C2D12] placeholder-[#7C2D12]/40 focus:border-[#FDBA24] focus:outline-none focus:ring-2 focus:ring-[#FDBA24]/20"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-[#FDBA24] px-6 py-3 font-bold text-[#7C2D12] shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {subscribed ? "✓ Subscribed!" : "Subscribe"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Final CTA                                                         */
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
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#FDBA24]">Together</p>
          <h2 className="mt-5 text-5xl font-bold leading-tight sm:text-6xl">
            Every conversation <span className="text-[#FDBA24]">starts a connection.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Whether you're donating, volunteering, or just curious, we'd love to hear from you. Reach out today.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[#FDBA24] px-8 py-3.5 text-sm font-bold text-[#7C2D12] shadow-lg transition-all hover:-translate-y-1 hover:scale-105">
              <MessageCircle className="h-5 w-5" />
              Send a Message
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/donate" className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#EA580C] shadow-lg transition-all hover:-translate-y-1 hover:scale-105">
              <Heart className="h-4 w-4 fill-[#FB7185] text-[#FB7185]" />
              Support Our Work
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
                <span className="text-xl font-bold text-[#FDBA24]">24h</span> average response time
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sticky Donate Bar                                                 */
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

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <ContactFormSection />
      <FAQSection />
      <LocationSection />
      <NewsletterSection />
      <FinalCTA />
      <StickyDonateBar />
    </>
  );
}