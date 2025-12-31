import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className='flex gap-10 grid grid-cols-5 mt-8'>
        <Link to={`/product/id`} className='w-[15vw] h-[40vh]'>
            <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img35.png" alt="" />
            <h1 className='text-zinc-800'>Kid Tapered Slim Fit Trouser</h1>
            <h1 className='font-semibold'>$38</h1>
        </Link>
    </div>
  )
}

export default ProductCard