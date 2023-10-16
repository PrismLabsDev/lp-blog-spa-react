import React, { useEffect, useState } from 'react';
import { useNavigate, Link as A, useLocation } from 'react-router-dom'

import { AppContext } from './contexts/AppContext';

import Router from "./Router";

function App() {

  const [user, setUser] = useState({});

  return (
    <AppContext.Provider
      value={{}}
    >
      <header className='w-full h-16 px-16 bg-slate-900 flex flex-row items-center space-x-4 text-white'>
        <A to={'/'}>Home</A>
        <A to={'/auth/login'}>Login</A>
        <A to={'/auth/register'}>Register</A>
        <A to={'/auth/verify'}>Verify</A>
      </header>

      <main className='w-full min-h-[calc(100vh-64px-64px)] p-4'>
        <Router/>
      </main>

      <footer className='w-full h-16 px-16 bg-slate-900 flex flex-row items-center justify-center space-x-4 text-white'>
        <p className='text-center	'>Footer</p>
      </footer>
    </AppContext.Provider>
  );
}

export default App;
