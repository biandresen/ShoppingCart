import ProductDetailCard from "../components/reusableComponents/ProductDetailCard";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { products, isLoading, error } = useCart();
  const { id } = useParams();

  if (isLoading)
    return <p className="fetch-error-message">Loading products...</p>;
  if (error)
    return (
      <p className="fetch-error-message">
        Error fetching products: {(error as Error).message}
      </p>
    );

  const product = products?.find((p) => p.id === parseInt(id || "", 10));

  if (!product)
    return <p className="fetch-error-message">Product not found.</p>;

  return (
    <div className="width-container u-flex-column">
      <section className="product-detail-page">
        <div className="product-detail-page__content">
          <ProductDetailCard key={product.id} {...product} />
        </div>
      </section>
    </div>
  );
}
