import {
  FetchErrorMessage,
  LoadingMessage,
  Container,
} from "../components/SmallComponents";
import { useFetch } from "../hooks/useFetch";
import { AboutPageContent } from "../types";
import { logger } from "../utils/logger";
import messages from "../utils/messages";

// Constants for fetching "about page" content
const DATA_KEY = "aboutPageContent";
const DATA_URL = "/data/aboutPageContent.json";

export default function AboutPage() {
  // Fetch about page content using a custom hook
  const {data: aboutPageContent, isLoading, error} = useFetch<AboutPageContent>(DATA_KEY, DATA_URL);

  if (isLoading || !aboutPageContent)
    return <LoadingMessage message={messages.loading.page || "Loading content..."} />;

  if (error) {
    // Logging error for debugging
    logger.error("Error fetching about page content", error);
    return <FetchErrorMessage message={messages.error.page || "There was an error fetching the content."} />;
  }

  const {heading, content, image } = aboutPageContent || {};

  return (
    <Container>
      <section className="about-page" aria-labelledby="about-section">
        <h1 className="about-page__heading">{heading}</h1>
        <article className="about-page__content-container">
          <div className="about-page__content">
            {content.map(({id, boldText, text }, index) => (
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
