import { logger } from "../../utils/logger";
import messages from "../../utils/messages";
import {
  FetchErrorMessage,
  LoadingMessage,
} from "../../components/SmallComponents";

type ContentStatusHandlerProps = {
  isLoading: boolean;
  error: any;
  websiteText: any;
  loadingMessage?: string;
  errorMessage?: string;
};

// This component checks if the content is loading or if there is an error
export default function ContentStatusHandler({
  isLoading,
  error,
  websiteText,
  loadingMessage = messages.loading.default || "Loading content...",
  errorMessage = messages.error.default ||
    "There was an error fetching the content.",
}: ContentStatusHandlerProps) {
  if (isLoading || !websiteText) {
    return <LoadingMessage message={loadingMessage} />;
  }

  if (error) {
    // Logging error for debugging
    logger.error("Error fetching content", error);
    return <FetchErrorMessage message={errorMessage} />;
  }

  return null; // This component doesn't render anything if no error or loading state
}
