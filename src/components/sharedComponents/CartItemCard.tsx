import { Product } from "../../types";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { NavLink } from "react-router-dom";

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
      <NavLink to={`/products/${id}`}>
        <img
          className="cart-card__image"
          src={imageUrl}
          alt={`product: ${name}`}
          aria-label={`product: ${name}`}
        />
      </NavLink>

      <div className="cart-card__container">
        <div className="cart-card__heading-price-container">
          <h3 className="cart-card__heading">
            <NavLink to={`/products/${id}`}>{name}</NavLink>
          </h3>
          <p className="cart-card__price">
            <data value={price}>
              {"$" + (formatCurrency(price) * quantity).toFixed(2)}
            </data>
          </p>
        </div>
        <div className="cart-card__counter">
          <button
            onClick={() => decreaseCartQuantity(id)}
            type="button"
            className="button cart-card__delete button--filled"
          >
            Del
          </button>
          <div className="cart-card__count">
            {quantity}
            <button
              onClick={() => removeFromCart(id)}
              className={`button quantity-reset-button cart-reset-button ${quantity ? "u-flex-row" : ""}`}
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
            className="button cart-card__add button--filled"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
