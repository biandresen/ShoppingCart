import { ReactNode } from "react";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
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
};

export type DoubleButtonProps = {
  sectionClass: string;
  firstButtonTitle: string;
  secondButtonTitle: string;
};
