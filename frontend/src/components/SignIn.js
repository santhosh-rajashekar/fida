// src/components/SignIn.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    // Add sign in logic here
    setIsLoggedIn(true);
    navigate('/account');
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit" className="auth-button">Sign In</button>
      </form>
      <p>
        <NavLink to="/forgot-password">Forgot Password?</NavLink>
      </p>
      <p>
        Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
      </p>
    </div>
  );
}

export default SignIn;