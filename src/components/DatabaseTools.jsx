import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';
import api from '@utils/api';

const DatabaseTools = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.DATABASE_ADMIN;

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires DATABASE ADMIN privileges.');
      navigate(-1);
    }
  }, [user, navigate]);

  const handleMinistryManagement = () => {
    if (hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      navigate('/moe/ministry-employee-management');
    }
  };

  const handleSchoolAdminManagement = () => {
    if (hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      navigate('/moe/school-admin-management');
    }
  };

  const handleBackup = async () => {
    if (hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      try {
        await api.post('/database/backup');
        alert('Database backup initiated successfully.');
      } catch (error) {
        console.error('Error initiating backup:', error);
        alert('Failed to initiate database backup.');
      }
    }
  };

  const handleRestore = async () => {
    if (hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      try {
        await api.post('/database/restore');
        alert('Database restore initiated successfully.');
      } catch (error) {
        console.error('Error initiating restore:', error);
        alert('Failed to initiate database restore.');
      }
    }
  };

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
            <h1 className="text-xl font-bold">Database Tools</h1>
          </div>
        </div>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-4rem)] p-4 max-w-3xl mx-auto">
        <div
          onClick={handleMinistryManagement}
          className="bg-white rounded-lg shadow-md mb-4 border border-gray-300 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="p-4 text-center">
            <img
              src="/logos/moe.png"
              alt="Ministry of Education icon"
              className="w-12 h-12 mx-auto object-contain"
            />
            <h2 className="mt-2 text-lg font-bold text-black">
              Ministry of Education Management
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Manage all ministry employees, add, delete, remove and suspend staff
            </p>
          </div>
        </div>

        <div
          onClick={handleSchoolAdminManagement}
          className="bg-white rounded-lg shadow-md mb-4 border border-gray-300 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="p-4 text-center">
            <img
              src="/logos/school.png"
              alt="School Administrators icon"
              className="w-12 h-12 mx-auto object-contain"
            />
            <h2 className="mt-2 text-lg font-bold text-black">
              School Administrators Management
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Manage school administrators by county, district and city
            </p>
          </div>
        </div>

        <h3 className="mt-6 text-base font-bold text-black">Database Tools</h3>
        <button
          onClick={handleBackup}
          className="w-full mt-4 py-3 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-center"
        >
          Backup Database
        </button>
        <button
          onClick={handleRestore}
          className="w-full mt-2 py-3 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-center"
        >
          Restore Database
        </button>
      </div>
    </div>
  );
};

export default DatabaseTools;
