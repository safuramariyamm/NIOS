"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { StoryCard } from "@/components/StoryCard";
import { stories } from "@/data/siteContent";

export function StoriesSection() {
  return (
    <section id="stories" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Stories of change" title="When belief meets support, children begin to rise" description="Real stories from young learners whose lives are being reshaped through care, encouragement, and opportunity." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }} className="lg:col-span-2">
            <StoryCard {...stories[0]} featured />
          </motion.div>
          <div className="flex flex-col gap-6">
            {stories.slice(1).map((story, index) => (
              <motion.div key={story.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.08 }}>
                <StoryCard {...story} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
