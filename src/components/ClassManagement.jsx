import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';
import api from '../api';

const TabPanel = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`class-tabpanel-${index}`}
      aria-labelledby={`class-tab-${index}`}
      className="p-4"
    >
      {value === index && children}
    </div>
  );
};

const ClassManagement = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.SCHOOL_ADMIN;
  const [tabValue, setTabValue] = useState(0);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires SCHOOL ADMIN privileges.');
      navigate(-1);
    } else {
      api.get('/classes')
        .then(response => setClasses(response.data))
        .catch(error => {
          console.error('Error fetching classes:', error);
          alert('Failed to load classes.');
        });
    }
  }, [user, navigate]);

  const handleTabChange = (newValue) => {
    setTabValue(newValue);
  };

  const handleAddClass = () => {
    navigate('/moe/add-class');
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
            <h1 className="text-xl font-bold">Class Management</h1>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => handleTabChange(0)}
              className={`px-4 py-2 text-sm font-medium ${tabValue === 0 ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              All Classes
            </button>
            <button
              onClick={() => handleTabChange(1)}
              className={`px-4 py-2 text-sm font-medium ${tabValue === 1 ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              By Grade
            </button>
            <button
              onClick={() => handleTabChange(2)}
              className={`px-4 py-2 text-sm font-medium ${tabValue === 2 ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              By Teacher
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 max-w-7xl mx-auto">
        <TabPanel value={tabValue} index={0}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {classes.length === 0 ? (
              <p className="text-gray-500 text-center col-span-full">No classes available.</p>
            ) : (
              classes.map(cls => (
                <div
                  key={cls.id}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-2"
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
                    <h3 className="text-lg font-bold">{cls.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">Teacher: {cls.teacher}</p>
                  <p className="text-sm text-gray-600">Students: {cls.studentCount}</p>
                </div>
              ))
            )}
          </div>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">Classes by Grade</h2>
            <ul className="space-y-2">
              {['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map(grade => (
                <li
                  key={grade}
                  onClick={() => navigate(`/moe/classes/grade/${grade.toLowerCase()}`)}
                  className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  <span>{grade}</span>
                  <span className="text-sm text-gray-600">{Math.floor(Math.random() * 5) + 1} classes</span>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">Classes by Teacher</h2>
            <ul className="space-y-2">
              {['Mr. Johnson', 'Ms. Williams', 'Dr. Smith', 'Mrs. Brown'].map(teacher => (
                <li
                  key={teacher}
                  onClick={() => navigate(`/moe/classes/teacher/${teacher.toLowerCase().replace(' ', '-')}`)}
                  className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  <span>{teacher}</span>
                  <span className="text-sm text-gray-600">{Math.floor(Math.random() * 3) + 1} classes</span>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
      </div>

      {/* Add Class Button */}
      <button
        onClick={handleAddClass}
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
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default ClassManagement;
