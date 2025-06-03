import React from 'react'

const Cart: React.FC = () => {
  const cartItems = [
    { id: 1, name: "Apple Iphone 14", price: 79999 },
    { id: 2, name: "Samsung Galaxy S23", price: 69999 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      <section className='p-4 max-w-2xl mx-auto mt-10 bg-white rounded shadow'>
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

        {/* If cart is empty */}
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className='space-y-3'>
              {cartItems.map(item => (
                <li key={item.id}
                  className='flex justify-between border-b pb-2'>
                  <span>{item.name}</span>
                  <span className='font-semibold'>Rs {item.price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-right">
              <p className='text-lg font-bold'>Total : Rs {total}</p>
              <button >
                checkout
              </button>

            </div>
          </>

        )}
      </section>
    </>
  )
}

export default Cart