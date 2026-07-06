"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function parseStatValue(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseFloat(match[1]), suffix: match[2] };
}

function useCountUp(target: number, shouldStart: boolean, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const steps = 48;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = window.setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        window.clearInterval(timer);
        return;
      }
      setCount(start);
    }, stepTime);

    return () => window.clearInterval(timer);
  }, [shouldStart, target, duration]);

  return count;
}

/**
 * Compact count-up stat used inside the Hero (and anywhere else that needs
 * an inline animated number). Counts up once the element scrolls into view.
 */
export function HeroStat({
  value,
  label,
  delay = 0,
  className = "",
  valueClassName = "text-2xl font-bold text-[#1E293B] sm:text-3xl",
  labelClassName = "text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]",
}: {
  value: string;
  label: string;
  delay?: number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { number, suffix } = parseStatValue(value);
  const count = useCountUp(number, inView);
  const isDecimal = number % 1 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <p className={valueClassName}>
        {isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
        {suffix}
      </p>
      <p className={labelClassName}>{label}</p>
    </motion.div>
  );
}