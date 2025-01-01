import Logo from "./sharedComponents/Logo";
import Nav from "./Nav";
import { useState } from "react";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <header className="header">
      <div className="header__container width-container">
        <div className="header__branding">
          <Logo
            logoUrl="/src/assets/icons/plantPlazaLogo.png"
            alt="Plant Plaza Logo"
            imgClass="header__logo logo"
            headingClass="header__title"
            heading="PLANT PLAZA"
          />
          <button
            onClick={handleMenu}
            type="button"
            className="header__menu-button button"
          >
            {menuIsOpen ?
              <img
                onClick={handleMenu}
                className="header__menu-icon"
                src="/src/assets/icons/cross.svg"
                alt=""
              />
            : <img
                className="header__menu-icon"
                src="/src/assets/icons/menu.svg"
                alt=""
              />
            }

            {/*  */}
          </button>
        </div>
        <Nav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      </div>
    </header>
  );
}
