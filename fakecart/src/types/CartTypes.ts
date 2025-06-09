// 
//  - A CartItem extends Product by adding quantity.
//  - This allows us to track how many of each product is added to the cart.
//  

import type { Product } from "./Product";

export interface CartItem extends Product {
  quantity: number;
}