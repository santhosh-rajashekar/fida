// src/components/Account.js
import React from 'react';
import './Account.css';

function Account() {
  // Sample pension data to simulate API response
  const pensionData = [
    {
      provider: "Pension Fund A",
      accountType: "Defined Contribution",
      balance: "$60,000",
      monthlyContribution: "$500",
      annualReturnRate: "5.8%",
      riskLevel: "Moderate",
    },
    {
      provider: "Pension Fund B",
      accountType: "Defined Benefit",
      balance: "$50,000",
      monthlyContribution: "$400",
      annualReturnRate: "6.0%",
      riskLevel: "High",
    },
  ];

  return (
    <div className="account-container">
      <header className="account-header">
        <h2>Account Management</h2>
      </header>
      <main className="account-main">
        <h1>My Account</h1>
        <p>Your policies, saved quotes, pensions, and claims are listed below.</p>

        {/* Existing My Policies Section */}
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

        {/* New My Pensions Section */}
        <div className="account-section">
          <div className="account-section-header">
            <h3>My Pensions</h3>
          </div>
          <table className="account-table">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Account Type</th>
                <th>Balance</th>
                <th>Monthly Contribution</th>
                <th>Annual Return Rate</th>
                <th>Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {pensionData.length > 0 ? (
                pensionData.map((pension, index) => (
                  <tr key={index}>
                    <td>{pension.provider}</td>
                    <td>{pension.accountType}</td>
                    <td>{pension.balance}</td>
                    <td>{pension.monthlyContribution}</td>
                    <td>{pension.annualReturnRate}</td>
                    <td>{pension.riskLevel}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No Pensions Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Existing My Quotes Section */}
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

        {/* Existing My Claims Section */}
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
