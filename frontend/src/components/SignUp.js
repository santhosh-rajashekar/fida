// src/components/SignUp.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      <p>
        Already have an account? <NavLink to="/signin">Sign In</NavLink>
      </p>
    </div>
  );
}

export default SignUp;