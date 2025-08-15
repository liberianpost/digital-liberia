import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';
import api from '@utils/api';

const UserManagement = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.SYSTEM_ADMIN;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires SYSTEM ADMIN privileges.');
      navigate('/moe/dashboard', { replace: true });
    } else {
      setLoading(true);
      api.get('/users')
        .then(response => {
          setUsers(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
          alert('Failed to load user records.');
          setLoading(false);
        });
    }
  }, [user, navigate]);

  const handleAddUser = () => {
    navigate('/moe/add-user');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-4/5 bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '50%' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-md p-4 flex items-center justify-between border-b border-gray-200">
          <button
            onClick={() => navigate('/moe/dashboard')}
            className="text-gray-800 hover:text-gray-600"
            aria-label="Go back"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-800">User Management</h1>
          <div className="w-6" />
        </div>

        <div className="mt-4 space-y-4">
          {users.length === 0 ? (
            <p className="text-gray-500 text-center">No users available.</p>
          ) : (
            users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center hover:bg-gray-50 transition-colors"
                onClick={() => navigate(`/moe/user-details/${user.id}`)}
              >
                <img
                  src={user.icon || '/logos/user.png'}
                  alt={user.name}
                  className="w-12 h-12 mr-4 object-contain rounded-full"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/%3E%3C/svg%3E';
                  }}
                />
                <div>
                  <h2 className="text-base font-bold text-gray-800">{user.name}</h2>
                  <p className="text-sm text-gray-600">{user.role}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <button
          onClick={handleAddUser}
          className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Add user"
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
    </div>
  );
};

export default UserManagement;
