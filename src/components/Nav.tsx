import { NavLink, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import DoubleButton from "./sharedComponents/DoubleButton";

export default function Nav() {
  const navigate = useNavigate();

  const { cartQuantity, menuIsOpen, toggleNavBar } = useCart();

  return (
    <nav className={menuIsOpen ? "header__nav" : "nav__toggle-hide "}>
      <ul className="header__nav-links">
        <li className="header__nav-item">
          <NavLink
            to="/"
            onClick={() => toggleNavBar(false)}
            className={({ isActive }) =>
              isActive ? "active-link header__nav-link" : "header__nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/products"
            onClick={() => toggleNavBar(false)}
            className={({ isActive }) =>
              isActive ? "active-link header__nav-link" : "header__nav-link"
            }
          >
            Products
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/about"
            onClick={() => toggleNavBar(false)}
            className={({ isActive }) =>
              isActive ? "active-link header__nav-link" : "header__nav-link"
            }
          >
            About
          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/contact"
            onClick={() => toggleNavBar(false)}
            className={({ isActive }) =>
              isActive ? "active-link header__nav-link" : "header__nav-link"
            }
          >
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
          onClick={() => {
            toggleNavBar(false);
            navigate("/cart");
          }}
          className="header__cart-button"
          type="button"
          aria-label="Open Shopping Cart"
        >
          <img
            className="header__cart-image"
            src="/src/assets/icons/cartIcon.svg"
            alt=""
          />
          {cartQuantity ?
            <div className="cart-button__number">{cartQuantity}</div>
          : null}
        </button>
      </div>
    </nav>
  );
}
