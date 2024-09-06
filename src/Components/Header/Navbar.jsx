import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import AddTodo from '../Main/AddTodo'

function Navbar() {
    const [value , setValue] = useState(false)
    
    


  return (
    <>
        <div className="w-full bg-gray-900 min-h-full">
            <div className="profile w-full">
                <div className="pro w-4/5">
                    <div className="img w-2/6">
                        <img src="" alt="Profile Image" className='text-white w-full' />
                    </div>
                    <div className="text w-2/3" >
                        <div className="username">
                            <span>username</span>
                        </div>
                    </div>

                </div>

                <div className="links mt-5 p-6">
                    <ul className='gap-4 grid ps-5'>

                        <li>
                            <NavLink 
                            onClick={(e)=> setValue(!value)}
                            className={({isActive})=>
                            `text-white p-2 rounded-lg hover:bg-gray-600`
                        }>Add</NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to=''
                            className={({isActive})=>
                            `text-white p-2 rounded-lg hover:bg-gray-600 ${isActive ? "bg-gray-600" : "bg-inherit"}`
                        }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to='/inbox'
                            className={({isActive})=>
                            `text-white p-2 rounded-lg hover:bg-gray-600 ${isActive ? "bg-gray-600" : "bg-inherit"}`
                        }>Inbox</NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to='/today'
                            className={({isActive})=>
                            `text-white p-2 rounded-lg hover:bg-gray-600 ${isActive ? "bg-gray-600" : "bg-inherit"}`
                        }>Today</NavLink>
                        </li>
                        <li>
                            <NavLink to='/tommarow'
                            className={({isActive})=>
                            `text-white p-2 rounded-lg hover:bg-gray-600 ${isActive ? "bg-gray-600" : "bg-inherit"}`
                        }>Tommarow</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
            
        </div>
        <div className={`absolute top-0 left-2/4 ${value ? "flex" :"hidden"}`}>
            <AddTodo value = {setValue}/>
        </div>
    </>
  )
}

export default Navbar