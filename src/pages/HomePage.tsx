export default function HomePage() {
  return (
    <>
      <div className="width-container u-flex-column">
        <section className="hero-section">
          <div className="hero-section__content">
            <h1 className="hero-section__heading">
              Discover Your Next Favorite Plants Today!
            </h1>
            <div className="hero-section__text-container">
              <p className="hero-section__text">
                Explore our carefully curated selection of products designed to
                meet your needs. Start adding to your cart and enjoy a seamless
                shopping experience!
              </p>
              <div className="hero-section__buttons u-double-buttons">
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
        <section className="shop-section">
          <div className="shop-section__content">
            <div className="shop-section__text">
              <h5 className="shop-section__subheading">Shop</h5>
              <h2 className="shop-section__heading">
                Discover Our Exciting Product Categories Today
              </h2>
              <p className="shop-section__description">
                Explore a diverse range of products to find what you want and
                need. Take advantage of our special promotions and find exactly
                what you're looking for.
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
      </div>
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
                  src="./src/assets/images/purpleFlower.jpg"
                  alt="A vibrant purple flower"
                  className="explore-section__image"
                  loading="lazy"
                />
                <div className="explore-section__card-text">
                  <h3 className="explore-section__card-title">
                    Easy Product Management for Your Convenience
                  </h3>
                  <p className="explore-section__card-description">
                    Add products to your cart with ease and manage your
                    selections effortlessly.
                  </p>
                </div>
              </div>
              <div className="explore-section__card">
                <img
                  src="./src/assets/images/blueFrogFlower.jpg"
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
                  src="./src/assets/images/tulip.jpg"
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
            <div className="explore-section__buttons u-double-buttons">
              <button
                className="button button--filled explore-button"
                type="button"
                aria-label="Search for products"
              >
                Search
              </button>
              <button
                className="button button--outline"
                type="button"
                aria-label="Learn more about our services"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="width-container u-flex-column">
        <section className="testimonials-section">
          <div className="testimonials-section__header">
            <h2 className="testimonials-section__title">
              Customer Testimonials
            </h2>
            <p className="testimonials-section__description">
              This shopping cart is incredibly easy to use!
            </p>
          </div>
          <div className="testimonials-section__cards">
            <div className="testimonial-card">
              <div className="testimonial-card__rating">
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />{" "}
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />{" "}
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />{" "}
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />
                </i>
              </div>
              <h4 className="testimonial-card__quote">
                "A seamless experience from start to finish!"
              </h4>
              <div className="testimonial-card__profile">
                <div className="testimonial-card__image-container">
                  <img
                    className="testimonial-card__image first"
                    src="./src/assets/images/JaneDoeProfile.jpg"
                    alt="Jane Doe"
                  />
                </div>
                <div className="testimonial-card__author">
                  <h4 className="testimonial-card__author-name">Jane Doe</h4>
                  <p className="testimonial-card__author-title">
                    Product Manager, TechCo
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card__rating">
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />{" "}
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />{" "}
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />{" "}
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />
                </i>
              </div>
              <h4 className="testimonial-card__quote">
                "I love how intuitive this cart is!"
              </h4>
              <div className="testimonial-card__profile">
                <div className="testimonial-card__image-container">
                  <img
                    className="testimonial-card__image second"
                    src="./src/assets/images/JohnSmithProfile.jpg"
                    alt="John Smith"
                  />
                </div>
                <div className="testimonial-card__author">
                  <h4 className="testimonial-card__author-name">John Smith</h4>
                  <p className="testimonial-card__author-title">
                    CEO, ShopEasy
                  </p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-card__rating">
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />{" "}
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />{" "}
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />{" "}
                </i>
                <i className="testimonial-card__star">
                  <img
                    src="./src/assets/icons/star.svg"
                    style={{ width: "20px" }}
                    alt="star-rating"
                  />
                </i>
              </div>
              <h4 className="testimonial-card__quote">
                "The best shopping cart solution I've ever used!"
              </h4>
              <div className="testimonial-card__profile">
                <div className="testimonial-card__image-container">
                  <img
                    className="testimonial-card__image third"
                    src="./src/assets/images/EmiliyJohnsonProfile.jpg"
                    alt="Emily Johnson"
                  />
                </div>
                <div className="testimonial-card__author">
                  <h4 className="testimonial-card__author-name">
                    Emily Johnson
                  </h4>
                  <p className="testimonial-card__author-title">
                    Founder, RetailHub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="discover-section">
          <div className="discover-section__content">
            <h2 className="discover-section__heading">
              Discover Your Next Favorite Plants Today!
            </h2>
            <div className="discover-section__text-container">
              <p className="discover-section__text">
                Explore our carefully curated selection of products designed to
                meet your needs. Start adding to your cart and enjoy a seamless
                shopping experience!
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
        <section className="newsletter-section">
          <div className="newsletter-section__container">
            <h2 className="newsletter-section__title">
              Stay Updated with Our Newsletter
            </h2>
            <div className="newsletter-section__content">
              <p className="newsletter-section__description">
                Subscribe to our newsletter for the latest updates and exclusive
                promotions. Don't miss out on special offers tailored just for
                you!
              </p>
              <form className="newsletter-section__form">
                <div className="newsletter-section__form-group">
                  <input
                    type="email"
                    className="newsletter-section__input"
                    placeholder="Your Email Address"
                    required
                  />
                  <button
                    className="newsletter-section__button button--filled"
                    type="submit"
                  >
                    Join Now
                  </button>
                </div>
                <p className="newsletter-section__terms policy-text">
                  By clicking Join Now, you agree to our Terms and Conditions
                  and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
