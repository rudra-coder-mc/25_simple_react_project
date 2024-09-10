// Define types for cart items
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define type for shopping cart state
interface ShoppingCartState {
  items: CartItem[];
}

// Define type for product
interface Product {
  id: string;
  title: string;
  price: number;
}

export type { CartItem, ShoppingCartState, Product }
