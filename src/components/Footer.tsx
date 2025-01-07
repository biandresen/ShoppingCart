import { NavLink } from "react-router-dom";
import SignupForm from "./reusableComponents/SignupForm";
import Logo from "./reusableComponents/Logo";
import { Container } from "./SmallComponents";
import messages from "../utils/messages";
import { useWebsiteText } from "../context/WebsiteTextContext";
import ContentStatusHandler from "./reusableComponents/ContentStatusHandler";

import {
  LinkSection as NavigationLinkGroupProps,
  SocialLinksSection as SocialLinkGroupProps,
  NavigationLinkProps,
  SocialLinkProps,
} from "../types/websiteTextTypes";

export default function Footer() {
  const { websiteText, isLoading, error } = useWebsiteText();

  const contentStatusHandler = (
    <ContentStatusHandler
      isLoading={isLoading}
      error={error}
      websiteText={websiteText}
      loadingMessage={messages.loading.page}
      errorMessage={messages.error.page}
    />
  );

  if (isLoading || error || !websiteText) return contentStatusHandler;

  const { footerNewsletter, quickLinks, connectLinks, socialLinks, policy } =
    websiteText.footer || {};

  // Website section
  const NewsletterSection = () => (
    <div className="footer__newsletter-section">
      <div className="footer__logo-container">
        <Logo
          logoUrl="/assets/icons/plantPlazaLogo.png"
          alt="Plant Plaza Logo"
          imgClass="footer__logo"
        />
        <h3 className="footer__newsletter-heading">
          {footerNewsletter.heading}
        </h3>
      </div>
      <p className="footer__newsletter-body">{footerNewsletter.body}</p>
      <SignupForm formClass="footer" buttonText="Join Now" />
    </div>
  );

  // Local component
  const NavigationLink = ({ href, to, children }: NavigationLinkProps) => {
    return to ?
        <NavLink className="footer__link" to={to}>
          {children}
        </NavLink>
      : <a className="footer__link" href={href}>
          {children}
        </a>;
  };

  // Local component
  const SocialLink = ({ href, iconSrc, alt, label }: SocialLinkProps) => (
    <a className="footer__social-link" href={href}>
      <img className="footer__social-icon" src={iconSrc} alt={alt} />
      <span>{label}</span>
    </a>
  );

  // Local component
  const NavigationLinkGroup = ({
    header,
    links,
  }: NavigationLinkGroupProps): JSX.Element => {
    return (
      <div className="footer__navigation-links">
        <h5 className="footer__link-title">{header}</h5>
        {links.map((link, index) => (
          <NavigationLink
            key={link.text || link.to || link.href || index}
            to={link.to}
            href={link.href}
          >
            {link.text}
          </NavigationLink>
        ))}
      </div>
    );
  };

  // Local component
  const SocialLinkGroup = ({ links }: SocialLinkGroupProps): JSX.Element => {
    return (
      <div className="footer__social-links">
        <h5 className="footer__link-title">Stay Updated</h5>
        {links.map((link, index) => (
          <SocialLink key={index} {...link} />
        ))}
      </div>
    );
  };

  // Website Section
  const LinkSection = () => (
    <div className="footer__link-section">
      {quickLinks && <NavigationLinkGroup {...quickLinks} />}
      {connectLinks && <NavigationLinkGroup {...connectLinks} />}
      {socialLinks && <SocialLinkGroup {...socialLinks} />}
    </div>
  );

  // Website Section
  const PolicySection = () => (
    <div className="footer__policy">
      <hr />
      <div className="footer__policy-content">
        <p className="footer__copyright">{policy?.copyright}</p>
        <div className="footer__policy-links">
          <a className="footer__policy-link" href="/">
            {policy?.privacy}
          </a>
          <a className="footer__policy-link" href="/">
            {policy?.terms}
          </a>
          <a className="footer__policy-link" href="/">
            {policy?.cookies}
          </a>
        </div>
      </div>
    </div>
  );

  // Main content
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
