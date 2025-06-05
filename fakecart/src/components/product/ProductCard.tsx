import React from 'react'
import type { Product } from '../../types/Product';

// Define the shape of props (this is a TypeScript *type alias*)
// We're saying: every product must have a `name` (string) and a `price` (number)
type ProductCardProps = {
  product: Product;
};

// Define the component and destructure props directly with their type
// This is the preferred, modern style instead of using React.FC

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="border p-4 rounded shadow">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">Rs {product.price}</p>
    </div>
    )
}

export default ProductCard