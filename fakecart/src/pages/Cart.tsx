import React from 'react'
// import CartStatic from '../components/cart/CartStatic'
import CartDynamic from '../components/cart/CartDynamic'
import type { Product } from '../types';


type CartPageProps = {
  cartItems: { product: Product; quantity: number }[];
  setCartItems: React.Dispatch<React.SetStateAction<{ product: Product; quantity: number }[]>>;
};


const Cart = ({ cartItems, setCartItems }: CartPageProps) => {
  return (
    <>
      {/* <div><CartStatic/></div> */}
      <div><CartDynamic cartItems={cartItems} setCartItems={setCartItems} /></div>
    </>

  )
}

export default Cart