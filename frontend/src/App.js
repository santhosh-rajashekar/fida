// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import Account from './components/Account';
import Profile from './components/Profile';
import ServiceSelection from './components/ServiceSelection';
import ConsentManagement from './components/ConsentManagement';
import DataHolderSelection from './components/DataHolderSelection';
import PermissionsDashboard from './components/PermissionsDashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    alert('Signed out');
  };

  return (
    <Router>
      <div>
        {isLoggedIn && (
          <nav className="navbar">
            <div className="navbar-container">
              <NavLink to="/account" className="nav-link" activeClassName="active">My Account</NavLink>
              <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
              <NavLink to="/consent" className="nav-link" activeClassName="active">Consent</NavLink>
              <NavLink to="/dataholders" className="nav-link" activeClassName="active">Data Holders</NavLink>
              <NavLink to="/permissions" className="nav-link" activeClassName="active">Permissions</NavLink>
              <NavLink to="/profile" className="nav-link" activeClassName="active">Profile</NavLink>
              <button className="nav-link sign-out-button" onClick={handleSignOut}>Sign Out</button>
            </div>
          </nav>
        )}

        <Routes>
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {isLoggedIn ? (
            <>
              <Route path="/account" element={<Account />} />
              <Route path="/services" element={<ServiceSelection />} />
              <Route path="/consent" element={<ConsentManagement />} />
              <Route path="/dataholders" element={<DataHolderSelection />} />
              <Route path="/permissions" element={<PermissionsDashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/account" />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/signin" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;