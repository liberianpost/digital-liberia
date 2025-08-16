import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';
import api from '../api';
import HorizontalScroll from './HorizontalScroll';

const DistrictOverview = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.SCHOOL_ADMIN;
  const [statsData, setStatsData] = useState([]);
  const [timePeriod, setTimePeriod] = useState('monthly');
  const [chartLoading, setChartLoading] = useState(true);

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires SCHOOL ADMIN privileges.');
      navigate(-1);
    } else {
      api.get('/district-stats')
        .then(response => {
          setStatsData(response.data);
          setChartLoading(false);
        })
        .catch(error => {
          console.error('Error fetching district stats:', error);
          alert('Failed to load district statistics.');
          setChartLoading(false);
        });
    }
  }, [user, navigate]);

  const handleExport = () => {
    console.log('Export clicked');
  };

  const handleTimePeriodChange = (newPeriod) => {
    setTimePeriod(newPeriod);
    setChartLoading(true);
    setTimeout(() => setChartLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
            <h1 className="text-xl font-bold">District Reports</h1>
          </div>
        </div>
      </div>

      <div className="p-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md mb-4 p-4">
          <h2 className="text-lg font-bold text-blue-600 mb-2">Key Statistics</h2>
          <HorizontalScroll>
            {statsData.length === 0 ? (
              <p className="text-gray-500">No statistics available.</p>
            ) : (
              statsData.map((stat, index) => (
                <div
                  key={index}
                  className="min-w-[200px] h-[150px] flex flex-col items-center justify-center text-white rounded-lg"
                  style={{ backgroundColor: stat.color }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {stat.title === 'Total Schools' && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    )}
                    {stat.title === 'Students Enrolled' && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    )}
                    {stat.title === 'Teachers' && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    )}
                    {stat.title === 'Compliance Rate' && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    )}
                  </svg>
                  <h3 className="text-lg font-bold">{stat.value}</h3>
                  <p className="text-sm">{stat.title}</p>
                </div>
              ))
            )}
          </HorizontalScroll>
        </div>

        <div className="flex space-x-4 mb-4">
          <button
            onClick={handleExport}
            className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            Export
          </button>
          <button
            className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block mr-2"
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
            Filter
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold text-blue-600 mb-2">Performance Trends</h2>
          <hr className="mb-2" />
          <div className="h-64 flex items-center justify-center">
            {chartLoading ? (
              <div className="w-4/5 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '50%' }}></div>
              </div>
            ) : (
              <p className="text-gray-500">Chart visualization would appear here</p>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              <button
                onClick={() => handleTimePeriodChange('weekly')}
                className={`px-4 py-2 rounded-md ${timePeriod === 'weekly' ? 'bg-blue-600 text-white' : 'border border-gray-300 text-gray-700'}`}
              >
                Weekly
              </button>
              <button
                onClick={() => handleTimePeriodChange('monthly')}
                className={`px-4 py-2 rounded-md ${timePeriod === 'monthly' ? 'bg-blue-600 text-white' : 'border border-gray-300 text-gray-700'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => handleTimePeriodChange('yearly')}
                className={`px-4 py-2 rounded-md ${timePeriod === 'yearly' ? 'bg-blue-600 text-white' : 'border border-gray-300 text-gray-700'}`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="h-16"></div>

        <button
          onClick={handleExport}
          className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700"
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
              d="M8.684 13.342C9.375 12.651 10.223 12.5 11 12.5c.777 0 1.625.151 2.316.842M9 6h6m-3 3v6m9 0V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DistrictOverview;
