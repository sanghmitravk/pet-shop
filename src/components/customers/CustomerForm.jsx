import React from 'react';
import FormContainer from '../common/FormContainer';

const CustomerForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const customerData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone')
    };
    onSubmit(customerData);
  };

  return (
    <FormContainer title="Add New Customer">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input 
              type="text" 
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input 
              type="email" 
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input 
              type="tel" 
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button 
            type="submit" 
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Add Customer
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default CustomerForm; 