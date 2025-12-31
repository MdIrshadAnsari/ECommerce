import React from 'react'
import { Hero } from '../components/Home/Hero'
import LatestCollection from '../components/Home/LatestCollection'
import BestSellers from '../components/Home/BestSellers'
import Subscribe from '../components/Home/Subscribe'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='ml-50 mr-50'>
        <Hero/>
        <LatestCollection/>
        <BestSellers/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Home