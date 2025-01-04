import ProductDetailCard from "../components/reusableComponents/ProductDetailCard";
import {
  Container,
  FetchErrorMessage,
  LoadingMessage,
} from "../components/SmallComponents";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { logger } from "../utils/logger";
import messages from "../utils/messages";

export default function ProductDetailPage() {
  const { products, isLoading, error } = useCart();
  const { id } = useParams();

  if (isLoading) {
    return (
      <LoadingMessage
        message={messages.loading.products || "Loading product details..."}
      />
    );
  }

  if (error) {
    // Logging error for debugging
    logger.error(`Error fetching product details for product id: ${id}`, error);
    return (
      <FetchErrorMessage
        message={
          messages.error.product ||
          "There was an error fetching the product details."
        }
      />
    );
  }

  const product = products?.find((p) => p.id === parseInt(id || "", 10));

  if (!product) {
    return (
      <FetchErrorMessage
        message={
          messages.error.product || "Product not found. Please try again later."
        }
      />
    );
  }
  return (
    <Container>
      <section className="product-detail-page" aria-labelledby="product-detail">
        <div className="product-detail-page__content">
          <ProductDetailCard key={product.id} {...product} />
        </div>
      </section>
    </Container>
  );
}
