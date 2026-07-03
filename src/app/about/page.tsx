import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FullBleedReveal } from "@/components/FullBleedReveal";
import { MissionSection } from "@/components/MissionSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ValuesSection } from "@/components/ValuesSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | BrightPath Learning Center",
  description: "Learn about BrightPath's mission, values, and the story behind our work with underprivileged children.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BrightPath"
        title={
          <>
            The story behind every{" "}
            <span className="inline-block -rotate-1 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] bg-clip-text text-[1.1em] text-transparent" style={{ fontFamily: "var(--font-caveat)" }}>
              brighter
            </span>{" "}
            path.
          </>
        }
        description="We started with one classroom and a simple belief: every child, regardless of circumstance, deserves joyful learning, nourishment, and a safe place to grow."
        image="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80"
        imageAlt="A caring educator guiding children through a lesson"
      />

      <MissionSection />

      <FullBleedReveal
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80"
        alt="Teacher guiding students in a classroom"
        eyebrow="Our journey"
        title="From one classroom to 350+ learning centers"
        description="What began as a single after-school program has grown into a nationwide network of educators, volunteers, and community partners — all working toward the same brighter future."
      />

      <ValuesSection />

      <WhyChooseUsSection />

      <CTASection />
    </>
  );
}