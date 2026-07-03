import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FullBleedReveal } from "@/components/FullBleedReveal";
import { StoriesGrid } from "@/components/StoriesGrid";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Stories | BrightPath Learning Center",
  description: "Real stories of change from the children, families, and volunteers whose lives BrightPath has touched.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories of Change"
        title={
          <>
            Every child has a story{" "}
            <span className="inline-block -rotate-1 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] bg-clip-text text-[1.1em] text-transparent" style={{ fontFamily: "var(--font-caveat)" }}>
              worth telling
            </span>
          </>
        }
        description="From quiet classrooms to loud, joyful celebrations — these are the moments where hope took root and confidence began to grow."
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Girls learning together in a community center"
      />

      <StoriesGrid />

      <FullBleedReveal
        image="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1800&q=80"
        alt="A volunteer reading with a group of children"
        eyebrow="Behind every story"
        title="A mentor, a meal, a classroom that felt like home"
        description="None of these moments happen alone. They're made possible by donors, volunteers, and teachers who show up, again and again, for children who need them most."
      />

      <Testimonials />

      <CTASection />

      <Newsletter />
    </>
  );
}
