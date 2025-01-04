import { ReactNode } from "react";

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
  toggleNavBar(alwaysClosed?: boolean): void;

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
  toggleNavBar(alwaysClosed?: boolean): void;
};
