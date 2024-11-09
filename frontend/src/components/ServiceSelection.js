// src/components/ServiceSelection.js
import React, { useState } from 'react';
import './ServiceSelection.css';

const services = [
  { id: 'savings-investment', name: 'Savings & Investment', description: 'Access and manage your savings and investment data from financial institutions.' },
  { id: 'insurance-management', name: 'Insurance Management', description: 'View and manage your insurance policies from various providers.' },
  { id: 'pension-planning', name: 'Pension Planning', description: 'Plan and manage your pension data from pension providers.' },
  { id: 'portfolio-tracking', name: 'Portfolio Tracking', description: 'Track your investment portfolio data from financial institutions.' },
  { id: 'crypto-management', name: 'Crypto Management', description: 'Manage your cryptocurrency data from exchanges and wallets.' },
  { id: 'travel-insurance', name: 'Travel Insurance', description: 'Access and manage your travel insurance policies from providers.' },
];

const dataHolders = {
  'savings-investment': [
    { id: 'deutsche-bank', name: 'Deutsche Bank' },
    { id: 'commerzbank', name: 'Commerzbank' },
  ],
  'insurance-management': [
    { id: 'allianz', name: 'Allianz' },
    { id: 'ergo', name: 'ERGO' },
  ],
  'pension-planning': [
    { id: 'allianz', name: 'Allianz' },
    { id: 'munich-re', name: 'Munich Re' },
  ],
  'portfolio-tracking': [
    { id: 'dws-group', name: 'DWS Group' },
    { id: 'bitpanda', name: 'Bitpanda' },
  ],
  'crypto-management': [
    { id: 'bitpanda', name: 'Bitpanda' },
    { id: 'dws-group', name: 'DWS Group' },
  ],
  'travel-insurance': [
    { id: 'allianz', name: 'Allianz' },
    { id: 'ergo', name: 'ERGO' },
  ],
};

function ServiceSelection() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDataHolders, setSelectedDataHolders] = useState([]);
  const [showConsent, setShowConsent] = useState(false);

  const selectService = (serviceId) => {
    setSelectedService(serviceId);
    setSelectedDataHolders([]); // Reset data holder selection when a new service is selected
    setShowConsent(false); // Hide consent section when a new service is selected
  };

  const selectDataHolder = (dataHolderId) => {
    setSelectedDataHolders((prevSelected) => {
      if (prevSelected.includes(dataHolderId)) {
        return prevSelected.filter((id) => id !== dataHolderId);
      } else if (prevSelected.length < 3) {
        return [...prevSelected, dataHolderId];
      } else {
        return prevSelected;
      }
    });
  };

  const confirmSelection = () => {
    if (selectedService && selectedDataHolders.length > 0) {
      setShowConsent(true);
    } else {
      alert('Please select at least one service and one data holder.');
    }
  };

  const provideConsent = () => {
    const selectedDataHolder = selectedDataHolders[0]; // Assuming only one data holder is selected for simplicity
    const dataHolder = dataHolders[selectedService].find(holder => holder.id === selectedDataHolder);

    if (dataHolder) {
      const oauth2Url = `https://oauth2.example.com/auth?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REDIRECT_URI&scope=YOUR_SCOPES&state=YOUR_STATE&data_holder=${dataHolder.id}`;
      window.location.href = oauth2Url;
    } else {
      alert('Data holder not found.');
    }
  };

  const cancelConsent = () => {
    setShowConsent(false);
    setSelectedService(null);
    setSelectedDataHolders([]);
  };

  return (
    <div className="service-selection-container">
      <div className="service-selection-header">
        <h2>Supported Services</h2>
        <p>Choose the service you want to use. These services are provided by us to you based on the data fetched from your Data Holders, with your consent.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${service.id} ${selectedService === service.id ? 'selected' : ''}`}
            onClick={() => selectService(service.id)}
          >
            <strong>{service.name}</strong>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      {selectedService && <hr />}
      {selectedService && (
        <>
          <div className="service-selection-header">
            <h2>Data Holders for Selected Service Type</h2>
            <p>Choose the data holder you want us to access your financial data from, with your consent.</p>
          </div>
          <div className="data-holders-grid">
            {dataHolders[selectedService].map((dataHolder) => (
              <div
                key={dataHolder.id}
                className={`data-holder-card ${dataHolder.id} ${selectedDataHolders.includes(dataHolder.id) ? 'selected' : ''}`}
                onClick={() => selectDataHolder(dataHolder.id)}
              >
                <strong>{dataHolder.name}</strong>
              </div>
            ))}
          </div>
        </>
      )}
      {selectedService && selectedDataHolders.length > 0 && !showConsent && (
        <button className="button submit-button" onClick={confirmSelection}>Confirm Selection</button>
      )}
      {showConsent && <hr />}
      {showConsent && (
        <div className="consent-section">
          <h2>Consent to Share Financial Data</h2>
          <p>
            By giving your consent, you authorize us to securely access your financial data from the selected institutions. This access is for the purpose of providing you with specific services, such as personalized pension planning. All data will be managed in line with our privacy policy and handled with strict security measures.
          </p>
          <p>
            This consent is similar to permissions granted under PSD2 and other standards, where data is accessed on your behalf via OAuth2-based authentication.
          </p>
          <p>
            <strong>Service:</strong> {services.find(service => service.id === selectedService)?.name}
          </p>
          <p>
            <strong>Data Provider:</strong> {selectedDataHolders.map(id => dataHolders[selectedService].find(holder => holder.id === id)?.name).join(', ')}
          </p>
          <button className="button consent-button" onClick={provideConsent}>I Agree</button>
          <button className="button cancel-button" onClick={cancelConsent}>Decline</button>
        </div>
      )}
    </div>
  );
}

export default ServiceSelection;