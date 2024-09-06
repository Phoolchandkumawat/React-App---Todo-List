import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="w-full flex bg-gray-700 h-16 items-center">
        <div className="w-4/5 m-auto flex">
            <div className="w-1/3 items-center flex">
                <span className='text-red-400 text-2xl font-mono ms-2 flex '>WodoList</span>
            </div>
            <div className="w-1/3">
                <ul className='gap-10 flex items-center'>
                    <li className='items-center flex'>
                        <NavLink className={({})=>
                            `text-[16px] hover:bg-gray-600 p-2 hover:rounded-lg`}
                            to="/homepage">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({})=>
                            `text-[16px]  hover:bg-gray-600 p-2 hover:rounded-lg`}
                            to="/">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({})=>
                            `text-[16px]  hover:bg-gray-600 p-2 hover:rounded-lg`}
                            to="/">
                            Services
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-1/3 flex items-center justify-end">
                <div className="buttons flex gap-5">
                    <button type='button'>
                        <Link className='bg-red-400 text-white px-5 py-1 rounded-md hover:bg-red-600' to='login'>Login</Link>
                    </button>
                    
                    <button type='button'>
                        <Link className='bg-red-400 text-white px-5 py-1 rounded-md hover:bg-red-600' to='signup'>Sign Up</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header