import SignupForm from "./sharedComponents/SignupForm";

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
          <SignupForm formClass="newsletter-section" buttonText="Join Now" />
        </div>
      </div>
    </section>
  );
}
