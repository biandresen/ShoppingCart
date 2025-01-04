import {
  FetchErrorMessage,
  LoadingMessage,
  Container,
} from "../components/SmallComponents";
import { useFetch } from "../hooks/useFetch";
import { ContactPageContent } from "../types";
import { logger } from "../utils/logger";
import messages from "../utils/messages";

// Constants for fetching "contact page" content
const DATA_KEY = "contactPageContent";
const DATA_URL = "/data/contactPageContent.json";

export default function ContactPage() {
  // Fetch contact page content using a custom hook
  const {
    data: contactPageContent,
    isLoading,
    error,
  } = useFetch<ContactPageContent>(DATA_KEY, DATA_URL);

  if (isLoading || !contactPageContent) {
    return (
      <LoadingMessage
        message={messages.loading.page || "Loading content..."}
      />
    );
  }

  if (error) {
    // Logging error for debugging
    logger.error("Error fetching contact page content", error);
    return (
      <FetchErrorMessage
        message={
          messages.error.page ||
          "There was an error fetching the content."
        }
      />
    );
  }

  const { heading, intro, getInTouch, follow, image } =
    contactPageContent || {};

  // Renders the "Introduction" section of the contact page
  function IntroSection(): JSX.Element {
    return (
      <p className="contact-page__body">
        <b>{intro.boldText}</b> {intro.text}
      </p>
    );
  }

  // Renders the "Get in touch" section of the contact page
  function GetInTouchSection(): JSX.Element {
    return (
      <>
        <h3 className="contact-page__content-heading">
          {getInTouch.heading}
        </h3>
        <ul className="contact-page__body-list">
          {getInTouch.list.map(({ id, boldText, text }, index) => (
            <li key={id || index} className="contact-page__body-list-item">
              <b>{boldText}</b> {text}
            </li>
          ))}
        </ul>
      </>
    );
  }

  // Renders the "Follow us" section of the contact page
  function FollowSection(): JSX.Element {
    return (
      <>
        <h3 className="contact-page__content-heading">{follow.heading}</h3>
        {follow.body.map(({ id, boldText, text }, index) => {
          const isLastItem = index === follow.body.length - 1;

          return (
            <p key={id || index} className="contact-page__body">
              {isLastItem ?
                <>
                  {text} <b>{boldText}</b>
                </>
              : <>
                  <b>{boldText}</b> {text}
                </>
              }
            </p>
          );
        })}
      </>
    );
  }

  // Main layout of the contact page
  return (
    <Container>
      <section className="contact-page" aria-labelledby="contact-page">
        <h1 className="contact-page__heading">{heading}</h1>
        <article className="contact-page__content-container">
          <div className="contact-page__content">
            <IntroSection />
            <GetInTouchSection />
            <FollowSection />
          </div>
          <img
            className="contact-page__image"
            src={image.src || "/assets/icons/plantPlazaLogo.png"}
            alt={image.alt || "Logo on contact page"}
          />
        </article>
      </section>
    </Container>
  );
}
