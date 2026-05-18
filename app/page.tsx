import type { Metadata } from "next";

import { HomeJsonLd } from "@/components/seo/HomeJsonLd";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InspirationsSection } from "@/components/sections/InspirationsSection";
import { LaunchOfferSection } from "@/components/sections/LaunchOfferSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { QuoteFormSection } from "@/components/sections/QuoteFormSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { siteConfig } from "@/lib/constants/site";

const homeOgTitle = `${siteConfig.name} — ${siteConfig.tagline}`;

export const metadata: Metadata = {
  title: siteConfig.defaultPageTitle,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeOgTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.defaultOgImage.path,
        width: siteConfig.defaultOgImage.width,
        height: siteConfig.defaultOgImage.height,
        alt: siteConfig.defaultOgImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeOgTitle,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage.path],
  },
};

export default function Home() {
  return (
    <>
      <HomeJsonLd />
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
        <FaqSection />
        <QuoteFormSection />
      </main>
      <Footer />
    </>
  );
}
