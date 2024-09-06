import React from 'react'
import Header from './comp/Header'
import Footer from './comp/Footer'
import { Outlet } from 'react-router-dom'

function HomeMain() {


  return (
    <div className='absolute flex w-full h-screen top-0 left-0 bg-black text-white'>
        <div className="w-full">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    </div>
  )
}

export default HomeMain