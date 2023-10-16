import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link as A } from 'react-router-dom';
import { http, axios } from '../services/http';
import { AppContext } from '../contexts/AppContext';

function _Page({ }) {
  const navigate = useNavigate();
  const AppContextState = useContext(AppContext);

  return (
    <>
      <p>Page</p>
    </>
  );
}

export { _Page };
