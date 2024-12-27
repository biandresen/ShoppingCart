import Logo from "./sharedComponents/Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container width-container">
        <div className="header__branding">
          <Logo
            logoUrl="./src/assets/icons/plantPlazaLogo.png"
            alt="Plant Plaza Logo"
            imgClass="header__logo logo"
            headingClass="header__title"
            heading="PLANT PLAZA"
          />
          <button type="button" className="header__menu-button">
            x
          </button>
        </div>
        <Nav />
      </div>
    </header>
  );
}
