import React, { useState } from 'react'

// Define the shape of the form fields using TypeScript                                                 
type LoginFormFields = {
  email : string ,
  password : string,
}

// Functional component for a dynamic login form
const LoginFormDynamic = () => {
    // useState to manage the form's input fields (controlled components)
    const [form,setForm] = useState<LoginFormFields>({
      email : "",
      password : "",
    });

    //  useState to store validation error messages
    // Partial<> makes all fields optional (some fields may have no error)
    const [errors, setErrors] = useState<Partial<LoginFormFields>>({})
  return (
    <>
      <section className='p-4 max-wd-md mx-auto mt-10 bg-slate-400 rounded shadow'>
        <h2 className="tetx-xl font-semibold mb-4">Login to FakeCart</h2>

        <form onSubmit={handleSubmit} className='space-y-4 text-left'>

          <div>
            <label htmlFor="email" className='block text-sm font-semibold'>
              Email
            </label>
            <input type="email" name="email" id="email" autoComplete='email' value={form.email} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded'
            placeholder='you@example.com' />
          </div>

        </form>

      </section>
    </>
  )
}

export default LoginFormDynamic