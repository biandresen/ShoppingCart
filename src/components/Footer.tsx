import { NavLink } from "react-router-dom";
import SignupForm from "./sharedComponents/SignupForm";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="width-container u-flex-column">
        <div className="footer__container">
          <div className="footer__info-field">
            <div className="footer__website-summary">
              <div className="footer__logo-container">
                <a
                  href="/"
                  className="footer__logo"
                  aria-label="Plant Plaza Homepage"
                >
                  <img
                    className="footer__logo-image logo"
                    src="./src/assets/icons/plantPlazaLogo.png"
                    alt="Plant Plaza Logo"
                    width="40px"
                  />
                </a>
              </div>
              <p className="footer__description">
                Subscribe to our newsletter for the latest updates on features
                and new product.
              </p>
              <SignupForm formClass="footer" buttonText="Join Now" />
            </div>
            <div className="footer__links-container">
              <div className="footer__links-group">
                <h5 className="footer__links-title">Quick Links</h5>
                <NavLink className="footer__link" to="/">
                  Home
                </NavLink>
                <NavLink className="footer__link" to="/products">
                  Products
                </NavLink>
                <NavLink className="footer__link" to="/about">
                  About
                </NavLink>
                <NavLink className="footer__link" to="/contact">
                  Contact
                </NavLink>
                <NavLink className="footer__link" to="/cart">
                  Cart
                </NavLink>
              </div>
              <div className="footer__links-group">
                <h5 className="footer__links-title">Connect With Us</h5>
                <a className="footer__link" href="/">
                  Blog Posts
                </a>
                <a className="footer__link" href="/">
                  Support Center
                </a>
                <a className="footer__link" href="/">
                  Careers
                </a>
                <a className="footer__link" href="/">
                  Community
                </a>
                <a className="footer__link" href="/">
                  Events
                </a>
              </div>
              <div className="footer__social-links">
                <h5 className="footer__links-title">Stay Updated</h5>
                <a className="footer__social-link" href="/">
                  <img
                    className="footer__social-icon"
                    src="./src/assets/icons/facebook.svg"
                    alt="Facebook Icon"
                    width="24"
                  />
                  <span>Facebook</span>
                </a>
                <a className="footer__social-link" href="/">
                  <img
                    className="footer__social-icon"
                    src="./src/assets/icons/instagram.svg"
                    alt="Instagram Icon"
                    width="24"
                  />
                  <span>Instagram</span>
                </a>
                <a className="footer__social-link" href="/">
                  <img
                    className="footer__social-icon"
                    src="./src/assets/icons/x.svg"
                    alt="Twitter/X Icon"
                    width="24"
                  />
                  <span>X</span>
                </a>
                <a className="footer__social-link" href="/">
                  <img
                    className="footer__social-icon"
                    src="./src/assets/icons/linkedIn.svg"
                    alt="LinkedIn Icon"
                    width="24"
                  />
                  <span>LinkedIn</span>
                </a>
                <a className="footer__social-link" href="/">
                  <img
                    className="footer__social-icon"
                    src="./src/assets/icons/youtube.svg"
                    alt="YouTube Icon"
                    width="24"
                  />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer__policy">
            <hr />
            <div className="footer__policy-content">
              <p className="footer__copyright">
                © 2024 Plant Plaza. All rights reserved.
              </p>
              <div className="footer__policy-links">
                <a className="footer__policy-link" href="/">
                  Privacy Policy
                </a>
                <a className="footer__policy-link" href="/">
                  Terms of Service
                </a>
                <a className="footer__policy-link" href="/">
                  Cookie Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
