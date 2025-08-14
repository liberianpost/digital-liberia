import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';

const UserManagement = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Placeholder user data (since Android adapter is TODO)
  const users = [
    {
      id: 'user1',
      name: 'John Doe',
      role: 'System Admin',
      icon: '/logos/user.png',
    },
    {
      id: 'user2',
      name: 'Jane Smith',
      role: 'Ministry Official',
      icon: '/logos/user.png',
    },
    {
      id: 'user3',
      name: 'Alice Johnson',
      role: 'School Admin',
      icon: '/logos/user.png',
    },
  ];

  // Redirect if not authenticated
  if (!user) {
    navigate('/system', { replace: true });
    return null;
  }

  // Handle FAB click (placeholder action)
  const handleAddUser = () => {
    alert('Add user functionality coming soon');
  };

  return (
    <div className="min-h-screen bg-white p-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Toolbar */}
        <div className="bg-white shadow-md p-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/moe/dashboard')}
            className="text-gray-800 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-800">User Management</h1>
          <div className="w-6" /> {/* Spacer for alignment */}
        </div>

        {/* User List */}
        <div className="mt-4 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-center"
            >
              <img
                src={user.icon}
                alt={user.name}
                className="w-12 h-12 mr-4 object-contain"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/%3E%3C/svg%3E';
                }}
              />
              <div>
                <h2 className="text-base font-bold text-gray-800">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={handleAddUser}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default UserManagement;
