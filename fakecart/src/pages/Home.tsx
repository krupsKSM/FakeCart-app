import React from 'react'
import HomeStatic from '../components/home/HomeStatic'
import type { Product } from '../types/Product';

type HomeProps = {
  products: Product[];
  addToCart: (product: Product) => void;
};

const Home = ({ products, addToCart }: HomeProps) => {
  return <HomeStatic products={products} addToCart={addToCart} />;
};

export default Home