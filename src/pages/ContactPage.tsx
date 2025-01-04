export default function ContactPage() {
  return (
    <div className="width-container u-flex-column">
      <section className="contact-section">
        <h1 className="contact-section__heading">CONTACT US</h1>
        <article className="contact-section__content-container">
          <div className="contact-section__content">
            <p className="contact-section__body">
              <b>We’re here to help!</b> Whether you have questions about our
              plants, need care tips, or want assistance with your order, the
              Plant Plaza team is just a message away.
            </p>
            <h3 className="contact-section__content-heading">Get in Touch</h3>
            <ul className="contact-section__body-list">
              <li className="contact-section__body-list-item">
                <b>Email us:</b> Reach out to our support team at
                support@plantplaza.com, and we’ll get back to you as soon as
                possible.
              </li>
              <li className="contact-section__body-list-item">
                <b>Call us:</b> Speak with our customer care team at (123)
                456-7890 during business hours.
              </li>
            </ul>
            <h3 className="contact-section__content-heading">Follow Us</h3>
            <p className="contact-section__body">
              <b>Stay connected</b> and get inspired by joining our growing
              community on Instagram, Facebook, and Pinterest. Share your plant
              journey and tag us with #PlantPlazaLove!
            </p>
            <p className="contact-section__body">
              We look forward to hearing from you and helping you bring more
              <b>greenery into your life! 🌿</b>
            </p>
          </div>
          <img
            className="contact-section__image"
            src="/assets/images/spiralPlantContact.jpg"
            alt=""
          />
        </article>
      </section>
    </div>
  );
}
