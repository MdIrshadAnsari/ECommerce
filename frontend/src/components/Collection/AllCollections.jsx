import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const Collections = () => {
  return (
    <div className='mt-13 w-[80%]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <h1 className='text-2xl text-zinc-500'>ALL <span className='text-black'>COLLECTIONS</span></h1>
          <hr className="w-8 ml-3 border-1" />
        </div>
        <div className='border-2 px-1 py-2 border-zinc-300 hover:border-black'>
        <select name="" id="">
          <option value="">Sort by: Relavant</option>
           <option value="">Sort by: Low to High</option>
            <option value="">Sort by: High to Low</option>
         </select>
        </div>
      </div>
      <ProductCard/>
    </div>
  )
}

export default Collections