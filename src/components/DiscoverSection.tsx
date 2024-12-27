
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
          <div className="discover-section__buttons u-double-buttons">
            <button
              className="button button--filled"
              type="button"
              aria-label="Search for products"
            >
              Search
            </button>
            <button
              className="button button--outline"
              type="button"
              aria-label="Get help with shopping"
            >
              Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
