import {
  FetchErrorMessage,
  LoadingMessage,
  Container,
} from "../components/SmallComponents";
import { useFetch } from "../hooks/useFetch";
import { AboutPageContent } from "../types";
import { logger } from "../utils/logger";
import messages from "../utils/messages";

const DATA_KEY = "aboutPageContent";
const DATA_URL = "/data/aboutPageContent.json";

export default function AboutPage() {
  const {data: aboutPageContent, isLoading, error} = useFetch<AboutPageContent>(DATA_KEY, DATA_URL);

  if (isLoading || !aboutPageContent)
    return <LoadingMessage message={messages.loading.pageContent || "Loading content..."} />;

  if (error) {
    // Logging error for debugging
    logger.error("Error fetching about page content", error);
    return <FetchErrorMessage message={messages.error.pageContent || "There was an error fetching the content."} />;
  }

  const {heading, content, image } = aboutPageContent;

  return (
    <Container>
      <section className="about-section">
        <h1 className="about-section__heading">{heading}</h1>
        <article className="about-section__content-container">
          <div className="about-section__content">
            {content.map(({id, boldText, text }, index) => (
              <p className="about-section__body" key={id || index}>
                {boldText && <b>{boldText}</b>} {text}
              </p>
            ))}
          </div>
          <img
            className="about-section__image"
            src={image.src}
            alt={image.alt}
          />
        </article>
      </section>
    </Container>
  );
}
