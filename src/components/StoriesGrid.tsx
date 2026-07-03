"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { StoryCard } from "@/components/StoryCard";
import { stories } from "@/data/siteContent";

export function StoriesGrid() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-x-0 bottom-0 h-56 opacity-30" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="All stories" title="Every child's journey looks different — and every one matters" description="Browse the full collection of stories from our classrooms, centers, and communities." align="center" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: (index % 2) * 0.08 }}
            >
              <StoryCard {...story} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
