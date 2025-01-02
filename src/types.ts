import { ReactNode } from "react";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
};

export type CartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type CartContextType = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  totalPrice: number;
  cartItems: CartItem[];
  products: Product[] | undefined;
  isLoading: boolean;
  error: Error | null;
  menuIsOpen: boolean;
  toggleNavBar(alwaysClosed?: boolean): void;
  emptyCart: () => void;
  searchProducts: (productName: string) => void;
  searchResults: Product[] | null;
  resetSearch: () => void;
};

export type DoubleButtonProps = {
  sectionClass: string;
  firstButtonTitle: string;
  secondButtonTitle: string;
};

export type SearchModalProps = {
  isOpen: boolean;
  onSearch: (productName: string) => void;
  onClose: () => void;
  message: string;
  toggleNavBar(alwaysClosed?: boolean): void;
};
