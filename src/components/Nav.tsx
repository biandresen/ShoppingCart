import { NavLink, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import DoubleButton from "./sharedComponents/DoubleButton";

export default function Nav() {
  const navigate = useNavigate();

  const { cartQuantity } = useCart();

  return (
    <nav className="header__nav">
      <ul className="header__nav-links">
        <li className="header__nav-item">
          <NavLink to="/" className="header__nav-link">
            Home
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/product" className="header__nav-link">
            Products
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/about" className="header__nav-link">
            About
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink to="/contact" className="header__nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="header__nav-buttons">
        <DoubleButton
          sectionClass="header"
          firstButtonTitle="Search"
          secondButtonTitle="Help"
        />
        <button
          onClick={() => navigate("/cart")}
          className="header__cart-button"
          type="button"
          aria-label="Open Shopping Cart"
        >
          <img
            className="header__cart-image"
            src="./src/assets/icons/cartIcon.svg"
            alt=""
          />
          <div className="cart-button__number">{cartQuantity}</div>
        </button>
      </div>
    </nav>
  );
}
