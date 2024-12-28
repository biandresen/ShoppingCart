import { createContext, useContext, ReactNode, useState, useMemo } from "react";
import { CartItem, CartContextType, CartProviderProps } from "../types";
import { useFetch } from "../hooks/useFetch";

const CartContext = createContext({} as CartContextType);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const {
    data: products,
    isLoading,
    error,
  } = useFetch("products", "http://localhost:5000/products");

  const cartQuantity = useMemo(
    () => cartItems.reduce((quantity, item) => item.quantity + quantity, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () =>
      cartItems.reduce((total, item) => {
        const product = products?.find((p) => p.id === item.id);
        return total + (product?.price || 0) * item.quantity;
      }, 0),
    [cartItems, products]
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        totalPrice,
        products,
        isLoading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
