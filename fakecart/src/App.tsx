import './App.css'
import Header from './components/header/Header'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './components/cart/CartStatic'


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className='p-4'>
        <Routes>
          <Route
            path='/'
            element={<Home />} />

          <Route
            path='/login'
            element={<Login />} />

          <Route
            path='/cart'
            element={<Cart />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
