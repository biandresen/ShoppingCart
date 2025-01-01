import { NavLink, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import DoubleButton from "./sharedComponents/DoubleButton";

type NavProps = {
  menuIsOpen: boolean;
  setMenuIsOpen: (value: boolean | ((prevState: boolean) => boolean)) => void;
};

export default function Nav({ menuIsOpen, setMenuIsOpen }: NavProps) {
  const navigate = useNavigate();

  const { cartQuantity } = useCart();

  return (
    <nav className={menuIsOpen ? "header__nav" : "nav__toggle-hide "}>
      <ul className="header__nav-links">
        <li className="header__nav-item">
          <NavLink
            to="/"
            onClick={() => setMenuIsOpen(false)}
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
            onClick={() => setMenuIsOpen(false)}
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
            onClick={() => setMenuIsOpen(false)}
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
            onClick={() => setMenuIsOpen(false)}
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
          setMenuIsOpen={setMenuIsOpen}
          sectionClass="header"
          firstButtonTitle="Search"
          secondButtonTitle="Help"
        />
        <button
          onClick={() => {
            setMenuIsOpen(false);
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
