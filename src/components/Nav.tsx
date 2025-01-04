import { NavLink, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import DoubleButton from "./reusableComponents/DoubleButton";

export default function Nav() {
  const navigate = useNavigate();

  const { cartQuantity, menuIsOpen, toggleMenu } = useCart();

  return (
    <nav className={menuIsOpen ? "nav" : "nav__toggle-hide"}>
      <ul className="nav__links">
        <li className="nav__list-item">
          <NavLink
            to="/"
            onClick={() => toggleMenu(false)}
            className={({ isActive }) =>
              isActive ? "active-link nav__link" : "nav__link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/products"
            onClick={() => toggleMenu(false)}
            className={({ isActive }) =>
              isActive ? "active-link nav__link" : "nav__link"
            }
          >
            Products
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/about"
            onClick={() => toggleMenu(false)}
            className={({ isActive }) =>
              isActive ? "active-link nav__link" : "nav__link"
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink
            to="/contact"
            onClick={() => toggleMenu(false)}
            className={({ isActive }) =>
              isActive ? "active-link nav__link" : "nav__link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="nav__buttons-container">
        <DoubleButton
          sectionClass="nav"
          firstButtonTitle="Search"
          secondButtonTitle="Help"
        />
        <button
          onClick={() => {
            toggleMenu(false);
            navigate("/cart");
          }}
          className="button cart-button"
          type="button"
          aria-label="Open Shopping Cart"
        >
          <img
            className="cart-image"
            src="/assets/icons/cartIcon.svg"
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
