import React from 'react'
import type { Product } from '../../types/Product';

// Define the shape of props (this is a TypeScript *type alias*)
// We're saying: every product must have a `name` (string) and a `price` (number)
type ProductCardProps = {
    product: Product;
    addToCart: (product: Product) => void;
};

// Define the component and destructure props directly with their type
// This is the preferred, modern style instead of using React.FC

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="border p-4 rounded shadow">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">Rs {product.price}</p>
            <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
        </div>
    )
}

export default ProductCard