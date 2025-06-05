// Import React and useState hook from React
import React, { useState } from 'react';

//  Define the structure (TypeScript type) for a cart item
type CartItem = {
    id: number;         // Unique identifier for each item (for keying and operations)
    name: string;       // Name of the product
    price: number;      // Price of a single unit
    quantity: number;   // Quantity of this item in the cart
};

//Define the CartDynamic component (our dynamic cart logic lives here)
const CartDynamic = () => {
    //Initialize cart items with 2 default products (to simulate added products)
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: 'Apple iPhone 14', price: 79999, quantity: 1 },
        { id: 2, name: 'Samsung Galaxy S23', price: 69999, quantity: 2 },
    ]);

    //Calculate the total cost using reduce
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // Increase quantity of a specific item

    // const handleIncrement = (id: number) => {
    //     const updatedItems = cartItems.map((item) => (
    //         (item.id === id) ? { ...item, quantity: item.quantity + 1 } :
    //             item))

    //     setCartItems(updatedItems)
    // }

    const handleIncrement = (id: number) => {
        setCartItems(prevItems =>
        (prevItems.map(item => item.id === id
            ? { ...item, quantity: Math.min(item.quantity + 1, 10) } : item
        )
        ));
    };

            // Decrease the quantity of the item with the given id, ask before removing if quantity will go below 1

    // const handleDecrement = (id: number) => {
    //     const updatedItems = cartItems.map((item) => (
    //         (item.id === id) ? { ...item, quantity: item.quantity - 1 } :
    //             item))

    //     setCartItems(updatedItems)
    // }

    const handleDecrement = (id: number) => {
        const item = cartItems.find(item => item.id === id)

        if(!item) return;

        if(item.quantity === 1){
            const confirmDelete = window.confirm("Do you still want to remove this item from cart")

            if(!confirmDelete)
                return;
        }
        setCartItems(prevItems => prevItems.map(
        item => item.id === id ? {...item , quantity: item.quantity -1}:item
    ).filter(item => item.quantity > 0))
    }

    const handleDelete = (id: number) => {
        const confirmDelete = window.confirm("Are you sure you want to remove this item?");
        // true if the user clicks OK
        // false if the user clicks Cancel
        
        // If the user clicks Cancel, stop right here. Don’t continue.
        if (!confirmDelete) return;

        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

   
    return (
        <section className="p-4 max-w-2xl mx-auto mt-10 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

            {/*Handle the empty cart case */}
            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    {/* Render all cart items */}
                    <ul className="space-y-3">
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between border-b pb-2 text-gray-700"
                            >
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">
                                        ₹{item.price} × {item.quantity}
                                    </p>
                                </div>
                                <span className="font-semibold">
                                    ₹{item.price * item.quantity}
                                </span>

                                {/*Quantity controls */}
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => handleDecrement(item.id)}
                                        className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrement(item.id)}
                                        className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>

                                    {/* ✅ Delete button */}
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-red-500 hover:underline text-sm ml-4"
                                    >
                                        Remove
                                    </button>
                                </div>

                            </li>
                        ))}
                    </ul>

                    {/* Display total and Checkout button */}
                    <div className="mt-6 text-right">
                        <p className="text-lg font-bold">Total: ₹{total}</p>
                        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </section>
    );
};

export default CartDynamic;
