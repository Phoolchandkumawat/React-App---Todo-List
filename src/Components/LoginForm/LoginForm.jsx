import React, { useState, useEffect } from 'react';
import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import { userData as sendData, addSettion } from '../..//features/TodoList/TodoSlice';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

function LoginForm() {
  const [username, setusername] = useState('');
  const [userpassword, setuserpassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await authService.getCurrentUser();
        const sessionId = response.$id;
        const encryptedSessionId = CryptoJS.AES.encrypt(sessionId, 'your_secret_key').toString();
        localStorage.setItem('idofus', encryptedSessionId);
      } catch (error) {
        console.log('error at loginForm at loginForm.jsx', error);
      }
    };
    checkSession();
  }, []);

  const setformDatalog = async (e) => {
    e.preventDefault();
    try {
      const session = await authService.login({
        email: username,
        password: userpassword,
      });
      if (session) {
        dispatch(addSettion(session));
        const userData = await authService.getCurrentUser();
        console.log(userData.$id);
        console.log(session.$id);
        const sessionId = userData.$id;
        const encryptedSessionId = CryptoJS.AES.encrypt(sessionId, 'your_secret_key').toString();
        localStorage.setItem('idofus', encryptedSessionId);
        if (userData) {
          dispatch(sendData(userData));
          navigate('/');
        } else {
          console.log('false');
        }
      }
    } catch (error) {
      console.log('error at loginForm at loginForm.jsx', error);
    }
  };

  return (
    <div className="w-full min-h-[600px] relative">
      <div className="w-2/5 mx-auto bg-gray-700 rounded-lg relative top-36">
        <form className="p-5 gap-5 grid" onSubmit={setformDatalog}>
          <span className="flex items-center justify-center text-2xl">Login</span>
          <div className="w-full sm:grid-cols-12 grid">
            <label className="sm:col-span-2 flex items-center justify-center text-[18px]">Email: </label>
            <input
              type="text"
              onChange={(e) => setusername(e.target.value)}
              value={username}
              className="sm:col-span-8 rounded-sm outline-none p-2 text-black"
              placeholder="Username"
            />
          </div>
          <div className="w-full sm:grid-cols-12 grid">
            <label className="sm:col-span-2 flex items-center justify-center text-[18px]">Password: </label>
            <input
              type="password"
              onChange={(e) => setuserpassword(e.target.value)}
              value={userpassword}
              className="sm:col-span-8 rounded-sm outline-none p-2 text-black"
              placeholder="text@123"
            />
          </div>

          <div className="w-full justify-center flex items-center">
            <button type="submit" className="bg-red-600 rounded-lg px-5 py-3">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
