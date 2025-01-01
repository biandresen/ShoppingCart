export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-section__header">
        <h2 className="testimonials-section__title">Customer Testimonials</h2>
        <p className="testimonials-section__description">
          This shopping cart is incredibly easy to use!
        </p>
      </div>
      <div className="testimonials-section__cards">
        <div className="testimonial-card">
          <div className="testimonial-card__rating">
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />{" "}
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />{" "}
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />{" "}
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
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
                src="/assets/images/JaneDoeProfile.jpg"
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
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />{" "}
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />{" "}
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />{" "}
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
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
                src="/assets/images/JohnSmithProfile.jpg"
                alt="John Smith"
              />
            </div>
            <div className="testimonial-card__author">
              <h4 className="testimonial-card__author-name">John Smith</h4>
              <p className="testimonial-card__author-title">CEO, ShopEasy</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-card__rating">
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />{" "}
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />{" "}
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
                style={{ width: "20px" }}
                alt="star-rating"
              />{" "}
            </i>
            <i className="testimonial-card__star">
              <img
                src="/assets/icons/star.svg"
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
                src="/assets/images/EmiliyJohnsonProfile.jpg"
                alt="Emily Johnson"
              />
            </div>
            <div className="testimonial-card__author">
              <h4 className="testimonial-card__author-name">Emily Johnson</h4>
              <p className="testimonial-card__author-title">
                Founder, RetailHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
