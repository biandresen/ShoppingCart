import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function StickyCartButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartQuantity } = useCart();

  // Hide the button on the cart page
  if (location.pathname === "/cart") return null;

  return (
    <button
      type="button"
      onClick={() => navigate("/cart")}
      className="button sticky-cart-button header__cart-button"
      aria-label="Open Shopping Cart"
    >
      <img
        className="header__cart-image sticky-cart-image"
        src="/assets/icons/cartIcon.svg"
        alt=""
      />
      {cartQuantity ?
        <div className="cart-button__number">{cartQuantity}</div>
      : null}
    </button>
  );
}
