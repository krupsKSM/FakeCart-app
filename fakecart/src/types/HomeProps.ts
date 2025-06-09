
import type { Product } from "./Product";

export interface HomeProps {
  products?: Product[]; // Optional for HomeDynamic
  // addToCart() becomes reduntant once we use CartContext as this is 
  // Now consumed from CartContext using useCart()
  // addToCart: (product: Product) => void;
}

// We remove props like addToCart and consume them directly from context using a custom hook like useCart(), which improves modularity and reduces prop bloat."
