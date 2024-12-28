import DoubleButton from "./sharedComponents/DoubleButton";

export default function DiscoverSection() {
  return (
    <section className="discover-section">
      <div className="discover-section__content">
        <h2 className="discover-section__heading">
          Discover Your Next Favorite Plants Today!
        </h2>
        <div className="discover-section__text-container">
          <p className="discover-section__text">
            Explore our carefully curated selection of products designed to meet
            your needs. Start adding to your cart and enjoy a seamless shopping
            experience!
          </p>
          <DoubleButton
            sectionClass="discover-section"
            firstButtonTitle="Search"
            secondButtonTitle="Help"
          />
        </div>
      </div>
    </section>
  );
}
