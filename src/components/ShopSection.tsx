
export default function ShopSection() {
  return (
    <section className="shop-section">
      <div className="shop-section__content">
        <div className="shop-section__text">
          <h5 className="shop-section__subheading">Shop</h5>
          <h2 className="shop-section__heading">
            Discover Our Exciting Product Categories Today
          </h2>
          <p className="shop-section__description">
            Explore a diverse range of products to find what you want and need.
            Take advantage of our special promotions and find exactly what
            you're looking for.
          </p>
          <div className="shop-section__buttons u-double-buttons">
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
              aria-label="Get shopping help"
            >
              Help
            </button>
          </div>
        </div>
        <img
          src="./src/assets/images/sunPlant/sunPlant1200.jpg"
          srcSet="
              ./src/assets/images/sunPlant/sunPlant480.jpg   480w,
              ./src/assets/images/sunPlant/sunPlant1200.jpg 1200w
            "
          alt="A vibrant plant with the sun in the background"
          className="shop-section__image"
          loading="lazy"
        />
      </div>
    </section>
  );
}
