import DoubleButton from "./sharedComponents/DoubleButton";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <h1 className="hero-section__heading">
          Discover Your Next Favorite Plants Today!
        </h1>
        <div className="hero-section__text-container">
          <p className="hero-section__text">
            Explore our carefully curated selection of products designed to meet
            your needs. Start adding to your cart and enjoy a seamless shopping
            experience!
          </p>
          <DoubleButton
            sectionClass="hero-section"
            firstButtonTitle="Search"
            secondButtonTitle="Help"
          />
        </div>
      </div>
      <img
        src="./src/assets/images/plantImageSun/plantImageSun1200.jpg"
        srcSet="
            ./src/assets/images/plantImageSun/plantImageSun480.jpg   480w,
            ./src/assets/images/plantImageSun/plantImageSun1200.jpg 1200w
          "
        className="hero-section__image"
        alt="A green plant basking in the sun"
        loading="lazy"
      />
    </section>
  );
}
