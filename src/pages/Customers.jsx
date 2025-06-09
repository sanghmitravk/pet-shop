import React, { useState } from 'react';
import CustomerForm from '../components/customers/CustomerForm';
import CustomerTable from '../components/customers/CustomerTable';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const handleAddCustomer = (customerData) => {
    // This would typically be an API call
    const newCustomer = {
      id: Date.now(), // Temporary ID generation
      ...customerData
    };
    setCustomers(prev => [...prev, newCustomer]);
  };

  const handleEditCustomer = (customer) => {
    // This would typically be an API call
    console.log('Edit customer:', customer);
  };

  const handleDeleteCustomer = (customerId) => {
    // This would typically be an API call
    setCustomers(prev => prev.filter(c => c.id !== customerId));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Customer</h2>
        <CustomerForm onSubmit={handleAddCustomer} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Customer List</h2>
        <CustomerTable 
          customers={customers}
          onEdit={handleEditCustomer}
          onDelete={handleDeleteCustomer}
        />
      </div>
    </div>
  );
};

export default Customers; 