// import React from 'react'
// import type { Product } from '../../types/Product'
import ProductList from '../product/ProductList';
import type { HomeProps } from '../../types';
import { useCart } from '../../context/CartContext';


const HomeStatic = ({ products = [] }: HomeProps) => {
  const { addToCart } = useCart()
  return (
    <>
    <h1 className='text-2xl font-bold mb-4'>Welcome to FakeCart</h1>
      <p className='text-gray-700 mb-6'>Browse our amazing fake products at unbeatable FAKE prices</p>
      <ProductList products={products} addToCart={addToCart} />
    </>
  )
}

export default HomeStatic;
