// src/components/ServiceSelection.js
import React, { useState } from 'react';
import './ServiceSelection.css';

const services = [
  { id: 'credit-score', name: 'Credit Score', dataSource: 'Schufa' },
  { id: 'savings-investment', name: 'Savings & Investment', dataSource: 'Deutsche Bank' },
  { id: 'expense-budgeting', name: 'Expense & Budgeting', dataSource: 'Commerzbank' },
  { id: 'insurance-management', name: 'Insurance Management', dataSource: 'Allianz' },
  { id: 'pension-planning', name: 'Pension Planning', dataSource: 'Munich Re' },
  { id: 'tax-preparation', name: 'Tax Preparation', dataSource: 'KPMG' },
  { id: 'portfolio-tracking', name: 'Portfolio Tracking', dataSource: 'DWS Group' },
  { id: 'crypto-management', name: 'Crypto Management', dataSource: 'Bitpanda' },
  { id: 'financial-comparison', name: 'Financial Comparison', dataSource: 'Check24' },
  { id: 'travel-insurance', name: 'Travel Insurance', dataSource: 'ERGO' },
];

const dataHolders = {
  'credit-score': ['Schufa', 'Credit Bureau 1', 'Credit Bureau 2'],
  'savings-investment': ['Deutsche Bank', 'Savings Bank 1', 'Savings Bank 2'],
  'expense-budgeting': ['Commerzbank', 'Budget Bank 1', 'Budget Bank 2'],
  'insurance-management': ['Allianz', 'Insurance Company 1', 'Insurance Company 2'],
  'pension-planning': ['Munich Re', 'Pension Fund 1', 'Pension Fund 2'],
  'tax-preparation': ['KPMG', 'Tax Advisor 1', 'Tax Advisor 2'],
  'portfolio-tracking': ['DWS Group', 'Investment Firm 1', 'Investment Firm 2'],
  'crypto-management': ['Bitpanda', 'Crypto Exchange 1', 'Crypto Exchange 2'],
  'financial-comparison': ['Check24', 'Comparison Site 1', 'Comparison Site 2'],
  'travel-insurance': ['ERGO', 'Travel Insurance Company 1', 'Travel Insurance Company 2'],
};

function ServiceSelection() {
  const [selectedService, setSelectedService] = useState(null);
  const [currentStep, setCurrentStep] = useState('service'); // 'service' or 'dataHolder'
  const [selectedDataHolder, setSelectedDataHolder] = useState(null);
  const [showConsentModal, setShowConsentModal] = useState(false);

  const selectService = (serviceId) => {
    setSelectedService(serviceId);
  };

  const selectDataHolder = (dataHolder) => {
    setSelectedDataHolder(dataHolder);
  };

  const confirmSelection = () => {
    if (currentStep === 'service') {
      if (!selectedService) {
        alert('Please select a service.');
      } else {
        setCurrentStep('dataHolder');
      }
    } else if (currentStep === 'dataHolder') {
      if (!selectedDataHolder) {
        alert('Please select a data holder.');
      } else {
        setShowConsentModal(true);
      }
    }
  };

  const handleProceed = () => {
    setShowConsentModal(false);
    alert(`Selected Data Holder: ${selectedDataHolder}`);
  };

  const handleCancel = () => {
    setShowConsentModal(false);
    setSelectedDataHolder(null);
  };

  return (
    <div className="service-selection-container">
      {currentStep === 'service' ? (
        <>
          <div className="service-selection-header">
            <h2>Select a Service to Connect</h2>
            <p>Choose the service you want us to access from your financial institutions, with your consent.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card ${service.id} ${selectedService === service.id ? 'selected' : ''}`}
                onClick={() => selectService(service.id)}
              >
                <strong>{service.name}</strong>
                <div className="data-source">Data Source: {service.dataSource}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="service-selection-header">
            <h2>Select a Data Holder</h2>
            <p>Choose the data holder you want us to access your financial data from, with your consent.</p>
          </div>
          <div className="data-holders-grid">
            {dataHolders[selectedService].map((dataHolder) => (
              <div
                key={dataHolder}
                className={`data-holder-card ${selectedService} ${selectedDataHolder === dataHolder ? 'selected' : ''}`}
                onClick={() => selectDataHolder(dataHolder)}
              >
                <strong>{dataHolder}</strong>
              </div>
            ))}
          </div>
        </>
      )}
      <button className="submit-button" onClick={confirmSelection}>Confirm Selection</button>

      {showConsentModal && (
        <div className="consent-modal">
          <div className="consent-modal-content">
            <h3>Consent Required</h3>
            <p>Do you consent to access your data from {selectedDataHolder}?</p>
            <button className="proceed-button" onClick={handleProceed}>PROCEED</button>
            <button className="cancel-button" onClick={handleCancel}>CANCEL</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceSelection;