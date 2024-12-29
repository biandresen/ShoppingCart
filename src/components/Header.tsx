import Logo from "./sharedComponents/Logo";
import Nav from "./Nav";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  function handleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMenuIsOpen(true); // Reset nav state for larger screens
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <Nav menuIsOpen={menuIsOpen} />
      </div>
    </header>
  );
}
