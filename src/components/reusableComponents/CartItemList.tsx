import { Product } from "../../types/cartContextTypes";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { NavLink } from "react-router-dom";
import CartCounter from "./CartCounter";

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
      <CartCounter
        id={id}
        quantity={quantity}
        onAdd={increaseCartQuantity}
        onRemove={decreaseCartQuantity}
        onReset={removeFromCart}
        className={"cart-list"}
      />
    </div>
  );
}
