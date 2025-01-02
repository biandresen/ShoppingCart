import { useEffect } from "react";
import ProductCard from "../components/sharedComponents/ProductCard";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router";

export default function ProductPage() {
  const { products, searchResults, resetSearch, isLoading, error } = useCart();

  const location = useLocation();

  const displayedProducts = searchResults || products;

  //Reset search so that all products show when navigating to /products regardless of search
  useEffect(() => {
    if (location.pathname === "/products") {
      resetSearch();
    }
  }, [location.pathname]);

  if (isLoading)
    return <p className="fetch-error-message">Loading products...</p>;
  if (error)
    return (
      <p className="fetch-error-message">
        Error fetching products: {(error as Error).message}
      </p>
    );

  return (
    <div className="width-container u-flex-column">
      <section className="products-section">
        <h1 className="products-section__heading">
          Look Through All Of Our Fantastic Plants!
        </h1>
        <div className="products-section__content">
          {displayedProducts && displayedProducts.length > 0 ?
            displayedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          : <>
              <p className="no-products-found-message">
                <b>No Products Found.</b> Search Again Or Click Here:
              </p>
              <button
                onClick={resetSearch}
                className={"button button--filled search-failed-button"}
                type="button"
                aria-label={"product search button"}
              >
                All Products
              </button>
            </>
          }
        </div>
      </section>
    </div>
  );
}
