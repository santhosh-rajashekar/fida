// src/components/ForgotPassword.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <button type="submit" className="auth-button">Reset Password</button>
      </form>
      <p>
        Remembered your password? <NavLink to="/signin">Sign In</NavLink>
      </p>
    </div>
  );
}

export default ForgotPassword;