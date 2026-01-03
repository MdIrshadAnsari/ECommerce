import React from 'react'
import Sidebar from "../components/Collection/Sidebar"
import AllCollections from "../components/Collection/AllCollections"

const Collection = () => {
  return (
    <div className='ml-50 mr-50 w-[80%] flex border-t-1 border-zinc-300'>
      <Sidebar/>
      <AllCollections/>
    </div>
  )
}

export default Collection