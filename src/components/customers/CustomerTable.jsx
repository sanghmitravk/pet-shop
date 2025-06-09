import React from 'react';

const CustomerTable = ({ customers, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="border p-2">{customer.name}</td>
              <td className="border p-2">{customer.email}</td>
              <td className="border p-2">{customer.phone}</td>
              <td className="border p-2">
                <button
                  onClick={() => onEdit(customer)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(customer.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable; 