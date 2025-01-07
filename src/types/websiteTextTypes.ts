// Define the types using 'export type' for each section of the JSON data

export type ExploreCard = {
  id: number;
  imageUrl: string;
  alt: string;
  title: string;
  body: string;
};

export type ExploreSection = {
  subHeading: string;
  heading: string;
  body: string;
  cards: ExploreCard[];
};

export type TestimonialCardProps = {
  rating: number; // Number of stars
  quote: string; // Testimonial quote
  imageSrc: string; // Profile image source
  alt: string; // Profile image alt text
  name: string; // Author's name
  title: string; // Author's title
};

export type HomePage = {
  heroSection: {
    heading: string;
    body: string;
  };
  discoverSection: {
    heading: string;
    body: string;
  };
  exploreSection: ExploreSection;
  newsletterSection: {
    heading: string;
    body: string;
  };
  shopSection: {
    subHeading: string;
    heading: string;
    body: string;
  };
  testimonialsSection: {
    heading: string;
    body: string;
    testimonialCards: TestimonialCardProps[];
  };
};

export type NavigationLinkProps = {
  to?: string;
  href?: string;
  children: React.ReactNode;
};

export type SocialLinkProps = {
  href: string;
  iconSrc: string;
  alt: string;
  label: string;
};

export type FooterNewsletter = {
  heading?: string;
  body: string;
};

export type QuickLink = {
  to?: string;
  href?: string;
  text: string;
};

export type LinkSection = {
  header: string;
  links: QuickLink[];
};

export type SocialLink = {
  href: string;
  iconSrc: string;
  alt: string;
  label: string;
};

export type SocialLinksSection = {
  header: string;
  links: SocialLink[];
};

export type PolicySection = {
  copyright: string;
  privacy: string;
  terms: string;
  cookies: string;
};

export type Footer = {
  footerNewsletter: FooterNewsletter;
  quickLinks: LinkSection;
  connectLinks: LinkSection;
  socialLinks: SocialLinksSection;
  policy: PolicySection;
};

export type AboutPageContent = {
  id: number;
  boldText: string | null;
  text: string;
};

export type AboutPage = {
  heading: string;
  content: AboutPageContent[];
  image: {
    src: string;
    alt: string;
  };
};

export type ContactPageContent = {
  id: number;
  boldText: string;
  text: string;
};

export type ContactPage = {
  heading: string;
  intro: {
    boldText: string;
    text: string;
  };
  getInTouch: {
    heading: string;
    list: ContactPageContent[];
  };
  follow: {
    heading: string;
    body: ContactPageContent[];
  };
  image: {
    src: string;
    alt: string;
  };
};

export type WebsiteTextData = {
  homePage: HomePage;
  footer: Footer;
  aboutPage: AboutPage;
  contactPage: ContactPage;
};

export type TextContentContextProps = {
  websiteText: WebsiteTextData | undefined;
  isLoading: boolean;
  error: Error | null;
};
