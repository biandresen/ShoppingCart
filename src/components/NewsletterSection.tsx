
export default function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-section__container">
        <h2 className="newsletter-section__title">
          Stay Updated with Our Newsletter
        </h2>
        <div className="newsletter-section__content">
          <p className="newsletter-section__description">
            Subscribe to our newsletter for the latest updates and exclusive
            promotions. Don't miss out on special offers tailored just for you!
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
              By clicking Join Now, you agree to our Terms and Conditions and
              Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
