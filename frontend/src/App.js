import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import BlogPage from './BlogPage';
import Courses from './components/Courses';
import StudyMaterial from './components/StudyMaterial';
import Games from './components/Games';
import Test from './components/Test';
import Account from './components/Account';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false');
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" replace /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/" replace />}
        />
        <Route
          path="/courses"
          element={isAuthenticated ? <Courses /> : <Navigate to="/" replace />}
        />
        <Route
          path="/study-material/:id"
          element={isAuthenticated ? <StudyMaterial /> : <Navigate to="/" replace />}
        />
        <Route
          path="/games"
          element={isAuthenticated ? <Games /> : <Navigate to="/" replace />}
        />
        <Route
          path="/test"
          element={isAuthenticated ? <Test /> : <Navigate to="/" replace />}
        />
        <Route
          path="/account"
          element={isAuthenticated ? <Account onLogout={handleLogout} /> : <Navigate to="/" replace />}
        />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
