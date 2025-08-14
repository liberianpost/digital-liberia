import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SecurityLevels, hasPermission } from '../utils/auth';

const SchoolAdminManagement = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const REQUIRED_SECURITY_LEVEL = SecurityLevels.DATABASE_ADMIN;

  // Check permissions and redirect if unauthorized
  if (!hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
    alert("Access denied. Requires DATABASE ADMIN privileges.");
    navigate(-1);
    return null;
  }

  // Dummy admin data (replace with actual data from API/ViewModel)
  const [admins] = useState([
    {
      name: 'Alice Brown',
      school: 'Springfield High',
      county: 'Springfield County',
      district: 'Central District',
      city: 'Springfield',
    },
    {
      name: 'Bob Wilson',
      school: 'Lincoln Elementary',
      county: 'Jefferson County',
      district: 'North District',
      city: 'Jefferson',
    },
    {
      name: 'Carol Davis',
      school: 'Washington Middle',
      county: 'Washington County',
      district: 'South District',
      city: 'Washington',
    },
  ]);

  const handleAddAdmin = () => {
    alert('Add New Administrator feature coming soon');
  };

  const handleFilter = (type) => {
    alert(`Filter by ${type} feature coming soon`);
  };

  const handleAdminAction = (admin, action) => {
    alert(`${action} admin ${admin.name} feature coming soon`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Toolbar */}
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

      {/* Content Area */}
      <div className="p-4 max-w-3xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <h2 className="text-lg font-bold text-black">
            School Administrator Management
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Manage administrators by location
          </p>
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

        {/* Admin List */}
        <div className="space-y-2">
          {admins.map((admin, index) => (
            <AdminCard
              key={index}
              admin={admin}
              onAction={handleAdminAction}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// AdminCard component to replace SchoolAdminAdapter
const AdminCard = ({ admin, onAction }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center">
        <img
          src="/logos/admin.png"
          alt="Admin icon"
          className="w-10 h-10 object-contain"
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
