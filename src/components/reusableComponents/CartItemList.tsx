import { Product } from "../../types";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { NavLink } from "react-router-dom";

export default function CartItemCard({ id, name, price }: Product) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="cart-list">
      <div className="cart-list__heading-price-container">
        <h3 className="cart-list__heading">
          <NavLink to={`/products/${id}`}>{name}</NavLink>
        </h3>
        <p className="cart-list__price">
          <data value={price}>{formatCurrency(price * quantity)}</data>
        </p>
      </div>
      <div className="cart-list__counter">
        <button
          onClick={() => decreaseCartQuantity(id)}
          type="button"
          className="button cart-list__delete button--filled"
        >
          Del
        </button>
        <div className="cart-list__count">
          {quantity}
          <button
            onClick={() => removeFromCart(id)}
            className={"button cart-list__quantity-reset"}
            type="button"
            aria-label="reset quantity"
          >
            <img
              className="quantity-reset-icon cart-list__reset-icon"
              src="/assets/icons/trash.svg"
              alt=""
            />
          </button>
        </div>
        <button
          onClick={() => increaseCartQuantity(id)}
          type="button"
          className="button cart-list__add button--filled"
        >
          Add
        </button>
      </div>
    </div>
  );
}
