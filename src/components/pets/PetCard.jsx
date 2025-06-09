import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{pet.name}</h3>
      <div className="space-y-2">
        <p><span className="font-medium">Type:</span> {pet.type}</p>
        <p><span className="font-medium">Breed:</span> {pet.breed}</p>
        <p><span className="font-medium">Age:</span> {pet.age}</p>
        <p><span className="font-medium">Price:</span> ${pet.price}</p>
        <p>
          <span className="font-medium">Status:</span>{' '}
          <span className={pet.available ? 'text-green-600' : 'text-red-600'}>
            {pet.available ? 'Available' : 'Sold'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PetCard; 