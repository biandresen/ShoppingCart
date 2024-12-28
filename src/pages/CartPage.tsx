import CartItemCard from "../components/sharedComponents/CartItemCard";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function CartPage() {
  const { cartItems, isLoading, error, totalPrice, products } = useCart();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {(error as Error).message}</p>;
  if (!products) return <p>No products available!</p>;

  return (
    <div className="width-container u-flex-column">
      <section className="cart-section">
        <h1 className="cart-section__heading">CART</h1>
        <div className="cart-section__content">
          <p className="cart-section__total-price-heading">
            Total:{" "}
            <data className="cart-section__total-price-data">
              {"$" + formatCurrency(totalPrice)}
            </data>
          </p>
          {cartItems.length > 0 ?
            cartItems.map((item) => {
              const product = products?.find((p) => p.id === item.id);
              if (!product) return null; // If no match, skip rendering

              return <CartItemCard key={product.id} {...product} />;
            })
          : <p className="cart-section__no-items-message">
              No items in cart yet...
            </p>
          }
        </div>
      </section>
    </div>
  );
}
