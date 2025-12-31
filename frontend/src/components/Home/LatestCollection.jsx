import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const LatestCollection = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center mt-20'>
            <div className='flex items-center gap-2'>
                <h1 className='text-3xl'><span className='text-zinc-700 mr-2'>LATEST</span>COLLECTIONS</h1>
                <hr className='w-10 border-1' />
            </div>
            <p className='text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, rerum!</p>
        </div>
        <ProductCard/>
    </div>
  )
}

export default LatestCollection