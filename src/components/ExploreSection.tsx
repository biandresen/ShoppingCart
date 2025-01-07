import { useFetch } from "../hooks/useFetch";
import { ExploreSectionContent } from "../types";
import { logger } from "../utils/logger";
import messages from "../utils/messages";
import DoubleButton from "./reusableComponents/DoubleButton";
import { FetchErrorMessage, LoadingMessage } from "./SmallComponents";
import ExploreSectionCard from "./ExploreSectionCard";

// Constants for fetching explore section content
const DATA_KEY = "exploreSectionContent";
const DATA_URL = "/data/exploreSectionContent.json";

export default function ExploreSection() {
  // Fetch explore section content with custom hook
  const {
    data: exploreSectionContent,
    isLoading,
    error,
  } = useFetch<ExploreSectionContent>(DATA_KEY, DATA_URL);

  // Handle loading state
  if (isLoading || !exploreSectionContent) {
    return (
      <LoadingMessage message={messages.loading.page || "Loading content..."} />
    );
  }

  if (error) {
    // Logging error for debugging
    logger.error("Error fetching explore section content", error);
    return (
      <FetchErrorMessage
        message={
          messages.error.page || "There was an error fetching the content."
        }
      />
    );
  }

  // Destructure content with fallback values
  const {
    subHeading = "Explore",
    heading = "Discover a Seamless Shopping Experience",
    body = "Easy and intuitive shopping experience",
    cards = [],
  } = exploreSectionContent;

  // Render main content
  return (
    <section className="explore-section">
      <div className="width-container u-flex-column">
        <div className="explore-section__content">
          <div className="explore-section__text">
            <h5 className="explore-section__subheading">{subHeading}</h5>
            <h2 className="explore-section__heading">{heading}</h2>
            <p className="explore-section__body">{body}</p>
          </div>
          <div className="explore-section__cards">
            {/* Render each card dynamically */}
            {cards.map((card, index) => (
              <ExploreSectionCard key={card.id || index} {...card} />
            ))}
          </div>
          <DoubleButton
            sectionClass="explore-section"
            firstButtonTitle="Products"
            secondButtonTitle="Help"
          />
        </div>
      </div>
    </section>
  );
}
