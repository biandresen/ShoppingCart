import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import StickyCartButton from "../components/StickyCartButton";
import { useWebsiteText } from "../context/WebsiteTextContext";
import ContentStatusHandler from "../components/reusableComponents/ContentStatusHandler";
import messages from "../utils/messages";

export default function RootLayout() {
  const { websiteText, isLoading, error } = useWebsiteText();

  // Handle page content errors on the top level instead of on individual pages.
  // Content passed down to children pages (Outlet) through react-router-dom context
  // and to the footer as a normal prop
  if (isLoading || error || !websiteText) {
    return (
      <ContentStatusHandler
        isLoading={isLoading}
        error={error}
        websiteText={websiteText}
        loadingMessage={messages.loading.page}
        errorMessage={messages.error.page}
      />
    );
  }

  return (
    <>
      <ScrollToTop /> {/* Ensures scroll to top on route change */}
      <Header />
      <main>
        <Outlet context={{ websiteText }} />{" "} {/* Pass websiteText to child pages */}
        <StickyCartButton /> {/* Sticky cart button on narrow devices */}
      </main>
      <Footer websiteText={websiteText} />
    </>
  );
}
