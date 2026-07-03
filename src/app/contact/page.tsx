import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Contact | BrightPath Learning Center",
  description: "Get in touch with BrightPath Learning Center for questions about donating, volunteering, or our programs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            We&apos;d love to{" "}
            <span className="inline-block -rotate-1 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FBBF24] bg-clip-text text-[1.1em] text-transparent" style={{ fontFamily: "var(--font-caveat)" }}>
              hear
            </span>{" "}
            from you.
          </>
        }
        description="Questions about donating, volunteering, or partnering with us? Send a message and our team will get back to you within a day."
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80"
        imageAlt="A teacher warmly guiding a student through a lesson"
      />

      <ContactSection />

      <FAQSection />

      <CTASection />
    </>
  );
}
