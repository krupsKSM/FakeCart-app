import React, { useEffect, useState } from 'react'
import type { Product } from '../../types/Product'
import ProductList from '../product/ProductList'
import type { HomeProps } from '../../types/HomeProps'

// type HomeDynamicProps = {
//     addToCart: (product: Product) => void
// }


const HomeDynamic = ({ addToCart }: HomeProps) => {

    // State to hold products fetched from API
    const [products, setProducts] = useState<Product[]>([])

    // loading: shows a spinner/text while data is being fetched
    const [loading, setLoading] = useState<boolean>(true)

    // error: holds any error message if the API call fails
    const [error, setError] = useState<string | null>(null)

    // Async function to fetch data
    const fetchProducts = async () => {

        // Start by resetting states
        setLoading(true)
        setError(null);

        try {
            // Fetch products from fakestoreapi
            const response = await fetch('https://fakestoreapi.com/products')

            // If response is not OK, we throw an error
            if (!response.ok)
                throw new Error(`API error ${response.status}: ${response.statusText}`);

            // Parse JSON response
            const data = await response.json();
            // Map API response to match the Product type

            const formattedProducts: Product[] = data.map((item: any) => ({
                id: item.id,
                name: item.title,
                price: item.price,
                imageUrl: item.image,
            }))

            // Update products state
            setProducts(formattedProducts)

        } catch (error: unknown) {
            // Handle fetch or parsing errors
            const message = error instanceof Error ? error.message : 'unexpected error'

            console.error("error is ", message);
            setError('Failed to load Products. Please try again.')


        } finally {
            // Always turn off loading after fetch attempt
            setLoading(false)
        }
    }
    
    // useEffect to fetch products once when component mounts
    useEffect(() => {
        fetchProducts()
    }, [])  // Empty dependency array means this runs only once after first render

    if (loading) {
        return <p className="text-green-500 font-medium">Loading products...</p>;
    }


    // Show error message if fetch failed and retry option
    if (error) {
        return (
            <div className="text-red-600 space-y-2 font-medium">
                <p>{error}</p>
                <button onClick={fetchProducts} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                >RETRY</button>
            </div>
        )
    }

    // If products fetched successfully, show UI

    // Render a heading and the ProductList component with fetched products
    return (
        <>
            <h1 className='text-2xl font-bold mb-4'>Dynamic Products from FakeStore API</h1>
            <p className='text-gray-700 mb-6'>Browse our amazing fake products fetched live</p>
            <ProductList products={products} addToCart={addToCart} />
        </>
    )
}



export default HomeDynamic