import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { TimelineSection } from "@/components/sections/timeline-section";
import { GreenFeatureSection } from "@/components/sections/green-feature-section";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PricingSection } from "@/components/sections/pricing-section";
import { GameCatalog } from "@/components/sections/game-catalog";
import { StatsSection } from "@/components/sections/stats-section";
import { RedCTASection } from "@/components/sections/red-cta-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <TimelineSection />
      <GreenFeatureSection />
      <FeatureGrid />
      <PricingSection />
      <GameCatalog />
      <StatsSection />
      <RedCTASection />
      <Footer />
    </main>
  );
}
