import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';
import api from '../api';

const SchoolReports = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.DISTRICT_ADMIN;
  const [counties, setCounties] = useState([]);
  const [summary, setSummary] = useState({ schools: 0, students: 0, teachers: 0, compliance: 0 });
  const [selectedCounty, setSelectedCounty] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires DISTRICT ADMIN privileges.');
      navigate('/moe/dashboard', { replace: true });
    } else {
      setLoading(true);
      Promise.all([
        api.get('/school-reports/counties'),
        api.get('/school-reports/summary')
      ])
        .then(([countiesResponse, summaryResponse]) => {
          setCounties(countiesResponse.data);
          setSummary(summaryResponse.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching school reports:', error);
          alert('Failed to load school reports.');
          setLoading(false);
        });
    }
  }, [user, navigate]);

  const handleCountyFilter = (county) => {
    setSelectedCounty(county);
    // Implement client-side filtering if needed
  };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const [countiesResponse, summaryResponse] = await Promise.all([
        api.get('/school-reports/counties'),
        api.get('/school-reports/summary')
      ]);
      setCounties(countiesResponse.data);
      setSummary(summaryResponse.data);
      setLoading(false);
    } catch (error) {
      console.error('Error refreshing school reports:', error);
      alert('Failed to refresh school reports.');
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      await api.post('/school-reports/export', { county: selectedCounty });
      alert('Export initiated.');
    } catch (error) {
      console.error('Error exporting school reports:', error);
      alert('Failed to export school reports.');
    }
  };

  const handleCountyClick = (countyName) => {
    console.log(`Clicked on ${countyName}`);
    // Navigate to district view if implemented
  };

  const handleFilterClick = () => {
    console.log('Filter clicked');
    // Implement filter dialog if needed
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
            <h1 className="text-xl font-bold">Liberia School Reports</h1>
            <div className="ml-4 flex space-x-2">
              <button
                onClick={handleFilterClick}
                className="text-gray-800 hover:text-gray-600"
                aria-label="Filter"
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
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </button>
              <button
                onClick={handleRefresh}
                className="text-gray-800 hover:text-gray-600"
                aria-label="Refresh"
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-2 px-4 flex overflow-x-auto max-w-7xl mx-auto">
          <button
            onClick={() => handleCountyFilter('all')}
            className={`px-3 py-1 text-sm rounded mr-2 ${
              selectedCounty === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
            } hover:bg-blue-500 hover:text-white transition-colors`}
          >
            All Liberia
          </button>
          {counties.map((county) => (
            <button
              key={county.name}
              onClick={() => handleCountyFilter(county.name.toLowerCase())}
              className={`px-3 py-1 text-sm rounded mr-2 ${
                selectedCounty === county.name.toLowerCase() ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'
              } hover:bg-blue-500 hover:text-white transition-colors`}
            >
              {county.name}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-lg font-bold text-gray-800">Liberia Education Summary</h2>
          <hr className="my-2" />
          <div className="flex flex-wrap gap-2">
            <div className="flex-1 bg-green-500 text-white rounded-lg p-4 text-center min-w-[150px]">
              <p className="text-2xl font-bold">{summary.schools.toLocaleString()}</p>
              <p className="text-sm">Schools</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mt-2 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <div className="flex-1 bg-blue-500 text-white rounded-lg p-4 text-center min-w-[150px]">
              <p className="text-2xl font-bold">{(summary.students / 1000).toFixed(0)}K</p>
              <p className="text-sm">Students</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mt-2 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div className="flex-1 bg-purple-500 text-white rounded-lg p-4 text-center min-w-[150px]">
              <p className="text-2xl font-bold">{(summary.teachers / 1000).toFixed(0)}K</p>
              <p className="text-sm">Teachers</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mt-2 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div className="flex-1 bg-orange-500 text-white rounded-lg p-4 text-center min-w-[150px]">
              <p className="text-2xl font-bold">{summary.compliance}%</p>
              <p className="text-sm">Compliance</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mt-2 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-800 mb-2">Reports by Location</h2>
        {counties.map((county) => (
          <div
            key={county.name}
            onClick={() => handleCountyClick(county.name)}
            className="bg-white rounded-lg shadow-md p-4 mb-2 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="text-base font-bold text-gray-800">{county.name} County</h3>
              <div className="flex-grow" />
              <p className="text-sm text-gray-600">{county.schoolCount} Schools</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <p className="text-sm text-gray-600">Districts</p>
                <p className="text-base font-bold">{county.districts}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Cities</p>
                <p className="text-base font-bold">{county.cities}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Communities</p>
                <p className="text-base font-bold">{county.communities}</p>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={handleExport}
          className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Export"
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
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SchoolReports;
