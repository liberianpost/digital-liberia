import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';
import api from '@utils/api';

const Reports = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.SCHOOL_ADMIN;
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires SCHOOL ADMIN privileges.');
      navigate('/system', { replace: true });
    } else {
      setLoading(true);
      api.get('/reports')
        .then(response => {
          setReports(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching reports:', error);
          alert('Failed to load reports.');
          setLoading(false);
        });
    }
  }, [user, navigate]);

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
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto">
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
          <h1 className="text-xl font-bold text-gray-800">Reports</h1>
          <div className="w-6" />
        </div>

        <div className="mt-4 space-y-4">
          {reports.length === 0 ? (
            <p className="text-gray-500 text-center">No reports available.</p>
          ) : (
            reports.map((report) => (
              <div
                key={report.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center"
              >
                <img
                  src={report.icon || '/logos/report.png'}
                  alt={report.title}
                  className="w-12 h-12 mr-4 object-contain"
                  onError={(e) => {
                    console.error('Failed to load report icon');
                    e.target.src = 'https://via.placeholder.com/48?text=Report';
                  }}
                />
                <div>
                  <h2 className="text-base font-bold text-gray-800">{report.title}</h2>
                  <p className="text-sm text-gray-600">{report.lastUpdated}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
