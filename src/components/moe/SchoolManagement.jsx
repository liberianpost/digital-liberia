import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';
import { hasPermission } from '@utils/auth';

const managementItems = [
  {
    title: 'Teacher Management',
    description: 'Manage teacher profiles and assignments',
    icon: (
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
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    ),
    color: 'bg-green-500',
    textColor: 'text-white',
    path: '/moe/teacher-management'
  },
  {
    title: 'Students Registration',
    description: 'Register new students and enrollments',
    icon: (
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    color: 'bg-blue-500',
    textColor: 'text-white',
    path: '/moe/student-registration'
  },
  {
    title: 'Student Management',
    description: 'Manage existing student records',
    icon: (
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    color: 'bg-purple-500',
    textColor: 'text-white',
    path: '/moe/student-management'
  },
  {
    title: 'Parent Management',
    description: 'Manage parent accounts and connections',
    icon: (
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
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
    color: 'bg-orange-500',
    textColor: 'text-white',
    path: '/moe/parent-management'
  },
  {
    title: 'Announcement Management',
    description: 'Create and manage school announcements',
    icon: (
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
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.379c.4 0 .78.157 1.06.44l2.12 2.12 1.414-.707"
        />
      </svg>
    ),
    color: 'bg-red-500',
    textColor: 'text-white',
    path: '/moe/announcement-management'
  }
];

const ManagementCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${item.color} ${item.textColor} rounded-lg p-6 h-full flex flex-col cursor-pointer hover:scale-105 transition-transform`}
      onClick={() => navigate(item.path)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-white bg-opacity-20 rounded-full p-2 mr-2">
          {item.icon}
        </div>
        <h3 className="text-lg font-bold">{item.title}</h3>
      </div>
      <p className="text-sm">{item.description}</p>
    </div>
  );
};

const SchoolManagement = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const REQUIRED_SECURITY_LEVEL = SecurityLevels.SCHOOL_ADMIN;

  useEffect(() => {
    if (!user || !hasPermission(REQUIRED_SECURITY_LEVEL, user?.securityLevel)) {
      alert('Access denied. Requires SCHOOL ADMIN privileges.');
      navigate('/moe/dashboard', { replace: true });
    }
  }, [user, navigate]);

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
            <h1 className="text-xl font-bold">School Management</h1>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {managementItems.map((item, index) => (
            <ManagementCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolManagement;
