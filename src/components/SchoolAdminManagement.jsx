import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';
import api from '../api';

const SchoolAdminManagement = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.DATABASE_ADMIN;
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires DATABASE ADMIN privileges.');
      navigate(-1);
    } else {
      setLoading(true);
      api.get('/school-admins')
        .then(response => {
          setAdmins(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching admins:', error);
          alert('Failed to load administrators.');
          setLoading(false);
        });
    }
  }, [user, navigate]);

  const handleAddAdmin = async () => {
    try {
      await api.post('/school-admins/add');
      alert('Add New Administrator feature initiated.');
    } catch (error) {
      console.error('Error adding admin:', error);
      alert('Failed to initiate add administrator.');
    }
  };

  const handleFilter = (type) => {
    alert(`Filter by ${type} feature coming soon`);
  };

  const handleAdminAction = async (admin, action) => {
    try {
      await api.post(`/school-admins/${admin.id}/${action.toLowerCase()}`);
      alert(`${action} admin ${admin.name} initiated.`);
    } catch (error) {
      console.error(`Error performing ${action} on admin:`, error);
      alert(`Failed to ${action.toLowerCase()} admin ${admin.name}.`);
    }
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
    <div className="min-h-screen bg-white">
      <div className="bg-white text-black p-4 shadow-md border-b border-gray-200">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="mr-4 text-black"
              aria-label="Go back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <h1 className="text-xl font-bold">School Administrators</h1>
          </div>
        </div>
      </div>

      <div className="p-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <h2 className="text-lg font-bold text-black">School Administrator Management</h2>
          <p className="mt-1 text-sm text-gray-600">Manage administrators by location</p>
          <div className="mt-2 flex space-x-2">
            <button
              onClick={() => handleFilter('County')}
              className="flex-1 py-2 px-3 border border-gray-300 rounded-md text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              County
            </button>
            <button
              onClick={() => handleFilter('District')}
              className="flex-1 py-2 px-3 border border-gray-300 rounded-md text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              District
            </button>
            <button
              onClick={() => handleFilter('City')}
              className="flex-1 py-2 px-3 border border-gray-300 rounded-md text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              City
            </button>
          </div>
          <button
            onClick={handleAddAdmin}
            className="mt-4 w-full py-3 px-4 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Administrator
          </button>
        </div>

        <div className="space-y-2">
          {admins.length === 0 ? (
            <p className="text-gray-500 text-center">No administrators available.</p>
          ) : (
            admins.map((admin, index) => (
              <AdminCard
                key={index}
                admin={admin}
                onAction={handleAdminAction}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const AdminCard = ({ admin, onAction }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center">
        <img
          src="/logos/admin.png"
          alt="Admin icon"
          className="w-10 h-10 object-contain"
          onError={(e) => {
            console.error('Failed to load admin icon');
            e.target.src = 'https://via.placeholder.com/40?text=Admin';
          }}
        />
        <div className="ml-4 flex-1">
          <h3 className="text-base font-bold text-black">{admin.name}</h3>
          <p className="text-sm text-gray-600">{admin.school}</p>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
          {admin.county}
        </span>
        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
          {admin.district}
        </span>
        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
          {admin.city}
        </span>
      </div>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => onAction(admin, 'Edit')}
          className="flex-1 py-2 px-3 border border-gray-300 rounded-md text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Edit
        </button>
        <button
          onClick={() => onAction(admin, 'Remove')}
          className="flex-1 py-2 px-3 border border-gray-300 rounded-md text-black flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Remove
        </button>
      </div>
    </div>
  );
};

export default SchoolAdminManagement;
