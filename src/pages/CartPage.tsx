import { useState } from "react";
import CartItemCard from "../components/reusableComponents/CartCard";
import CartItemList from "../components/reusableComponents/CartItemList";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";
import { useNavigate } from "react-router";
import Modal from "../components/reusableComponents/Modal";

export default function CartPage() {
  const [listMode, setListMode] = useState(false);
  const [infoButtonIsOpen, setInfoButtonIsOpen] = useState(false);
  const [isPulsingButton, setIsPulsingButton] = useState(true);
  const { cartItems, isLoading, error, totalPrice, products, emptyCart } =
    useCart();

  const navigate = useNavigate();

  function handleListMode() {
    setListMode(!listMode);
  }

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
        <div className="cart-section__content-container">
          <div className="cart-section__total-checkout-container">
            {totalPrice ?
              <p className="cart-section__total-price-heading">
                Total:{" "}
                <data className="cart-section__total-price-data">
                  {formatCurrency(totalPrice)}
                </data>
              </p>
            : null}
            {totalPrice ?
              <button
                className="button cart-section__checkout-button"
                type="button"
              >
                Checkout:{" "}
                <img
                  className="cart-section__checkout-icon"
                  src="/assets/icons/checkout.svg"
                  aria-label="checkout"
                  alt=""
                />
              </button>
            : null}
          </div>
          {totalPrice ?
            <>
              <button
                onClick={emptyCart}
                type="button"
                className="cart-section__empty-cart-button button"
              >
                <img
                  className="quantity-reset-icon"
                  src="/assets/icons/trash.svg"
                  aria-label="empty cart"
                  alt=""
                />
              </button>
              <button
                type="button"
                className={`info-button cart-section__info-button button ${
                  isPulsingButton ? "animation__pulse" : ""
                }`}
                onClick={() => setInfoButtonIsOpen(true)}
                aria-label='info: Click "Trash" to empty cart. Click "Layout:" to change the layout.'
              >
                ?
              </button>
              <Modal
                isOpen={infoButtonIsOpen}
                onClose={() => {
                  setInfoButtonIsOpen(false);
                  setIsPulsingButton(false);
                }}
                message='Click "Trash" to empty cart. Click "Layout:" to change the layout.'
              />
              <button
                onClick={handleListMode}
                type="button"
                className="cart-section__list-layout-button button"
                aria-label="change visual layout of products"
              >
                {`Layout: ${listMode ? "List" : "Card"}`}
              </button>
            </>
          : null}
          <div
            className={
              listMode && totalPrice ?
                "cart-section__cart-list-container"
              : "cart-section__no-items-container"
            }
          >
            {cartItems.length > 0 ?
              cartItems.map((item) => {
                const product = products?.find((p) => p.id === item.id);
                if (!product) return null;
                if (listMode) {
                  return <CartItemList key={product.id} {...product} />;
                } else {
                  return <CartItemCard key={product.id} {...product} />;
                }
              })
            : <>
                <p className="cart-section__no-items-message">
                  No Products In Cart Yet...
                </p>
                <button
                  onClick={() => {
                    navigate("/products");
                  }}
                  className={
                    "button button--filled cart-section__search-button"
                  }
                  type="button"
                  aria-label={"product search button"}
                >
                  Find Products
                </button>
              </>
            }
          </div>
        </div>
      </section>
    </div>
  );
}
