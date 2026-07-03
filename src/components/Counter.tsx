"use client";

import { useEffect, useState } from "react";

export function Counter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const increment = value / 60;

    const timer = window.setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        window.clearInterval(timer);
        return;
      }
      setCount(Math.floor(start));
    }, 16);

    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <div className="rounded-[24px] border border-white/40 bg-white/20 p-6 text-center text-white backdrop-blur-lg">
      <p className="text-4xl font-semibold sm:text-5xl">{count.toLocaleString()}+</p>
      <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/80">{label}</p>
    </div>
  );
}
