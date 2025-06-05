import React from 'react'
import ProductCard from './ProductCard';
import type { Product } from '../../types/Product';

type ProductListProps = {
  products: Product[];
  addToCart: (product: Product) => void;
};

const ProductList = ({ products, addToCart }: ProductListProps) => {


    return (
        <>
            <section className='p-4 max-w-4xl mx-auto'>
                <h2 className='text-2xl font-bold mb-4'>Products</h2>
                {/* Grid layout for product cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Render each product using ProductCard component */}
                    {products.map((product) => (
                        <ProductCard
                            key={product.id} product={product} />

                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductList