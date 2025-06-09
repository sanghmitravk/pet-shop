import React, { useState } from 'react';
import SalesTable from '../components/sales/SalesTable';

const SalesHistory = () => {
  // This would typically come from an API
  const [sales] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sales History</h1>
      <SalesTable sales={sales} />
    </div>
  );
};

export default SalesHistory; 