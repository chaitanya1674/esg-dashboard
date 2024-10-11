import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@radix-ui/react-slot';
import { Label } from '@radix-ui/react-label';

const NLPQuery = () => {
  const [nlpQuery, setNLPQuery] = useState('');
  const [nlpResponse, setNLPResponse] = useState('');

  const handleNLPQuery = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/nlp', { query: nlpQuery });
      setNLPResponse(response.data.response);
    } catch (error) {
      console.error('Error processing NLP query:', error);
    }
  };

  return (
    <div className="mb-4">
      <Label htmlFor="nlpQuery">NLP Query</Label>
      <input
        id="nlpQuery"
        value={nlpQuery}
        onChange={(e) => setNLPQuery(e.target.value)}
        placeholder="Ask about ESG metrics..."
        className="border p-2 mr-2"
      />
      <Button onClick={handleNLPQuery}>Submit</Button>
      {nlpResponse && (
        <div className="mt-2">
          <h3 className="font-bold">Response:</h3>
          <p>{nlpResponse}</p>
        </div>
      )}
    </div>
  );
};

export default NLPQuery;