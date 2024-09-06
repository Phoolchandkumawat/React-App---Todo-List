import React, { useState, useId } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../features/TodoList/TodoSlice'
import config from '../../appwrite/Config'
import CryptoJS from 'crypto-js'

function AddTodo({value}) {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState()
  // const databas = useSelector( (state)=> state.data)
  //     const id = databas.userData["$id"]
  //     console.log(id)
  const encryptedSessionId = localStorage.getItem('idofus');
  const decryptedSessionId = CryptoJS.AES.decrypt(encryptedSessionId, 'your_secret_key').toString(CryptoJS.enc.Utf8);
  
  // console.log(decryptedSessionId); // prints the decrypted sessionId
  const id = decryptedSessionId

  const todoadded = async(e)=>{
    // console.log(id) 
    e.preventDefault()
    if(todo !== ""){
      // const databas = useSelector( (state)=> state.data)
      // const id = databas.userData["$id"]
      // console.log(id)
      dispatch(addTodo(todo))
      const post = await config.createPost({
        todo: todo,
        userid: id,
      })
      setTodo("")
      if(post){
        const getdatafiles = await config.getfiles()
        const fillteruserdata = getdatafiles.documents
        const alluserdata = fillteruserdata.filter((file) => file.userId
        === id)
        const efi  = fillteruserdata[0]
        console.log(alluserdata)
        console.log(fillteruserdata)
      }
    }
    if(todo !== "") return value(!value)
    // console.log(KeyboardEvent == "enter")
  }

  

  
  return (
    <div className="absolute top-[200px] left-[-100px]">
      <div className="bg-slate-800 rounded-lg text-blue-400 p-2 min-w-[400px]">
        <span className='ps-2'>Add Todo</span>
        <div className="flex my-5">
            <input
            id="input"
            type="text" 
            onChange={(e)=> setTodo(e.target.value)} 
            value={todo} 
            className='p-1 outline-none border-transparent rounded-lg text-black w-full' />
        </div>
        <div className="w-full">
          <span className='ps-2'>Description</span>
        </div>
        <div className="w-full">
          
        </div>
        <div className="btn w-full flex justify-end">
          <button className='button text-white bg-red-500 rounded-xl outline-none border-transparent px-10 py-2 mt-5' onClick={todoadded}>Add</button>
        </div >
      </div>
    </div>
  )
}

export default AddTodo