import {Outlet} from "react-router-dom"
import Navbar from "./Components/Header/Navbar"
import { useEffect } from "react"
// import { useEffect } from 'react'
// import  auth  from './appwrite/auth'
import {useSelector} from 'react-redux'
import  authService  from "./appwrite/auth"


function App() {
  // console.log(authService.createAccount)

  const sect = useSelector((state)=> state.sesstion)

  useEffect(() => {
    authService.getCurrentUser()
      .then((response) => {
        const sessionId = response.sessionId;
        console.log(sessionId)
        const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // expires in 30 days
        const cookieStr = `sessionId=${sessionId}; expires=${expires.toUTCString()}; max-age=2592000; path=/;`;
        document.cookie = cookieStr;
      });
  }, [])

  // useEffect(()=>{
  //   const cookie = getCookie('sessionId');
  //   if (cookie) {
  //   const sessionId = cookie;
  //   // Send the session ID to Appwrite
  //   fetch(`${AppwriteEndpoint}/account/sessions/email`, {
  //     method: 'POST',
  //     headers: {
  //       'x-appwrite-project': AppwriteProject,
  //       'Cookie': `sessionId=${sessionId}`
  //     }
  //   });
  // }
  // console.log(sect)
  // },[])

  return (
    <>
    <div className="w-full h-screen bg-black overflow-hidden">
      <div className="w-full text-3xl py-1 font-serif bg-gray-700">
        <span className="ps-20">WodoList</span>
      </div>
      <div className="w-full flex h-full">
        <div className="w-1/5">
          <Navbar/>

        </div>
        <div className="w-4/5">
          <div className="ps-5 py-10">
            <span className="text-white text-3xl ms-10">Todos</span>
            <hr className="mt-2 w-4/5"/>
          </div>
          <div className="w-4/5 ms-10">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
