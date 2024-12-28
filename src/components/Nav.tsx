import { NavLink, useNavigate } from "react-router";

export default function Nav() {
  const navigate = useNavigate();

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
        <button
          className="header__button button--outline"
          type="button"
          aria-label="Get Help"
        >
          Help
        </button>
        <button
          className="header__button button--filled"
          type="button"
          aria-label="Search the site"
        >
          Search
        </button>
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
          <div className="cart-button__number">0</div>
        </button>
      </div>
    </nav>
  );
}
