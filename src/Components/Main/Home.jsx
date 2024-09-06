import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import config from '../../appwrite/Config';
import CryptoJS from 'crypto-js';

function Home() {
  const [allDataSet, setallDataSet] = useState([]);
  const Todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const sect = useSelector((state) => state.sesstion);

  let decryptedSessionId = null;
  const encryptedSessionId = localStorage.getItem('idofus');
  if (encryptedSessionId) {
    try {
      decryptedSessionId = CryptoJS.AES.decrypt(encryptedSessionId, 'your_secret_key').toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error('Error decrypting session ID:', error);
    }
  }
  const id = decryptedSessionId;

  const alteh = async () => {
    if (!id) return; // exit if no session ID
    const getdatafiles = await config.getfiles();
    const fillteruserdata = getdatafiles.documents;
    const alluserdata = fillteruserdata.filter((file) => file.userId === id);
    alluserdata.reverse();
    setallDataSet(alluserdata);
    return alluserdata;
  };

  useEffect(() => {
    const storedSession = localStorage.getItem('persist:root');
    if (storedSession) {
      const parsedSession = JSON.parse(storedSession);
      if (parsedSession.session) {
        dispatch({ type: 'RESTORE_SESSION', payload: parsedSession.session });
      }
    }
    alteh();
    // console.log(allDataSet);
  }, []);

  return (
    <>
      <div className="text-4xl text-green-500">Home</div>
      <div className="grid pr-5 overflow-y-scroll h-[520px] scrollbar scrollbar-thumb-blue-800 scrollbar-thumb-rounded scrollbar-track-hidden">
        <ul className="gap-3 grid mt-6">
          {allDataSet &&
            allDataSet.map((todo) => (
              <li
                className={`text-white bg-slate-700 p-1 rounded-md cursor-pointer hover:bg-gray-600`}
                key={todo.$createdAt}
              >
                {todo.todo}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
