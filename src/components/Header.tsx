import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container width-container">
        <div className="header__branding">
          <NavLink to="/" aria-label="Plant Plaza Homepage">
            <img
              className="header__logo logo"
              src="./src/assets/icons/plantPlazaLogo.png"
              alt="Plant Plaza Logo"
              loading="lazy"
            />
            <h1 className="header__title">PLANT PLAZA</h1>
          </NavLink>
          <button type="button" className="header__menu-button">
            x
          </button>
        </div>
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
      </div>
    </header>
  );
}
