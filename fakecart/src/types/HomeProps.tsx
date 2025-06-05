
import type { Product } from "./Product";

export interface HomeProps {
  products?: Product[]; // Optional for HomeDynamic
  addToCart: (product: Product) => void;
}
