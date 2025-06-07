import React from 'react'
// import HomeStatic from '../components/home/HomeStatic'
// import type { Product } from '../types/Product';
// import type { HomeProps } from '../types/HomeProps';
import type { HomeProps } from '../types';
import HomeDynamic from '../components/home/HomeDynamic';

            // used for HomeStatic
// type HomeProps = {
//   products: Product[];  
//   addToCart: (product: Product) => void;
// };

// --------------------------------------------------------------
// const Home = ({ products, addToCart }: HomeProps) => {
//   return <HomeStatic products={products} addToCart={addToCart} />;
// };
// --------------------------------------------------------------
const Home = ({ addToCart }: HomeProps) => {
  return <HomeDynamic addToCart={addToCart} />
}

export default Home