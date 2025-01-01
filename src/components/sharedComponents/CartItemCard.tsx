import { Product } from "../../types";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";

export default function CartItemCard({ id, name, price, imageUrl }: Product) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="cart-section__card">
      <img
        className="cart-card__image"
        src={imageUrl}
        alt={`product: ${name}`}
        aria-label={`product: ${name}`}
      />
      <div className="cart-card__container">
        <div className="cart-card__heading-price-container">
          <h3 className="cart-card__heading">{name}</h3>
          <p className="cart-card__price">
            <data value={price}>{"$" + formatCurrency(price) * quantity}</data>
          </p>
        </div>
        <div className="cart-card__counter">
          <button
            onClick={() => decreaseCartQuantity(id)}
            type="button"
            className="cart-card__delete button--filled"
          >
            Del
          </button>
          <div className="cart-card__count">
            {quantity}
            <button
              onClick={() => removeFromCart(id)}
              className={`quantity-reset ${quantity ? "u-flex-row" : ""}`}
              type="button"
              aria-label="reset quantity"
            >
              <img
                className="quantity-reset-icon"
                src="/assets/icons/trash.svg"
                alt=""
              />
            </button>
          </div>
          <button
            onClick={() => increaseCartQuantity(id)}
            type="button"
            className="cart-card__add button--filled"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
