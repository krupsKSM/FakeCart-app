// import CartStatic from '../components/cart/CartStatic'
import CartDynamic from '../components/cart/CartDynamic'
// import type { Product } from '../types';


// type CartPageProps = {
//   cartItems: { product: Product; quantity: number }[];
//   setCartItems: React.Dispatch<React.SetStateAction<{ product: Product; quantity: number }[]>>;
// };

// required while props ddrilling
// const Cart = ({ cartItems, setCartItems }: CartPageProps) => {
//   return (
//     <>
//       {/* <div><CartStatic/></div> */}
//       <div><CartDynamic cartItems={cartItems} setCartItems={setCartItems} /></div>
//     </>

//   )
// }

//----------------- uses context API

const Cart = () => {
  // Destructure cartItems from CartContext


  // Pass it down to UI component (no props needed from App.tsx)
  return <CartDynamic />
}

export default Cart