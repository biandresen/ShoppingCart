import DiscoverSection from "../components/DiscoverSection";
import ExploreSection from "../components/ExploreSection";
import HeroSection from "../components/HeroSection";
import NewsletterSection from "../components/NewsletterSection";
import ShopSection from "../components/ShopSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <div className="width-container u-flex-column">
        <HeroSection />
        <ShopSection />
      </div>
      <ExploreSection />
      <div className="width-container u-flex-column">
        <TestimonialsSection />
        <DiscoverSection />
        <NewsletterSection />
      </div>
    </>
  );
}
