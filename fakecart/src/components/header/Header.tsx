import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <>
            <header className='bg-blue-600 text-white p-4 flex justify-between items-center' >
                <div className='text-lg font-bold' >FakeCart</div>
                <nav className='space-x-4'>
                    <Link to='/' className="hover:underline">HOME</Link>
                    <Link to='/login' className="hover:underline">Login</Link>
                    <Link to='/Cart' className="hover:underline">Cart</Link>
                </nav>
                <div>Hello, Guest !</div>
            </header>
        </>
    );
};

export default Header