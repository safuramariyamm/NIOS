"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type FullBleedRevealProps = {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  height?: string;
  tone?: "dark" | "light";
};

export function FullBleedReveal({
  image,
  alt,
  eyebrow,
  title,
  description,
  children,
  height = "min-h-[62vh]",
  tone = "dark",
}: FullBleedRevealProps) {
  const textColor = tone === "dark" ? "text-white" : "text-[#1E293B]";
  const eyebrowColor = tone === "dark" ? "text-[#FDE9D8]" : "text-[#9A3412]";
  const descColor = tone === "dark" ? "text-white/85" : "text-[#475569]";

  return (
    <section className={`relative isolate flex ${height} items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8`}>
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image src={image} alt={alt} fill className="object-cover" sizes="100vw" />
        {tone === "dark" ? (
          <div className="absolute inset-0 bg-gradient-to-t from-[#7C2D12]/85 via-[#9A3412]/45 to-[#9A3412]/15" />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,248,0.92)_0%,rgba(255,253,248,0.75)_45%,rgba(255,253,248,0.92)_100%)]" />
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className={`relative z-10 mx-auto max-w-3xl text-center ${textColor}`}
        style={{ fontFamily: "var(--font-fredoka)" }}
      >
        {eyebrow ? (
          <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.35em] ${eyebrowColor}`}>{eyebrow}</p>
        ) : null}
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
        {description ? <p className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${descColor}`}>{description}</p> : null}
        {children ? <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{children}</div> : null}
      </motion.div>
    </section>
  );
}