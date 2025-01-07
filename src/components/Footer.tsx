import { NavLink } from "react-router-dom";
import SignupForm from "./reusableComponents/SignupForm";
import Logo from "./reusableComponents/Logo";
import {
  Container,
  FetchErrorMessage,
  LoadingMessage,
} from "./SmallComponents";
import {
  NavigationLinkGroupProps,
  SocialLinkProps,
  SocialLinkGroupProps,
  NavigationLinkProps,
  FooterSectionContent,
} from "../types";
import { useFetch } from "../hooks/useFetch";
import messages from "../utils/messages";
import { logger } from "../utils/logger";

// Constants for fetching explore section content
const DATA_KEY = "footerContent";
const DATA_URL = "/data/footerSectionContent.json";

function NewsletterSection(): JSX.Element {
  return (
    <div className="footer__newsletter-section">
      <div className="footer__logo-container">
        <Logo
          logoUrl="/assets/icons/plantPlazaLogo.png"
          alt="Plant Plaza Logo"
          imgClass="footer__logo"
        />
      </div>
      <p className="footer__newsletter-body">
        Subscribe to our newsletter for the latest updates on features and new
        product.
      </p>
      <SignupForm formClass="footer" buttonText="Join Now" />
    </div>
  );
}

const NavigationLink = ({ href, to, children }: NavigationLinkProps) => {
  return to ?
      <NavLink className="footer__link" to={to}>
        {children}
      </NavLink>
    : <a className="footer__link" href={href}>
        {children}
      </a>;
};

const SocialLink = ({ href, iconSrc, alt, label }: SocialLinkProps) => (
  <a className="footer__social-link" href={href}>
    <img className="footer__social-icon" src={iconSrc} alt={alt} />
    <span>{label}</span>
  </a>
);

function NavigationLinkGroup(navigationSection: NavigationLinkGroupProps): JSX.Element {
  return (
    <div className="footer__navigation-links">
      <h5 className="footer__link-title">{navigationSection.header}</h5>
      {navigationSection.links.map((link, index) => (
        <NavigationLink key={link.text || link.to || link.href || index} to={link.to}>
          {link.text}
        </NavigationLink>
      ))}
    </div>
  );
}

function SocialLinkGroup(socialSection: SocialLinkGroupProps): JSX.Element {
  return (
    <div className="footer__social-links">
      <h5 className="footer__link-title">Stay Updated</h5>
      {socialSection.links.map((link, index) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
}

function LinkSection() {
  // Fetch explore section content with custom hook
  const {
    data: footerSectionContent,
    isLoading,
    error,
  } = useFetch<FooterSectionContent>(DATA_KEY, DATA_URL);

  const { quickLinks, connectLinks, socialLinks } = footerSectionContent || {};

  // Handle loading state
  if (isLoading || !footerSectionContent) {
    return (
      <LoadingMessage message={messages.loading.page || "Loading content..."} />
    );
  }

  if (error) {
    // Logging error for debugging
    logger.error(`Error fetching content from ${DATA_URL}:`, error);
    return (
      <FetchErrorMessage
        message={
          messages.error.page || "There was an error fetching the content."
        }
      />
    );
  }

  return (
    <div className="footer__link-section">
      {quickLinks && <NavigationLinkGroup {...quickLinks} />}
      {connectLinks && <NavigationLinkGroup {...connectLinks} />}
      {socialLinks && <SocialLinkGroup {...socialLinks} />}
    </div>
  );
}

function PolicySection() {
  return (
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
  );
}

// Main footer content
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__container">
          <div className="footer__content">
            <NewsletterSection />
            <LinkSection />
          </div>
          <PolicySection />
        </div>
      </Container>
    </footer>
  );
}
