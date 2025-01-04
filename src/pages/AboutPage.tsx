export default function AboutPage() {
  return (
    <div className="width-container u-flex-column">
      <section className="about-section">
        <h1 className="about-section__heading">ABOUT US</h1>
        <article className="about-section__content-container">
          <div className="about-section__content">
            <p className="about-section__body">
              <b>Welcome to Plant Plaza</b>, your go-to destination for unique
              and captivating plants. Whether you're a seasoned plant enthusiast
              or just starting your indoor jungle, we believe every space
              deserves a touch of greenery and charm.
            </p>
            <p className="about-section__body">
              <b>Our carefully curated collection</b> features rare, exotic, and
              easy-care plants, handpicked to inspire and elevate your
              environment. From vibrant succulents to statement-making
              tropicals, we strive to bring the beauty of nature into your home
              or workspace.
            </p>
            <p className="about-section__body">
              <b>At Plant Plaza</b>, we're not just about selling plants; we're
              about cultivating connections. Join our growing community of plant
              lovers and discover tips, inspiration, and everything you need to
              nurture your new green companions.
            </p>
            <p className="about-section__body">
              <b>Let’s grow together! 🌱</b>
            </p>
          </div>
          <img
            className="about-section__image"
            src="/assets/images/plantAbout.jpg"
            alt=""
          />
        </article>
      </section>
    </div>
  );
}
