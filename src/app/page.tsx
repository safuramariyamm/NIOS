import { CTASection } from "../components/CTASection";
import { GallerySection } from "../components/GallerySection";
import { Hero } from "../components/Hero";
import { ImpactSection } from "../components/ImpactSection";
import { MissionSection } from "../components/MissionSection";
import { Newsletter } from "../components/Newsletter";
import { ProgramsSection } from "../components/ProgramsSection";
import { StoriesSection } from "../components/StoriesSection";
import { Testimonials } from "../components/Testimonials";
import { TrustStrip } from "../components/TrustStrip";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <MissionSection />
      <ProgramsSection />
      <WhyChooseUsSection />
      <StoriesSection />
      {/* <ImpactSection /> */}
      <GallerySection />
      <Testimonials />
      <CTASection />
      <Newsletter />
    </>
  );
}
