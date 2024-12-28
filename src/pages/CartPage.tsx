import CartItemCard from "../components/sharedComponents/CartItemCard";
import { useFetch } from "../hooks/useFetch";

export default function CartPage() {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("products", "http://localhost:4000/products");

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {(error as Error).message}</p>;

  return (
    <div className="width-container u-flex-column">
      <section className="cart-section">
        <h1 className="cart-section__heading">CART</h1>
        <div className="cart-section__content">
          <p className="cart-section__total-price-heading">
            Total: <data className="cart-section__total-price-data">$100</data>
          </p>
          {products?.map((product) => (
            <CartItemCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
