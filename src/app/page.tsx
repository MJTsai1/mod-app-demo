import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { CustomizationSection } from "@/components/sections/CustomizationSection";
import { DiscordIntegrationSection } from "@/components/sections/DiscordIntegrationSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { AISection } from "@/components/sections/AISection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <BeforeAfterSection />
        <FeatureShowcase />
        <AnalyticsSection />
        <DashboardShowcase />
        <CustomizationSection />
        <DiscordIntegrationSection />
        <PricingSection />
        <AISection />
        <FinalCTA />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
