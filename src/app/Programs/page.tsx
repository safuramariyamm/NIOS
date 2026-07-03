import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FullBleedReveal } from "@/components/FullBleedReveal";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ImpactSection } from "@/components/ImpactSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Programs | BrightPath Learning Center",
  description: "Explore BrightPath's education, health, protection, and life-skills programs for children.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title={
          <>
            Support that nurtures a child’s{" "}
            <span className="inline-block -rotate-1 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] bg-clip-text text-[1.1em] text-transparent" style={{ fontFamily: "var(--font-caveat)" }}>
              whole future
            </span>
          </>
        }
        description="From the classroom to the dinner table, our programs create a full circle of care so every child can learn, heal, and grow with confidence."
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Children smiling during a classroom activity"
      />

      <ProgramsSection />

      <FullBleedReveal
        image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1800&q=80"
        alt="Children in a creative art workshop"
        eyebrow="How it works"
        title="A simple path from enrollment to a thriving future"
        description="Every child who joins BrightPath moves through a caring, structured journey built around them — not the other way around."
      />

      <ProcessSection />

      <ImpactSection />

      <CTASection />
    </>
  );
}