import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InspirationsSection } from "@/components/sections/InspirationsSection";
import { LaunchOfferSection } from "@/components/sections/LaunchOfferSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-w-0 flex-1 flex-col">
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <InspirationsSection />
        <BeforeAfterSection />
        <ProcessSection />
        <AboutSection />
        <LaunchOfferSection />
        <ServiceAreaSection />
        <QuoteFormSection />
      </main>
      <Footer />
    </>
  );
}
