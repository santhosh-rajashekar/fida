// src/components/PasswordReset.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './PasswordReset.css';

function PasswordReset() {
  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form>
        <div className="form-group">
          <label>New Password</label>
          <input type="password" required />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" required />
        </div>
        <button type="submit" className="auth-button">Reset Password</button>
      </form>
      <p>
        <NavLink to="/signin">Back to Sign In</NavLink>
      </p>
    </div>
  );
}

export default PasswordReset;