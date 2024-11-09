// src/components/DataHolderSelection.js
import React, { useState } from 'react';
import './DataHolderSelection.css';

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

const DataHolderSelection = () => {
  const [selectedDataHolder, setSelectedDataHolder] = useState(null);

  const selectDataHolder = (dataHolderId) => {
    setSelectedDataHolder(dataHolderId);
  };

  // Handle confirmation action
  const confirmSelection = () => {
    if (!selectedDataHolder) {
      alert('Please select a data holder.');
    } else {
      alert(`Selected Data Holder: ${selectedDataHolder}`);
    }
  };

  return (
    <div className="data-holder-selection-container">
      <div className="data-holder-selection-header">
        <h2>Select a Data Holder</h2>
        <p>Choose the data holder you want us to access your financial data from, with your consent.</p>
      </div>
      {Object.keys(dataHolders).map((category) => (
        <div key={category}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}</h3>
          <div className="data-holders-grid">
            {dataHolders[category].map((dataHolder) => (
              <div
                key={dataHolder.id}
                className={`data-holder-card ${dataHolder.id} ${selectedDataHolder === dataHolder.id ? 'selected' : ''}`}
                onClick={() => selectDataHolder(dataHolder.id)}
              >
                <strong>{dataHolder.name}</strong>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="submit-button" onClick={confirmSelection}>Confirm Selection</button>
    </div>
  );
}

export default DataHolderSelection;