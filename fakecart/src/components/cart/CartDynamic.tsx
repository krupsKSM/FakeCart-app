import React, { useState } from 'react'

type cartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const CartDynamic = () => {
    // useState to store dynamic cart items
    // We start with 2 default items to simulate user-added products
    const [cartItems, setCartItems] = useState<cartItem[]>([
        { id: 1, name: 'Apple iPhone 14', price: 79999 },
        { id: 2, name: 'Samsung Galaxy S23', price: 69999 },
    ]);

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);


    return (
        <>
            <section className="p-4 max-w-2xl mx-auto mt-10 bg-white rounded shadow">
                <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

                {/* Handle the case when the cart is empty */}

                {cartItems.length === 0 ? (
                    <p>Empty cart</p>
                ) : (
                    <>
                        {/* Render all items using .map() */}
                        <ul className="space-y-3">
                            {cartItems.map((item) => (
                                <li key={item.id} className='flex justify-between border-b pb-2'><span>{item.name}</span>
                                    <span className="font-semibold">Rs {item.price}</span>
                                </li>
                            ))}
                        </ul>

                        {/*Show total and checkout button */}
                        <div className="mt-6 text-right">
                            <p className="text-lg font-bold">Total: Rs {total}</p>
                            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                                Checkout
                            </button>
                        </div>
                    </>
                )}

            </section>
        </>
    )
}

export default CartDynamic;