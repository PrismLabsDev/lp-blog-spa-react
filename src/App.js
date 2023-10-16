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
      <header>
        <A to={'/'}>Home</A>
        <A to={'/auth/login'}>Login</A>
        <A to={'/auth/register'}>Register</A>
        <A to={'/auth/verify'}>Verify</A>
      </header>

      <main>
        <Router/>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </AppContext.Provider>
  );
}

export default App;
