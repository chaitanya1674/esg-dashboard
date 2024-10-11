import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';

const CompanySelector = ({ esgData, selectedCompany, setSelectedCompany }) => {
  return (
    <Select value={selectedCompany} onValueChange={setSelectedCompany}>
      <SelectTrigger>
        <SelectValue placeholder="Select Company" />
      </SelectTrigger>
      <SelectContent>
        {esgData.map(data => (
          <SelectItem key={data.company} value={data.company}>{data.company}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CompanySelector;