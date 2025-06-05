import React, { useEffect, useState } from 'react'
import type { Product } from '../../types/Product'
import ProductList from '../product/ProductList'
import type { HomeProps } from '../../types/HomeProps'

// type HomeDynamicProps = {
//     addToCart: (product: Product) => void
// }


const HomeDynamic = ({ addToCart }: HomeProps) => {

    // 1. State to hold products fetched from API
    const [products, setProducts] = useState<Product[]>([])

    // 2. useEffect to fetch products once when component mounts

    useEffect(() => {
        // Async function to fetch data
        const fetchProducts = async () => {
            try {
                // Fetch products from fakestoreapi
                const response = await fetch('https://fakestoreapi.com/products')
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

            } catch (error) {
                // Handle fetch or parsing errors
                console.error('Failed to fetch products: ', error);

            }
        }

        fetchProducts()
    },[])  // Empty dependency array means this runs only once after first render


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