import Logo from "./reusableComponents/Logo";
import Nav from "./Nav";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { toggleMenu, menuIsOpen } = useCart();

  return (
    <header className="header">
      <div className="header__container width-container">
        <div className="header__branding">
          <Logo
            logoUrl="/assets/icons/plantPlazaLogo.png"
            alt="Plant Plaza Logo"
            imgClass="header__logo"
            headingClass="header__title"
            heading="PLANT PLAZA"
          />
          <button
            onClick={() => toggleMenu(false)}
            type="button"
            className="header__menu-button button"
          >
            {menuIsOpen ?
              <img
                onClick={() => toggleMenu(false)}
                className="header__menu-icon"
                src="/assets/icons/cross.svg"
                alt=""
              />
            : <img
                className="header__menu-icon"
                src="/assets/icons/menu.svg"
                alt=""
              />
            }

            {/*  */}
          </button>
        </div>
        <Nav />
      </div>
    </header>
  );
}
