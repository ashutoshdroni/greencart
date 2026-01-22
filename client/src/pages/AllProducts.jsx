import React, { useMemo } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {
    const { products, searchQuery } = useAppContext()

    // Use useMemo to compute filtered products - no useState or useEffect needed
    const filteredProducts = useMemo(() => {
        if (searchQuery && searchQuery.length > 0) {
            return products.filter(product =>
                product.inStock &&
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }
        return products.filter(product => product.inStock)
    }, [products, searchQuery])

    return (
        <div className='mt-16 flex flex-col'>
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>All Products</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
                {filteredProducts.map((product, index) => (
                    <ProductCard key={product._id || index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default AllProducts