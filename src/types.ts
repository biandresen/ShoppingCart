import { ReactNode } from "react";

// Page-content-related types
export type DiscoverSectionContent = {
  header: string;
  body: string;
};
export type ExploreSectionContent = {
  subHeading: string;
  heading: string;
  body: string;
  cards: ExploreSectionCard[];
};
export type ExploreSectionCard = {
  id: number;
  imageUrl: string;
  alt: string;
  title: string;
  body: string;
};
export type NavigationLinkGroupProps = {
  header: string;
  links: Array<
    { text: string } & (
      | { to: string; href?: never } // If 'to' is present, 'href' must never be present
      | { href: string; to?: never } // If 'href' is present, 'to' must never be present
    )
  >;
};

export type NavigationLinkProps = {
  href?: string;
  to?: string;
  children: React.ReactNode;
};
export type SocialLinkProps = {
  href: string;
  iconSrc: string;
  alt: string;
  label: string;
};
export type SocialLinkGroupProps = {
  header: string;
  links: SocialLinkProps[];
};
export type FooterSectionContent = {
  quickLinks: NavigationLinkGroupProps;
  connectLinks: NavigationLinkGroupProps;
  socialLinks: SocialLinkGroupProps;
};

export type AboutPageContent = {
  heading: string;
  content: { id: number; boldText: string | null; text: string }[];
  image: { src: string; alt: string };
};

export type ContactPageContent = {
  heading: string;
  intro: { boldText: string; text: string };
  getInTouch: {
    heading: string;
    list: { id: number; boldText: string; text: string }[];
  };
  follow: {
    heading: string;
    body: { id: number; boldText: string; text: string }[];
  };
  image: { src: string; alt: string };
};

// Product-related types
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string; // Optional: URL of the product image
};

export type CartItem = {
  id: number;
  quantity: number;
};

// Context-related types
export type CartProviderProps = {
  children: ReactNode;
};

export type CartContextType = {
  // Methods
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  emptyCart: () => void;
  searchProducts: (productName: string) => void;
  resetSearch: () => void;
  toggleMenu(alwaysClosed?: boolean): void;

  // States
  cartQuantity: number;
  totalPrice: number;
  cartItems: CartItem[];
  products: Product[] | undefined; // Undefined when loading
  isLoading: boolean;
  error: Error | null;
  menuIsOpen: boolean;
  searchResults: Product[] | null;
};

// Component Props
export type DoubleButtonProps = {
  sectionClass: string;
  firstButtonTitle: string;
  secondButtonTitle: string;
};

export type SearchModalProps = {
  isOpen: boolean;
  message: string;
  onSearch: (productName: string) => void;
  onClose: () => void;
  toggleMenu(alwaysClosed?: boolean): void;
};
