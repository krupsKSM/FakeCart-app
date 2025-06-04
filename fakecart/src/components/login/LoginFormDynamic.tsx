import React, { useState, type ReactEventHandler } from 'react'

// Define the shape of the form fields using TypeScript                                                 
type LoginFormFields = {
  email: string,
  password: string,
}

// Functional component for a dynamic login form
const LoginFormDynamic = () => {
  // useState to manage the form's input fields (controlled components)
  const [form, setForm] = useState<LoginFormFields>({
    email: "",
    password: "",
  });

  //  useState to store validation error messages
  // Partial<> makes all fields optional (some fields may have no error)
  const [errors, setErrors] = useState<Partial<LoginFormFields>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target // Get field name and new value from event target

    // Update form state immutably, changing only the field that triggered the event

    setForm(prev => ({ ...prev, [name]: value }))

    // Clear error for this field as user starts typing to improve UX
    setErrors(prev => ({
      ...prev,
      [name]: '',
    }));
  }

  // Validate form fields before submission

  const validate = () => {
    const newErrors: Partial<LoginFormFields> = {}; //temp errors obj

    if (!form.email.trim())
      newErrors.email = "Email is required"

    if (!form.password.trim())
      newErrors.password = "password is required"

    setErrors(newErrors); // Update error state to trigger UI update

    //Return true if no errors
    return Object.keys(newErrors).length === 0;
  }

  // ✅ Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log('Logging in with:', form);
      alert('Login successful!');
    }
  }
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

            {/* Show error message below if email error exists */}
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          {/* Password input field */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"             // name matches form state key
              value={form.password}       // controlled input tied to state
              onChange={handleChange}     // update state on change
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="•••••••"
            />
            {/* Show error message below if password error exists */}
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700 transition duration-200"
          >
            Login
          </button>
        </form>

      </section>
    </>
  )
}

export default LoginFormDynamic;