// ENTRY POINT OF THE APPLICATION

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./context/CartContext";
import AppRouter from "./routes/AppRouter";

// Initialize React Query Client
const queryClient = new QueryClient();

// Render the application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
);
