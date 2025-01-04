import DoubleButton from "./reusableComponents/DoubleButton";

export default function ExploreSection() {
  return (
    <section className="explore-section">
      <div className="width-container u-flex-column">
        <div className="explore-section__content">
          <div className="explore-section__text">
            <h5 className="explore-section__subheading">Explore</h5>
            <h2 className="explore-section__heading">
              Discover a Seamless Shopping Experience Today
            </h2>
            <p className="explore-section__description">
              Our platform offers an intuitive interface that makes shopping
              effortless. Enjoy browsing through a diverse range of products
              with just a few clicks.
            </p>
          </div>
          <div className="explore-section__cards">
            <div className="explore-section__card">
              <img
                src="/assets/images/purple-flower.png"
                alt="A vibrant purple flower"
                className="explore-section__image"
                loading="lazy"
              />
              <div className="explore-section__card-text">
                <h3 className="explore-section__card-title">
                  Easy Product Management for Your Convenience
                </h3>
                <p className="explore-section__card-description">
                  Add products to your cart with ease and manage your selections
                  effortlessly.
                </p>
              </div>
            </div>
            <div className="explore-section__card">
              <img
                src="/assets/images/blue-frog.png"
                alt="A bright blue flower"
                className="explore-section__image"
                loading="lazy"
              />
              <div className="explore-section__card-text">
                <h3 className="explore-section__card-title">
                  Instant Access to Your Shopping Cart
                </h3>
                <p className="explore-section__card-description">
                  View and modify your cart anytime with a simple click.
                </p>
              </div>
            </div>
            <div className="explore-section__card">
              <img
                src="/assets/images/tulip.png"
                alt="A red tulip flower"
                className="explore-section__image"
                loading="lazy"
              />
              <div className="explore-section__card-text">
                <h3 className="explore-section__card-title">
                  No Registration Required for Quick Shopping
                </h3>
                <p className="explore-section__card-description">
                  Start shopping immediately without the hassle of signing up.
                </p>
              </div>
            </div>
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
