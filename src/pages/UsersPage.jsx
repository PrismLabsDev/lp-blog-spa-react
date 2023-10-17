import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link as A } from 'react-router-dom';
import { http, axios } from '../services/http';
import { AppContext } from '../contexts/AppContext';

function UsersPage({ }) {
  const navigate = useNavigate();
  const AppContextState = useContext(AppContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    http.get(`/user`).then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <>
      <p>UsersPage</p>

      <div className='flex flex-col gap-3'>
        {users.map((user) => {
          return (
            <div key={user.id} className='card' onClick={() => {
              navigate(`/user/${user.id}`);
            }}>
              <div>{user.username}</div>
              <div>{user.bio}</div>
              <div>{new Date(user.created_at).toLocaleDateString()}</div>
              <div>Articles: {user.article_count}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { UsersPage };
