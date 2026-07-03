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
<<<<<<< HEAD
    <>
      <Hero />
      <TrustStrip />
      <MissionSection />
      <ProgramsSection />
      <WhyChooseUsSection />
      <StoriesSection />
      <ImpactSection />
      <GallerySection />
      <Testimonials />
      <CTASection />
      <Newsletter />
    </>
=======
    <div className="min-h-screen bg-[#FFFDFB] text-[#111827]">
      <Navbar />
      <main>
        <Hero />
        {/* <TrustStrip /> */}
        <MissionSection />
        <ProgramsSection />
        <WhyChooseUsSection />
        <StoriesSection />
        <ImpactSection />
        <GallerySection />
        <Testimonials />
        <CTASection />
        <Newsletter />
      </main>
      <Footer />
    </div>
>>>>>>> 2e83d7eab4af7a81dad21c6f5032b2da56ce95eb
  );
}
