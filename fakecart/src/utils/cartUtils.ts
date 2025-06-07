import type { Product } from "../types/Product";

export const updateCartItems = (
  cartItems: { product: Product; quantity: number }[], // the current cart
  product: Product // the product the user just added
): { product: Product; quantity: number }[] => { 
    // return: updated cart array

  // Look for an existing item in the cart with the same product ID
  const existing = cartItems.find(item => item.product.id === product.id);

  // If found, update quantity (max 10), otherwise add new item
  if (existing) {
    return cartItems.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: Math.min(item.quantity + 1, 10) } // increase quantity
        : item
    );
  } else {
    return [...cartItems, { product, quantity: 1 }]; // add new product with quantity 1
  }
};
