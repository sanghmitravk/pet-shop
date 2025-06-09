import React from 'react';

const FormContainer = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      {title && (
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>
      )}
      {children}
    </div>
  );
};

export default FormContainer; 