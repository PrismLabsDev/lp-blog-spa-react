import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link as A, useParams } from 'react-router-dom';
import { http, axios } from '../services/http';
import { AppContext } from '../contexts/AppContext';

function ArticlePage({ }) {
  const navigate = useNavigate();
  const AppContextState = useContext(AppContext);

  const { articleId } = useParams();

  const [article, setArticle] = useState({});
  const [articleComments, setArticleComments] = useState([]);

  useEffect(() => {
    http.get(`/article/${articleId}`).then((res) => {
      setArticle(res.data.article);
      setArticleComments(res.data.user.comments);
    });
  }, [articleId]);

  return (
    <>
      <p>ArticlePage</p>
    </>
  );
}

export { ArticlePage };
