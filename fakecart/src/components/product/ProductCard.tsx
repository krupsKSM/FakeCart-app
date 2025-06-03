import React from 'react'

// Define the shape of props (this is a TypeScript *type alias*)
// We're saying: every product must have a `name` (string) and a `price` (number)
type ProductProps = {
    name: string;
    price: number;

};

// Define the component and destructure props directly with their type
// This is the preferred, modern style instead of using React.FC

const ProductCard = ({ name, price }: ProductProps) => {
    return (
        <div className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-gray-600">Rs {price}</p>
        </div>
    )
}

export default ProductCard