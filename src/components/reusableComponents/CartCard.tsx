import { Product } from "../../types/cartContextTypes";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { NavLink } from "react-router-dom";
import CartCounter from "./CartCounter";

export default function CartCard({ id, name, price, imageUrl }: Product) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="cart-card">
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
            <data value={price}>{formatCurrency(price * quantity)}</data>
          </p>
        </div>
        <CartCounter
          id={id}
          quantity={quantity}
          onAdd={increaseCartQuantity}
          onRemove={decreaseCartQuantity}
          onReset={removeFromCart}
          className={"cart-card"}
        />
      </div>
    </div>
  );
}
