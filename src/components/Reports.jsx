import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';

const Reports = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Match Android reports
  const reports = [
    {
      id: 'enrollment-statistics',
      title: 'Enrollment Statistics',
      lastUpdated: 'Last updated: 2 days ago',
      icon: '/logos/report.png',
    },
    {
      id: 'attendance-summary',
      title: 'Attendance Summary',
      lastUpdated: 'Last updated: 1 week ago',
      icon: '/logos/report.png',
    },
    {
      id: 'academic-performance',
      title: 'Academic Performance',
      lastUpdated: 'Last updated: 3 days ago',
      icon: '/logos/report.png',
    },
    {
      id: 'teacher-evaluation',
      title: 'Teacher Evaluation',
      lastUpdated: 'Last updated: 1 month ago',
      icon: '/logos/report.png',
    },
  ];

  // Redirect if not authenticated
  if (!user) {
    navigate('/system', { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen bg-white p-4">
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
          <h1 className="text-xl font-bold text-gray-800">Reports</h1>
          <div className="w-6" /> {/* Spacer for alignment */}
        </div>

        {/* Reports List */}
        <div className="mt-4 space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-center"
            >
              <img
                src={report.icon}
                alt={report.title}
                className="w-12 h-12 mr-4 object-contain"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/%3E%3C/svg%3E';
                }}
              />
              <div>
                <h2 className="text-base font-bold text-gray-800">{report.title}</h2>
                <p className="text-sm text-gray-600">{report.lastUpdated}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
