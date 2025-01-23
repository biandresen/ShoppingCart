//* APPLICATION ROUTES AND ERROR HANDLING

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import ProductPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import ProductDetailPage from "../pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
