import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddPetForm from '../components/pets/AddPetForm';
import { addPet } from '../services/api';

const AddPet = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (petData) => {
    try {
      setLoading(true);
      setError(null);
      console.log('Submitting pet data:', petData);
      
      const response = await addPet(petData);
      console.log('Add pet response:', response);
      
      if (response && response.id) {
        // Successful addition
        navigate('/', { replace: true });
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (err) {
      console.error('Error adding pet:', err);
      setError(err.message || 'Failed to add pet. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Pet</h1>
      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}
      <AddPetForm onSubmit={handleSubmit} disabled={loading} />
    </div>
  );
};

export default AddPet; 