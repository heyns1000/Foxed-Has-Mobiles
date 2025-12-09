import StickyHeader from "@/components/sticky-header";
import HeroSection from "@/components/hero-section";
import CompetitionOverview from "@/components/competition-overview";
import ProductsPricing from "@/components/products-pricing";
import NoodleMountainSaga from "@/components/noodle-mountain-saga";
import RulesSection from "@/components/rules-section";
import BanimalFooter from "@/components/banimal-footer";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <StickyHeader />
      <HeroSection />
      <CompetitionOverview />
      <ProductsPricing />
      <NoodleMountainSaga />
      <RulesSection />
      <BanimalFooter />
    </div>
  );
}
