
import React, { createContext, useState, ReactNode, useCallback } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.ts";

// Define a type for the items in the shopping cart
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define a type for the shopping cart state
interface ShoppingCart {
  items: CartItem[];
}

// Define a type for the context value, including state and functions
interface ShopContextType {
  items: CartItem[];
  handleAddItemToCart: (id: string) => void;
  handleUpdateCartItemQuantity: (productId: string, amount: number) => void;
}

// Create the context with a default value
const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Define the props type for the provider
interface ShopProviderProps {
  children: ReactNode;
}

// Helper function to find and update cart item
const updateCartItem = (
  items: CartItem[],
  productId: string,
  updateFn: (item: CartItem) => CartItem
) => {
  const index = items.findIndex((item) => item.id === productId);
  if (index === -1) return items; // If the item is not found, return the original array

  const updatedItems = [...items];
  updatedItems[index] = updateFn(updatedItems[index]);
  return updatedItems;
};

// Create the provider component
export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const [shopingCart, setShopingCart] = useState<ShoppingCart>({ items: [] });

  // Function to handle adding an item to the cart
  const handleAddItemToCart = useCallback((id: string) => {
    setShopingCart((prevShoppingCart) => {
      const existingItem = prevShoppingCart.items.find((item) => item.id === id);

      if (existingItem) {
        // Update existing item quantity
        return {
          items: updateCartItem(prevShoppingCart.items, id, (item) => ({
            ...item,
            quantity: item.quantity + 1,
          })),
        };
      } else {
        // Add new item
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        if (product) {
          return {
            items: [
              ...prevShoppingCart.items,
              { id: product.id, name: product.title, price: product.price, quantity: 1 },
            ],
          };
        }
      }

      return prevShoppingCart; // Return unchanged cart if product not found
    });
  }, []);

  // Function to handle updating item quantity in the cart
  const handleUpdateCartItemQuantity = useCallback(
    (productId: string, amount: number) => {
      setShopingCart((prevShoppingCart) => {
        const updatedItems = updateCartItem(
          prevShoppingCart.items,
          productId,
          (item) => ({
            ...item,
            quantity: item.quantity + amount,
          })
        ).filter((item) => item.quantity > 0); // Filter out items with quantity <= 0

        return { items: updatedItems };
      });
    },
    []
  );

  return (
    <ShopContext.Provider
      value={{
        items: shopingCart.items,
        handleAddItemToCart,
        handleUpdateCartItemQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;

