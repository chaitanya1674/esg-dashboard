import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ESGChart from './ESGChart';
import CompanySelector from './CompanySelector';
import MetricSelector from './MetricSelector';
import NLPQuery from './NLPQuery';
import DataImportExport from './DataImportExport';

const ESGDashboard = () => {
  const [esgData, setESGData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedMetric, setSelectedMetric] = useState('');

  useEffect(() => {
    fetchESGData();
  }, []);

  const fetchESGData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/esg-data');
      setESGData(response.data);
    } catch (error) {
      console.error('Error fetching ESG data:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ESG Dashboard</h1>
      
      <div className="flex space-x-4 mb-4">
        <CompanySelector 
          esgData={esgData} 
          selectedCompany={selectedCompany} 
          setSelectedCompany={setSelectedCompany} 
        />
        <MetricSelector 
          selectedMetric={selectedMetric} 
          setSelectedMetric={setSelectedMetric} 
        />
      </div>

      <ESGChart 
        esgData={esgData.filter(data => data.company === selectedCompany)}
        selectedMetric={selectedMetric}
      />

      <NLPQuery />

      <DataImportExport onDataImport={fetchESGData} />
    </div>
  );
};

export default ESGDashboard;