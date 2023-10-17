import { Routes, Route } from 'react-router-dom';

import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { VerifyPage } from './pages/auth/VerifyPage';

import { HomePage } from './pages/HomePage';
import { UsersPage } from './pages/UsersPage';
import { UserPage } from './pages/UserPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticlePage } from './pages/ArticlePage';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/user" element={<UsersPage />} />
        <Route path="/user/:userId" element={<UserPage />} />

        <Route path="/article" element={<ArticlesPage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />

        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/verify" element={<VerifyPage />} />
      </Routes>
    </>
  );
}

export default Router;