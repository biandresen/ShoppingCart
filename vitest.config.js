import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Use global APIs like `describe` and `it`
    environment: "jsdom", // Simulate a browser-like environment
    coverage: {
      reporter: ["text", "json", "html"], // Enable coverage reporting
    },
  },
});
