import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';

const MetricSelector = ({ selectedMetric, setSelectedMetric }) => {
  return (
    <Select value={selectedMetric} onValueChange={setSelectedMetric}>
      <SelectTrigger>
        <SelectValue placeholder="Select Metric" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="environmental">Environmental</SelectItem>
        <SelectItem value="social">Social</SelectItem>
        <SelectItem value="governance">Governance</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default MetricSelector;