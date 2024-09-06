import React,{useState} from 'react'
import authService from '../../appwrite/auth'
import {useForm} from 'react-hook-form'

function Signup() {
    const [username, setusername] = useState('')
    const [useremail, setuseremail] = useState("")
    const [userpassword, setuserpassword] = useState('')
    const {register, handleSubmit} =  useForm()
        

    const setformData = async (data)=>{
        console.log(data)
        
        authService.createAccount(data)
    }


  return (
    <div className="w-full min-h-[600px] relative">
        <div className="w-2/5 mx-auto bg-gray-700 rounded-lg relative top-36">
            <form className='p-5 gap-5 grid' onSubmit={handleSubmit(setformData)}>
                <span className='flex items-center justify-center text-2xl'>Sign Up</span>
                <div className="w-full sm:grid-cols-12 grid">
                    <label className='sm:col-span-2 flex items-center justify-center text-[18px]'>Username: </label>
                    <input type="text"
                    {...register("username")}
                    onChange={(e)=> setusername(e.target.value)}
                    value={username}
                    className='sm:col-span-8 rounded-sm outline-none p-2 text-black'placeholder='Username' />
                </div>
                <div className="w-full sm:grid-cols-12 grid">
                    <label className='sm:col-span-2 flex items-center justify-center text-[18px]'>Email: </label>
                    <input type="email"
                    {...register("email", { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}
                    onChange={(e)=> setuseremail(e.target.value)}
                    value={useremail}
                    className='sm:col-span-8 rounded-sm outline-none p-2 text-black'placeholder='text@email.com' />
                </div>
                <div className="w-full sm:grid-cols-12 grid">
                    <label className='sm:col-span-2 flex items-center justify-center text-[18px]'>Password: </label>
                    <input type="password"
                    {...register("password")}
                    onChange={(e)=> setuserpassword(e.target.value)}
                    value={userpassword}
                    className='sm:col-span-8 rounded-sm outline-none p-2 text-black' placeholder='text@123' />
                </div>
                
                <div className="w-full justify-center flex items-center">
                    <button type='submit' className='bg-red-600 rounded-lg px-5 py-3'>
                        Register
                    </button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default Signup