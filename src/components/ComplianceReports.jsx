import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';
import api from '@utils/api';

const ComplianceReports = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.DATABASE_ADMIN;
  const [complianceData, setComplianceData] = useState([]);

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires DATABASE ADMIN privileges.');
      navigate(-1);
    } else {
      api.get('/compliance-reports')
        .then(response => setComplianceData(response.data))
        .catch(error => {
          console.error('Error fetching compliance data:', error);
          alert('Failed to load compliance reports.');
        });
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="mr-4 text-black flex items-center"
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
          <span className="ml-2">Back</span>
        </button>
        <h1 className="text-2xl font-bold">Compliance Reports</h1>
      </div>
      <hr className="mb-4" />

      {/* Compliance Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {complianceData.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">No compliance data available.</p>
        ) : (
          complianceData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <h2 className="text-lg font-bold">{item.category}</h2>
              <p
                className={`text-3xl font-bold ${
                  item.complianceRate >= 90 ? 'text-green-600' :
                  item.complianceRate >= 75 ? 'text-yellow-600' : 'text-red-600'
                }`}
              >
                {item.complianceRate}%
              </p>
              <p className="text-sm text-gray-600">Compliance Rate</p>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      item.complianceRate >= 90 ? 'bg-green-600' :
                      item.complianceRate >= 75 ? 'bg-yellow-600' : 'bg-red-600'
                    }`}
                    style={{ width: `${item.complianceRate}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {item.compliantSchools} compliant • {item.nonCompliantSchools} non-compliant
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Detailed Compliance Section */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Detailed Compliance Overview</h2>
        <p className="text-gray-600 mb-4">
          This section would display detailed compliance metrics, trends over time, 
          and comparison between different regions or school types.
        </p>
        <div className="h-64 flex items-center justify-center bg-gray-100 rounded-md">
          <p className="text-gray-500">Compliance visualization charts would appear here</p>
        </div>
      </div>

      {/* Non-Compliance Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-bold mb-2">Non-Compliance Breakdown</h2>
        <p className="text-gray-600 mb-4">
          Analysis of common reasons for non-compliance and recommended actions.
        </p>
        <div className="h-48 flex items-center justify-center bg-gray-100 rounded-md">
          <p className="text-gray-500">Non-compliance analysis would appear here</p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceReports;
