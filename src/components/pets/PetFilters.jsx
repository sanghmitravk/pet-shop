import React from 'react';

const PetFilters = ({ onFilterChange }) => {
  return (
    <div className="mb-4">
      <div className="flex gap-4">
        <select 
          className="border p-2 rounded"
          onChange={(e) => onFilterChange('type', e.target.value)}
        >
          <option value="">All Types</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
        <select 
          className="border p-2 rounded"
          onChange={(e) => onFilterChange('breed', e.target.value)}
        >
          <option value="">All Breeds</option>
        </select>
        <label className="flex items-center gap-2">
          <input 
            type="checkbox" 
            onChange={(e) => onFilterChange('available', e.target.checked)}
          /> 
          Available Only
        </label>
      </div>
    </div>
  );
};

export default PetFilters; 