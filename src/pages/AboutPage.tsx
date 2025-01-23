import { Container } from "../components/SmallComponents";
import { useOutletContext } from "react-router-dom";
import { WebsiteTextData } from "../types/websiteTextTypes";

export default function AboutPage() {
  const { websiteText } = useOutletContext<{ websiteText: WebsiteTextData }>()

  const { heading, content, image } = websiteText.aboutPage || {};

  return (
    <Container>
      <section className="about-page" aria-labelledby="about-section">
        <h1 className="about-page__heading">{heading}</h1>
        <article className="about-page__content-container">
          <div className="about-page__content">
            {content.map(({ id, boldText, text }, index) => (
              <p className="about-page__body" key={id || index}>
                {boldText && <b>{boldText}</b>} {text}
              </p>
            ))}
          </div>
          <img
            className="about-page__image"
            src={image.src || "/assets/icons/plantPlazaLogo.png"}
            alt={image.alt || "Logo on about page"}
          />
        </article>
      </section>
    </Container>
  );
}
