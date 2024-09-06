import React from 'react'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <footer className='w-full h-max bg-gray-800 relative'>
        <div className="w-4/5 sm:grid-cols-3 grid m-auto">
            <div className="text-white text-3xl items-center flex">WodoList</div>
            <div className="text-white pt-5">
                <span className='text-gray-500 underline font-mono flex p-2'>Links</span>
                <ul className='my-3  gap-3 grid'>
                    <li><Link className='hover:bg-gray-600 p-2 rounded-lg'>Home</Link></li>
                    <li><Link className='hover:bg-gray-600 p-2 rounded-lg'>About</Link></li>
                    <li><Link className='hover:bg-gray-600 p-2 rounded-lg'>Services</Link></li>
                    <li><Link className='hover:bg-gray-600 p-2 rounded-lg'>Log In</Link></li>
                </ul>
            </div>
            <div className="text-white items-center justify-center flex">
                <div className="w-full">
                    <span className='text-gray-500 underline font-mono flex p-2 mb-2'>Email</span>
                    <div className="sm:grid-cols-12 grid gap-2">
                        <input type="text"className='p-1 col-span-8 outline-none text-black' placeholder='test@gmail.com' />
                        <button type="button"className='px-4 py-2 rounded-lg col-span-4 bg-red-500'>Send</button>
                    </div>

                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer