import { Container } from "../components/SmallComponents";
import messages from "../utils/messages";
import { useWebsiteText } from "../context/WebsiteTextContext";
import DoubleButton from "../components/reusableComponents/DoubleButton";
import ContentStatusHandler from "../components/reusableComponents/ContentStatusHandler";
import {
  ExploreCard as ExploreSectionCardProps,
  TestimonialCardProps,
} from "../types/websiteTextTypes";
import SignupForm from "../components/reusableComponents/SignupForm";

export default function HomePage() {
  // Fetch the about page content
  const { websiteText, isLoading, error } = useWebsiteText();

  const contentStatusHandler = (
    <ContentStatusHandler
      isLoading={isLoading}
      error={error}
      websiteText={websiteText}
      loadingMessage={messages.loading.page}
      errorMessage={messages.error.page}
    />
  );

  if (isLoading || error || !websiteText) return contentStatusHandler;

  const {
    heroSection,
    discoverSection,
    exploreSection,
    shopSection,
    newsletterSection,
    testimonialsSection,
  } = websiteText.homePage || {};

  //Website section
  function HeroSection() {
    return (
      <section className="hero-section">
        <div className="hero-section__content">
          <h1 className="hero-section__heading">{heroSection.heading}</h1>
          <div className="hero-section__text-container">
            <p className="hero-section__text">{heroSection.body}</p>
            <DoubleButton
              sectionClass="hero-section"
              firstButtonTitle="Products"
              secondButtonTitle="Help"
            />
          </div>
        </div>
        <img
          src="/assets/images/plantImageSun/plantImageSun1200.jpg"
          srcSet="
              /assets/images/plantImageSun/plantImageSun480.jpg   480w,
              /assets/images/plantImageSun/plantImageSun1200.jpg 1200w
            "
          className="hero-section__image"
          alt="A green plant basking in the sun"
          loading="lazy"
        />
      </section>
    );
  }

  // Website section
  function DiscoverSection() {
    return (
      <section className="discover-section">
        <div className="discover-section__content">
          <h2 className="discover-section__heading">
            {discoverSection.heading}
          </h2>
          <div className="discover-section__text-container">
            <p className="discover-section__text">{discoverSection.body}</p>
            {/* Buttons to navigate to Products or Help */}
            <DoubleButton
              sectionClass="discover-section"
              firstButtonTitle="Products"
              secondButtonTitle="Help"
            />
          </div>
        </div>
      </section>
    );
  }

  // Website section
  function ExploreSection() {
    // ExploreSectionCard Component
    function ExploreSectionCard({
      imageUrl,
      alt,
      title,
      body,
    }: ExploreSectionCardProps): JSX.Element {
      return (
        <div className="explore-section__card">
          <img
            src={imageUrl}
            alt={alt}
            className="explore-section__image"
            loading="lazy"
          />
          <div className="explore-section__card-text">
            <h3 className="explore-section__card-title">{title}</h3>
            <p className="explore-section__card-body">{body}</p>
          </div>
        </div>
      );
    }

    // Render main content
    return (
      <section className="explore-section">
        <div className="width-container u-flex-column">
          <div className="explore-section__content">
            <div className="explore-section__text">
              <h5 className="explore-section__subheading">
                {exploreSection.subHeading}
              </h5>
              <h2 className="explore-section__heading">
                {exploreSection.heading}
              </h2>
              <p className="explore-section__body">{exploreSection.body}</p>
            </div>
            <div className="explore-section__cards">
              {/* Render each card dynamically */}
              {exploreSection.cards.map((card, index) => (
                <ExploreSectionCard key={card.id || index} {...card} />
              ))}
            </div>
            <DoubleButton
              sectionClass="explore-section"
              firstButtonTitle="Products"
              secondButtonTitle="Help"
            />
          </div>
        </div>
      </section>
    );
  }

  // Website section
  function ShopSection() {
    return (
      <section className="shop-section">
        <div className="shop-section__content">
          <div className="shop-section__text">
            <h5 className="shop-section__subheading">
              {shopSection.subHeading}
            </h5>
            <h2 className="shop-section__heading">{shopSection.heading}</h2>
            <p className="shop-section__description">{shopSection.body}</p>
            <DoubleButton
              sectionClass="shop-section"
              firstButtonTitle="Products"
              secondButtonTitle="Help"
            />
          </div>
          <img
            src="/assets/images/sunPlant/sunPlant1200.jpg"
            srcSet="
              /assets/images/sunPlant/sunPlant480.jpg   480w,
              /assets/images/sunPlant/sunPlant1200.jpg 1200w
            "
            alt="A vibrant plant with the sun in the background"
            className="shop-section__image"
            loading="lazy"
          />
        </div>
      </section>
    );
  }

  // Website section
  function NewsletterSection() {
    return (
      <section className="newsletter-section">
        <div className="newsletter-section__container">
          <h2 className="newsletter-section__title">
            {newsletterSection.heading}
          </h2>
          <div className="newsletter-section__content">
            <p className="newsletter-section__description">
              {newsletterSection.body}
            </p>
            <SignupForm formClass="newsletter-section" buttonText="Join Now" />
          </div>
        </div>
      </section>
    );
  }

  // Website section
  function TestimonialsSection() {
    function TestimonialCard({
      rating,
      quote,
      imageSrc,
      alt,
      name,
      title,
    }: TestimonialCardProps) {
      return (
        <div className="testimonial-card">
          <div className="testimonial-card__rating">
            {Array.from({ length: rating }, (_, index) => (
              <i key={index} className="testimonial-card__star-container">
                <img
                  className="testimonial-card__star-icon"
                  src="/assets/icons/star.svg"
                  alt="star-rating"
                />
              </i>
            ))}
          </div>
          <h4 className="testimonial-card__quote">"{quote}"</h4>
          <div className="testimonial-card__profile">
            <div className="testimonial-card__image-container">
              <img
                className="testimonial-card__image"
                src={imageSrc}
                alt={alt}
              />
            </div>
            <div className="testimonial-card__author">
              <h4 className="testimonial-card__author-name">{name}</h4>
              <p className="testimonial-card__author-title">{title}</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <section className="testimonials-section">
        <div className="testimonials-section__header">
          <h2 className="testimonials-section__heading">
            {testimonialsSection.heading}
          </h2>
          <p className="testimonials-section__body">
            {testimonialsSection.body}
          </p>
        </div>
        <div className="testimonials-section__cards">
          {testimonialsSection.testimonialCards.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    );
  }

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
