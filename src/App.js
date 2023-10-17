import React, { useEffect, useState } from 'react';
import { useNavigate, Link as A, useLocation } from 'react-router-dom'

import { AppContext } from './contexts/AppContext';

import Router from "./Router";

function App() {
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useState(() => {
    const localAccessToken = localStorage.getItem("access_token");
    if(localAccessToken){
      return JSON.parse(localAccessToken);
    }
    return null;
  });

  const [user, setUser] = useState(() => {
    const localUser = localStorage.getItem("user");
    if(localUser){
      return JSON.parse(localUser);
    }
    return null;
  });

  useEffect(() => {
    if(!accessToken){
      navigate('/auth/login');
    }
  }, [accessToken]);

  const logout = () => {
    setAccessToken(null);
    setUser(null);

    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    navigate('/auth/login');
  }

  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
        user,
        setUser
      }}
    >
      <header className='w-full h-16 px-16 bg-slate-900 flex flex-row justify-between items-center text-white'>
        <div className='flex flex-row gap-3'>
          <A to={'/'}>Home</A>
          <A to={'/user'}>Users</A>
          <A to={'/article'}>Articles</A>
        </div>

        <div className='flex flex-row gap-3'>
          {accessToken ? (
            <>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <A to={'/auth/login'}>Login</A>
              <A to={'/auth/register'}>Register</A>
              <A to={'/auth/verify'}>Verify</A>
            </>
          )}
        </div>
      </header>

      <main className='w-full min-h-[calc(100vh-64px-64px)] p-4 bg-slate-950 text-white'>
        <Router/>
      </main>

      <footer className='w-full h-16 px-16 bg-slate-900 flex flex-row items-center justify-center space-x-4 text-white'>
        <p className='text-center	'>Footer</p>
      </footer>
    </AppContext.Provider>
  );
}

export default App;
