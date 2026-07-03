import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FullBleedReveal } from "@/components/FullBleedReveal";
import { DonationTiers } from "@/components/DonationTiers";
import { DonationBreakdown } from "@/components/DonationBreakdown";
import { ImpactSection } from "@/components/ImpactSection";
import { FAQSection } from "@/components/FAQSection";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Donate | BrightPath Learning Center",
  description: "Your donation funds education, nutrition, and protection for children who need it most. Give once or monthly.",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate Today"
        title={
          <>
            Turn your generosity into a child&apos;s{" "}
            <span className="inline-block -rotate-1 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] bg-clip-text text-[1.1em] text-transparent" style={{ fontFamily: "var(--font-caveat)" }}>
              brighter tomorrow
            </span>
          </>
        }
        description="Every donation, big or small, funds real classrooms, real meals, and real safety for children across 25 cities. See exactly where it goes below."
        image="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Children sharing a meal at a community center"
      />

      <DonationTiers />

      <FullBleedReveal
        image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1800&q=80"
        alt="Children smiling during a classroom activity"
        eyebrow="Your gift in action"
        title="₹1,500 is one month of meals. ₹12,000 is one full year of hope."
        description="Recurring donors power our most reliable, long-term programs — the ones that follow a child from their very first day of school to graduation."
      />

      <DonationBreakdown />

      <ImpactSection />

      <FAQSection />

      <Newsletter />
    </>
  );
}
