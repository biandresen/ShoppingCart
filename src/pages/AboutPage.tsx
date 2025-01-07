import ContentStatusHandler from "../components/reusableComponents/ContentStatusHandler";
import { Container } from "../components/SmallComponents";
import { useWebsiteText } from "../context/WebsiteTextContext";
import messages from "../utils/messages";

export default function AboutPage() {
  // Fetch the about page content
  const { websiteText, isLoading, error } = useWebsiteText();

  const contentStatusHandler = (
    <ContentStatusHandler
      isLoading={isLoading}
      error={error}
      websiteText={websiteText}
      loadingMessage={messages.loading.page}
      errorMessage={messages.error.page}
    />
  );

  if (isLoading || error || !websiteText) return contentStatusHandler;

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
