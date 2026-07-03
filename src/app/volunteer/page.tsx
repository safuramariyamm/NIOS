import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FullBleedReveal } from "@/components/FullBleedReveal";
import { VolunteerWaysSection } from "@/components/VolunteerWaysSection";
import { VolunteerForm } from "@/components/VolunteerForm";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Volunteer | BrightPath Learning Center",
  description: "Join BrightPath as a volunteer — teach, mentor, fundraise, or organize events for children who need you.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer With Us"
        title={
          <>
            Give your time, get a{" "}
            <span className="inline-block -rotate-1 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] bg-clip-text text-[1.1em] text-transparent" style={{ fontFamily: "var(--font-caveat)" }}>
              lifetime
            </span>{" "}
            of impact.
          </>
        }
        description="Whether you have an hour a week or a season to spare, there's a role for you — teaching, mentoring, fundraising, or bringing joy to community events."
        image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Volunteer leading a children's art workshop"
      />

      <VolunteerWaysSection />

      <FullBleedReveal
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80"
        alt="A volunteer mentor guiding a student"
        eyebrow="What volunteers say"
        title="\u201cI came for a few hours a week — I stayed for the change I saw.\u201d"
        description="Our volunteers consistently tell us the relationships they build become some of the most meaningful of their lives."
      />

      <VolunteerForm />

      <Testimonials />

      <Newsletter />
    </>
  );
}
