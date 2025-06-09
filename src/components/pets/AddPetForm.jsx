import React from 'react';
import FormContainer from '../common/FormContainer';

const AddPetForm = ({ onSubmit, disabled }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const petData = {
      name: formData.get('name'),
      type: formData.get('type'),
      breed: formData.get('breed'),
      age: formData.get('age'),
      price: formData.get('price')
    };

    console.log(petData);
    onSubmit(petData);
  };

  return (
    <FormContainer title="Add New Pet">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input 
              type="text" 
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100 disabled:cursor-not-allowed" 
              required
              disabled={disabled}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <select 
              name="type"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
              disabled={disabled}
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Breed
            </label>
            <input 
              type="text" 
              name="breed"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100 disabled:cursor-not-allowed" 
              required
              disabled={disabled}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age
            </label>
            <input 
              type="number" 
              name="age"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100 disabled:cursor-not-allowed" 
              required
              disabled={disabled}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">$</span>
              <input 
                type="number" 
                name="price"
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100 disabled:cursor-not-allowed" 
                required
                disabled={disabled}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button 
            type="submit" 
            className={`px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 ${
              disabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={disabled}
          >
            {disabled ? 'Adding Pet...' : 'Add Pet'}
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default AddPetForm; 