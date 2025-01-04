import { Container } from "../components/SmallComponents";
import DiscoverSection from "../components/DiscoverSection";
import ExploreSection from "../components/ExploreSection";
import HeroSection from "../components/HeroSection";
import NewsletterSection from "../components/NewsletterSection";
import ShopSection from "../components/ShopSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Container>
        <HeroSection />
        <ShopSection />
      </Container>
      <ExploreSection />
      <Container>
        <TestimonialsSection />
        <DiscoverSection />
        <NewsletterSection />
      </Container>
    </>
  );
}
