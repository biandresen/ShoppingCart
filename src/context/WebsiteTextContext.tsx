// Import types
import { createContext, useContext, ReactNode } from "react";
import { WebsiteTextData, TextContentContextProps } from "../types/websiteTextTypes";
import { useFetch } from "../hooks/useFetch";

// Define constants
const DATA_KEY = "websiteText";
const DATA_URL = "/data/websiteText.json";

// Create context with the updated type
const WebsiteTextContext = createContext<TextContentContextProps>({
  websiteText: undefined,
  isLoading: false,
  error: null
});

// Custom hook to use the website text context
export function useWebsiteText() {
  const context = useContext(WebsiteTextContext);
  if (!context) {
    throw new Error("useWebsiteText must be used within a WebsiteTextProvider");
  }
  return context;
}

// Main component
export function WebsiteTextProvider({ children }: { children: ReactNode }) {
  // Fetch website text data with custom hook
  const { data: websiteText, isLoading, error } = useFetch<WebsiteTextData>(DATA_KEY, DATA_URL);

  return (
    <WebsiteTextContext.Provider value={{ websiteText, isLoading, error }}>
      {children}
    </WebsiteTextContext.Provider>
  );
}
