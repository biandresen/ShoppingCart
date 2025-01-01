import CartItemCard from "../components/sharedComponents/CartItemCard";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function CartPage() {
  const { cartItems, isLoading, error, totalPrice, products } = useCart();

  if (isLoading)
    return <p className="fetch-error-message"> Loading products...</p>;
  if (error)
    return (
      <p className="fetch-error-message">
        Error fetching products: {(error as Error).message}
      </p>
    );
  if (!products)
    return <p className="fetch-error-message">No products available!</p>;

  return (
    <div className="width-container u-flex-column">
      <section className="cart-section">
        <h1 className="cart-section__heading">CART</h1>
        <div className="cart-section__content">
          <div className="cart-section__total-checkout-container">
            <p className="cart-section__total-price-heading">
              Total:{" "}
              <data className="cart-section__total-price-data">
                {"$" + formatCurrency(totalPrice)}
              </data>
            </p>
            {totalPrice ?
              <button className="button checkout-button" type="button">
                Checkout:{" "}
                <img
                  className="checkout-icon"
                  src="./src/assets/icons/checkout.svg"
                  alt=""
                />
              </button>
            : null}
          </div>
          {cartItems.length > 0 ?
            cartItems.map((item) => {
              const product = products?.find((p) => p.id === item.id);
              if (!product) return null;

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
