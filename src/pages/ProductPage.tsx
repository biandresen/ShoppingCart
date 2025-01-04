import { useEffect, useState } from "react";
import ProductCard from "../components/reusableComponents/ProductCard";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router";
import Modal from "../components/reusableComponents/Modal";

export default function ProductPage() {
  const [infoButtonIsOpen, setInfoButtonIsOpen] = useState(false);
  const [isPulsingProduct, setIsPulsingProduct] = useState(true);

  const { products, searchResults, resetSearch, isLoading, error } = useCart();

  const location = useLocation();

  const displayedProducts = searchResults || products;

  //Reset search so that all products show when navigating to /products regardless of search
  useEffect(() => {
    if (location.pathname === "/products") {
      resetSearch();
    }
  }, [location.pathname]);

  if (isLoading || !displayedProducts)
    return <p className="fetch-error-message">Loading products...</p>;
  if (error)
    return (
      <p className="fetch-error-message">
        Error fetching products: {(error as Error).message}
      </p>
    );

  return (
    <div className="width-container u-flex-column">
      <section className="products-page">
        <h1 className="products-page__heading">
          Look Through All Of Our Fantastic Plants!
        </h1>
        <div className="products-page__content">
          {searchResults && (
            <button
              onClick={resetSearch}
              className={"button button--filled products-page__all-products-button"}
              type="button"
              aria-label={"product search button"}
            >
              Show All Products
            </button>
          )}
          <button
            type="button"
            className={`info-button button products-page__info-button  ${
              isPulsingProduct ? "animation__pulse" : ""
            }`}
            onClick={() => setInfoButtonIsOpen(true)}
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
          {displayedProducts && displayedProducts.length > 0 ?
            displayedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          : <p className="products-page__no-products-found-message">
              <b>No Products Found.</b> Search Again Or "Show All Products"
            </p>
          }
        </div>
      </section>
    </div>
  );
}
