import React from 'react';
import FormContainer from '../common/FormContainer';

const SaleForm = ({ pets, customers, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const saleData = {
      petId: formData.get('petId'),
      customerId: formData.get('customerId'),
      salePrice: formData.get('salePrice')
    };
    onSubmit(saleData);
  };

  return (
    <FormContainer title="Complete Sale">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Pet
            </label>
            <select 
              name="petId"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Choose a pet...</option>
              {pets.map(pet => (
                <option key={pet.id} value={pet.id}>
                  {pet.name} - {pet.type} ({pet.breed})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Customer
            </label>
            <select 
              name="customerId"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Choose a customer...</option>
              {customers.map(customer => (
                <option key={customer.id} value={customer.id}>
                  {customer.name} - {customer.email}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sale Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input 
                type="number" 
                name="salePrice"
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                required
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button 
            type="submit" 
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Complete Sale
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default SaleForm; 