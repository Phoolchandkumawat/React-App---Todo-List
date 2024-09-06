import React from 'react'
import HomeImg from './assets/home.png'
import { Link } from 'react-router-dom'

function Conte() {
  return (
    <div className='w-[90%] m-auto'>
        <main className=''>
            <div className='row-auto flex'>
                <div className="w-1/2 ">
                    <div className="text-white w-full grid relative top-40 left-20">
                        <span className='text-3xl w-4/5 mb-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit
                        </span>
                        <p className=' text-ellipsis'>
                            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.Praesentium <br />   voluptatibus voluptatum minus explicabo architecto,
                        </p>
                        <Link to='signup' className='bg-red-500 text-white px-5 py-2 w-max rounded-lg cursor-pointer hover:bg-red-700 mt-5 ms-3'>
                            Get Started
                        </Link>
                    </div>
                </div>
            
                <div className="w-1/2">
                    <div className="img flex justify-center">
                        <img className='w-[70%]' src={HomeImg} alt="" />
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Conte