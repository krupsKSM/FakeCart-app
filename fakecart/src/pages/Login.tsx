import React from 'react'

const Login: React.FC = () => {
  return (
    <>
    <section className='p-4 max-w-md mx-auto mt-10 bg-white rounded shadow'>
        <h2 className='text-xl font-semibold mb-4'>Login to FakeCart</h2>
        <form className='space-y-4 text-left'>
            <div >
                <label htmlFor='email' className='block text-sm font-semibold '>Email</label>
                <input 
                type = "email" id='email' name='email' autoComplete='email'
                 className='w-full p-2 border border-gray-300 rounded'
                placeholder='you@example.com' />
            </div>
            <div>
                <label htmlFor='password' className='block text-sm font-semibold'>password</label>
                <input 
                type = "password" id='password' name='password'
                className='w-full p-2 border border-gray-300 rounded'
                placeholder='*******' />
            </div>
            <button 
                type='submit'
                className='w-full bg-green-500 text-white p-2 rounded 
                hover:bg-green-800'>Login</button>
        </form>
    </section>
    </>
  );
};

export default Login