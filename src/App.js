import React, { useState } from 'react';
import Login from './components/login/login';
import Signin from './components/signin/signin';
import CourseEnrollmentPage from './components/courseenrolment/CourseEnrollmentPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  return (
    <div className="App">
      {isAuthenticated ? (
        <h2>Welcome, you are logged in!</h2>
      ) : (
        <Login onLogin={setIsAuthenticated} />
        
      )}
    </div>
  );
};

export default App