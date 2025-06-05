import React from 'react'
import type { Product } from '../../types/Product'
import ProductList from '../product/ProductList';

type HomeStaticProps = {
  products: Product[];
  addToCart: (product: Product) => void;
};

const HomeStatic = ({ products, addToCart }: HomeStaticProps) => {
  return (
    <>
      <ProductList products={products} addToCart={addToCart} />
    </>
  )
}

export default HomeStatic;
