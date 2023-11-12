import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import '../index.css';
import Login from './Login';
import Chats from './Chats';

const App = () => {
  return (
    <>
      <div style={{ fontFamily: 'Avenir' }}>
        <Router>
          <AuthProvider>
          <Routes>
            <Route path='/chats' Component={Chats} />
            <Route path='/' Component={Login} />
          </Routes>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
};

export default App;
