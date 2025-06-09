import React from 'react';

const SalesTable = ({ sales }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Date</th>
            <th className="border p-2">Pet Name</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Sale Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td className="border p-2">
                {new Date(sale.date).toLocaleDateString()} 
              </td>
              <td className="border p-2">{sale.petName}</td>
              <td className="border p-2">{sale.petType}</td>
              <td className="border p-2">{sale.customerName}</td>
              <td className="border p-2">${sale.salePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable; 