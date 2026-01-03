import React from 'react'

const ProductDetail = () => {
  return (
    <div className='border-t-2 ml-50 mr-50 border-zinc-300'>
    <div className='flex justify-between mt-10 gap-20'>
        <div className='left-div'>
            <img className='w-[40vw] h-[60vh]' src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png" alt="" />
        </div>
        <div className='right-div'>
            <h1 className='text-2xl font-semibold'>Kid Tapered Slim Fit Trouser</h1>
            <p className='mt-2'>rating</p>
            <h1 className='text-3xl font-semibold mt-3'>$38</h1>
            <p className='mt-3 text-zinc-500'>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
            <div className='mt-5 flex flex-col items-start'>
            <label htmlFor="" className='font-semibold'>Select Size</label>
            <button className='mt-3 px-4 py-2 bg-zinc-200 font-semibold'>S</button>
            </div>
            <button className='mt-10 px-9 py-[10px] bg-black text-white'>Add to Cart</button>
            <div className='border-b-1 mt-8 border-zinc-300 mb-8'></div>
            <p className='text-zinc-500 text-sm'>100% Original product.</p>
            <p className='text-zinc-500 text-sm'>Cash on delivery is available on this product.</p>
            <p className='text-zinc-500 text-sm'>Easy return and exchange policy within 7 days.</p>
        </div>
    </div>
    </div>
  )
}

export default ProductDetail