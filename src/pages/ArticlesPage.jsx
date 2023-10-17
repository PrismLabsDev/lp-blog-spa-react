import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link as A } from 'react-router-dom';
import { http, axios } from '../services/http';
import { AppContext } from '../contexts/AppContext';

function ArticlesPage({ }) {
  const navigate = useNavigate();
  const AppContextState = useContext(AppContext);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    http.get(`/article`).then((res) => {
      setArticles(res.data.articles);
    });
  }, []);

  useEffect(() => {

  }, []);

  return (
    <>
      <p>ArticlesPage</p>

      <div className='flex flex-col gap-3'>
        {articles.map((article) => {
          return (
            <div key={article.id} className='card'>
              <div>{article.title}</div>
              <div>@{article.user.username}</div>
              <div>{new Date(article.created_at).toLocaleDateString()}</div>
              <div>Comments: {article.comment_count}</div>
              <div>Likes: {article.like_count}</div>
              <div>Liked by me: {article.liked ? 'true' : 'false'}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { ArticlesPage };
