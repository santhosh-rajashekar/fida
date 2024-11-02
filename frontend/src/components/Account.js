// src/components/Account.js
import React from 'react';
import './Account.css';

function Account() {
  return (
    <div className="account-container">
      <header className="account-header">
        <h2>Account Management</h2>
      </header>
      <main className="account-main">
        <h1>My Account</h1>
        <p>Your policies, saved quotes and claims are listed below.</p>

        <div className="account-section">
          <div className="account-section-header">
            <h3>My Policies</h3>
          </div>
          <table className="account-table">
            <thead>
              <tr>
                <th>Purchased</th>
                <th>Plan Name</th>
                <th>Policy Number</th>
                <th>Departure</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5">No Policies Found</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="account-section">
          <div className="account-section-header">
            <h3>My Quotes</h3>
          </div>
          <table className="account-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Quote Name</th>
                <th>Quote Number</th>
                <th>Expiry</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5">No Quotes Found</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="account-section">
          <div className="account-section-header">
            <h3>My Claims</h3>
          </div>
          <table className="account-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Claim Name</th>
                <th>Claim Number</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5">No Claims Found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Account;