import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link as A, useParams } from 'react-router-dom';
import { http, axios } from '../services/http';
import { AppContext } from '../contexts/AppContext';

function UserPage({ }) {
  const navigate = useNavigate();
  const AppContextState = useContext(AppContext);

  const { userId } = useParams();

  const [user, setUser] = useState({});
  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    http.get(`/user/${userId}`).then((res) => {
      setUser(res.data.user);
      setUserArticles(res.data.user.articles);
    });
  }, [userId]);

  return (
    <>
      <p>UserPage</p>
    </>
  );
}

export { UserPage };
