import DoubleButton from "./reusableComponents/DoubleButton";
import { DiscoverSectionContent } from "../types";
import { useFetch } from "../hooks/useFetch";
import { FetchErrorMessage, LoadingMessage } from "./SmallComponents";
import messages from "../utils/messages";
import { logger } from "../utils/logger";

// Constants for fetching discover section content
const DATA_KEY = "discoverSection";
const DATA_URL = "/data/discoverSectionContent.json";

// DiscoverSection Component
// This section highlights what you can do on the website
// and provides a call to action with two buttons (Products and Help)
export default function DiscoverSection() {
  // Fetch discover section content with custom hook
  const {
    data: discoverSectionContent,
    isLoading,
    error,
  } = useFetch<DiscoverSectionContent>(DATA_KEY, DATA_URL);

  if (isLoading || !discoverSectionContent)
    return (
      <LoadingMessage message={messages.loading.page || "Loading content..."} />
    );

  if (error) {
    // Logging error for debugging
    logger.error("Error fetching about page content", error);
    return (
      <FetchErrorMessage
        message={
          messages.error.page || "There was an error fetching the content."
        }
      />
    );
  }

  // Destructure content with a fallback
  const {
    header = "Discover Your Next Favorite Plants Today!",
    body = "Explore our selection of products.",
  } = discoverSectionContent || {};

  return (
    <section className="discover-section">
      <div className="discover-section__content">
        <h2 className="discover-section__heading">{header}</h2>
        <div className="discover-section__text-container">
          <p className="discover-section__text">{body}</p>
          {/* Buttons to navigate to Products or Help */}
          <DoubleButton
            sectionClass="discover-section"
            firstButtonTitle="Products"
            secondButtonTitle="Help"
          />
        </div>
      </div>
    </section>
  );
}
