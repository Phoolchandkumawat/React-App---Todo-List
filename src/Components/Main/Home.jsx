import React, { useEffect, useState } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { selectTodo } from '../../features/TodoList/TodoSlice'
import config from '../../appwrite/Config'
import CryptoJS from 'crypto-js'
import AddTodo from './AddTodo'



function Home() {
  const [allDataSet, setallDataSet] = useState([])
  const Todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const sect = useSelector((state)=> state.sesstion)

  const encryptedSessionId = localStorage.getItem('idofus');
  const decryptedSessionId = CryptoJS.AES.decrypt(encryptedSessionId, 'your_secret_key').toString(CryptoJS.enc.Utf8);
  
  // console.log(decryptedSessionId); // prints the decrypted sessionId
  const id = decryptedSessionId

  // useEffect(()=>{
  //     const cookie = sect[0].secData.$id;
  //     if (cookie) {
  //     const sessionId = cookie;
  //     // Send the session ID to Appwrite
  //     fetch(`${Appconf.appwriteUrl}/account/sessions/email`, {
  //       method: 'POST',
  //       headers: {
  //         'x-appwrite-project': Appconf.appwriteProjectId,
  //         'Cookie': `sessionId=${sessionId}`
  //       }
  //     });
  //   }
  //   console.log(sect[0].secData.$id)
  //   },[])

  // const sect = useSelector((state) => state.session);

// useEffect(() => {
//   const sessionId = sect[0].secData.$id;
//   if (sessionId) {
//     // Send the session ID to Appwrite
//     fetch(`${Appconf.appwriteUrl}/account/sessions/email`, {
//       method: 'POST',
//       headers: {
//         'x-appwrite-project': Appconf.appwriteProjectId,
//         'Cookie': `sessionId=${sessionId}`
//       }
//     });
//   }
// }, [sect]);


 const alteh = async ()=>{
  const getdatafiles = await config.getfiles()
        const fillteruserdata = getdatafiles.documents
        const alluserdata = fillteruserdata.filter((file) => file.userId
        === id)
        alluserdata.reverse();
        setallDataSet(alluserdata)
        // console.log(alluserdata[0].)
        return alluserdata
 }


//  setInterval(() => {
//   // setallDataSet(alteh())
//   // console.log(allDataSet)
//  }, 1000);

 


useEffect(() => {
  const storedSession = localStorage.getItem('persist:root');
  if (storedSession) {
    const parsedSession = JSON.parse(storedSession);
    if (parsedSession.session) {
      // Restore the session data to the Redux store
      dispatch({ type: 'RESTORE_SESSION', payload: parsedSession.session });
    }
  }
  alteh()
  console.log(allDataSet)
  
}, []);



  return ( 
    <>
      <div className='text-4xl text-green-500'>Home</div>
      <div className="grid pr-5 overflow-y-scroll h-[520px] scrollbar scrollbar-thumb-blue-800 scrollbar-thumb-rounded scrollbar-track-hidden">        <ul className='gap-3 grid mt-6'>
          {
          allDataSet && allDataSet.map((todo)=>(
            <li className={`text-white bg-slate-700 p-1 rounded-md cursor-pointer hover:bg-gray-600 `} key={todo.$createdAt}>
               {todo.todo}
             </li>
          )
          )
          }
        </ul>
      </div>
    </>
  )
}

export default Home