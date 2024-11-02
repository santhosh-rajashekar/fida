// src/components/Consent.js
import React, { useState } from 'react';
import './Consent.css';

const initialActiveConsents = [
  {
    dataHolder: 'Schufa',
    consentDate: '2023-10-01',
    purpose: 'To provide personalized financial advice and services',
    dataAccessed: ['Account balance', 'Transaction history', 'Credit score'],
  },
  {
    dataHolder: 'Deutsche Bank',
    consentDate: '2023-09-15',
    purpose: 'To offer tailored investment opportunities',
    dataAccessed: ['Investment portfolio', 'Transaction history'],
  },
  {
    dataHolder: 'Commerzbank',
    consentDate: '2023-08-20',
    purpose: 'To manage and optimize insurance policies',
    dataAccessed: ['Insurance policies', 'Claim history'],
  },
];

const initialRevokedConsents = [
  {
    dataHolder: 'Allianz',
    consentDate: '2023-07-01',
    revokeDate: '2023-09-01',
    purpose: 'To provide loan offers',
    dataAccessed: ['Loan details', 'Credit score'],
  },
  {
    dataHolder: 'Munich Re',
    consentDate: '2023-06-01',
    revokeDate: '2023-08-01',
    purpose: 'To manage pension plans',
    dataAccessed: ['Pension details', 'Contribution history'],
  },
  {
    dataHolder: 'KPMG',
    consentDate: '2023-05-01',
    revokeDate: '2023-07-01',
    purpose: 'To assist with tax preparation',
    dataAccessed: ['Tax records', 'Income details'],
  },
];

const Consent = () => {
  const [activeConsents, setActiveConsents] = useState(initialActiveConsents);
  const [revokedConsents, setRevokedConsents] = useState(initialRevokedConsents);

  const handleRevokeConsent = (index) => {
    if (window.confirm('Are you sure you want to revoke consent?')) {
      const consentToRevoke = activeConsents[index];
      const updatedActiveConsents = activeConsents.filter((_, i) => i !== index);
      setActiveConsents(updatedActiveConsents);
      setRevokedConsents([...revokedConsents, { ...consentToRevoke, revokeDate: new Date().toISOString().split('T')[0] }]);
    }
  };

  return (
    <div className="consent-container">
      <h2>Consent Details</h2>
      <p className="description">
        Below are the details of the consents you have provided to various data holders. You can review the information and revoke consent if necessary.
      </p>
      {activeConsents.length === 0 ? (
        <p>No active consents.</p>
      ) : (
        <table className="consent-table">
          <thead>
            <tr>
              <th>Data Holder</th>
              <th>Consent Date</th>
              <th>Purpose</th>
              <th>Data Accessed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {activeConsents.map((consent, index) => (
              <tr key={index}>
                <td>{consent.dataHolder}</td>
                <td>{consent.consentDate}</td>
                <td>{consent.purpose}</td>
                <td>
                  <ul>
                    {consent.dataAccessed.map((data, i) => (
                      <li key={i}>{data}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <button className="revoke-button" onClick={() => handleRevokeConsent(index)}>Revoke Consent</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h2>Revoked Consents</h2>
      {revokedConsents.length === 0 ? (
        <p>No revoked consents.</p>
      ) : (
        <table className="consent-table">
          <thead>
            <tr>
              <th>Data Holder</th>
              <th>Consent Date</th>
              <th>Revoke Date</th>
              <th>Purpose</th>
              <th>Data Accessed</th>
            </tr>
          </thead>
          <tbody>
            {revokedConsents.map((consent, index) => (
              <tr key={index}>
                <td>{consent.dataHolder}</td>
                <td>{consent.consentDate}</td>
                <td>{consent.revokeDate}</td>
                <td>{consent.purpose}</td>
                <td>
                  <ul>
                    {consent.dataAccessed.map((data, i) => (
                      <li key={i}>{data}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Consent;