import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link as A } from 'react-router-dom';
import { http, axios } from '../../services/http';
import { AppContext } from '../../contexts/AppContext';

function LoginPage({ }) {
  const navigate = useNavigate();
  const AppContextState = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    http.post(`/auth/login`, {
      email: email,
      password: password
    }).then((res) => {
      AppContextState.setAccessToken(res.data.access_token);
      AppContextState.setUser(res.data.user);

      localStorage.setItem("access_token", JSON.stringify(res.data.access_token));
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate('/');
    });
  }

  return (
    <>
      <div className='card'>
        <div className='flex flex-col gap-3'>
          <div>
            <h1 className='text-2xl'>Login</h1>
          </div>
          <div>
            <input className='input' type="email" placeholder='Email' value={email} onChange={(e) => {
              setEmail(e.target.value);
            }}></input>
          </div>
          <div>
            <input className='input' type="password" placeholder='Password' value={password} onChange={(e) => {
              setPassword(e.target.value);
            }}></input>
          </div>
          <div>
            <button className='btn' type="button" onClick={login}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export { LoginPage };
