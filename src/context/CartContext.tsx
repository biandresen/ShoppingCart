import { createContext, useContext, useState, useMemo, useEffect } from "react";
import {
  CartItem,
  CartContextType,
  CartProviderProps,
  Product,
} from "../types";
import { useFetch } from "../hooks/useFetch";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const DATA_KEY = "products";
const DATA_URL = "/data/products.json";

const CartContext = createContext({} as CartContextType);

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

// Main component
export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    return getLocalStorage<CartItem[]>("cartItems") || [];
  });
  const [menuIsOpen, setMenuIsOpen] = useState(false); // State for the mobile menu(navbar)
  const [searchResults, setSearchResults] = useState<Product[] | null>(null); // State for search results

  const { data, isLoading, error } = useFetch<{ products: Product[] }>(DATA_KEY, DATA_URL); // Fetch products with custom hook
  const products = data?.products || []; // Extract products from the data

  // Toggle mobile menu(navbar)
  function toggleMenu(alwaysClosed: boolean) {
    if (alwaysClosed) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(!menuIsOpen);
    }
  }

  // Save cart items to local storage
  useEffect(() => {
    setLocalStorage("cartItems", cartItems);
  }, [cartItems]);

  // Calculate cart quantity and total
  const cartQuantity = useMemo(
    () => cartItems.reduce((quantity, item) => item.quantity + quantity, 0),
    [cartItems]
  );

  // Calculate total price of all cart items
  const totalPrice = useMemo(
    () =>
      cartItems.reduce((total, item) => {
        const product = products?.find((p) => p.id === item.id);
        return total + (product?.price || 0) * item.quantity;
      }, 0),
    [cartItems, products]
  );

  // Search products
  function searchProducts(productName: string): void {
    if (!products) return;
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(productName.toLowerCase())
    );
    setSearchResults(filteredProducts);
  }

  // Clear search results
  function resetSearch() {
    setSearchResults(null);
  }

  // Find total items in the cart
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  // Empty the cart
  function emptyCart() {
    setCartItems([]);
  }

  // Increase quantity of a specific cart item
  function increaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  // Decrease quantity of a specific cart item
  function decreaseCartQuantity(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  // Remove a specific item from the cart
  function removeFromCart(id: number) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,       // Function to get quantity of a specific item in the cart
        increaseCartQuantity,  // Function to increase quantity of a specific item in the cart
        decreaseCartQuantity,  // Function to decrease quantity of a specific item in the cart
        removeFromCart,        // Function to remove a specific item from the cart
        cartItems,             // Array of cart items
        cartQuantity,          // Total quantity of all items in the cart
        totalPrice,            // Total price of all items in the cart
        products,              // Array of products
        isLoading,             // Loading state of the products fetched by useFetch custom hook. Built into tanStackQuery
        error,                 // Error state of the products fetched by useFetch custom hook. Built into tanStackQuery
        menuIsOpen,            // State for the mobile menu(navbar)
        toggleMenu,            // Function to toggle the mobile menu(navbar)
        emptyCart,             // Function to empty the cart
        searchProducts,        // Function to search products
        searchResults,         // Array of search results
        resetSearch,           // Function to clear search results
      }}
    >
      {children}              {/* Render children components within the provider */}
    </CartContext.Provider>
  );
}
