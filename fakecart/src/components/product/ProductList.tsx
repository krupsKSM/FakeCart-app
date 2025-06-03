import React from 'react'
import ProductCard from './ProductCard';

//  Define a TypeScript type for product objects
// What: This ensures each product has consistent structure: id (number), name (string), price (number)
// Why: Type safety improves developer experience and avoids bugs

type Product = {
    id: number;
    name: string;
    price: number;
}

// Fake product data
// What: An array of products we want to display in our app
// Why: Used to simulate real-world data before integrating with a backend or API

const products: Product[] = [
    { id: 1, name: 'Apple iPhone 14', price: 79999 },
    { id: 2, name: 'Samsung Galaxy S23', price: 69999 },
    { id: 3, name: 'Google Pixel 7', price: 59999 },

];

const ProductList = () => {


    return (
        <>
            <section className='p-4 max-w-4xl mx-auto'>
                <h2 className='text-2xl font-bold mb-4'>Products</h2>
                {/* Grid layout for product cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Render each product using ProductCard component */}
                    {products.map(({ id, name, price }) => (
                        <ProductCard
                            key={id} name={name} price={price} />

                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductList