import { useEffect, useState } from "react";
import ProductCard from "../components/reusableComponents/ProductCard";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router";
import Modal from "../components/reusableComponents/Modal";
import {
  Container,
  FetchErrorMessage,
  LoadingMessage,
} from "../components/SmallComponents";
import { logger } from "../utils/logger";
import messages from "../utils/messages";

export default function ProductPage() {
  const [infoButtonIsOpen, setInfoButtonIsOpen] = useState(false); // Modal state for the info button
  const [isPulsingProduct, setIsPulsingProduct] = useState(true); // Button animation state for visual feedback

  const { products, searchResults, resetSearch, isLoading, error } = useCart(); // Extracting data from CartContext

  const location = useLocation(); // Get current page location

  const displayedProducts = searchResults || products; // Display search results if available, or all products

  // Reset search when navigating to /products so all products are shown
  useEffect(() => {
    if (location.pathname === "/products") {
      resetSearch();
    }
  }, [location.pathname]);

  if (isLoading) {
    return (
      <LoadingMessage
        message={messages.loading.products || "Loading products..."}
      />
    );
  }

  if (error) {
    // Logging error for debugging
    logger.error("Error fetching products", error);
    return (
      <FetchErrorMessage
        message={
          messages.error.product || "There was an error fetching the products."
        }
      />
    );
  }

  // Render button to reset search
  function ResetSearchButton(): JSX.Element | null {
    if (!searchResults) return null;

    return (
      <button
        onClick={resetSearch}
        className="button button--filled products-page__all-products-button"
        type="button"
        aria-label="Reset product search to show all products"
      >
        Show All Products
      </button>
    );
  }

  // Render the info button and modal
  function InfoButton(): JSX.Element {
    return (
      <>
        <button
          type="button"
          className={`info-button button products-page__info-button ${
            isPulsingProduct ? "animation__pulse" : ""
          }`}
          onClick={() => setInfoButtonIsOpen(true)}
          aria-label="Product info button"
        >
          ?
        </button>
        <Modal
          isOpen={infoButtonIsOpen}
          onClose={() => {
            setInfoButtonIsOpen(false);
            setIsPulsingProduct(false);
          }}
          message="Click image or title for product details."
        />
      </>
    );
  }

  // Render the list of products or a no-products message
  function ProductList(): JSX.Element {
    if (!displayedProducts || displayedProducts.length === 0) {
      return (
        <p className="products-page__no-products-found-message">
          <b>No Products Found.</b> Search Again Or "Show All Products"
        </p>
      );
    }

    return (
      <>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </>
    );
  }

  // Main content
  return (
    <Container>
      <section className="products-page">
        <h1 className="products-page__heading">
          Look Through All Of Our Fantastic Plants!
        </h1>
        <div className="products-page__content">
          <ResetSearchButton />
          <InfoButton />
          <ProductList />
        </div>
      </section>
    </Container>
  );
}
