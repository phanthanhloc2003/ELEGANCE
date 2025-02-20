import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, MapPin, Edit, Trash2 } from 'lucide-react';
import { Address } from '../types/order';

const UserAddresses = () => {
  // Mock addresses data
  const addresses: Address[] = [
    {
      id: '1',
      userId: '1',
      fullName: 'John Doe',
      phone: '+84 123 456 789',
      street: '123 Main Street',
      city: 'District 1',
      province: 'Ho Chi Minh City',
      postalCode: '70000',
      isDefault: true
    },
    {
      id: '2',
      userId: '1',
      fullName: 'John Doe',
      phone: '+84 987 654 321',
      street: '456 Second Street',
      city: 'District 2',
      province: 'Ho Chi Minh City',
      postalCode: '70000',
      isDefault: false
    }
  ];

  const handleDelete = (id: string) => {
    // Here you would typically make an API call to delete the address
    console.log('Deleting address:', id);
  };

  const handleSetDefault = (id: string) => {
    // Here you would typically make an API call to set the default address
    console.log('Setting default address:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Addresses</h1>
          <Link
            to="/add-address"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-burgundy-600 hover:bg-burgundy-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Address
          </Link>
        </div>

        <div className="space-y-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-burgundy-600 mt-1" />
                  <div className="ml-4">
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium text-gray-900">
                        {address.fullName}
                      </h3>
                      {address.isDefault && (
                        <span className="ml-2 px-2 py-1 text-xs font-medium text-burgundy-700 bg-burgundy-100 rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 mt-1">{address.phone}</p>
                    <p className="text-gray-600 mt-2">
                      {address.street}<br />
                      {address.city}, {address.province}<br />
                      {address.postalCode}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleSetDefault(address.id)}
                    className={`text-sm ${
                      address.isDefault
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-burgundy-600 hover:text-burgundy-700'
                    }`}
                    disabled={address.isDefault}
                  >
                    Set as Default
                  </button>
                  <Link
                    to={`/edit-address/${address.id}`}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <Edit className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAddresses;