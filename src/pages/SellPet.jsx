import React, { useState } from 'react';
import SaleForm from '../components/sales/SaleForm';

const SellPet = () => {
  // This would typically come from an API
  const [pets] = useState([]);
  const [customers] = useState([]);

  const handleSubmit = (saleData) => {
    // This would typically be an API call
    console.log('Sale data:', saleData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sell Pet</h1>
      <SaleForm 
        pets={pets}
        customers={customers}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SellPet; 