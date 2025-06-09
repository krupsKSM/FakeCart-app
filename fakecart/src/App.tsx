import './App.css'
import Header from './components/header/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Cart from './pages/Cart'
import { useState } from 'react'

//----------------imports for static rendering---------------
// import headphone from './assets/images/headphone.jpg'
// import smartwatch from './assets/images/smartwatch.jpg';
// import mouse from './assets/images/mouse.jpg';
// -------------------------------------------------------
// import type { Product } from './types/Product'
import Home from './pages/Home'
import { CartProvider } from './context/CartContext'
// import { updateCartItems } from './utils/cartUtils'



const App: React.FC = () => {

  //---Products state (dummy list) only for static rendering initially
  // const [products] = useState<Product[]>([{
  //   id: 1, name: 'Wireless Headphones', price: 99.99, imageUrl: headphone
  // },
  // {
  //   id: 2, name: 'Smart Watch', price: 149.99, imageUrl: smartwatch
  // },
  // {
  //   id: 3, name: 'Gaming Mouse', price: 49.99, imageUrl: mouse
  // }]);
  // --------------------------------------------------------------

  // used while Props drilling but later moved to CartContext.tsx 
  //  Global Cart state (array of {product, quantity})
  // const [cartItems, setCartItems] = useState<{ product: Product, quantity: number }[]>([])

  return (
    //CartProvider wraps the entire app to provide cart state globally
    <Router>
    <CartProvider>
      <Header />
      <main className='p-4'>
        <Routes>
          {/* Pass products and addToCart to Home */}
          <Route
            path="/" 
            element={<Home />}
          />

          <Route
            path='/login'
            element={<Login />} />

          <Route
            path='/cart'
            element={<Cart />} />
        </Routes>
      </main>
    </CartProvider>
    </Router>
  )
}

export default App
