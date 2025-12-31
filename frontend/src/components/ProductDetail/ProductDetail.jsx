import React from 'react'

const ProductDetail = () => {
  return (
    <div className='border-t-2 ml-50 mr-50'>
    <div className='flex justify-between mt-10 gap-20'>
        <div className='left-div'>
            <img className='w-[40vw] h-[60vh]' src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png" alt="" />
        </div>
        <div className='right-div'>
            <h1 className='text-2xl font-semibold'>Kid Tapered Slim Fit Trouser</h1>
            <p className='mt-2'>rating</p>
            <h1 className='text-3xl font-semibold mt-3'>$38</h1>
            <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
            <label htmlFor="">Select Size</label>
            <button>S</button>
            <button>Add to Cart</button>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
        </div>
    </div>
    </div>
  )
}

export default ProductDetail