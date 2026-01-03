import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[20%]'>
            <h1 className='mt-15 text-xl text-semibold'>FILTERS</h1>
            <div className='categories mt-10 border-1 border-zinc-300 p-2 w-[13vw]'>
                <h1 className='font-semibold'>CATEGORIES</h1>
                <div className='flex items-center gap-2 mt-3'>
                <input type="checkbox"/>
                <h1 className='text-sm text-zinc-600'>Men</h1>
                </div>
                <div className='flex items-center gap-2 mt-2'>
                <input type="checkbox"/>
                <h1 className='text-sm text-zinc-600'>Women</h1>
                </div>
                <div className='flex items-center gap-2 mt-2'>
                <input type="checkbox"/>
                <h1 className='text-sm text-zinc-600'>kids</h1>
                </div>
                
            </div>
            <div className='categories mt-10 border-1 border-zinc-300 p-2 w-[13vw]'>
                <h1 className='font-semibold'>TYPE</h1>
                <div className='flex items-center gap-2 mt-3'>
                <input type="checkbox"/>
                <h1 className='text-sm text-zinc-600'>Topwear</h1>
                </div>
                <div className='flex items-center gap-2 mt-2'>
                <input type="checkbox"/>
                <h1 className='text-sm text-zinc-600'>Bottomwear</h1>
                </div>
                <div className='flex items-center gap-2 mt-2'>
                <input type="checkbox"/>
                <h1 className='text-sm text-zinc-600'>Winterwear</h1>
                </div>
                
            </div>
        </div>
  )
}

export default Sidebar