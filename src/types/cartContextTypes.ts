
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
