import ProductCard from "../components/sharedComponents/ProductCard";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { products, isLoading, error } = useCart();

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
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
